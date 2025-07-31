// composables/useWindowSize.ts
import { ref, onMounted, onUnmounted } from 'vue'

export function useWindowSize() {
  const width = ref(typeof window !== 'undefined' ? window.innerWidth : 0)
  const height = ref(typeof window !== 'undefined' ? window.innerHeight : 0)

  function updateSize() {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  onMounted(() => {
    window.addEventListener('resize', updateSize)
    updateSize() // Initial call to get the size on mount
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateSize)
  })

  return { width, height }
}
