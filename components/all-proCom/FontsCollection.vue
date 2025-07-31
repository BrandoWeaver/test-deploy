<template lang="html">
  <div class="pb-14 pt-6 Bigxl:max-w-[65vw] mx-auto relative pl-6 md:px-6">
    <div
      class=" 2xl:max-w-7xl  w-full mx-auto gap-2 flex-wrap"
    >
      <div class="items-center gap-2">
        <h1 class="lg:text-[20px] sm:text-[17px] md:text-[18px] leading-[28px] sm:leading-[30px] md:leading-[32px] heading lg:leading-[36px] font-[700]">Fonts collection</h1>
        <p class="lg:text-[17px] text-[13px] sm:text-sm md:text-[15px] leading-[23px] sm:leading-6 md:leading-[27px] lg:leading-[30px] font-[300] pt-3">
          Find the perfect fonts to give your designs a unique and professional
          touch.
        </p>

        <div class="flex items-end justify-between gap-2 w-full">
        <div class="flex flex-wrap mt-4 w-full gap-2">
          <!-- Loop through buttons array to render each button -->
          <button
            v-for="(button, index) in buttons"
            :key="index"
            class="bg-[#F5F5F5] hover:bg-[#DBF226] border border-[#EEEEEE] text-[#444444] rounded-[4px] sm:py-[5px] py-1 px-[7px] sm:px-[10px] md:py-1.5 md:px-3 text-[11px ] sm:text-[12px] md:text-sm lg:text-[15px] font-light"
          >
            {{ button.label }}
          </button>
        </div>
        <div class="md:flex hidden items-center gap-2">
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
      </div>
      
     
    </div>
    <div class="relative">
      <Splide
      class="mt-10"
      ref="splideRef"
      :options="{
        type: 'loop',
        perMove:1,
        drag:false,
        perPage:  12,
        pagination: false,
        arrows: false,
        gap: '0.5rem',
        breakpoints: {
          
          2500: {
            perPage: 11,
          }, 2100: {
            perPage: 9,
          },1700: {
            perPage: 8,
          },
          1300: {
            perPage: 6,
          },
          1024: {
            perPage: 5.5,
          },
          630: {
            perPage: 5,
          },
          500: {
            perPage: 3.5,
          },
           
        },
      }"
    >
      <!-- Loop through cards array to render each card -->
      <SplideSlide v-for="(card, index) in cards" :key="index">
        <img
          :src="card.imgSrc"
          :alt="'Card ' + (index + 1)"
          class="w-[122px] sm:w-[137px] md:w-[164px] h-[81px] sm:h-[91px] md:h-[110px] lg:h-[137px] xl:h-[141px] object-cover lg:w-[205px] xl:w-[211px] rounded-[7px] border-[#DBF226]"
        />
      </SplideSlide>
    </Splide>
      <div
        class="gap-2  w-full flex items-center justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 md:hidden"
      >
        <div
          @click="goPrev"
          class="w-8 flex items-center justify-center h-8 rounded-full cursor-pointer bg-[#EFF1D9]"
        >
          <CarouselLeftArrow />
        </div>
        <div
          @click="goNext"
          class="w-8 flex items-center justify-center h-8 rounded-full cursor-pointer bg-[#EFF1D9]"
        >
          <CarouselRightArrow />
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import CarouselRightArrow from "../icons/CarouselRightArrow.vue";
import CarouselLeftArrow from "../icons/CarouselLeftArrow.vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { ref } from "vue";

// Data for buttons
const buttons = [
  { label: "Serif" },
  { label: "Sans-Serif" },
  { label: "Salb-Serif" },
  { label: "Display" },
  { label: "Script" },
  { label: "Monospaced-width" },
  { label: "Variable" },
];

// Data for cards
const cards = [
  { imgSrc: "/img/smallCards1.png" },
  { imgSrc: "/img/smallCards2.png" },
  { imgSrc: "/img/smallCards3.png" },
  { imgSrc: "/img/smallCards4.png" },
  { imgSrc: "/img/smallCards5.png" },
  { imgSrc: "/img/smallCards6.png" },
  { imgSrc: "/img/smallCards7.png" },
  { imgSrc: "/img/smallCards8.png" },
  { imgSrc: "/img/smallCards9.png" },
  { imgSrc: "/img/smallCards10.png" },
];

// Splide options
const splideOptions = {
  type: "loop",
  gap: "1rem",
  drag:false,
  perPage: 7, // Show one slide per view
  pagination: false, // Disable default pagination
  arrows: false, // Disable default arrows (we'll use custom)
  breakpoints: {
    1024: {
      // Tablet (max-width: 1024px)
      gap: "0.5rem",
      perPage: 5, // Show 3 slides
    },
    768: {
      // Mobile (max-width: 768px)
      perPage: 4, // Show 1 slide
      gap: 12,
    },
    423: {
      // Mobile (max-width: 768px)
      perPage: 2, // Show 1 slide
    },
  },
};

const splideRef = ref(null); // Reference to Splide instance

const goNext = () => {
  const splideInstance = splideRef.value?.splide;
  if (splideInstance) splideInstance.go(">"); // Move to next slide
};

const goPrev = () => {
  const splideInstance = splideRef.value?.splide;
  if (splideInstance) splideInstance.go("<"); // Move to previous slide
};
</script>

<style lang="scss"></style>
