<template>
  <div class="max-w-[1440px] mx-auto p-4 lgBig2:p-0">
    <div class="bg-white lg:p-8 xl:p-0 lg:py-8">
      <!-- Breadcrumb -->
      <div class="text-sm text-gray-600 my-8">
        <nav>
          <ol class="list-none flex space-x-2 text-[9px] smx:text-[11px]">
            <li><a href="#" class="hover:underline">Home</a></li>
            <li>/</li>
            <li><a href="#" class="hover:underline">All Products</a></li>
            <li>/</li>
            <li><a href="#" class="hover:underline">Graphics</a></li>
            <li>/</li>
            <li><a href="#" class="hover:underline">Icons</a></li>
            <li>/</li>
            <li class="font-semibold text-gray-800">Black Outline</li>
          </ol>
        </nav>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="text-[13px] md:text-[15px]">
          <h1
            class="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-bold text-gray-800 mb-4"
          >
            Discover the Elegance of Black Outline Icons
          </h1>
          <p
            class="text-[14px] md:text-[15px] lg:text-[17px] text-gray-700 mb-6"
          >
            A universe of icons to bring your ideas to life, with a variety of
            styles to suit all your needs.
          </p>
          <p class="text-gray-700 mb-4">
            The "Black Outline" style is crafted to offer clarity and a refined
            simplicity to any design project...
          </p>
        </div>

        <div class="flex flex-col smx:flex-row md:flex-col lg:flex-row gap-4">
          <div
            class="lg:w-1/2 w-full min-h-[320px] h-full bg-gray-100 rounded-lg flex items-center justify-center"
          >
            <span class="text-gray-400 text-sm">[Placeholder Image]</span>
          </div>
          <div
            class="lg:w-1/2 w-full min-h-[320px] h-full bg-gray-100 rounded-lg flex items-center justify-center"
          >
            <span class="text-gray-400 text-sm">[Placeholder Image]</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabs Section -->
    <div class="lg:p-6 xl:p-0 py-6 my-8">
      <h1 class="text-[17px] md:text-[20px] font-bold mb-4">
        Explore the collections
      </h1>

      <div class="flex space-x-6 pb-2 mb-6">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="selectTab(tab.id)"
          :class="[
            'text-sm font-medium pb-2 border-b-2 transition-colors duration-200',
            selectedTab === tab.id
              ? 'text-blue-600 border-blue-600'
              : 'text-gray-500 border-transparent hover:text-blue-600',
          ]"
        >
          {{ tab.name }}
        </button>
      </div>

      <div v-if="selectedTab === 'static'" class="p-4 bg-gray-100 rounded-lg">
        <p class="text-gray-700">
          Static icons are great for web and print materials.
        </p>
      </div>
      <div v-if="selectedTab === 'animated'" class="p-4 bg-gray-100 rounded-lg">
        <p class="text-gray-700">
          Animated icons bring motion to digital interfaces.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Define tabs
const tabs = ref([
  { id: 'static', name: 'Static Icons' },
  { id: 'animated', name: 'Animated Icons' },
])

// Reactive state for selected tab
const selectedTab = ref('static')

// Method to change selected tab
const selectTab = (tabId) => {
  selectedTab.value = tabId
}
</script>

<style scoped>
/* Scoped styles (if needed) */
</style>
