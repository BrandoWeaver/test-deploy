<template>
  <div>
    <div class="2xl:max-w-7xl   relative w-full mx-auto pt-14 pl-6 sm:px-6">
      <div class="flex items-center  justify-between gap-2 flex-wrap">
        <div class="flex items-center gap-2">
          <SeasonalCollection />
          <p class="sm:text-[17px] text-[15px] whitespace-nowrap heading font-[700]">Discover Seasonal Collections</p>
        </div>
        <div class="gap-2 mt-[60px] sm:mt-16 w-full flex items-center justify-between   absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40   sm:hidden">
          <div
            @click="goPrev"
            class="w-8 flex items-center justify-center h-8 rounded-full cursor-pointer bg-[#EFF1D9]"
          >
            <CarouselLeftArrow />
          </div>
          <div
            @click="goNext"
            class="w-8 flex items-center justify-center h-8   rounded-full cursor-pointer bg-[#EFF1D9]"
          >
            <CarouselRightArrow />
          </div>
        </div>
        <div class="sm:flex hidden items-center gap-2">
          <div
            @click="goPrev"
            class="bg-[#EFF1D9] cursor-pointer flex items-center justify-center size-[34px] rounded-full shadow-[0px_4px_16px_0px_#0000001A]"
          >
            <CarouselLeftArrow />
          </div>
          <div
            @click="goNext"
            class="bg-[#EFF1D9] cursor-pointer flex items-center justify-center size-[34px] rounded-full shadow-[0px_4px_16px_0px_#0000001A]"
          >
            <CarouselRightArrow />
          </div>
        </div>
      </div>

      <Splide
        class="mt-6"
        ref="splideRef"
        :options="{
          type: 'loop',
          gap: '1rem',
          drag:false,
          snap: true,
          perMove:1,
          perPage: 5, // Show one slide per view
          pagination: false, // Disable default pagination
          arrows: false, // Disable default arrows (we'll use custom)
          breakpoints: {
              1024: { // Tablet (max-width: 1024px)
                perPage: 5, // Show 5 slides
              },
              // 768: { // Mobile (max-width: 768px)
              //   perPage: 5, // Show 5 slide
              // },
              767: { // Mobile (max-width: 630px)
                perPage: 3.5, // Show 2 slide
              },
              424: { // Mobile (max-width: 630px)
                perPage: 2.5, // Show 2 slide
              },
              319: { // Mobile (max-width: 630px)
                perPage: 2, // Show 2 slide
              },
            }
        }"
      >
        <!-- Loop through the cards array -->
        <SplideSlide
          v-for="(card, index) in cards"
          :key="index"
          :style="{ backgroundImage: `url(${card.image})` }"
          class="min-h-[65px] hover:shadow-[0px_4px_10px_0px_#DBF226] overflow-hidden w-[121px] sm:w-[134px] lg:w-[185px] xl:w-[273px] text-sm font-[700] bg-cover text-white rounded-[6px] flex items-center justify-center relative"
        >
          <div
            class="bg-[#00000099] z-[2] w-full h-full absolute top-0 left-0"
          ></div>
          <p class="relative cursor-context-menu z-[4]">{{ card.date }}</p>
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<script setup>
import SeasonalCollection from "../icons/SeaseonalCollection";
import CarouselLeftArrow from "../icons/CarouselLeftArrow";
import CarouselRightArrow from "../icons/CarouselRightArrow";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { ref } from "vue";

const splideRef = ref(null); // Reference to Splide instance

const cards = ref([
  { image: '/img/img1.png', date: 'January 1' },
  { image: '/img/img2.png', date: 'January 7' },
  { image: '/img/img3.png', date: 'January 5' },
  { image: '/img/img4.png', date: 'January 13' },
  { image: '/img/img4.png', date: 'January 13' },
  { image: '/img/img4.png', date: 'January 13' },
  { image: '/img/img4.png', date: 'January 13' },
  { image: '/img/hero_image.png', date: 'January 15' }
]);

const goNext = () => {
  const splideInstance = splideRef.value?.splide;
  if (splideInstance) splideInstance.go(">"); // Move to next slide
};

const goPrev = () => {
  const splideInstance = splideRef.value?.splide;
  if (splideInstance) splideInstance.go("<"); // Move to previous slide
};
</script>

<style scoped></style>
