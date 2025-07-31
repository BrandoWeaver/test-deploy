<template>
  <div
    class="flex w-full hover:cursor-pointer sm-max:flex-1 sm-max:gap-[8px] mx-auto gap-[24px] items-start md-max:gap-[14px] md-max:mx-0"
    @click="preview"
  >
    <FixedWidthImageContainer
      :imageUrl="props.previewImage"
      :altText="altImage"
      containerFixedClassName="w-full xl-max:w-[59vw] lg-max:w-full md-max:w-full sm-max:w-[100%] xs-max:w-full bg-[#f6f5f3] shadow-md"
    />
    <ClientOnly>
      <LazyPhotoSwipeGallery
        ref="gallery"
        :images="previewImages"
        class="hidden"
    /></ClientOnly>
  </div>
</template>

<script setup lang="ts">
import FixedWidthImageContainer from '~/components/cusComponents/FixedWidthImageContainer.vue'

interface Props {
  previewImage?: string
  status?: string
  altImage?: string
  pathImage?: string
}
const props = defineProps<Props>()

const gallery = ref<any>(null)

const previewImages = ref([
  {
    src: props.pathImage || '',
    thumbnail: props.pathImage || '',
    width: 1200,
    height: 800,
  },
])

// preload real dimensions
const preloadImageSize = () => {
  if (!props.previewImage) return
  const img = new Image()
  img.onload = () => {
    previewImages.value = [
      {
        src: props.pathImage!,
        thumbnail: props.pathImage!,
        width: img.naturalWidth,
        height: img.naturalHeight,
      },
    ]
  }
  img.onerror = () => {
    // fallback
    previewImages.value = [
      {
        src: props.pathImage!,
        thumbnail: props.pathImage!,
        width: 1200,
        height: 800,
      },
    ]
  }
  img.src = props.pathImage!
}

onMounted(() => {
  preloadImageSize()
})

const preview = () => {
  if (!props.previewImage) return
  gallery.value?.openGallery(0)
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
