<template>
  <div
    class="2xl:px-6 w-[1440px] xl-max:w-full lg-max:w-full mx-auto px-6 md-max:px-[16px]"
  >
    <p
      class="text-[#000] xl:text-[30px] xl-max:text-[30px] lg-max:text-[24px] md-max:text-[20px] sm-max:text-[18px] font-lexend font-medium"
    >
      Discover the job description
    </p>

    <div class="pt-[24px] flex flex-col gap-[6px]">
      <div v-for="(item, i) in discoverJob">
        <p
          style="
            color: #005b52;

            /* BODY 1 */
            font-style: normal;
            font-weight: 350;
            line-height: 180%; /* 25.2px */
          "
          class="lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px]"
        >
          {{ item.key }}: <span>{{ item.value }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const discoverJob = ref([
  {
    key: 'Location',
    value: 'Head office in Phnom Penh',
  },
  {
    key: 'Type of contract',
    value: 'Permanent',
  },
  {
    key: 'Location',
    value: '$12,480 gross per year with 13th month bonus',
  },
  {
    key: 'Reports to',
    value: 'Chief Operating Officer (COO)',
  },
])
</script>

<style scoped></style>
