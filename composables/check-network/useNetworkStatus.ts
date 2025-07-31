import { ref, onMounted, onUnmounted } from 'vue'

export const useNetworkStatus = () => {
  const isOnline = ref(true)

  const updateOnlineStatus = () => {
    isOnline.value = navigator.onLine
  }

  onMounted(() => {
    isOnline.value = navigator.onLine
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)
  })

  onUnmounted(() => {
    window.removeEventListener('online', updateOnlineStatus)
    window.removeEventListener('offline', updateOnlineStatus)
  })

  return { isOnline }
}
