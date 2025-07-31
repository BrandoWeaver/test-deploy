<template>
  <div
    class="flex flex-col items-center justify-center w-full bg-cover bg-center overflow-hidden"
  >
    <Search />
    <AllIcons />
    <AdsDiscoverFull />
    <ChoosePlan />

    <Monetize_Program />
    <Monetize_content />
    <FreelanceServices />
    <Quick_Answers />
    <Cta_SUB />
    <Sub_Re />
  </div>
</template>

<script setup lang="ts">
import Monetize_Program from '~/components/body_block/Monetize_Program.vue'
import Monetize_content from '~/components/body_block/Monetize_content.vue'
import FreelanceServices from '~/components/body_block/FreelanceServices.vue'
import Quick_Answers from '~/components/body_block/Quick_Answers.vue'
import Cta_SUB from '~/components/body_block/Cta_SUB.vue'
import Sub_Re from '~/components/body_block/Sub_Re.vue'
import AllIcons from '@/components/body_block/AllIcons.vue'
import Search from '@/components/all-proCom/Search.vue'
import AdsDiscoverFull from '@/components/body_block/AdsDiscoverFull.vue'
import ChoosePlan from '@/components/all-proCom/ChoosePlan.vue'
</script>

<style scoped></style>
