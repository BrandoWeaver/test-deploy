<!-- components/ToggleSwitch.vue -->
<template>
  <button
    id="toggle"
    role="switch"
    type="button"
    :aria-checked="modelValue"
    @click="$emit('update:modelValue', !modelValue)"
    class="relative inline-flex h-6 w-12 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-300"
    :class="modelValue ? 'bg-indigo-600' : 'bg-gray-300'"
  >
    <span
      class="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out"
      :class="modelValue ? 'translate-x-6' : 'translate-x-0'"
    ></span>
  </button>
</template>

<script setup lang="ts">
defineProps<{ modelValue: boolean }>()

defineEmits(['update:modelValue'])
</script>
