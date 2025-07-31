<template>
  <div class="bg-[#EFF1D9] p-6 flex flex-col gap-1 rounded-[10px] w-full">
    <div class="flex items-center gap-1">
      <div
        class="flex items-center justify-center max-w-[22px] max-h-[22px] bg-[#DBF226] rounded-full p-1"
      >
        <InfoIcon />
      </div>
      <div>
        <p class="text-[11px] text-black font-noto font-medium">
          Stay respectful and constructive.
        </p>
      </div>
    </div>
    <div class="text-[11px]">
      <p class="text-[#000] mt-1 font-noto font-light">
        Your participation in the forum is subject to our community guidelines.
        Visit our
        <NuxtLink to="/forum-policy" class="text-[#000] underline"
          >Forum Policy</NuxtLink
        >
        to learn more about expected behavior and terms of use.
      </p>
    </div>
  </div>
</template>

<script setup>
import InfoIcon from '../../../icons/forum_icons/info.vue'
</script>
