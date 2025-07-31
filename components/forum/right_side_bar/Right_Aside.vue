<template>
  <div class="flex flex-col gap-[14px] bg-[#EFF1D9] p-6 rounded-[10px]">
    <!-- Join the community -->
    <Greeting />
    <!-- Join the community Button -->
  </div>
  <!-- Post Info -->
  <div class="border border-[#E4E4E4] rounded-[10px] bg-white p-6">
    <PostInfo />
  </div>
  <!-- Board Leader -->
  <div class="border border-[#E4E4E4] rounded-[10px] bg-white p-6">
    <LeaderBoard />
  </div>
</template>
<script lang="ts" setup>
import Greeting from '~/components/forum/right_side_bar/Greeting.vue'
import PostInfo from '~/components/forum/right_side_bar/PostInfo.vue'
import LeaderBoard from '~/components/forum/right_side_bar/LeaderBoard.vue'
import Button from '~/components/forum/right_side_bar/ui/Button.vue'
</script>
