<template>
  <div
    class="flex items-center gap-2 p-2 px-[10px] mt-4 rounded-md bg-[#F2F2F2] w-full md-max:gap-[4px] md-max:px-2 md-max:p-2"
  >
    <!-- Custom Dropdown -->
    <div class="relative">
      <!-- Dropdown Button -->
      <button
        id="dropdownButton"
        @click="toggleDropdown"
        class="text-gray-600 focus:outline-none font-medium text-sm px-[10px] py-2 flex items-center"
        type="button"
      >
        <img
          src="@/assets/logo/fi-rr-apps.svg"
          alt="App Icon"
          class="h-[14px] w-[14px] mr-[10px] md-max:mr-[6px] md-max:h-[12px] md-max:w-[12px]"
        />
        <span
          class="hidden md:inline font-noto text-[14px] leading-[25.2px] font-normal"
          >All Collections</span
        >
        <svg
          class="w-[10px] h-[10px] ml-[10px] md-max:ml-[6px] text-black"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <!-- DropdownSearch Component -->
      <DropdownSearch v-show="dropdownOpen" />
    </div>

    <!-- Divider -->
    <span class="mr-[10px] border-l h-5"></span>

    <!-- Search Input -->
    <input
      v-model="searchQuery"
      type="text"
      placeholder='Search for anything, try with "Lifestyle"...'
      class="flex-1 placeholder-gray-600/60 bg-transparent text-gray-600/60 font-noto text-[13px] leading-[23.4px] outline-none md-max:text-[10px] md-max:leading-[18px] sm-max:text-[9px] sm-max:leading-[16.2px]"
    />

    <!-- Close Button -->
    <button
      v-if="searchQuery"
      class="text-gray-500 mr-[24px] md-max:mr-[8px]"
      @click="clearSearchInput"
    >
      <img
        src="@/assets/logo/fi-rr-cross.svg"
        alt="Close"
        class="h-[14px] w-[14px] md-max:h-[12px] md-max:w-[12px]"
      />
    </button>

    <!-- Search Button -->
    <button
      class="w-[71px] h-[35px] md-max:w-[64px] md-max:h-[36px] sm-max:w-[24px] sm-max:h-[24px] px-[14px] py-2 sm-max:p-[6px] rounded-md bg-[#005B52] hover:bg-black text-white font-noto text-[13px] font-medium flex items-center gap-2 md-max:px-3 md-max:py-1 md-max:text-[12px]"
    >
      <span class="sm-max:hidden">Search</span>

      <!-- Search Icon (hidden for md and above) -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        class="sm:hidden"
      >
        <g clip-path="url(#clip0_2537_127811)">
          <path
            d="M11.8534 11.1469L8.86889 8.16238C9.6822 7.16768 10.0821 5.89843 9.98581 4.61716C9.88955 3.3359 9.3045 2.14064 8.35168 1.27864C7.39887 0.416635 6.15119 -0.0461746 4.86671 -0.0140587C3.58224 0.0180572 2.35924 0.542641 1.4507 1.45119C0.542153 2.35973 0.0175689 3.58273 -0.014547 4.8672C-0.0466629 6.15168 0.416146 7.39936 1.27815 8.35217C2.14016 9.30499 3.33541 9.89003 4.61667 9.9863C5.89794 10.0826 7.16719 9.68269 8.16189 8.86938L11.1464 11.8539C11.2407 11.945 11.367 11.9954 11.4981 11.9942C11.6292 11.9931 11.7546 11.9405 11.8473 11.8478C11.94 11.7551 11.9926 11.6297 11.9937 11.4986C11.9949 11.3675 11.9445 11.2412 11.8534 11.1469ZM4.99989 9.00038C4.20877 9.00038 3.43541 8.76578 2.77761 8.32626C2.11981 7.88673 1.60712 7.26202 1.30437 6.53111C1.00162 5.80021 0.922409 4.99594 1.07675 4.22002C1.23109 3.44409 1.61205 2.73136 2.17146 2.17195C2.73087 1.61254 3.44361 1.23158 4.21953 1.07724C4.99545 0.922897 5.79972 1.00211 6.53063 1.30486C7.26153 1.60761 7.88624 2.1203 8.32577 2.7781C8.7653 3.4359 8.99989 4.20925 8.99989 5.00038C8.9987 6.06088 8.57689 7.0776 7.827 7.82749C7.07712 8.57738 6.06039 8.99919 4.99989 9.00038Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_2537_127811">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DropdownSearch from '@/components/header_block/DropdownSearch.vue'
const dropdownOpen = ref(false)
const searchQuery = ref('') // Bind to the input value

// Toggle dropdown visibility
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

// Clear the search input
const clearSearchInput = () => {
  searchQuery.value = ''
}

// Close the search bar
const closeSearchBar = () => {
  dropdownOpen.value = false
}
</script>
