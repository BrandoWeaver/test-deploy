<template>
  <div
    class="2xl:px-6 w-[1440px] xl-max:w-full lg-max:w-full mx-auto px-6 md-max:px-[16px]"
  >
    <div class="flex flex-col gap-[14px] py-[44px]">
      <h1
        style="
          color: #000;
          /* H3 */
          font-style: normal;
          font-weight: 700;
          line-height: 180%; /* 36px */
        "
        class="lg:text-[20px] md:text-[18px] sm:text-[20px] text-[16px] font-lexend"
      >
        How Does the Affiliate Program Work?
      </h1>
      <p
        style="
          color: #000;
          /* SUBTILE */
          font-style: normal;
          font-weight: 350;
          line-height: 180%;
        "
        class="lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px]"
      >
        Joining the Thortok Affiliate Program is easy and rewarding. Whether
        you're a creator, a content enthusiast, or simply someone who loves our
        platform, you can earn by helping others discover the unique resources
        Thortok offers. Here’s a step-by-step guide to getting started and
        making the most of the program."
      </p>
    </div>

    <StepsCom />
  </div>
</template>

<script setup lang="ts">
import StepsCom from '~/components/affiliateCom/StepsCom.vue'
</script>

<style scoped></style>
