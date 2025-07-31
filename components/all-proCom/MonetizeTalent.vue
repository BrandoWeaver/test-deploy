<template>
  <div class="">
    <div class="py-[11px] bg-[#DBF226]">
      <marquee behavior="scroll" class="" direction="left">
        <div
          class="font-[700] text-[12px] sm:text-[14px] md:text-[17px] inline-flex gap-8 items-center whitespace-nowrap"
        >
          Turn your creativity into income: share, sell, or freelance
          <div class="sm:w-6 w-4 h-[2px] shrink-0 bg-[#374957]"></div>
          Earn from your talent: share, sell, or offer services
          <div class="sm:w-6 w-4 h-[2px] shrink-0 bg-[#374957]"></div>
          Unlock earnings: share, sell, or freelance your skills
          <div class="sm:w-6 w-4 h-[2px] shrink-0 bg-[#374957]"></div>
          Empower your creativity: share, sell, or freelance today
          <div class="sm:w-6 w-4 h-[2px] shrink-0 bg-[#374957]"></div>
          Monetize your passion: share, sell, or freelance with ease
          <div class="sm:w-6 w-4 h-[2px] shrink-0 bg-[#374957]"></div>
        </div>
      </marquee>
    </div>
    <div class="bg-black text-white">
      <div
        class="grid lg:grid-cols-2 gap-5 px-6 lg:px-[47px] 2xl:px-0 py-[64px] 2xl:max-w-7xl mx-auto"
      >
        <div class="">
          <h1
            class="font-[700] heading text-[22px] sm:text-[26px] md:text-[30px] lg:text-[52px]"
          >
            Monetize Your Talent with Thortok
          </h1>
          <p class="font-[300] py-5 text-[17px]">
            Our platform offers a variety of monetization programs that allow
            you to turn your creative work into income. Join today and explore
            how you can benefit from our unique opportunities.
          </p>
          <button
            class="px-[32px] leading-none text-black rounded-[4px] py-[14px] bg-[#DBF226] font-[400] text-[14px] md:text-[17px] flex items-center gap-2"
          >
            Learn more
            <RightLongArrow />
          </button>
        </div>
        <div class="grid sm:grid-cols-2 text-black 2xl:gap-4 gap-3">
          <div
            class="bg-white relative rounded-[6px] border-2 border-[#DBF226] rounded-[10px] overflow-hidden p-6 shadow-[0px_0px_0px_1px_#A6A6A64D_inset]"
          >
            <div
              class="text-[#f7f8ec] text-[28vw] md:text-[14vw] leading-none 2xl:text-[6vw] font-bold absolute -bottom-3.5 -right-4"
            >
              01
            </div>
            <div
              class="h-full w-full flex flex-col justify-between relative z-[4]"
            >
              <div>
                <ContentSharing />
                <h1
                  class="md:text-[22px] text-[17px] sm:text-[20px] py-4 font-[700]"
                >
                  Content Sharing <span class="font-[400]">Program</span>
                </h1>
                <p class="sm:text-sm text-[10px] font-[300]">
                  Upload your digital content and earn money each time it’s
                  downloaded by our users. The more downloads, the more you earn
                </p>
              </div>
              <p class="text-sm font-[300] mt-3">
                Turn your creativity into profit effortlessly.
              </p>
            </div>
          </div>
          <div
            class="bg-white relative rounded-[6px] border-2 border-[#DBF226] rounded-[10px] overflow-hidden p-6 shadow-[0px_0px_0px_1px_#A6A6A64D_inset]"
          >
            <div
              class="text-[#f7f8ec] text-[28vw] md:text-[14vw] leading-none 2xl:text-[6vw] font-bold absolute -bottom-3.5 -right-4"
            >
              02
            </div>

            <div
              class="h-full w-full flex flex-col justify-between relative z-[4]"
            >
              <div class="">
                <ContentSell />
                <h1
                  class="md:text-[22px] text-[17px] sm:text-[20px] py-4 font-[700]"
                >
                  Sell Content <span class="font-[400]">Program</span>
                </h1>
                <p class="sm:text-sm text-[10px] font-[300]">
                  Set your own price and sell your digital content directly to
                  our users. Each sale earns you revenue, with a small
                  commission deducted.
                </p>
              </div>
              <p class="text-sm font-[300] mt-3">
                The more you sell, the more you earn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ContentSell from '../icons/ContentSell'
import ContentSharing from '../icons/ContentSharing'
import RightLongArrow from '../icons/RightLongArrow'
</script>
