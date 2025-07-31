<template>
  <div class="pb-10 w-full">
    <div class="md:block hidden">
      <DesktopPolicyGuide />
    </div>
    <div class="md:hidden block">
      <MobilePolicyGuide />
    </div>
  </div>
</template>

<script setup>
import MobilePolicyGuide from './MobilePolicyGuide.vue'
import DesktopPolicyGuide from './DesktopPolicyGuide.vue'
</script>
