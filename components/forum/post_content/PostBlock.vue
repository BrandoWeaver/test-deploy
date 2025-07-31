<template>
  <div
    class="bg-white rounded-2xl p-6 border border-[#a6a6a64d] flex flex-row align-top gap-6 overflow-y-scroll hide-scrollbar"
  >
    <!-- Post Header -->
    <div class="flex flex-1 flex-col">
      <div class="bg-white sticky top-0 z-0">
        <Post_Header
          :profile_image="post.logo"
          :name="post.name"
          :user_type="post.user_type"
          :last_seen="post.last_seen"
          :reply_count="post.reply_count"
          @comment="onComment"
          @favorite="onFavorite"
          @share="onShare"
          @shield="onShield"
          @like="onLike"
          type="post"
        />
        <div class="space-y-4 sm:mt-[17px] xs:mt-[17px]">
          <h1 class="md:text-[17px] xs:text-sm font-bold text-[#060606]">
            {{ post.post_data.title }}
          </h1>
          <p class="text-gray-700 font-noto text-[14px] font-light">
            {{ post.post_data.des }}
          </p>
          <div
            class="mt-4 border rounded-xl overflow-hidden hover:cursor-pointer"
          >
            <NuxtImg
              :src="post.post_data.image || ''"
              class="w-full object-cover cursor-pointer"
              @click="
                ClickImages([
                  'https://s3.ams.com.kh/infotainment/2025/02/480774346_594248703594245_3452702056112356193_n.jpg',
                  'https://s3.ams.com.kh/infotainment/2025/02/480818558_594248686927580_8201582453240024229_n.jpg',
                ])
              "
              format="webp"
            />
          </div>
        </div>
        <div class="mt-4 flex flex-wrap gap-[10px]">
          <div
            class="w-[60px] h-[60px]"
            v-for="(val, index) in post.post_data.list_images"
            :key="val"
          >
            <NuxtImg
              :src="val || ''"
              class="w-full object-cover h-full"
              @click="ClickImages(post.post_data.list_images!)"
              format="webp"
            />
          </div>
        </div>
      </div>
      <div
        v-if="post.reply_data !== undefined"
        class="mt-6 flex-1 overflow-y-auto hide-scrollbar max-h-[500px]"
        ref="commentsContainer"
      >
        <div
          v-for="(val, index) in post.reply_data"
          :key="index"
          :id="'comment-' + index"
        >
          <ReplyUI :post="val" />
        </div>
      </div>

      <!-- Reply Button -->
      <div class="bg-white sticky bottom-0">
        <div v-if="replyPostId === post.id">
          <MessageInput @cancel="cancelReply" />
        </div>
        <div
          class="flex mt-6 items-center"
          :class="{
            'justify-between': post.reply_count !== 0,
            'justify-end': post.reply_count === 0,
          }"
        >
          <!-- <div v-if="seeMorePostId !== post.id">
            <button
              class="bg-transparent font-noto font-bold text-[17px] text-[#005B52] py-2 rounded-lg flex items-center gap-2"
              @click="onSeeMore(post.id)"
              v-if="post.reply_count !== 0"
            >
              See more
              <SeeMore />
            </button>
          </div> -->

          <div class="ml-auto">
            <!-- Added ml-auto here -->
            <button
              @click="onReply(post.id)"
              v-if="replyPostId !== post.id"
              class="bg-[#212121] text-[#fff] px-6 py-[10px] hover:shadow-[0px_4px_16px_0px_#DBF226] rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <Reply />
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="w-1/3 hidden sticky top-0 flex-col justify-start max-w-[68px] md:flex"
      v-if="
        post.reply_data?.length !== undefined && post.reply_data?.length !== 0
      "
    >
      <div class="pb-[14px]">
        <p class="text-[14px] font-noto font-bold">{{ firstReplyDate }}</p>
      </div>

      <div
        ref="timelineContainer"
        class="relative h-[200px] overflow-hidden flex flex-col items-center hover:cursor-pointer"
        @click="onTimelineClick"
      >
        <!-- Timeline Vertical Line (1px width, 180px height) -->
        <div class="absolute w-[1px] h-full bg-gray-400 left-1"></div>

        <!-- Movable Marker (8px width, 30px height) -->
        <div
          v-for="(val, index) in post.reply_data"
          :key="index"
          class="absolute left-0 w-[8px] h-[48px] bg-teal-700 rounded-lg transition-all"
          :style="{ top: `${markerPosition}px` }"
          @click="scrollToComment(index)"
          @mousedown="startDrag(index)"
        ></div>

        <!-- Date Text to the Right of the Marker -->
        <div
          class="absolute left-4 transition-all flex items-center flex-col"
          :style="{ top: `${markerPosition}px` }"
        >
          <div>
            <p class="text-[14px] font-noto font-light">
              {{ activeIndex + 1 }} / {{ post.reply_data?.length }}
            </p>
          </div>
          <div>
            <p class="flex text-[11px] font-noto font-light">
              {{ formattedDate }}
            </p>
          </div>
        </div>

        <!-- Timeline Items -->
        <div class="relative cursor-pointer"></div>
      </div>
      <div class="pt-[14px]">
        <p class="text-[14px] font-noto font-bold">{{ lastReplyDate }}</p>
      </div>
    </div>
    <ClientOnly>
      <LazyPhotoSwipeGallery ref="gallery" :images="allImages" class="hidden" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { NuxtImg } from '#components'
import Reply from '~/icons/forum_icons/Reply.vue'
import Post_Header from './Post_Header.vue'
import MessageInput from './MessageInput.vue'
import ReplyUI from './ReplyUI.vue'
const replyPostId = ref(-1)
const seeMorePostId = ref(-1)
const props = defineProps<{
  post: I_Post
}>()
const gallery = ref<any>(null)
const allImages = ref<
  Array<{ src: string; thumbnail: string; width: number; height: number }>
>([])
const getImageDimensions = (
  src: string
): Promise<{ width: number; height: number }> => {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      console.log(`Loaded ${src}: ${img.width}x${img.height}`)
      resolve({ width: img.width, height: img.height })
    }
    img.onerror = () => {
      console.error(`Failed to load ${src}, using fallback`)
      resolve({ width: 1200, height: 800 })
    }
  })
}
const ClickImages = async (images: string[]) => {
  // const updatedImages = images.map((val) => ({
  //   src: val,
  //   thumbnail: val,
  //   width: 1394,
  //   height: 500,
  // }))
  const updatedImages = await Promise.all(
    images.map(async (val) => {
      const dims = await getImageDimensions(val)
      return {
        src: val,
        thumbnail: val,
        width: dims.width || 1200,
        height: dims.height || 800,
      }
    })
  )
  // console.log('updatedImages', updatedImages)
  allImages.value = updatedImages
  nextTick(() => {
    gallery.value?.openGallery(0)
  })
}
const onSeeMore = (post_id: number) => {
  // Handle reply action
  seeMorePostId.value = post_id
}
const onReply = (post_id: number) => {
  // Handle reply action
  replyPostId.value = post_id
}
const onComment = () => {
  // Handle comment action
  alert('comment')
}
const cancelReply = () => {
  // Handle cancel reply action
  replyPostId.value = -1
}
const onFavorite = () => {
  // Handle favorite action
  alert('favorite')
}

const onShare = () => {
  // Handle share action
  alert('share')
}

const onShield = () => {
  // Handle shield action
  alert('shield')
}

const onLike = () => {
  // Handle shield action
  alert('Like')
}
onMounted(() => {
  if (commentsContainer.value) {
    commentsContainer.value.addEventListener('scroll', handleScroll)
  }
})
const activeIndex = ref(0)
const markerPosition = ref(0)
const commentsContainer = ref<HTMLElement | null>(null)
const timelineContainer = ref<HTMLElement | null>()
// Scroll to a comment when clicking a timeline item
const scrollToComment = async (index: number) => {
  if (!commentsContainer.value) return

  const target = document.getElementById(`comment-${index}`)
  if (target) {
    commentsContainer.value.scrollTo({
      top: target.offsetTop - commentsContainer.value.offsetTop,
      behavior: 'smooth',
    })

    activeIndex.value = index
    await nextTick()
    updateMarkerPosition()
  }
}
const timelineHeight = ref(200)
const onTimelineClick = (event: MouseEvent) => {
  const container = (event.currentTarget as HTMLElement).getBoundingClientRect()
  const clickY = event.clientY - container.top

  // Calculate the nearest index based on the click position
  const step = timelineHeight.value / props.post.reply_data?.length!
  const newIndex = Math.floor(clickY / step)

  // Ensure the index is within bounds
  activeIndex.value = Math.max(
    0,
    Math.min(newIndex, props.post.reply_data?.length! - 1)
  )

  updateMarkerPosition()
  scrollToComment(activeIndex.value)
}

// Detect scrolling and update active timeline entry & marker
const handleScroll = () => {
  if (!commentsContainer.value) return

  const commentElements =
    commentsContainer.value.querySelectorAll("[id^='comment-']")
  let closestIndex = 0
  let minOffset = Number.MAX_VALUE

  commentElements.forEach((el, index) => {
    const offset = Math.abs(
      el.getBoundingClientRect().top -
        commentsContainer.value!.getBoundingClientRect().top
    )
    if (offset < minOffset) {
      minOffset = offset
      closestIndex = index
    }
  })

  activeIndex.value = closestIndex
  updateMarkerPosition()
}
// Update marker position based on active comment
const updateMarkerPosition = () => {
  if (!timelineContainer.value || !props.post.reply_data?.length) return

  const totalComments = props.post.reply_data.length
  const timelineHeight = timelineContainer.value.clientHeight - 48 // Subtract marker height
  markerPosition.value =
    (activeIndex.value / (totalComments - 1)) * timelineHeight
}
const isDragging = ref(false) // Track if the marker is being dragged

// Start dragging the marker
const startDrag = (index: number) => {
  isDragging.value = true
  activeIndex.value = index
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', stopDrag)
}
const onDrag = (e: MouseEvent) => {
  if (!isDragging.value || !timelineContainer.value) return

  const timelineRect = timelineContainer.value.getBoundingClientRect()
  const offsetY = e.clientY - timelineRect.top
  const timelineHeight = timelineContainer.value.clientHeight - 48 // Adjust for marker height

  // Restrict marker position within the timeline container
  let newPosition = Math.min(Math.max(offsetY, 0), timelineHeight)
  markerPosition.value = newPosition

  // Calculate corresponding comment index
  const totalComments = props.post.reply_data?.length || 1
  const newIndex = Math.round(
    (newPosition / timelineHeight) * (totalComments - 1)
  )

  if (newIndex !== activeIndex.value) {
    activeIndex.value = newIndex
    scrollToComment(newIndex)
  }
}

// Stop dragging the marker
const stopDrag = () => {
  isDragging.value = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
}
const formattedDate = computed(() => {
  const activeReply = props.post.reply_data?.[activeIndex.value]
  if (!activeReply || !activeReply.create_date) return ''

  // Convert ISO date string to a readable format
  const date = new Date(activeReply.create_date)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
})

const firstReplyDate = computed(() => {
  const firstReply = props.post.reply_data?.[0]
  if (!firstReply || !firstReply.create_date) return ''

  const date = new Date(firstReply.create_date)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
})

const lastReplyDate = computed(() => {
  const lastReply = props.post.reply_data?.[props.post.reply_data.length - 1]
  if (!lastReply || !lastReply.create_date) return ''

  const date = new Date(lastReply.create_date)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
})
</script>

<style>
.vel-img {
  width: 100vw;
  height: auto;
  object-fit: contain;
}
</style>
