<template>
  <div
    class="w-[1440px] xl-max:w-full mx-auto gap-6 xl:px-[24px] xl-max:px-[24px] lg-max:px-[24px] md-max:px-[16px] sm-max:px-[16px] lg-max:w-full xl:py-[16px] xl-max:py-[16px] lg-max:py-[8px] md-max:py-[6px] sm-max:py-[6px]"
  >
    <nav
      class="text-[11px] lg-max:text-[10px] md-max:text-[9px] sm-max:text-[8px] text-black/50 font-light leading-[19px] lg-max:leading-[18px] md-max:leading-[16.2px] sm-max:leading-[14.4px] flex flex-wrap items-center xs-max:inline-flex"
    >
      <div v-for="(item, index) in items" :key="index">
        <NuxtLink :to="item.to" class="hover:text-black transition-colors">
          {{ item.label }}
        </NuxtLink>
        <span v-if="index < items.length - 1" class="mx-2 text-black/30"
          >/</span
        >
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
defineProps<{ items: { label: string; to: string }[]; pad?: boolean }>()
</script>

<style scoped></style>
