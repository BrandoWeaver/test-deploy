<template>
  <div
    class="flex flex-col gap-[14px] md:gap-0 md:flex-row items-center justify-center md:space-x-2"
  >
    <!-- Back Button -->
    <div class="flex items-center gap-[6px]">
      <button
        class="px-3 py-2 bg-[#fff] border text-xs text-[#00000080] rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
      >
        «
      </button>

      <!-- Back -->
      <button
        class="px-3 py-2 border rounded-md hover:bg-gray-100 text-xs bg-[#fff]"
        @click="changePage(currentPage - 1)"
      >
        Back
      </button>

      <!-- Page Buttons -->
      <div class="hidden md:flex space-x-1">
        <button
          v-for="(page, index) in pageRange"
          :key="page"
          class="px-3 py-2 border bg-[#fff] rounded-md text-xs hover:bg-[#EFF1D9] hover:text-black"
          :class="{
            'bg-black text-white': page === currentPage,

            // 'bg-[#EFF1D9] border border-[#EEE]': page === currentPage + 1,
          }"
          @click="changePage(page)"
        >
          {{ page }}
        </button>

        <!-- Ellipsis if needed -->
        <div
          class="px-3 py-2 flex items-center border rounded-md bg-white hover:bg-[#EFF1D9]"
        >
          <MoreIcon />
        </div>
        <button
          class="px-3 py-2 border rounded-md bg-white text-xs hover:bg-[#EFF1D9]"
          @click="changePage(currentPage)"
        >
          {{ totalPages }}
        </button>
      </div>

      <!-- Next -->
      <button
        class="px-3 py-2 bg-[#fff] border rounded-md hover:bg-gray-100 text-xs"
        @click="changePage(currentPage + 1)"
      >
        Next
      </button>

      <!-- Next Button -->
      <button
        class="px-3 py-2 border bg-[#fff] text-xs text-[#00000080] rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="currentPage === totalPages"
        @click="changePage(currentPage + 1)"
      >
        »
      </button>
    </div>

    <!-- Page Input -->
    <div class="flex items-center space-x-2">
      <span class="text-xs font-noto font-normal text-[#00000080]">Page</span>
      <div
        class="rounded-[4px] bg-white inline-flex items-center border border-[#EEE] px-[10px] py-2 focus-within:border-[#eff1da] focus-within:ring-1 focus-within:ring-[#eff1da]"
      >
        <input
          v-model="inputPage"
          class="text-xs font-bold text-gray-800 w-10 text-center outline-none border-none focus:ring-0 focus:border-none"
          @keydown.enter="changePage(inputPage)"
        />

        <button
          @click="changePage(currentPage - 1)"
          @mouseenter="isPrevHovered = true"
          @mouseleave="isPrevHovered = false"
        >
          <BackwardIcon :color="isPrevHovered ? '#000000' : '#7a7a7a'" />
        </button>

        <button
          @click="changePage(currentPage + 1)"
          @mouseenter="isNextHovered = true"
          @mouseleave="isNextHovered = false"
        >
          <ForwardIcon :color="isNextHovered ? '#000000' : '#7a7a7a'" />
        </button>
      </div>
      <button
        class="px-3 py-2 bg-black text-white rounded-md text-xs"
        @click="goToPage"
      >
        Go
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import BackwardIcon from '~/icons/forum_icons/BackwardIcon.vue'
import ForwardIcon from '~/icons/forum_icons/ForwardIcon.vue'
import MoreIcon from '~/icons/forum_icons/MoreIcon.vue'
const isPrevHovered = ref(false)
const isNextHovered = ref(false)
const props = defineProps({
  totalPages: {
    type: Number,
    default: 25,
  },
})

const currentPage = ref(2)
const inputPage = ref(2)

const pageRange = computed(() => {
  const range = []
  const start = Math.max(1, currentPage.value - 1)
  const end = Math.min(props.totalPages, currentPage.value + 1)

  for (let i = start; i <= end; i++) {
    range.push(i)
  }

  return range
})

const showEllipsis = computed(() => {
  return props.totalPages > 5 && currentPage.value < props.totalPages - 2
})

const changePage = (page) => {
  if (page >= 1 && page <= props.totalPages) {
    currentPage.value = page
    inputPage.value = page
  }
}
const goToLastPage = (page) => {
  currentPage.value = 25
}
const validateAndChangePage = () => {
  if (inputPage.value >= 1 && inputPage.value <= props.totalPages) {
    currentPage.value = inputPage.value
  } else if (inputPage.value > props.totalPages) {
    inputPage.value = props.totalPages
    currentPage.value = props.totalPages
  } else if (inputPage.value < 1) {
    inputPage.value = 1
    currentPage.value = 1
  }
}

const goToPage = () => {
  validateAndChangePage()
}
</script>
