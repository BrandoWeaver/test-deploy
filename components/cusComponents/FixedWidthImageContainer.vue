<template>
  <div :class="containerFixedClassName">
    <div
      class="relative w-full overflow-hidden rounded-md"
      :style="{ paddingBottom: `${paddingBottomPercentage}%` }"
    >
      <div
        v-if="!imageLoaded"
        class="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse rounded-md"
      >
        <svg
          class="w-10 h-10 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-4 4 4 4-4V5h-2l-4 4-2-2-4 4z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <img
        :src="imageUrl"
        :alt="altText"
        :class="`absolute inset-0 w-full h-full object-contain rounded-md shadow-md block transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`"
        @load="handleImageLoad"
        @error="handleError"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  imageUrl: String,
  altText: String,
  containerFixedClassName: String,
})
const imageLoaded = ref(false)
const aspectRatio = ref(0)
onMounted(() => {
  const img = new Image()
  img.src = props.imageUrl || ''
  if (img.complete) {
    handleImageLoad({ target: img })
  }
})
const handleError = (event: any) => {
  event.target.src =
    'https://placehold.co/256x150/EF4444/FFFFFF?text=Image+Failed+to+Load'
  event.target.alt = 'Image failed to load'
  imageLoaded.value = true
  aspectRatio.value = 150 / 256
}
const handleImageLoad = (event: any) => {
  imageLoaded.value = true
  const { naturalWidth, naturalHeight } = event.target
  if (naturalWidth && naturalHeight) {
    aspectRatio.value = naturalHeight / naturalWidth
  } else {
  }
}
watch(
  () => props.imageUrl,
  (newUrl, oldUrl) => {
    imageLoaded.value = false
    aspectRatio.value = 0
  }
)
const paddingBottomPercentage = computed(() => {
  const percentage = aspectRatio.value > 0 ? aspectRatio.value * 100 : 56.25
  return percentage
})
</script>
