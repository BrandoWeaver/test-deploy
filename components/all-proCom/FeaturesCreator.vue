<template>
  <div class="bg-[#EFF1D9] relative my-[60px] smm:px-6 py-20 pl-6">
    <section class="2xl:max-w-[90vw] Bigxl:max-w-[70vw] 2xl:mx-auto">
      <div class="flex 2xl:max-w-7xl mx-auto items-end justify-between">
        <div>
          <h2
            class="lg:text-[20px] sm:text-[17px] md:text-[18px] flex items-center gap-4 font-bold leading-[28px] sm:leading-[30px] md:leading-[32px] lg:leading-[36px]"
          >
            <span class="p-2 bg-[#DBF226] h-fit w-fit rounded-full">
              <Featured />
            </span>
            <span class="border-b border-black"
              >Featured Creators of the Week</span
            >
          </h2>
          <p
            class="text-[13px] sm:text-sm md:text-[15px] lg:text-[17px] font-light pt-3 leading-[23px] sm:leading-6 md:leading-[27px] lg:leading-[30px]"
          >
            Discover the unique talents and inspiring creations of this week’s
            standout contributors.
          </p>
        </div>

        <!-- Mobile Arrows -->
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 flex gap-2 w-full items-center justify-between md:hidden"
        >
          <div
            @click="goPrev"
            class="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer bg-white shadow-md"
          >
            <CarouselLeftArrow />
          </div>
          <div
            @click="goNext"
            class="w-8 h-8 flex items-center justify-center rounded-full cursor-pointer bg-white shadow-md"
          >
            <CarouselRightArrow />
          </div>
        </div>

        <!-- Desktop Arrows -->
        <div class="gap-2 -mt-1 hidden smm:flex">
          <div
            @click="goPrev"
            class="size-[34px] flex items-center justify-center cursor-pointer bg-white rounded-full shadow-lg"
          >
            <CarouselLeftArrow />
          </div>
          <div
            @click="goNext"
            class="size-[34px] flex items-center justify-center cursor-pointer bg-white rounded-full shadow-lg"
          >
            <CarouselRightArrow />
          </div>
        </div>
      </div>

      <!-- Splide Carousel -->
      <Splide ref="splideRef" class="mt-6" :options="splideOptions">
        <SplideSlide
          v-for="(item, i) in creators"
          :key="i"
          class="bg-black text-white p-4 shadow-md rounded-lg overflow-hidden"
        >
          <img
            :src="item.image"
            alt="Product Image"
            class="w-full rounded-t-[5px] h-[189px] sm:h-[201px] lg:h-[192px] object-cover"
          />
          <div class="py-4 mt-2 pr-4">
            <div class="flex justify-between">
              <div
                class="flex items-center gap-4 text-[10px] sm:text-[11px] md:text-sm text-white"
              >
                <div class="relative">
                  <img
                    :src="item.profile"
                    class="w-[31px] h-[31px] shrink-0 rounded-full"
                    alt="Profile Image"
                  />
                  <div
                    v-if="item.isPro"
                    class="absolute -top-2 left-6 w-5 h-5 flex items-center justify-center text-[5px] text-black border-2 border-[#0D0D0D] bg-[#DBF226] rounded-full"
                  >
                    Pro
                  </div>
                  <div
                    class="absolute top-[22px] -right-[2px] w-2 h-2 bg-[#78BF39] border border-[#0D0D0D] rounded-full"
                  ></div>
                </div>
                <span class="font-light">{{ item.name }}</span>
              </div>
              <div class="flex items-center -mr-3">
                <button
                  v-if="item.isFollowing"
                  class="flex items-center gap-1 px-[14px] font-medium py-1 rounded-md border-[#FDE047] border bg-[#DBF226] text-black"
                >
                  Unfollow
                </button>
                <button
                  v-else
                  class="flex items-center gap-1 px-[14px] font-medium py-1 rounded-md border-[#FDE047] border text-[#FDE047] hover:bg-[#DBF226] hover:text-black"
                >
                  <Plus class="w-4" />
                  Follow
                </button>
              </div>
            </div>
            <h1
              class="mt-7 sm:text-[17px] md:text-[20px] font-bold leading-[36px]"
            >
              {{ item.title }}
            </h1>
            <div class="mt-2 flex flex-wrap items-center gap-2 -mb-3">
              <button
                v-for="tag in item.tags"
                :key="tag"
                class="hover:bg-[#DBF226] font-light bg-[#0D0D0D] border border-[#F5F5F5] text-white hover:text-black px-[14px] sm:px-3 py-1 sm:py-[6px] text-[12px] sm:text-[15px] shadow-md rounded-[4px]"
              >
                {{ tag }}
              </button>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </section>
  </div>
</template>

<script setup>
import Featured from '../icons/Featured.vue'
import CarouselRightArrow from '../icons/CarouselRightArrow.vue'
import CarouselLeftArrow from '../icons/CarouselLeftArrow.vue'
import Plus from '../icons/Plus.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { ref } from 'vue'

const splideRef = ref(null)

// Sample Data
const creators = ref([
  {
    name: 'Ch. Ratna',
    title: 'Sala Blue',
    image: 'https://via.placeholder.com/300x200',
    profile: 'https://via.placeholder.com/50',
    isPro: true,
    isFollowing: false,
    tags: ['Graphics', 'PSD', 'Templates', 'Mockups', 'Marketing'],
  },
  // Add more creators...
])

const splideOptions = {
  type: 'loop',
  gap: '1rem',
  drag: false,
  perPage: 6.5,
  pagination: false,
  perMove: 1,
  arrows: false,
  breakpoints: {
    2100: { perPage: 4.5 },
    1300: { perPage: 3.5 },
    1100: { perPage: 2.5 },
    768: { perPage: 2 },
    630: { perPage: 1.5 },
    424: { perPage: 1.2 },
  },
}

const goNext = () => splideRef.value?.splide?.go('>')
const goPrev = () => splideRef.value?.splide?.go('<')
</script>

<style lang="scss">
/* Add custom styles here if needed */
</style>
