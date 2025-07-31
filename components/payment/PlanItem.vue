<template>
  <div class="relative bg-white p-4 rounded-2xl">
    <!-- Content -->
    <div
      class="flex sm:flex-row flex-col items-start sm:items-center gap-4 w-full"
    >
      <div
        class="bg-[#00000033] rounded-[6px] text-white max-w-[175px] w-full flex justify-center items-center h-[117px]"
      >
        <h2 class="font-lexend font-normal text-[22px]">
          {{ item?.id === 2 ? 'Monthly Plan' : 'Yearly Plan' }}
        </h2>
      </div>
      <div class="flex flex-col gap-1">
        <div
          class="px-[14px] py-1 font-noto font-bold bg-[#DBF226] rounded-md"
          v-if="item?.id === 3 || isFree"
        >
          2 months free
        </div>
        <div>
          <p class="text-[14px] font-noto font-bold">{{ item?.name }}</p>
          <!-- <p class="text-[11px] font-noto">One Device</p> -->
        </div>
        <div class="flex items-center gap-2 mt-2">
          <span class="text-lg font-bold text-[#000000]">
            ${{ item?.price }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NuxtImg } from '#components'

defineProps<{
  item?: ISUBSCRIPTION.DataSubscriptionList
  isFree?: boolean
}>()

defineEmits(['remove'])
</script>
