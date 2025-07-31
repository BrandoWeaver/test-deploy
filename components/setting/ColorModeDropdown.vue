<template>
  <div ref="dropdownRef" class="relative">
    <button
      @click="dropdownOpen = !dropdownOpen"
      class="bg-black text-white font-medium py-2 px-4 rounded-md flex items-center justify-between transition-colors duration-200"
      aria-haspopup="listbox"
      :aria-expanded="dropdownOpen"
    >
      <span>{{ selectedModeName }}</span>
      <svg
        class="w-5 h-5 ml-2 transition-transform duration-200"
        :class="{ 'rotate-180': dropdownOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    <div
      v-if="dropdownOpen"
      class="absolute z-10 mt-2 bg-white rounded-lg shadow-lg border border-gray-200"
    >
      <ul role="listbox" class="py-1">
        <li
          v-for="mode in colorModes"
          :key="mode.id"
          class="px-4 flex flex-row py-2 text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors duration-150 rounded-md mx-1 my-0.5"
          :class="{
            'bg-indigo-50 text-indigo-700 font-semibold':
              selectedMode === mode.id,
          }"
          @click="handleSelectMode(mode.id)"
          role="option"
          :aria-selected="selectedMode === mode.id"
        >
          {{ mode.name }}
          <span v-if="selectedMode === mode.id" class="ml-2 text-indigo-700">
            <svg
              class="inline-block w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useApi } from '~/composables/custom-fetch-api/useApi'
import { API } from '~/constants/apiEndpoints'
const colorModes = [
  { id: 'light', name: 'Light' },
  { id: 'auto', name: 'Auto' },
  { id: 'dark', name: 'Night' },
]
const selectedMode = ref<string>('auto')
const dropdownOpen = ref<boolean>(false)
const dropdownRef = ref<HTMLElement | null>(null)
const selectedModeName = computed(() => {
  return (
    colorModes.find((mode) => mode.id === selectedMode.value)?.name ??
    'Select Mode'
  )
})
const config = useRuntimeConfig()
const { locale } = useI18n()
const { execute: executeUpdateMode } = await useApi(
  () =>
    API.AUTH.UPDATE_MODE.replace(':type', config.public.type)
      .replace(':version', config.public.version)
      .replace(':lang', locale.value),
  {
    method: 'POST',
    watch: false,
    body: { mode: selectedMode },

    immediate: false,
  }
)

const handleSelectMode = async (modeId: string) => {
  selectedMode.value = modeId
  dropdownOpen.value = false
  await executeUpdateMode()
}
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    dropdownOpen.value = false
  }
}
onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>
