<template>
  <div class="relative w-full h-8 mb-4">
    <div
      class="absolute w-full h-2 rounded-lg bg-common-white"
      :style="{
        background: `linear-gradient(to right, 
          #ffffff ${minValue}%, 
          #dbf226 ${minValue}%, 
          #dbf226 ${maxValue}%, 
          #ffffff ${maxValue}%)`,
      }"
    ></div>
    <input
      type="range"
      :value="minValue"
      class="absolute w-full h-2 appearance-none cursor-pointer bg-transparent"
      min="0"
      max="100"
      @input="updateMin"
    />
    <input
      type="range"
      :value="maxValue"
      class="absolute w-full h-2 appearance-none cursor-pointer bg-transparent"
      min="0"
      max="100"
      @input="updateMax"
    />
  </div>
  <div class="flex justify-between text-sm">
    <span>{{ minValue }}%</span>
    <span>{{ maxValue }}%</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const minValue = ref(20)
const maxValue = ref(80)

const updateMin = (event: Event) => {
  const value = parseInt((event.target as HTMLInputElement).value)
  minValue.value = Math.min(value, maxValue.value - 1)
}

const updateMax = (event: Event) => {
  const value = parseInt((event.target as HTMLInputElement).value)
  maxValue.value = Math.max(value, minValue.value + 1)
}
</script>

<style scoped>
input[type='range'] {
  pointer-events: none;
}

input[type='range']::-webkit-slider-thumb {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #dbf226;
  cursor: pointer;
  pointer-events: auto;
  -webkit-appearance: none;
}

input[type='range']::-moz-range-thumb {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #dbf226;
  cursor: pointer;
  pointer-events: auto;
}

/* Make the top range slider's thumb appear above the bottom one */
/* input[type='range']:nth-child(3)::-webkit-slider-thumb {
  transform: translateY(-2px);
}

input[type='range']:nth-child(3)::-moz-range-thumb {
  transform: translateY(-2px);
} */
</style>
