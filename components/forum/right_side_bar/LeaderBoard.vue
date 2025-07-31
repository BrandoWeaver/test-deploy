<template>
  <div class="flex flex-col gap-[18px]">
    <div class="flex items-center gap-[10px]">
      <h5 class="font-bold text-[#060606] font-noto">Leaderboard</h5>
      <InfoIcon />
    </div>
    <div>
      <Leaderboard />
    </div>
    <div><ListLeader /></div>
  </div>
</template>
<script lang="ts" setup>
import InfoIcon from '../../../icons/forum_icons/info.vue'
import Leaderboard from '../../../components/forum/right_side_bar/TabBar.vue'
import ListLeader from '../../../components/forum/right_side_bar/ListLeader.vue'
</script>
