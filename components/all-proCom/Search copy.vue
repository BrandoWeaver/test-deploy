<template>
    <div class="relative py-4">
        <input v-model="searchQuery" type="text" placeholder="Search for anything, try with 'Lifestyle'..."
            class="bg-[#F2F2F2] placeholder:text-[#78787899] text-[13px] font-[350] outline-none h-[38px] sm:h-[60px] pl-16 sm:pl-24 md:pl-48 pr-20 sm:pr-36 text-black w-full rounded-[6px]">

        <!-- Collection Icon with Dropdown -->
        <div class="flex absolute top-1/2 -translate-y-1/2 left-2.5 sm:left-[22px] items-center cursor-pointer border-r pr-2.5 sm:pr-4 border-[#00000080] gap-1 sm:gap-2"
            @click="toggleDropdown">
            <Collection />
            <h3 class="text-[14px] md:flex hidden text-black font-[350]">
                All Collections
            </h3>
            <span class="text-black">
                <Arrow />
            </span>
        </div>

        <!-- Dropdown Menu -->
        <div v-if="isDropdownOpen"
            class="absolute left-[0%] w-[50%] md:left-28 transform md:-translate-x-1/2 bg-white shadow-lg rounded-[6px] mt-2 sm:w-[220px]">
            <ul class="text-black">
                <li class="px-4 py-2 hover:bg-[#f1f1f1]">Collection 1</li>
                <li class="px-4 py-2 hover:bg-[#f1f1f1]">Collection 2</li>
                <li class="px-4 py-2 hover:bg-[#f1f1f1]">Collection 3</li>
            </ul>
        </div>

        <!-- Cross Icon and Search Button -->
        <div class="flex items-center gap-3 sm:gap-6 absolute top-1/2 -translate-y-1/2 right-1.5 sm:right-3">
            <!-- Cross Icon -->
            <Cross v-if="searchQuery.length > 0" @click="clearSearch" />
            <button
                class="bg-[#005B52] hover:bg-opacity-90 py-2 px-2.5 sm:px-[14px] rounded-[4px] text-[13px] text-white font-medium">
                <span class="sm:hidden block">
                    <Search />
                </span>
                <p class="sm:flex hidden">Search</p>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Search from '../icons/Search.vue'
import Collection from '../icons/Collection.vue'
import Cross from '../icons/Cross.vue'
import Arrow from '../icons/DownArrow.vue'

// Search Query state
const searchQuery = ref('')

// Dropdown state
const isDropdownOpen = ref(false)

// Toggle dropdown visibility
const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value
}

// Clear the search input
const clearSearch = () => {
    searchQuery.value = ''
}
</script>

<style lang="scss" scoped></style>