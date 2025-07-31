<template>
  <div
    class="Pricing pt-3.5 flex-col justify-start w-full items-center gap-2.5 inline-flex"
  >
    <div
      class="NavPage py-4 flex-col justify-start items-start flex w-[1440px] xl-max:w-full pt-[48px] md-max:pt-[6px] lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px]"
    >
      <div class="px-4 justify-start items-center gap-2 inline-flex">
        <div
          class="Home text-center text-black/50 text-[11px] font-light font-['Noto Sans JP'] leading-tight"
        >
          Home
        </div>
        <div
          class="text-center text-black/50 text-[11px] font-light font-['Noto Sans JP'] leading-tight"
        >
          /
        </div>
        <div
          class="text-center text-black text-[11px] font-light font-['Noto Sans JP'] leading-tight"
        >
          Career
        </div>
      </div>
    </div>

    <div class="Rectangle157 relative w-full">
      <div
        class="flex-col justify-start items-center inline-flex relative w-full"
      >
        <img class="w-full relative" src="/img/careerhero.png" />

        <div
          class="sm:flex px-2 esm:hidden pb-[19.21px] flex-col justify-start items-start gap-4 mt-24 absolute bottom-[20%] xl:left-[15%] left-[1%] hidden"
        >
          <div class="w-full">
            <div
              class="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex"
            >
              <h1
                class="text-[#000000] xl:text-[40px] lg:text-[30px] md:text-[24px] text-[14px] font-bold lg:text-2xl md:leading-[68px]"
              >
                Join Our Creative Team
              </h1>
              <div
                class="text-[#231f20] xl:text-[30px] lg:text-[22px] md:text-[20px] text-[14px] font-normal md:leading-[54px] leading-[25px] md:max-w-[500px] max-w-[250px]"
              >
                Be part of a passionate team shaping the future of digital
                creativity.
              </div>
            </div>
            <div class="grow shrink basis-0"></div>
          </div>
          <div
            class="px-8 py-2 bg-[#231f20] rounded-md shadow justify-center items-center gap-1.5 inline-flex"
          >
            <button
              class="text-white cursor-pointer text-[17px] font-light font-['Noto Sans JP'] leading-[28.90px]"
            >
              Explore Careers
            </button>
          </div>
        </div>

        <div
          class="hidden esm:flex pb-[19.21px] flex-col justify-start items-start gap-4 absolute bottom-40 left-24 w-[1440px] mx-auto"
        >
          <div class="justify-start items-start inline-flex">
            <div
              class="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex"
            >
              <div class="text-[#231f20] text-3xl font-medium leading-[54px]">
                Join Our Creative Team
              </div>
              <div
                class="text-[#231f20] text-[22px] font-normal leading-[37.40px]"
              >
                Be part of a passionate team shaping the future of digital
                creativity.
              </div>
            </div>
            <div class="grow shrink basis-0"></div>
          </div>
          <div
            class="px-[60.02px] py-[14.40px] bg-[#231f20] rounded-md shadow justify-center items-center gap-1.5 inline-flex"
          >
            <button
              class="text-white cursor-pointer text-[17px] font-light font-['Noto Sans JP'] leading-[28.90px]"
            >
              Explore Careers
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Tick from '../icons/Tick.vue'
</script>
<style>
.career-hero {
  background-image: url('/img/bg-hero-career.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
