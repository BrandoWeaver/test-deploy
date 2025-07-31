<template>
  <div
    v-if="isOpen"
    class="fixed top-0 left-0 w-1/4 h-full lg-max:w-1/3 sm-max:w-2/3 bg-white shadow-lg z-50 p-4 transition-transform transform"
    :class="{ '-translate-x-full': !isOpen }"
  >
    <!-- Close Button -->
    <div class="flex justify-end">
      <button @click="close" class="text-gray-700 hover:text-black">
        &times;
        <!-- Close icon -->
      </button>
    </div>

    <!-- Menu Content -->
    <div>
      <!-- Logo -->
      <div
        class="text-black flex-col mb-[6px] justify-start text-start font-lexend text-[22px] font-bold leading-[30px]"
      >
        thortok
      </div>
      <ul class="mt-4">
        <li v-for="link in menuLinks" :key="link.title" class="mb-2">
          <a :href="link.url" class="text-gray-700 hover:text-black">
            {{ link.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// Define props
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  menuLinks: {
    type: Array,
    required: true,
  },
})

// Define event emitter
const emit = defineEmits(['close'])

// Emit close event
const close = () => {
  emit('close')
}
</script>
