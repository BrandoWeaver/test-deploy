<template>
  <div
    v-for="(val, index) in list_leaderboard"
    :key="index"
    :class="[
      'flex px-4 py-[10px] gap-4 items-center hover:cursor-pointer hover:bg-[#EFF1D9]/50 rounded-md',
      { 'rounded-md bg-[#EFF1D9]': selectedIndex === index },
    ]"
    @click="selectItem(index)"
  >
    <div class="max-w-[16px] text-[14px]">{{ index + 1 }}</div>
    <Profile :image="engsvg" :type="val.type" />
    <div class="truncate">
      <p
        class="text-ellipsis whitespace-nowrap overflow-hidden text-[14px] text-[#060606]"
      >
        {{ val.name }}
      </p>
    </div>
    <div class="flex justify-end flex-1">
      <p class="text-[14px] text-[#060606]">
        {{ val.count }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { list_leaderboard } from '../../../utils/forum'
import engsvg from '@/assets/logo/eng.svg'
import Profile from './ui/Profile.vue'

const selectedIndex = ref<number | null>(null)

const selectItem = (index: number) => {
  selectedIndex.value = index
}
</script>
