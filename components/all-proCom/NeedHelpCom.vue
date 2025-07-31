<template>
  <div class="bg-[#F2F2F2] w-full">
    <div
      class="w-[1440px] xl-max:w-full pt-[16px] md-max:pt-[6px] lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px]"
    >
      <div
        class="py-4 sm:py-10 flex-col justify-start items-start gap-4 inline-flex"
      >
        <div class="flex-col justify-start items-start gap-2.5 flex">
          <div
            class="heading leading-relaxed space-y-2 text-[#000] xl:text-[30px] xl-max:text-[30px] lg-max:text-[24px] md-max:text-[20px] sm-max:text-[18px] font-lexend font-medium"
          >
            {{ topTitle }}
          </div>
          <div
            v-if="des"
            class="text-[13px] sm:text-sm md:text-[15px] leading-[23px] sm:leading-6 md:leading-[27px] lg:leading-[30px] font-[300] pt-3"
          >
            {{ des }}
          </div>
          <div
            v-else
            v-for="(item, i) in listPa"
            :key="i"
            class="text-[13px] sm:text-sm md:text-[15px] leading-[23px] sm:leading-6 md:leading-[27px] lg:leading-[30px] font-[300] flex flex-col gap-[10px]"
          >
            {{ item.para }}
          </div>
        </div>
        <div class="justify-start items-center gap-2.5 inline-flex">
          <div
            class="ExploreOurForum text-[#005b52] text-[14px] font-bold font-['Noto Sans JP'] leading-[30.60px]"
          >
            {{ link }}
          </div>
          <div class="flex justify-center items-center">
            <Forward :color="'#005B52'" :rotate="refRotate" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { rotate } from 'three/src/nodes/TSL.js'
import Forward from '~/icons/help/forward.vue'

const props = defineProps<{
  topTitle: string
  des?: string
  link: string
  listPa?: { para: string }[]
  rotate?: number
}>()

const refRotate = ref(props.rotate || 360)
</script>
