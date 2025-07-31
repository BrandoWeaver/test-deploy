<template>
  <div :style="{ width: containerWidth }">
    <NuxtImg
      ref="imageRef"
      :src="imageUrl"
      :alt="altText"
      class="h-48 w-auto max-w-[400px] object-contain rounded-lg block bg-[#f6f5f3]"
      @error="handleError"
      @load="updateContainerWidth"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  imageUrl: String,
  altText: String,
})

const containerWidth = ref('auto')
const imageRef = ref(null)

const updateContainerWidth = () => {
  if (imageRef.value) {
    const imageActualWidth = imageRef.value.offsetWidth
    containerWidth.value = `${imageActualWidth}px`
  }
}

const handleError = (e) => {
  e.target.src =
    'https://placehold.co/400x250/EF4444/FFFFFF?text=Image+Failed+to+Load'
  e.target.alt = 'Image failed to load'
  updateContainerWidth()
}

onMounted(() => {
  window.addEventListener('resize', updateContainerWidth)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateContainerWidth)
})
</script>
