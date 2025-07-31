<template>
  <div class="bg-[#F2F2F2] rounded-[10px] md:p-[32px] p-[16px]">
    <div class="flex flex-col gap-[14px]">
      <h1
        style="
          color: #000;
          font-style: normal;
          font-weight: 700;
          line-height: 180%;
        "
        class="xl:text-[20px] xl-max:text-[20px] lg-max:text-[20px] md-max:text-[20px] sm-max:text-[18px] font-medium text-[#000] font-lexend"
      >
        How It Works?
      </h1>
      <p
        style="
          color: #000;
          /* SUBTILE */
          font-style: normal;
          font-weight: 350;
          line-height: 180%;
        "
        class="lg:text-[17px] text-[15px]"
      >
        Monetizing your creative work on Thortok is straightforward and
        rewarding. Our Content Sharing Program is built to ensure that your
        artistic efforts are recognized, shared, and fairly compensated. By
        following a few simple steps, you can turn your creative assets into a
        steady source of income. From uploading your work to tracking downloads
        and receiving payments, each stage of the process is designed with
        transparency and ease of use in mind. Here’s how you can get started and
        maximize your earning potential on Thortok.
      </p>
    </div>

    <div class="pt-8">
      <StepsHowItWorks />
    </div>

    <EarningProtential />
  </div>
</template>

<script setup lang="ts">
import StepsHowItWorks from '~/components/monetizationCom/StepsHowItWorks.vue'
import EarningProtential from '~/components/monetizationCom/EarningProtential.vue'
</script>

<style scoped></style>
