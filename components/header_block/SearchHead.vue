<template>
  <!-- Main container with background and overlay -->
  <div class="relative w-full py-[70px]">
    <!-- Inner container with max width and centered content -->
    <NuxtImg
      :src="props.backgroundImage"
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover z-0"
      quality="50"
      format="webp"
      preload
    />
    <div
      class="absolute inset-0 z-0"
      :style="{ backgroundColor: props.overlayColor }"
    ></div>

    <div
      class="relative z-10 flex flex-col items-start w-[1440px] xl-max:w-full pt-[16px] md-max:pt-[6px] lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px]"
    >
      <!-- Title Section with "Create!" on a new line -->
      <div
        class="text-white font-lexend xl:text-[52px] lg:text-[40px] md:text-[30px] sm:text-[26px] text-[22px] font-extrabold text-start"
      >
        <slot name="title" />
      </div>

      <!-- Search Bar -->
      <div
        class="flex gap-3 w-full bg-white px-4 py-2 rounded-md shadow-lg items-center"
      >
        <!-- Collection Selector (Dropdown) with Custom SVG Icon -->
        <div class="flex items-center w-auto p-2">
          <!-- Custom SVG Icon -->
          <!-- <img
            src="@/assets/logo/fi-rr-apps.svg"
            alt="App Icon"
            width="14"
            height="14"
            class="mr-[10px]"
          /> -->
          <DropdownSearch :default-option="1" />
        </div>
        <span class="mr-[10px] border-l h-5"></span>
        <!-- Search Input -->
        <input
          type="text"
          aria-label="Search input"
          v-model="search"
          class="flex-1 text-sm placeholder-gray-600/60 text-ellipsis overflow-hidden bg-transparent text-gray-600/60 font-noto text-[1rem] font-normal leading-[1.5em] outline-none w-full"
          placeholder="Search for anything, try 'Lifestyle'..."
        />
        <!-- Clear Button -->
        <button
          aria-label="Clear search"
          class="text-gray-500 px-3"
          @click="clearSearch"
        >
          <img
            src="@/assets/logo/fi-rr-cross.svg"
            alt="Close"
            class="h-[14px] w-[14px]"
          />
        </button>

        <!-- Search Button with Icon -->
        <button
          aria-label="Execute search"
          class="flex items-center justify-center px-4 py-2 gap-2 rounded-md bg-[#005B52] text-white font-noto text-sm font-medium"
          @click="handleSearch(search)"
        >
          <svg
            class="sm:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <g clip-path="url(#clip0_206_39354)">
              <path
                d="M11.8539 11.1469L8.86938 8.16238C9.68269 7.16768 10.0826 5.89843 9.9863 4.61716C9.89003 3.3359 9.30499 2.14064 8.35217 1.27864C7.39936 0.416635 6.15168 -0.0461746 4.8672 -0.0140587C3.58273 0.0180572 2.35973 0.542641 1.45119 1.45119C0.542641 2.35973 0.0180572 3.58273 -0.0140587 4.8672C-0.0461746 6.15168 0.416635 7.39936 1.27864 8.35217C2.14064 9.30499 3.3359 9.89003 4.61716 9.9863C5.89843 10.0826 7.16768 9.68269 8.16238 8.86938L11.1469 11.8539C11.2412 11.945 11.3675 11.9954 11.4986 11.9942C11.6297 11.9931 11.7551 11.9405 11.8478 11.8478C11.9405 11.7551 11.9931 11.6297 11.9942 11.4986C11.9954 11.3675 11.945 11.2412 11.8539 11.1469ZM5.00038 9.00038C4.20925 9.00038 3.4359 8.76578 2.7781 8.32626C2.1203 7.88673 1.60761 7.26202 1.30486 6.53111C1.00211 5.80021 0.922897 4.99594 1.07724 4.22002C1.23158 3.44409 1.61254 2.73136 2.17195 2.17195C2.73136 1.61254 3.44409 1.23158 4.22002 1.07724C4.99594 0.922897 5.80021 1.00211 6.53111 1.30486C7.26202 1.60761 7.88673 2.1203 8.32626 2.7781C8.76578 3.4359 9.00038 4.20925 9.00038 5.00038C8.99919 6.06088 8.57738 7.0776 7.82749 7.82749C7.0776 8.57738 6.06088 8.99919 5.00038 9.00038Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_206_39354">
                <rect width="12" height="12" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span class="sm:flex hidden">Search</span>
        </button>
      </div>
      <div>
        <slot name="description" />
      </div>
      <div class="flex items-center flex-row gap-2" v-if="popularSearch">
        <div>
          <p class="text-[#fff] text-[13px]">Popular searches:</p>
        </div>
        <div
          v-for="pSearch in props.popularSearch"
          class="bg-[#FFFFFF33] px-[10px] py-1 rounded-[5px] text-[#ffff] text-[11px] hover:bg-[#EFF1D980]"
        >
            <NuxtLink :to="pSearch.link" >{{ pSearch.name }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DropdownSearch from './DropdownSearch.vue'

const props = withDefaults(
  defineProps<{
    backgroundImage: string
    overlayColor?: string
    popularSearch?: {link: string, name: string}[]
    defaultValue?: string
    options: { value: string; label: string }[]
  }>(),
  {
    overlayColor: 'rgba(0, 0, 0, 0.5)',
  }
)
const search = ref('')
const emit = defineEmits(['search', 'change'])

const handleSearch = (title: string) => {
  emit('search', title)
}
const clearSearch = () => {
  search.value = ''
}
const localValue = ref<string>(props.defaultValue || '')
const emitChange = () => {
  emit('change', localValue.value)
  console.log(localValue.value)
}
watch(
  () => props.defaultValue,
  (newValue) => {
    if (newValue && localValue.value !== newValue) {
      localValue.value = newValue
    }
  },
  { immediate: true }
)
</script>
