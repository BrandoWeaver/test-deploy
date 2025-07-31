<template>
  <!-- Added a container with padding for the search bar itself -->
  <div class="rounded-md border border-gray-100 h-[56px] pr-[10px] bg-white">
    <form
      @submit.prevent="handleSearch"
      class="relative flex items-center w-full h-full px-[10px] py-[10px]"
    >
      <div
        class="w-full h-full text-gray-700 border-none focus:border-none focus:ring-0 focus:outline-none rounded-md px-2"
      >
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search for solution ..."
          class="w-full h-full bg-transparent outline-none placeholder-[#787878] placeholder:font-light placeholder-font-noto placeholder:text-[14px]"
        />
      </div>
      <button
        type="button"
        @click="clearSearch"
        class="absolute right-[88px] p-2 text-gray-400 hover:text-gray-600"
        :class="{ hidden: searchQuery === '' }"
      >
        <Remove />
      </button>

      <button
        type="submit"
        class="absolute font-noto font-medium right-0 px-[14px] py-2 text-[13px] text-white bg-[#1B4D3E] rounded-md hover:bg-[#163c30] focus:outline-none focus:ring-2 focus:ring-[#1B4D3E] focus:ring-offset-2"
      >
        Search
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Remove from '../../../icons/forum_icons/Remove.vue'
const searchQuery = ref('')

const handleSearch = () => {
  // Handle search logic here
  console.log('Searching for:', searchQuery.value)
}

const clearSearch = () => {
  searchQuery.value = ''
}
</script>
