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

<script setup lang="ts">
import Mobile from './MobileFaqShort.vue'
import Desktop from './DesktopFaqShort.vue'
</script>
