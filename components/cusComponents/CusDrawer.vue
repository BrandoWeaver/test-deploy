<template>
  <div class="flex flex-col">
    <!-- Component 1 -->

    <!-- Component 2 Wrapper -->
    <div class="relative flex-1 p-4 z-50">
      <!-- Drawer -->
      <div
        v-show="isDrawerOpen"
        class="absolute top-0 left-0 w-auto bg-white transform transition-transform duration-300 ease-in-out"
        :class="{
          'translate-x-0': isDrawerOpen,
          '-translate-x-full': !isDrawerOpen,
        }"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  buttonText: {
    type: String,
    default: 'Open Drawer',
  },
  drawerId: {
    type: String,
    required: true,
  },
  isDrawerOpen: {
    type: Boolean,
  },
})
const emit = defineEmits(['toggleDrawer'])
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>
