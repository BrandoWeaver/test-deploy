<template>
  <div class="w-full sm:py-[64px] py-[32px]">
    <div class="md:block hidden">
      <DestopQa :top-title="topTitle" :tabs="tabs" />
    </div>
    <div class="md:hidden block">
      <MobileQa :top-title="topTitle" :tabs="tabs" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MobileQa from './MobileQa.vue'
import DestopQa from './DestopQa.vue'

interface Question {
  text: string
  answer?: string
  open: boolean
  isList?: string[]
  answerHtml?: {
    title: string
    desArr: {
      des: string
      subDes: string
    }[]
  }[]
}

interface Tab {
  title: string
  questions: Question[]
}

defineProps<{
  topTitle: string
  tabs: Tab[]
}>()
</script>
