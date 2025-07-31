<!-- components/CheckoutSkeleton.vue -->
<template>
  <div class="w-full bg-[#f2f2f2] rounded-2xl animate-pulse">
    <!-- heading -->
    <div class="h-6 w-48 rounded bg-gray-300/70 mb-6" />

    <!-- plan item card -->
    <div
      class="bg-gray-300/70 rounded-2xl space-y-4 min-h-[228px] h-full"
    ></div>

    <!-- payment details -->
    <div
      class="bg-gray-300/70 rounded-2xl space-y-4 min-h-[228px] h-full mt-4"
    ></div>

    <!-- buttons -->
    <div class="flex sm:flex-row flex-col gap-4 mt-6">
      <div class="h-11 w-full rounded-lg bg-gray-300/70" />
      <div class="h-11 w-full rounded-lg bg-gray-300/70" />
    </div>
  </div>
</template>
