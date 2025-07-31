<template>
  <div class="relative">
    <div
      class="2xl:max-w-7xl relative overflow-auto w-full mx-auto py-8 pl-6 esm:px-6"
    >
      <h1
        class="py-1 border-b border-black text-base inline heading sm:text-2xl font-bold text-gray-800 mb-3"
      >
        Browse by collections
      </h1>
      <p class="text-[#000000] leading-relaxed font-light mt-6">
        Discover endless possibilities with our curated digital resources,
        perfect for all your creative needs.
      </p>

      <!-- Desktop Grid -->
      <div
        class="esm:grid hidden w-full mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mt-10"
      >
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="hidden esm:flex sm:w-auto flex-col gap-4"
        >
          <div
            class="relative rounded-[10px] h-[220px] lg:h-[271px] w-full overflow-hidden"
          >
            <div class="w-full grid grid-cols-12 h-[291px] gap-[3px]">
              <a
                href="#1"
                class="col-span-8 relative group overflow-hidden h-full w-full"
              >
                <img
                  :src="card.image"
                  class="h-full object-cover transition-transform duration-500 w-full group-hover:scale-[1.05]"
                  alt=""
                />
                <div
                  class="w-full h-full transition-all duration-300 hover:bg-black/30 absolute top-0 left-0"
                ></div>
              </a>
              <div
                class="col-span-4 flex flex-col gap-[2px] h-[220px] lg:h-full"
              >
                <a
                  v-for="(miniImage, idx) in card.miniImages"
                  :key="idx"
                  href="#"
                  class="relative h-1/2 overflow-hidden group"
                >
                  <img
                    :src="miniImage"
                    class="h-full object-cover w-full transition-all duration-500 group-hover:scale-[1.05] group-hover:opacity-80"
                    alt=""
                  />
                  <div
                    class="w-full h-full transition-all duration-300 group-hover:bg-black/30 absolute top-0 left-0"
                  ></div>
                </a>
              </div>
            </div>
          </div>
          <h1 class="lg:text-[20px] text-[18px] font-bold">{{ card.title }}</h1>
        </div>
      </div>

      <!-- Mobile Carousel -->
      <div class="relative w-full mt-10 esm:hidden">
        <div class="flex overflow-x-auto no-scrollbar" ref="carousel">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="flex-shrink-0 w-[80%] sm:w-[60%] mx-2"
          >
            <div
              class="relative rounded-[10px] h-[220px] lg:h-[271px] w-full overflow-hidden"
            >
              <img
                :src="card.image"
                class="h-full w-full object-cover"
                alt=""
              />
            </div>
            <h1 class="lg:text-[20px] text-[18px] font-bold mt-2">
              {{ card.title }}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const cards = ref([
  {
    title: 'Graphics',
    image: '/img/card2.png',
    miniImages: ['/img/minicard2.png', '/img/minicard21.png'],
  },
  {
    title: 'Photos',
    image: '/img/card2.png',
    miniImages: ['/img/minicard2.png', '/img/minicard21.png'],
  },
])
</script>

<style scoped>
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
