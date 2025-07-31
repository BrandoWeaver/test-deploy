<script setup>
import { useNetworkStatus } from '~/composables/check-network/useNetworkStatus'

const { isOnline } = useNetworkStatus()
</script>

<template>
  <div
    v-if="!isOnline"
    class="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-sm"
  >
    <div
      class="bg-gray-800 text-white p-8 rounded-2xl shadow-[0_5px_25px_rgba(0,0,0,0.3)] text-center"
    >
      <h2 class="text-xl font-semibold mb-2">🔌 No Internet</h2>
      <p class="text-sm text-gray-200 mb-4">
        Hmm... You're not connected to the internet.
      </p>
      <div
        class="w-6 h-6 mx-auto border-2 border-white border-t-red-400 rounded-full animate-spin"
      ></div>
    </div>
  </div>
</template>
