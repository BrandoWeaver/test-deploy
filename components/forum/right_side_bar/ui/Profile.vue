<template>
  <div class="relative inline-block">
    <div class="rounded-full bg-gray-300 w-[31px] h-[31px] overflow-hidden">
      <NuxtImg
        :src="image || ''"
        alt="Profile"
        class="object-cover w-full h-full"
      />
    </div>
    <div
      v-if="type === 'Pro'"
      class="absolute top-0 right-[-10px] bg-[#DBF226] border-2 border-[#F5F5F5] rounded-full text-[4px] w-4 h-4 flex items-center justify-center"
    >
      Pro
    </div>
    <div
      class="absolute bottom-0 right-0 w-2 h-2 rounded-full border border-[#F5F5F5] bg-[#78BF39]"
    ></div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  image: String,
  type: String,
})
</script>
