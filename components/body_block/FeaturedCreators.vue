<template>
  <div class="bg-[#f6f7e7] w-full py-[64px] relative">
    <div class="gap-2 flex md:hidden">
      <button
        @click="scrollLeft"
        class="nav-buttonSmall absolute bottom-[230px] left-0 z-10"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.69316 11.1738L6.13456 11.7324C5.88066 11.9609 5.4998 11.9609 5.27128 11.7324L0.320109 6.80664C0.0915937 6.55273 0.0915937 6.17188 0.320109 5.94336L5.27128 0.992188C5.4998 0.763672 5.88066 0.763672 6.13456 0.992188L6.69316 1.55078C6.92167 1.80469 6.92167 2.18555 6.69316 2.43945L3.62089 5.35938H10.908C11.2635 5.35938 11.5174 5.61328 11.5174 5.96875V6.78125C11.5174 7.11133 11.2635 7.39062 10.908 7.39062H3.62089L6.69316 10.2852C6.92167 10.5391 6.94706 10.9199 6.69316 11.1738Z"
            fill="black"
          />
        </svg>
      </button>
      <button
        @click="scrollRight"
        class="nav-buttonSmall absolute bottom-[230px] right-0 z-10"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.30684 0.826172L5.86544 0.267578C6.11934 0.0390625 6.5002 0.0390625 6.72872 0.267578L11.6799 5.19336C11.9084 5.44727 11.9084 5.82812 11.6799 6.05664L6.72872 11.0078C6.5002 11.2363 6.11934 11.2363 5.86544 11.0078L5.30684 10.4492C5.07833 10.1953 5.07833 9.81445 5.30684 9.56055L8.37911 6.64062H1.092C0.736531 6.64062 0.482625 6.38672 0.482625 6.03125V5.21875C0.482625 4.88867 0.736531 4.60938 1.092 4.60938H8.37911L5.30684 1.71484C5.07833 1.46094 5.05294 1.08008 5.30684 0.826172Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
    <div class="w-full max-w-[2307px] mx-auto flex flex-col items-start gap-6">
      <div
        class="w-full lg:max-w-[1392px] px-4 flex justify-between items-center mx-auto"
      >
        <div class="flex flex-col gap-2">
          <h3
            class="flex items-center gap-4 text-black font-lexend font-bold text-[20px] leading-[36px]"
          >
            <span
              class="bg-[#DBF226] rounded-full w-12 h-12 flex items-center justify-center"
            >
              <img
                src="@/assets/logo/comment-user.svg"
                alt="Comment User Icon"
                class="w-6 h-6"
              />
            </span>
            <span class="relative">
              Featured Creators of the Week
              <span class="block w-full h-[2px] bg-black mt-1"></span>
            </span>
          </h3>
          <p
            class="text-[#000] font-noto text-[17px] font-light leading-[30.6px]"
          >
            Discover the unique talents and inspiring creations of this week’s
            standout contributors.
          </p>
        </div>
        <div class="gap-2 md:flex hidden">
          <button @click="scrollLeft" class="nav-button">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.69316 11.1738L6.13456 11.7324C5.88066 11.9609 5.4998 11.9609 5.27128 11.7324L0.320109 6.80664C0.0915937 6.55273 0.0915937 6.17188 0.320109 5.94336L5.27128 0.992188C5.4998 0.763672 5.88066 0.763672 6.13456 0.992188L6.69316 1.55078C6.92167 1.80469 6.92167 2.18555 6.69316 2.43945L3.62089 5.35938H10.908C11.2635 5.35938 11.5174 5.61328 11.5174 5.96875V6.78125C11.5174 7.11133 11.2635 7.39062 10.908 7.39062H3.62089L6.69316 10.2852C6.92167 10.5391 6.94706 10.9199 6.69316 11.1738Z"
                fill="black"
              />
            </svg>
          </button>
          <button @click="scrollRight" class="nav-button">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.30684 0.826172L5.86544 0.267578C6.11934 0.0390625 6.5002 0.0390625 6.72872 0.267578L11.6799 5.19336C11.9084 5.44727 11.9084 5.82812 11.6799 6.05664L6.72872 11.0078C6.5002 11.2363 6.11934 11.2363 5.86544 11.0078L5.30684 10.4492C5.07833 10.1953 5.07833 9.81445 5.30684 9.56055L8.37911 6.64062H1.092C0.736531 6.64062 0.482625 6.38672 0.482625 6.03125V5.21875C0.482625 4.88867 0.736531 4.60938 1.092 4.60938H8.37911L5.30684 1.71484C5.07833 1.46094 5.05294 1.08008 5.30684 0.826172Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        class="relative w-full overflow-x-scroll px-4 scrollbar-hide"
        ref="carousel"
      >
        <div class="flex gap-[14px] items-center">
          <div
            v-if="(status && pageCreator === 1) || listCreator.length === 0"
            class="flex flex-row gap-[28px]"
          >
            <div
              v-for="i in 10"
              :key="i"
              class="creator-card h-full flex flex-col items-start bg-white rounded-lg w-full p-4"
            >
              <div
                class="w-[282px] h-[180px] bg-gray-200 rounded-t-lg overflow-hidden shimmer-bg"
              ></div>
              <div class="flex items-center justify-between w-full mt-4">
                <div class="flex items-center gap-3">
                  <div
                    class="relative w-8 h-8 rounded-full bg-gray-300 shimmer-bg"
                  ></div>
                  <span
                    class="w-24 h-4 bg-gray-300 rounded-md shimmer-bg"
                  ></span>
                </div>
                <div
                  class="flex items-center justify-center rounded-md bg-gray-200 shimmer-bg h-8 w-20"
                ></div>
              </div>
              <h4 class="w-3/4 h-6 bg-gray-300 rounded-md shimmer-bg mt-2"></h4>
              <div class="flex flex-wrap gap-2 mt-1 w-full">
                <span
                  v-for="j in 2"
                  :key="j"
                  class="px-3 py-1 rounded-md border bg-gray-200 shimmer-bg h-7 w-16"
                >
                </span>
              </div>
            </div>
          </div>
          <div
            v-else
            class="flex flex-shrink-0 max-h-[487px] h-full items-stretch gap-x-6 gap-y-8"
          >
            <div
              v-for="(creator, index) in listCreator"
              :key="index"
              class="creator-card w-[282px]"
            >
              <NuxtLink
                class="w-full h-[180px] bg-gray-200 rounded-t-lg overflow-hidden"
                :to="`/all-products/${creator.section.slug || 'unknown'}/${creator?.sub_section?.slug || 'unknown'}/${creator?.categories[0]?.slug || 'unknown'}/${creator?.collections[0]?.slug || 'unknown'}/${creator?.slug || 'unknown'}`"
              >
                <NuxtImg
                  :src="creator.thumbnail"
                  alt="Creator Image"
                  class="w-full h-full object-cover"
                  quality="65"
                  format="webp"
                />
              </NuxtLink>

              <div class="flex items-center justify-between w-full mt-4">
                <div class="flex items-center gap-3">
                  <div class="relative">
                    <NuxtImg
                      :src="creator.creator.profile"
                      :alt="creator.creator.name"
                      class="flex items-center justify-center w-8 h-8 rounded-full border border-[#DBF226] bg-lightgray object-cover"
                      width="32"
                      height="32"
                      loading="lazy"
                    />
                  </div>
                  <span
                    class="text-white font-lexend text-[14px] font-medium"
                    >{{ creator.creator.name.toUpperCase() }}</span
                  >
                </div>

                <button
                  v-if="!listFollow.includes(`${creator.creator.id}`)"
                  class="flex items-center justify-center rounded-md border font-noto text-sm font-medium gap-1 px-3.5 py-1 border-[#DBF226] text-[#DBF226] bg-transparent"
                  @click="handleFollow(`${creator.creator.id}`)"
                >
                  <Icon icon="mingcute:add-line" width="16" height="16" />
                  Follow
                </button>
                <button
                  v-else
                  class="flex items-center justify-center rounded-md border font-noto text-sm font-medium gap-1 px-3.5 py-1 border-[#DBF226] bg-[#DBF226] text-[#000000]"
                  @click="handleFollow(`${creator.creator.id}`)"
                >
                  Unfollow
                </button>
              </div>

              <h4 class="font-lexend font-bold text-lg mt-2">
                {{ creator.title }}
              </h4>
              <div class="flex flex-wrap gap-2 mt-1">
                <span
                  style="
                    text-align: center;
                    font-style: normal;
                    font-weight: 300;
                    line-height: 180%;
                  "
                  v-for="tag in creator.tags"
                  @click="toggleTag(tag)"
                  :class="[
                    'flex items-center justify-center gap-2 px-3 py-1 text-sm rounded-md cursor-pointer',
                    clickedTags.has(tag)
                      ? ' bg-[#DBF226] text-black'
                      : 'text-white border border-[#F5F5F5]',
                  ]"
                >
                  {{ tag.name }}
                </span>
              </div>
            </div>
          </div>
          <div><CusComponentsCusLoading /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue/dist/iconify.js'
import { useFollowStatus } from '~/composables/detail/useFollow'

const props = defineProps<{
  listCreator: ICreator.CreatorOfTheWeek[]
  status: boolean
  loadMoreCreator?: () => void
  isFetchingCreator?: boolean
  pageCreator?: number
}>()
const { handleFollow, listFollow } = useFollowStatus()
const carousel = ref<HTMLElement | null>(null)
const clickedTags = ref(new Set())

// cardWidth will be used for programatic scrolling
const cardWidth = 320 + 14 // Width of creator-card + gap

const toggleTag = (tag: any) => {
  if (clickedTags.value.has(tag)) {
    clickedTags.value.delete(tag)
  } else {
    clickedTags.value.add(tag)
  }
}

const scrollLeft = () => {
  if (carousel.value) {
    carousel.value.scrollBy({
      left: -carousel.value.clientWidth, // Scroll by the width of the carousel
      behavior: 'smooth',
    })
  }
}

const scrollRight = () => {
  if (carousel.value) {
    carousel.value.scrollBy({
      left: carousel.value.clientWidth, // Scroll by the width of the carousel
      behavior: 'smooth',
    })
  }
}

onMounted(() => {
  const el = carousel.value
  if (el) {
    const handleScroll = () => {
      if (props.isFetchingCreator || !props.loadMoreCreator) return

      const scrollLeftPosition = el.scrollLeft
      const scrollWidth = el.scrollWidth
      const clientWidth = el.clientWidth

      // Define a threshold for when to load more data.
      // For example, when the user is within 300px of the end.
      const scrollThreshold = 300
      const nearEnd =
        scrollLeftPosition + clientWidth >= scrollWidth - scrollThreshold

      if (nearEnd) {
        props.loadMoreCreator()
      }
    }
    el.addEventListener('scroll', handleScroll)
  }
})

onBeforeUnmount(() => {
  const el = carousel.value
  if (el) {
    el.removeEventListener('scroll', () => {}) // Remove the event listener on unmount
  }
})
</script>

<style scoped>
.creator-card {
  display: flex;
  width: 320px; /* Fixed width for each card */
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  background-color: #000;
  color: white;
}

/* Hide scrollbar for cleaner look, but keep functionality */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.nav-button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.nav-buttonSmall {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.nav-button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
}

.follow-button {
  @apply px-3.5 py-1 border-[#DBF226] text-[#DBF226] bg-transparent;
}

.unfollow-button {
  @apply w-[92px] px-3.5 py-1 border-[#DBF226] bg-[#DBF226] text-black;
}

.shimmer-bg {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmering 1.5s infinite;
}

@keyframes shimmering {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
