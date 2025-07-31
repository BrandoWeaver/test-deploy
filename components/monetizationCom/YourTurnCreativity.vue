<template>
  <div
    class="w-[1440px] xl-max:w-full lg-max:w-full mx-auto pb-[64px] xl:px-[24px] xl-max:px-[24px] lg-max:px-[24px] md-max:px-[16px] sm-max:px-[16px] xl:pt-6 lg:pt-6 md:pt-6"
  >
    <div class="flex md:flex-row flex-col w-full gap-[48px]">
      <div class="flex flex-col gap-[24px] md:w-1/2 w-full">
        <h2
          class="xl:text-[30px] xl-max:text-[30px] lg-max:text-[24px] md-max:text-[20px] sm-max:text-[18px] font-medium text-[#000] font-lexend"
        >
          Turn Your Creativity into Earnings
        </h2>
        <div v-for="(item, i) in creativity" :key="i">
          <p
            style="
              color: #000;

              /* SUBTILE */
              /* font-size: var(--Font-Size-Subtile, 15px); */
              font-style: normal;
              font-weight: 350;
              line-height: 180%;
            "
            class="xl:text-[15px] xl-max:text-[15px] lg-max:text-[14px] md-max:text-[13px] sm-max:text-[12px] text-[#000] font-noto"
          >
            {{ item.para }}
          </p>
        </div>

        <h2
          style="
            color: #000;

            /* H4 */
            font-style: normal;
            font-weight: 400;
            line-height: 180%; /* 32.4px */
          "
          class="text-[18px]"
        >
          Together, let’s redefine how creative works are shared, appreciated,
          and monetized.
        </h2>
      </div>
      <!-- image -->
      <div
        class="flex lg:flex-row md:flex-col flex-row md:w-1/2 w-full md:gap-6 gap-[16px] relative"
      >
        <div
          class="px-[24px] py-[10px] bg-primary-light absolute right-0 lg:top-6 top-6"
        >
          <p
            style="
              color: #000;
              text-align: center;

              /* H5 */
              font-style: normal;
              font-weight: 700;
              line-height: 180%; /* 30.6px */
            "
            class="lg:text-[17px] md:text-[15px] sm:text-[14px] text-[13px]"
          >
            Monetize with your creativity
          </p>
        </div>
        <!-- Large screens -->
        <div class="h-full w-full hidden lg:flex flex-col justify-start">
          <img src="/img/MockupImgMonetization.png" class="w-auto h-[528px]" />
        </div>
        <div class="h-full w-full hidden lg:flex flex-col justify-end mt-10">
          <img src="/img/MockupImgMonetization.png" class="w-auto h-[528px]" />
        </div>

        <!-- Medium screens -->
        <div class="h-full w-full hidden md:flex lg:hidden flex-col">
          <img src="/img/MockupImgMonetization2.png" class="w-full h-full" />
        </div>
        <div class="h-full w-full hidden md:flex lg:hidden flex-col">
          <img src="/img/MockupImgMonetization2.png" class="w-full h-full" />
        </div>

        <!-- Small screens -->
        <div class="h-full w-full flex md:hidden flex-col">
          <img src="/img/MockupImgMonetization3.png" class="w-full h-full" />
        </div>
        <div class="h-full w-full flex md:hidden flex-col">
          <img src="/img/MockupImgMonetization3.png" class="w-full h-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const creativity = ref([
  {
    para: 'At Thortok, we believe that creativity deserves recognition, support, and rewards. We are a platform built by creators, for creators—connecting artists, designers, musicians, 3D modelers, illustrators, photographers, and more with a global audience passionate about creative excellence.',
  },
  {
    para: 'Our mission is simple: to provide a dynamic space where creative professionals can showcase, share, and monetize their work while receiving the recognition they deserve. We offer an expansive digital marketplace where creators can explore various monetization programs tailored to their specific fields, ensuring that every creative voice can be heard, seen, and rewarded.',
  },
  {
    para: 'Whether you craft stunning visual art, produce mesmerizing soundscapes, design digital assets, or create immersive 3D models, Thortok transforms your passion into a sustainable income stream. We value originality and cultural heritage, particularly within the Asian creative landscape, while welcoming diverse talents from all over the world.',
  },
  {
    para: 'By joining Thortok, you’re not only generating revenue but also becoming part of a global movement that celebrates creativity, preserves artistic heritage, and promotes collaborative innovation. We’re more than just a platform—we’re a community driven by a shared passion for creativity and artistic excellence.',
  },
])
</script>

<style scoped></style>
