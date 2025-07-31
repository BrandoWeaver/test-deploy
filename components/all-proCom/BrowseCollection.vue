<template lang="html">
  <div class="relative">
    <div class="2xl:max-w-7xl   relative overflow-auto w-full mx-auto py-8 pl-6 esm:px-6">

      <h1 class="py-1 border-b border-black text-base inline heading sm:text-2xl font-bold text-gray-800 mb-3">Browse by
        collections</h1>
      <p class="text-[#000000] leading-relaxed font-light mt-6">Discover endless possibilities with our curated digital
        resources, perfect for all your creative needs.</p>
        <div class="esm:grid hidden w-full mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mt-10">
  <div v-for="(card, index) in cards" :key="index" class="hidden esm:flex sm:w-auto flex-col gap-4">
    <div class="relative rounded-[10px] h-[220px] lg:h-[271px] w-full overflow-hidden">
      <div class="w-full grid grid-cols-12 h-[291px] gap-[3px]">
        <!-- Main Image -->
        <a href="#1" class="col-span-8 relative group overflow-hidden h-full w-full">
          <img :src="card.image" class="h-full object-cover group-hover:scale-[1.05]  transition-transform duration-500 w-full hover:scale-[1.05]" alt="">
          <div class="w-full h-full transition-all duration-300 hover:bg-black/30 absolute top-0 left-0"></div>
        </a>

        <!-- Mini Images -->
        <div class="col-span-4 relative overflow-hidden flex gap-[2px] flex-col h-[220px] lg:h-full">
          <!-- First Mini Image -->
          <a href="#2" class="relative h-1/2 overflow-hidden group">
            <img v-for="(miniImage, idx) in card.miniImages.slice(0, 1)" :key="idx"
              :src="miniImage"
              class="h-[100%] transition-all duration-500 object-cover w-full group-hover:scale-[1.05] group-hover:opacity-80"
              alt="" />
            <div class="w-full h-full transition-all duration-300 group-hover:bg-black/30 absolute top-0 left-0"></div>
          </a>

          <!-- Second Mini Image -->
          <a href="#3" class="relative h-1/2 overflow-hidden group">
            <img v-for="(miniImage, idx) in card.miniImages.slice(1, 2)" :key="idx"
              :src="miniImage"
              class="h-[100%] transition-all duration-500 object-cover w-full group-hover:scale-[1.05] group-hover:opacity-80"
              alt="" />
            <div class="w-full h-full transition-all duration-300 group-hover:bg-black/30 absolute top-0 left-0"></div>
          </a>
        </div>
      </div>
    </div>

    <!-- Title -->
    <h1 class="lg:text-[20px] text-[18px] font-[700]">{{ card.title }}</h1>

    <!-- Buttons -->
    <div class="flex flex-wrap w-full gap-2">
      <button v-for="(btn, idx) in card.buttons" :key="idx"
        class="bg-[#F5F5F5] hover:bg-[#DBF226] border border-[#EEEEEE] text-[#444444] rounded-[4px] sm:py-[5px] py-1 px-[7px] sm:px-[10px] lg:py-1.5 lg:px-3 text-[15px] font-light">
        {{ btn }}
      </button>
    </div>
  </div>
</div>


      <div
        class="gap-2 mt-0 w-full flex items-center justify-between absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 esm:hidden">
        <div @click="goPrev"
          class="w-[25px] flex shadow-sm items-center justify-center h-[25px] rounded-full cursor-pointer bg-[#EFF1D9]">
          <CarouselLeftArrow />
        </div>
        <div @click="goNext"
          class="w-[25px] flex shadow-sm items-center justify-center h-[25px] rounded-full cursor-pointer bg-[#EFF1D9]">
          <CarouselRightArrow />
        </div>
      </div>
      <Splide class="mt-10 w-full esm:hidden  py-4  " ref="splideRef" :options="{
        type: 'loop',
        gap: '1rem',
        perMove: 1,
        drag: false,
        perPage: 2, // Show one slide per view
        pagination: false, // Disable default pagination
        arrows: false, // Disable default arrows (we'll use custom)
        breakpoints: {
          1200: {
            // Tablet (max-width: 1200px)
            perPage: 3, // Show 3 slides
          },
          1024: {
            // Tablet (max-width: 1024px)
            perPage: 2, // Show 2 slides
          },
          // 768: { // Mobile (max-width: 768px)
          //   perPage: 2, // Show 1 slide
          // },
          767: {
            // Mobile (max-width: 530px)
            perPage: 2, // Show 1 slide
          }, 550: {
            // Mobile (max-width: 530px)
            perPage: 1.1, // Show 1 slide
          },
        },

      }">
        <SplideSlide v-for="(card, index) in cards" :key="index"
          class=" flex flex-col   w-fit whitespace-nowrap overflow-auto   lg:grid-cols-3 gap-x-5 gap-y-6 mt-10">
          <div class="relative rounded-[10px] h-[220px] lg:h-[271px] w-full overflow-hidden">
      <div class="w-full grid grid-cols-12 h-[291px] gap-[3px]">
        <!-- Main Image -->
        <a href="#1" class="col-span-8 relative group overflow-hidden h-full w-full">
          <img :src="card.image" class="h-full object-cover group-hover:scale-[1.05]  transition-transform duration-500 w-full hover:scale-[1.05]" alt="">
          <div class="w-full h-full transition-all duration-300 hover:bg-black/30 absolute top-0 left-0"></div>
        </a>

        <!-- Mini Images -->
        <div class="col-span-4 relative overflow-hidden flex gap-[2px] flex-col h-[220px] lg:h-full">
          <!-- First Mini Image -->
          <a href="#2" class="relative h-1/2 overflow-hidden group">
            <img v-for="(miniImage, idx) in card.miniImages.slice(0, 1)" :key="idx"
              :src="miniImage"
              class="h-[100%] transition-all duration-500 object-cover w-full group-hover:scale-[1.05] group-hover:opacity-80"
              alt="" />
            <div class="w-full h-full transition-all duration-300 group-hover:bg-black/30 absolute top-0 left-0"></div>
          </a>

          <!-- Second Mini Image -->
          <a href="#3" class="relative h-1/2 overflow-hidden group">
            <img v-for="(miniImage, idx) in card.miniImages.slice(1, 2)" :key="idx"
              :src="miniImage"
              class="h-[100%] transition-all duration-500 object-cover w-full group-hover:scale-[1.05] group-hover:opacity-80"
              alt="" />
            <div class="w-full h-full transition-all duration-300 group-hover:bg-black/30 absolute top-0 left-0"></div>
          </a>
        </div>
      </div>
    </div>
          <h1 class="lg:text-[20px]   font-bold text-[18px]">{{ card.title }}</h1>
          <div class="flex items-start justify-start flex-wrap min-h-20 gap-y-2   w-full gap-2">
            <button v-for="(btn, idx) in card.buttons" :key="idx"
              class="bg-[#F5F5F5]  flex hover:bg-[#DBF226] border border-[#EEEEEE] text-[#444444] rounded-[4px] sm:py-[5px] py-1 px-[7px] sm:px-[10px] lg:py-1.5 lg:px-3 text-[15px] font-light">
              {{ btn }}
            </button>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>


<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import CarouselLeftArrow from "../icons/CarouselLeftArrow";
import CarouselRightArrow from "../icons/CarouselRightArrow";
import { ref } from "vue";

const splideRef = ref(null); // Reference to Splide instance

const goNext = () => {
  const splideInstance = splideRef.value?.splide;
  splideInstance.go(">"); // Move to next slide
};

const goPrev = () => {
  const splideInstance = splideRef.value?.splide;
  splideInstance.go("<"); // Move to previous slide
};
</script>
<script>

export default {
  data() {
    return {
      cards: [
        {
          title: 'Graphics',
          image: '/img/card2.png',
          miniImages: ['/img/minicard2.png', '/img/minicard21.png'],
          buttons: ['Icons', 'PSD', 'Vectors', 'Templates', 'Mockups']
        },
        {
          title: 'Photos',
          image: '/img/card2.png',
          miniImages: ['/img/minicard2.png', '/img/minicard21.png'],
          buttons: ['Culture & Tradition', 'Products', 'Food & Beverages', 'Peoples', 'Animals', 'Lifestyle', 'Nature & Place']
        },
        {
          title: 'Videos',
          image: '/img/card2.png',
          miniImages: ['/img/minicard2.png', '/img/minicard21.png'],
          buttons: ['Culture & Tradition', 'Products', 'Food & Beverages', 'Peoples', 'Animals', 'Lifestyle', 'Nature & Place']
        },
        {
          title: 'Audio',
          image: '/img/card2.png',
          miniImages: ['/img/minicard2.png', '/img/minicard21.png'],
          buttons: ['Genres', 'Moods', 'Themes']
        },
        {
          title: 'Sound Effects',
          image: '/img/card2.png',
          miniImages: ['/img/minicard2.png', '/img/minicard21.png'],
          buttons: ['Genres', 'Moods', 'Themes']
        },
        {
          title: '3D Elements',
          image: '/img/card2.png',
          miniImages: ['/img/minicard2.png', '/img/minicard21.png'],
          buttons: ['Culture & Tradition', 'Products', 'Food & Beverages', 'Peoples', 'Animals', 'Lifestyle', 'Nature & Place']
        }
      ]
    }
  }
}

</script>
