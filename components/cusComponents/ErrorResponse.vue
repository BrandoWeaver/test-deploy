<template>
  <div
    class="flex flex-col items-center justify-center gap-2"
    :style="{ height: height || 'calc(100% - 76px)' }"
  >
    <p class="text-lg font-semibold text-gray-500">
      {{ typeof message === 'string' ? message : message.message }}
    </p>
    <button
      v-if="buttonText && buttonAction"
      @click="buttonAction"
      class="h-10 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: [String, Error],
    default: 'something wrong',
  },
  height: {
    type: String,
    default: 'calc(100% - 76px)',
  },
  buttonText: {
    type: String,
    default: 'Refresh',
  },
  buttonAction: {
    type: Function,
    default: null,
  },
})
</script>
