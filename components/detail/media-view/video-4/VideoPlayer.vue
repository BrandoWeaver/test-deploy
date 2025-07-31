<template>
  <div
    class="w-full xl:max-w-[59vw] lg:max-w-full md:max-w-full sm:max-w-full xs:max-w-full bg-[#f6f5f3] shadow-md rounded-md overflow-hidden"
  >
    <video
      ref="videoRef"
      class="video-js vjs-default-skin w-full h-full"
      controls
      preload="auto"
      :poster="poster"
      :data-setup="JSON.stringify(videoOptions)"
    >
      <source :src="src" :type="type" />
    </video>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
const props = defineProps<{
  src: string
  type?: string
  poster?: string
}>()

const videoRef = ref()
let player: ReturnType<typeof videojs> | null = null

const videoOptions = {
  autoplay: false,
  controls: true,
  responsive: true,
  fluid: true,
}

onMounted(() => {
  if (videoRef.value) {
    player = videojs(videoRef.value, videoOptions)
  }
})

onBeforeUnmount(() => {
  if (player) {
    player.dispose()
  }
})
</script>

<style scoped>
.video-js {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
</style>
