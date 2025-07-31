<template>
  <div class="mt-8">
    <div class="sm:px-6 sm:py-8">
      <section
        class="2xl:max-w-7xl relative py-5 pl-6 smm:px-6 sm:rounded-xl bg-[#EFF1D9] mx-auto"
      >
        <h2 class="text-base heading sm:text-2xl font-bold text-gray-800 mb-3">
          Discover our current offers
        </h2>
        <p class="text-gray-600 leading-relaxed font-light mb-6">
          Explore exclusive digital assets from top creators, available for
          purchase now.
        </p>

        <div class="flex justify-between">
          <div class="flex flex-wrap gap-2">
            <button
              class="px-4 rounded-[4px] font-light border py-2 border-white bg-[#000000] text-white"
            >
              All
            </button>
            <button
              class="px-4 rounded-[4px] font-light py-2 border border-white bg-[#000000] text-white"
            >
              Special offer
            </button>
            <button
              class="px-4 rounded-[4px] font-light border-white py-2 border bg-[#000000] text-white"
            >
              Mockups
            </button>
            <button
              class="px-4 py-2 rounded-[4px] font-light border border-[#005B52] bg-white text-black hover:text-white hover:bg-[#000000] duration-300"
            >
              Stationery
            </button>
            <button
              class="px-4 rounded-[4px] font-light border-white py-2 border bg-[#000000] text-white"
            >
              Presets
            </button>
            <button
              class="px-4 rounded-[4px] font-light border-white py-2 border bg-[#000000] text-white"
            >
              Themes
            </button>
          </div>

          <div
            class="gap-2 mt-[116px] sm:mt-24 w-full flex items-center justify-between absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 smm:hidden"
          >
            <div
              @click="goPrev"
              class="w-[25px] flex shadow-sm items-center justify-center h-[25px] rounded-full cursor-pointer bg-white"
            >
              <CarouselLeftArrow />
            </div>
            <div
              @click="goNext"
              class="w-[25px] flex shadow-sm items-center justify-center h-[25px] rounded-full cursor-pointer bg-white"
            >
              <CarouselRightArrow />
            </div>
          </div>
          <div class="gap-2 mt-2 hidden smm:flex">
            <div
              @click="goPrev"
              class="w-[34px] h-[34px] flex items-center justify-center rounded-full cursor-pointer bg-white"
            >
              <CarouselLeftArrow />
            </div>
            <div
              @click="goNext"
              class="w-[34px] h-[34px] flex items-center justify-center rounded-full cursor-pointer bg-white"
            >
              <CarouselRightArrow />
            </div>
          </div>
        </div>

        <Splide
          class="mt-6 py-4"
          ref="splideRef"
          :options="{
            type: 'loop',
            drag: false,
            gap: '1rem',
            dragMinThreshold: {
              mouse: 10, // Minimum drag distance for mouse
              touch: 20, // Minimum drag distance for touch
            },
            perMove: 1,
            snap: true,
            perPage: 4, // Show one slide per view
            pagination: false, // Disable default pagination
            arrows: false, // Disable default arrows (we'll use custom)
            breakpoints: {
              1200: {
                // Tablet (max-width: 1200px)
                perPage: 3, // Show 3 slides
              },
              1024: {
                // Tablet (max-width: 1024px)
                perPage: 2.6, // Show 2 slides
                perMove: 1,
              },
              // 768: { // Mobile (max-width: 768px)
              //   perPage: 2, // Show 1 slide
              perMove: 1,

              // },
              767: {
                // Mobile (max-width: 530px)
                perPage: 2.2, // Show 1 slide
              },
              550: {
                // Mobile (max-width: 530px)
                perPage: 1.3, // Show 1 slide
                perMove: 1,
              },
              350: {
                // Mobile (max-width: 530px)
                perPage: 1, // Show 1 slide,,
                perMove: 1,
              },
            },
          }"
        >
          <SplideSlide
            v-for="(item, index) in offers"
            :key="index"
            class="bg-white transition-all duration-200 shadow-[#00000033] hover:shadow-xl py-4 px-4 mb-4 rounded-lg overflow-hidden"
          >
            <div class="w-full h-44 overflow-hidden">
              <img
                src="https://s3-alpha-sig.figma.com/img/7902/fdc1/d8306f0c995db73be4dc39102a61b942?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NWtYWI1QNz2JscWPU1LXGSoPFSV0Bvtl7gtzBxDNVDfW-hyQckW5~0LVXWUSmsXV~cA0~uqoWPp8jlTDgG1sGbhaLNyK72ei1O1fVC1OXxL8LOaYTXWuL-BLLnaEKcUZodeI3LggZLKG67qJ3pCCUSVhwl0-Ns196wlsf4Cdt9DBhxjaX6PSaikhDRGhxS8tQT1tntQS~3ZYztUNYYhsL3eFu3SkpW55xRZoWw2OIYp71a7yAumCOb8Rz5QgV1Nw4vnyRWin5umqY1VeM4Y6QeW0MBBunKmxolxQMFhswBMIVf2JJl~~SrtLu2DEMRQZJwlVI-PFfx2K8lrx~7NHLg__"
                alt="Product Image"
                class="w-full rounded-tl-md rounded-tr-md h-44 object-cover"
              />
            </div>
            <div class="py-4">
              <div class="flex justify-between">
                <h3
                  class="font-semibold items-center flex gap-3 text-sm text-gray-800"
                >
                  <span class="flex">
                    <div class="relative">
                      <div class="  ">
                        <img
                          src="https://s3-alpha-sig.figma.com/img/807c/0eb6/d541b89bff8631a874638024a09c19f7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZKCGJJnAYY27UHhmC7Qn53IYt9NLiQffQjmilEImFYLlXqfGfWHUa435gS9NaMGxR6MiCInQ0fpq81totZAW7h4VOKUA4ZS8f3z7ZprUvMfQ~umddcXsWGu6GhwX03~AKGyrrgno3aovaQVPoafD~t3~yJE1M2xLSQotB6tyLytxSWdZwBdTJUW1eSQn6Tt1vQqx~RvI4HV6uqE1dkcxOY2hm5dNEB7b63NepztVHOhpIcy5Sr5VPgIejElQc9HiAR10BQQllkaknuy-6Ix15ZH-2sRuZ-1xS2Kymkw0tem8Zjdqw1KPYJdw1gVwZQoQnqlVHQth3vaJrSOSQR8Ojw__"
                          class="w-9 h-9 border border-[#DBF226] rounded-full object-cover"
                          alt=""
                        />
                      </div>
                      <span>
                        <h2
                          class="text-[5px] absolute p-1 text-center flex items-center border-2 border-white -top-2 left-6 size-5 justify-center bg-[#DBF226] font-normal rounded-full"
                        >
                          Pro
                        </h2>
                      </span>
                      <span>
                        <h1
                          class="absolute p-1 bg-[#78BF39] border border-white top-6 left-7 rounded-full"
                        ></h1>
                      </span>
                    </div>
                  </span>
                  <span class="font-light">Ch. Ratana</span>
                </h3>
                <div class="flex items-center mb-2 gap-2">
                  <p class="text-black text-[13px] line-through">$30</p>
                  <p class="text-black text-2xl font-bold">$25</p>
                </div>
              </div>
              <h1 class="my-5 text-xl font-bold">Sala Blue</h1>
              <div
                class="mt-4 flex flex-nowrap items-center w-full gap-2 -mb-3"
              >
                <button
                  class="hover:bg-black whitespace-nowrap border-[#DBF226] border bg-[#DBF226] text-black hover:shadow-[0px_4px_16px_0px_#DBF226] hover:text-white sm:px-2 px-4 sm:text-sm text-[11px] py-2 rounded-md flex gap-1 justify-center items-center"
                >
                  <span>
                    <Cart />
                  </span>
                  Add to cart
                </button>
                <button
                  @click="toggleWishlist(index)"
                  class="sm:px-2 px-3 py-2 bg-white sm:text-sm text-[11px] font-semibold text-gray-800 flex gap-1 justify-center items-center border border-[#00000080] rounded-md"
                >
                  <span>
                    <component :is="item.isSaved ? WhisSave : NotSelec" />
                  </span>
                  <span class="font-light">
                    {{ item.isSaved ? 'Wishlist' : 'Wishlist' }}
                  </span>
                </button>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </section>
    </div>
  </div>
</template>

<script setup>
import WhisSave from '../icons/WhisSave'
import NotSelec from '../icons/NotSelected'
import CarouselLeftArrow from '../icons/CarouselLeftArrow'
import CarouselRightArrow from '../icons/CarouselRightArrow'
import Cart from '../icons/Cart'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css'

import { ref } from 'vue'

const splideRef = ref(null) // Reference to Splide instance

const goNext = () => {
  const splideInstance = splideRef.value?.splide
  splideInstance.go('>') // Move to next slide
}

const goPrev = () => {
  const splideInstance = splideRef.value?.splide
  splideInstance.go('<') // Move to previous slide
}

const offers = ref([
  {
    name: 'Kashif',
    prod: 'Indus app',
    price: 10,
    profile: '',
    disImg: '',
    isSaved: false,
  },
  {
    name: 'Kashif',
    prod: 'Indus app',
    price: 10,
    profile: '',
    disImg: '',
    isSaved: false,
  },
  {
    name: 'Kashif',
    prod: 'Indus app',
    price: 10,
    profile: '',
    disImg: '',
    isSaved: false,
  },
  {
    name: 'Kashif',
    prod: 'Indus app',
    price: 10,
    profile: '',
    disImg: '',
    isSaved: false,
  },
  {
    name: 'Kashif',
    prod: 'Indus app',
    price: 10,
    profile: '',
    disImg: '',
    isSaved: false,
  },
  {
    name: 'Kashif',
    prod: 'Indus app',
    price: 10,
    profile: '',
    disImg: '',
    isSaved: false,
  },
  {
    name: 'Kashif',
    prod: 'Indus app',
    price: 10,
    profile: '',
    disImg: '',
    isSaved: false,
  },
  {
    name: 'Kashif',
    prod: 'Indus app',
    price: 10,
    profile: '',
    disImg: '',
    isSaved: false,
  },
])

const toggleWishlist = (index) => {
  offers.value[index].isSaved = !offers.value[index].isSaved // Update using offers.value
}
</script>

<style scoped></style>
