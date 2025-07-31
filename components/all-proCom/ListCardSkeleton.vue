<template>
  <div class="max-w-[720px] w-full overflow-x-scroll hide-scrollbar">
    <div class="flex gap-4 min-w-max animate-pulse">
      <div
        v-for="n in 3"
        :key="n"
        class="min-w-[280px] max-w-[280px] flex-shrink-0 bg-white border border-gray-200 rounded-lg p-4"
      >
        <div class="flex justify-between items-center mb-3">
          <div class="w-12 h-8 bg-gray-200 rounded"></div>
          <div class="w-20 h-4 bg-gray-200 rounded"></div>
          <div
            class="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center"
          >
            <div class="w-3.5 h-3.5 rounded-full bg-gray-200"></div>
          </div>
        </div>
        <div class="h-4 w-40 bg-gray-200 rounded"></div>
      </div>
    </div>
  </div>
</template>
