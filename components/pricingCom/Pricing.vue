<template>
  <div
    class="2xl:px-6 w-[1440px] xl-max:w-full lg-max:w-full mx-auto px-6 md-max:px-[16px]"
  >
    <div class="flex flex-col gap-[24px]">
      <h1
        style="
          color: #000;
          font-style: normal;
          font-weight: 700;
          line-height: 62.4px; /* 120% */
        "
        class="xl:text-[52px] lg:text-[40px] md:text-[40px] sm:text-[26px] text-[22px] font-lexend"
      >
        Plan &
        <span
          style="
            color: #000;
            font-style: normal;
            font-weight: 400;
            line-height: 62.4px;
          "
          >Pricing</span
        >
      </h1>
      <p
        style="
          color: #000;

          /* H2 */
          font-style: normal;
          font-weight: 400;
          line-height: 170%; /* 37.4px */
        "
        class="lg:text-[22px] md:text-[20px] sm:text-[18px] text-[17px] font-lexend"
      >
        Unlock endless possibilities with flexible options tailored to fit your
        creative journey
      </p>
    </div>
    <div class="pt-[32px]">
      <PlanCom />
    </div>
  </div>
</template>

<script setup lang="ts">
import Tick from '../../icons/Tick.vue'
import PlanCom from '../all-proCom/PlanCom.vue'
</script>

<style scoped></style>
