<template>
  <div ref="dropdownRef" class="relative">
    <button
      @click="dropdownOpen = !dropdownOpen"
      class="bg-black text-white font-medium py-2 px-4 rounded-md flex items-center justify-between transition-colors duration-200"
      aria-haspopup="listbox"
      :aria-expanded="dropdownOpen"
    >
      <span>{{ selectedLanguageName }}</span>
      <svg
        class="w-5 h-5 ml-2 transition-transform duration-200"
        :class="{ 'rotate-180': dropdownOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
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
          v-for="lang in languages"
          :key="lang.code"
          class="px-4 flex flex-row py-2 text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors duration-150 rounded-md mx-1 my-0.5"
          :class="{
            'bg-indigo-50 text-indigo-700 font-semibold': locale === lang.code,
          }"
          @click="handleSelectLanguage(lang.code)"
          role="option"
          :aria-selected="locale === lang.code"
        >
          {{ lang.title }}
          <span v-if="locale === lang.code" class="ml-2 text-indigo-700">
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
const dropdownOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const languages = [
  { code: 'en', title: 'English' },
  { code: 'km', title: 'Khmer' },
]

const { locale, setLocale } = useI18n()
const config = useRuntimeConfig()

const selectedLanguageName = computed(() => {
  const lang = languages.find((lang) => lang.code === locale.value)
  return lang?.title || ''
})

// Optional: API call to persist selected language
const { execute: executeUpdateLanguage } = await useApi(
  () =>
    API.AUTH.UPDATE_MODE.replace(':type', config.public.type)
      .replace(':version', config.public.version)
      .replace(':lang', locale.value),
  {
    method: 'POST',
    watch: false,
    body: { mode: locale },
    immediate: false,
  }
)

const handleSelectLanguage = async (langCode: string) => {
  setLocale(langCode)
  dropdownOpen.value = false
  await executeUpdateLanguage()
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
