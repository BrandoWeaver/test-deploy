<template>
  <div class="w-full pb-10">
    <div class="md:block hidden">
      <Desktop />
    </div>
    <div class="md:hidden block">
      <Mobile />
    </div>
  </div>
</template>

<script setup>
import Mobile from './MobileFaq.vue'
import Desktop from './DesktopFaq.vue'
</script>
