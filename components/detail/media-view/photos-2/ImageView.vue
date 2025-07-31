<template>
  <div
    class="flex relative w-full sm-max:flex-1 sm-max:gap-[8px] mx-auto gap-[24px] items-start md-max:gap-[14px] md-max:mx-0"
  >
    <div class="absolute top-2 right-2 z-30 hover:cursor-pointer">
      <button
        class="bg-white p-1 rounded-full shadow flex items-center gap-1"
        @click="
          previewImage(
            getImageByAngleAndDegree(activeAngle, degree, props.angle_list)
              ?.path || ''
          )
        "
      >
        <Icon :icon="'material-symbols:zoom-out-map'" width="24" height="24" />
      </button>
    </div>
    <div
      class="flex h-[605px] xl-max:h-[41.6vw] lg-max:h-[56vw] md-max:h-[63.5vw] sm-max:h-[55.6vw] flex-col justify-between"
    >
      <button
        v-for="angle in angles"
        :key="angle"
        :class="[
          'w-[60px] h-[60px] disabled:opacity-50 xl-max:w-[54px] xl-max:h-[54px] lg-max:w-[48px] lg-max:h-[48px] md-max:w-[36px] md-max:h-[36px] sm-max:w-[26px] sm-max:h-[18px] sm-max:rounded-[4px] rounded-lg border text-[17px] lg-max:text-[15px] md-max:text-[11px] sm-max:text-[10px] leading-[30.6px] lg-max:leading-[27px] md-max:leading-[19.8px] sm-max:leading-[18px] font-noto font-bold transition-all',
          angle === selectedAngle
            ? 'bg-[#EFF1D9] border-[#EEE] bg-gradient-to-t '
            : 'hover:bg-[#EFF1D9]  border-[#EEE]',
        ]"
        @click="selectAngle(angle)"
        @mouseenter="handleMouseEnter(angle)"
        @mouseleave="handleMouseLeave"
      >
        <span>{{ angle > 0 ? '+' + angle : angle }}°</span>
      </button>
    </div>
    <!-- image and ruler -->
    <div>
      <div
        ref="imageContainer"
        class="w-[856px] xl-max:w-[59vw] lg-max:w-full md-max:w-full sm-max:w-[100%] xs-max:w-full overflow-hidden relative"
      >
        <!-- <transition name="fade" mode="out-in"> -->
        <div v-if="status === 'pending'">
          <div
            class="bg-[#f6f5f3] w-full sm-max:w-[86vw] xs-max:w-[80vw] h-[605px] xl-max:h-[41.6vw] lg-max:h-[56vw] md-max:h-[63.5vw] sm-max:h-[55.6vw] rounded-lg"
            :class="{
              'animate-pulse': status === 'pending',
            }"
          ></div>
        </div>

        <NuxtImg
          v-else
          :key="
            getImageByAngleAndDegree(activeAngle, degree, props.angle_list)
              ?.path_preview || ''
          "
          :src="
            getImageByAngleAndDegree(activeAngle, degree, props.angle_list)
              ?.path_preview || ''
          "
          format="webp"
          alt="Product Image"
          class="w-full hover:cursor-pointer sm-max:w-[86vw] xs-max:w-[80vw] h-[605px] xl-max:h-[41.6vw] lg-max:h-[56vw] md-max:h-[63.5vw] sm-max:h-[55.6vw] rounded-lg shadow-lg object-cover"
          @click="handleImageClick"
          @mousedown="handleMouseDown"
          draggable="false"
          :style="{
            transform: isZoomed
              ? `scale(${zoomScale}) translate(${imageOffset.x}px, ${imageOffset.y}px)`
              : 'scale(1) translate(0, 0)',
            transition: isDragging
              ? 'none'
              : isSnappingBack
                ? 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                : 'transform 0.3s ease-out',
            transformOrigin: 'center center',
            cursor: isZoomed ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
          }"
        />

        <!-- </transition> -->
      </div>
      <div class="sm-max:hidden w-full flex flex-col gap-4">
        <RulerScale :currentDegree="degree" @updateDegree="updateDegree" />
      </div>
    </div>
  </div>
  <div class="sm:hidden sm-max:block w-full flex flex-col mt-[24px] gap-4">
    <RulerScale :currentDegree="degree" @updateDegree="updateDegree" />
  </div>
  <ClientOnly>
    <LazyPhotoSwipeGallery
      ref="gallery"
      :images="previewImages"
      class="hidden"
    />
  </ClientOnly>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import RulerScale from '@/components/product_page/Ruler Scale.vue'
import { Icon } from '@iconify/vue/dist/iconify.js'
interface Props {
  angles: number[]
  angle_list: POST.AngleList
  status?: string
  updteId: (id: number) => void
}
interface ImageData {
  [key: string]: { id: number; path: string; path_preview: string }[]
}
const gallery = ref<any>(null)

const props = defineProps<Props>()
const degree = ref(0)
const updateDegree = (newDegree: number) => {
  degree.value = newDegree
}
const resetDegree = () => {
  degree.value = 0
}
const selectedAngle = ref(0)
const hoveredAngle = ref<number | null>(null)
const totalTicks = ref(21)
const imageContainer = ref<HTMLElement | null>(null)
const activeAngle = computed(() =>
  hoveredAngle.value ? hoveredAngle.value : selectedAngle.value
)
function getImageByAngleAndDegree(
  angle: number,
  degree: number,
  angleImageMap: ImageData
) {
  const angleKey = angle.toString()
  const images = angleImageMap[angleKey]
  if (!images || images.length === 0) return null
  const normalized = ((degree % 360) + 360) % 360
  const index = Math.round(normalized / 7.5) % 48
  return images[index]
}
watch(
  () =>
    getImageByAngleAndDegree(activeAngle.value, degree.value, props.angle_list),
  (newImage) => {
    if (newImage?.id) {
      props.updteId(newImage.id)
    }
  },
  { immediate: true }
)

const currentImageIndex = ref(0)
const selectAngle = (angle: number) => {
  selectedAngle.value = angle
  currentImageIndex.value = 0
  resetDegree()
}
const previewImages = ref<
  { src: string; thumbnail: string; width: number; height: number }[] | any[]
>([])
const preloadPreviewImages = async () => {
  const angleKey = activeAngle.value.toString()
  const images = props.angle_list[angleKey] || []
  previewImages.value = images.map((img) => ({
    src: img.path,
    thumbnail: img.path,
    width: 1200,
    height: 800,
  }))
  const result = await Promise.all(
    images.map((img) => {
      return new Promise((resolve) => {
        const image = new window.Image()
        image.onload = () => {
          resolve({
            src: img.path,
            thumbnail: img.path,
            width: image.naturalWidth,
            height: image.naturalHeight,
          })
        }
        image.onerror = () => {
          resolve({
            src: img.path,
            thumbnail: img.path,
            width: 1200,
            height: 800,
          })
        }
        image.src = img.path
      })
    })
  )
  previewImages.value = result
}

watch(
  activeAngle,
  () => {
    preloadPreviewImages()
  },
  { immediate: true }
)

const previewImage = (pathImage: string) => {
  const index = previewImages.value.findIndex((img) => img.src === pathImage)
  if (index === -1) return
  gallery.value?.openGallery(index)
}

const handleMouseEnter = (angle: number) => {
  hoveredAngle.value = angle
}
const handleMouseLeave = () => {
  hoveredAngle.value = null
}
const calculateTotalTicks = () => {
  if (imageContainer.value) {
    const containerWidth = imageContainer.value.clientWidth
    const tickSpacing = 8
    totalTicks.value = Math.floor(containerWidth / tickSpacing)
  }
}
onMounted(() => {
  calculateTotalTicks()
  window.addEventListener('resize', calculateTotalTicks)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', calculateTotalTicks)
})
const isZoomed = ref(false)
const isDragging = ref(false)
const wasDragged = ref(false)
const isSnappingBack = ref(false)

const zoomScale = 2 // zoom level
const imageOffset = ref({ x: 0, y: 0 }) // drag offset
const dragStart = ref({ x: 0, y: 0 }) // where drag started
const dragStartOffset = ref({ x: 0, y: 0 }) // original offset at drag start

// Elastic drag parameters
const elasticStrength = 0.2 // How much resistance when dragging beyond bounds (0-1)
const maxElasticDistance = 100 // Maximum pixels to allow elastic drag

// Your image here
const imageUrl = '/your-image-path.webp'

const handleImageClick = () => {
  if (wasDragged.value) return
  isZoomed.value = !isZoomed.value

  if (!isZoomed.value) {
    imageOffset.value = { x: 0, y: 0 }
  }
}

const handleMouseDown = (event: MouseEvent) => {
  if (!isZoomed.value || !imageContainer.value) return

  isDragging.value = true
  wasDragged.value = false
  isSnappingBack.value = false

  dragStart.value = { x: event.clientX, y: event.clientY }
  dragStartOffset.value = { ...imageOffset.value }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.value) return

    const deltaX = e.clientX - dragStart.value.x
    const deltaY = e.clientY - dragStart.value.y

    if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
      wasDragged.value = true
    }

    const newOffset = {
      x: dragStartOffset.value.x + deltaX,
      y: dragStartOffset.value.y + deltaY,
    }

    // Apply elastic effect
    const elasticOffset = applyElasticEffect(newOffset)
    imageOffset.value = elasticOffset
  }

  const handleMouseUp = () => {
    isDragging.value = false
    snapBackToBounds()
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseup', handleMouseUp)
  }

  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseup', handleMouseUp)
}

const applyElasticEffect = (offset: { x: number; y: number }) => {
  if (!imageContainer.value) return offset

  const container = imageContainer.value
  const containerWidth = container.clientWidth
  const containerHeight = container.clientHeight

  const imageWidth = containerWidth * zoomScale
  const imageHeight = containerHeight * zoomScale

  const maxOffsetX = (imageWidth - containerWidth) / 2
  const maxOffsetY = (imageHeight - containerHeight) / 2

  let elasticX = offset.x
  let elasticY = offset.y

  // Apply elastic effect for X axis
  if (offset.x > maxOffsetX) {
    const overflowX = offset.x - maxOffsetX
    const elasticOverflowX = Math.min(
      overflowX * elasticStrength,
      maxElasticDistance
    )
    elasticX = maxOffsetX + elasticOverflowX
  } else if (offset.x < -maxOffsetX) {
    const overflowX = Math.abs(offset.x + maxOffsetX)
    const elasticOverflowX = Math.min(
      overflowX * elasticStrength,
      maxElasticDistance
    )
    elasticX = -maxOffsetX - elasticOverflowX
  }

  // Apply elastic effect for Y axis
  if (offset.y > maxOffsetY) {
    const overflowY = offset.y - maxOffsetY
    const elasticOverflowY = Math.min(
      overflowY * elasticStrength,
      maxElasticDistance
    )
    elasticY = maxOffsetY + elasticOverflowY
  } else if (offset.y < -maxOffsetY) {
    const overflowY = Math.abs(offset.y + maxOffsetY)
    const elasticOverflowY = Math.min(
      overflowY * elasticStrength,
      maxElasticDistance
    )
    elasticY = -maxOffsetY - elasticOverflowY
  }

  return { x: elasticX, y: elasticY }
}

const snapBackToBounds = () => {
  if (!imageContainer.value) return

  const container = imageContainer.value
  const containerWidth = container.clientWidth
  const containerHeight = container.clientHeight

  const imageWidth = containerWidth * zoomScale
  const imageHeight = containerHeight * zoomScale

  const maxOffsetX = (imageWidth - containerWidth) / 5
  const maxOffsetY = (imageHeight - containerHeight) / 5

  // Calculate the target position (within bounds)
  const targetOffset = {
    x: Math.min(Math.max(imageOffset.value.x, -maxOffsetX), maxOffsetX),
    y: Math.min(Math.max(imageOffset.value.y, -maxOffsetY), maxOffsetY),
  }

  // Only animate if we're outside bounds
  if (
    imageOffset.value.x !== targetOffset.x ||
    imageOffset.value.y !== targetOffset.y
  ) {
    isSnappingBack.value = true

    // Use a timeout to ensure the transition CSS is applied
    setTimeout(() => {
      imageOffset.value = targetOffset

      // Reset snapping state after animation
      setTimeout(() => {
        isSnappingBack.value = false
      }, 600)
    }, 10)
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
