<template>
  <!-- Main Container -->
  <div
    class="flex flex-col items-start justify-start w-[1440px] xl-max:w-full pt-[16px] md-max:pt-[6px] lg-max:w-full mx-auto gap-[18px] px-6 md-max:px-[16px]"
  >
    <!-- Header Section -->
    <h3
      style="
        color: #000;
        font-style: normal;
        font-weight: 700;
        line-height: 180%;
      "
      class="text-black font-lexend lg:text-[20px] md:text-[18px] sm:text-[17px] text-[16px] font-bold leading-[32px]"
    >
      Fonts collection
    </h3>

    <!-- Description Text -->
    <p
      style="
        color: #000;
        font-style: normal;
        font-weight: 300;
        line-height: 180%; /* 30.6px */
      "
      class="text-gray-800 lg:text-[17px] md:text-[15px] sm:text-[14px] text-[13px] leading-[28px] font-light font-lexend"
    >
      Find the perfect fonts to give your designs a unique and professional
      touch.
    </p>

    <!-- Tags Section with Navigation Buttons aligned to the far right -->
    <div class="flex justify-between items-center w-full gap-4 pb-[8px]">
      <!-- Tags Container -->
      <div class="flex flex-wrap gap-4">
        <span
          v-for="(tag, index) in tags"
          :key="index"
          :class="[
            'px-[var(--Space-300,12px)] py-[6px] rounded-[4px] border text-center font-noto text-[15px] font-light cursor-pointer flex items-center justify-center gap-[10px]',
            tag.active
              ? 'bg-[#DBF226] text-black border-transparent'
              : 'bg-[#F5F5F5] text-gray-700 border-[#EEE]',
          ]"
          @click="setActiveTag(index)"
        >
          {{ tag.name }}
        </span>
      </div>

      <!-- Navigation Buttons at the Far Right -->
      <div class="flex gap-2">
        <button
          @click="scrollLeft"
          class="nav-button md:w-[40px] w-[30px] md:h-[40px] h-[30px]"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.69316 11.1738L6.13456 11.7324C5.88066 11.9609 5.4998 11.9609 5.27128 11.7324L0.320109 6.80664C0.0915937 6.55273 0.0915937 6.17188 0.320109 5.94336L5.27128 0.992188C5.4998 0.763672 5.88066 0.763672 6.13456 0.992188L6.69316 1.55078C6.92167 1.80469 6.92167 2.18555 6.69316 2.43945L3.62089 5.35938H10.908C11.2635 5.35938 11.5174 5.61328 11.5174 5.96875V6.78125C11.5174 7.11133 11.2635 7.39062 10.908 7.39062H3.62089L6.69316 10.2852C6.92167 10.5391 6.94706 10.9199 6.69316 11.1738Z"
              fill="black"
            />
          </svg>
        </button>
        <button
          @click="scrollRight"
          class="nav-button md:w-[40px] w-[30px] md:h-[40px] h-[30px]"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.30684 0.826172L5.86544 0.267578C6.11934 0.0390625 6.5002 0.0390625 6.72872 0.267578L11.6799 5.19336C11.9084 5.44727 11.9084 5.82812 11.6799 6.05664L6.72872 11.0078C6.5002 11.2363 6.11934 11.2363 5.86544 11.0078L5.30684 10.4492C5.07833 10.1953 5.07833 9.81445 5.30684 9.56055L8.37911 6.64062H1.092C0.736531 6.64062 0.482625 6.38672 0.482625 6.03125V5.21875C0.482625 4.88867 0.736531 4.60938 1.092 4.60938H8.37911L5.30684 1.71484C5.07833 1.46094 5.05294 1.08008 5.30684 0.826172Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Font Cards Block with Full-Screen Width Container -->
  <div
    class="relative w-screen -mx-6 pb-[64px] lg:-mx-24 overflow-hidden my-[24px] flex justify-center"
  >
    <!-- Inner Container with Dynamic Width Based on Number of Cards -->
    <div
      class="flex transition-transform duration-300 ease-in-out gap-[12px]"
      :style="{
        transform: `translateX(-${currentIndex * cardWidth}px)`,
        width: `${fontCards.length * cardWidth}px`,
      }"
    >
      <!-- Display each card with an image -->
      <div
        v-for="(font, index) in fontCards"
        :key="index"
        class="w-[211.4px] h-[141.17px] bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-500 text-lg font-bold"
      >
        <NuxtImg
          :src="font.image"
          :alt="'Font ' + font.id"
          class="w-full h-full object-cover rounded-lg"
          :quality="40"
          format="webp"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fontCards = ref([
  { id: 1, image: '/images/collections/f1.png' },
  { id: 2, image: '/images/collections/f2.png' },
  { id: 3, image: '/images/collections/f3.png' },
  { id: 4, image: '/images/collections/f4.png' },
  { id: 5, image: '/images/collections/f5.png' },
  { id: 6, image: '/images/collections/f6.png' },
  { id: 7, image: '/images/collections/f7.png' },
  { id: 8, image: '/images/collections/f7.png' },
  { id: 9, image: '/images/collections/f3.png' },
  { id: 10, image: '/images/collections/f10.png' },
])

const tags = ref([
  { name: 'All', active: false },
  { name: 'Serif', active: false },
  { name: 'Sans-Serif', active: false },
  { name: 'Slab-Serif', active: false },
  { name: 'Display', active: false },
  { name: 'Script', active: true },
  { name: 'Monospaced-width', active: false },
  { name: 'Variable', active: false },
])

const currentIndex = ref(0)
const cardWidth = 211.4 + 12
const visibleCardCount = 6

const scrollLeft = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const scrollRight = () => {
  if (currentIndex.value < fontCards.value.length - visibleCardCount) {
    currentIndex.value++
  }
}

const setActiveTag = (index) => {
  tags.value.forEach((tag, i) => (tag.active = i === index))
}
</script>

<style scoped>
/* Style for the navigation buttons */
.nav-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eff1d9;
  border-radius: 50%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
.nav-button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
}
</style>
