<template>
  <div
    class="pb-14 pt-6 relative pl-6 md:px-6 w-[1440px] xl-max:w-full md-max:pt-[6px] lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px]"
  >
    <div class="flex-wrap">
      <div class="items-center gap-2">
        <h1
          class="leading-[28px] sm:leading-[30px] md:leading-[32px] heading lg:leading-[36px] text-[#000] xl:text-[30px] xl-max:text-[30px] lg-max:text-[24px] md-max:text-[24px] sm-max:text-[24px] font-lexend font-medium"
        >
          Life at Thortok
        </h1>
        <p
          class="lg:text-[17px] text-[13px] sm:text-sm md:text-[15px] leading-[23px] sm:leading-6 md:leading-[27px] lg:leading-[30px] font-[300] pt-3"
        >
          A Community of Passionate Creators and Innovators
        </p>
        <p
          class="lg:text-[17px] text-[13px] sm:text-sm md:text-[15px] leading-[23px] sm:leading-6 md:leading-[27px] lg:leading-[30px] font-[300] pt-3"
        >
          We believe that creativity and innovation thrive in a collaborative
          and inspiring environment. Joining our team means becoming part of a
          dynamic community where every idea is valued, and every contribution
          matters. We foster a culture focused on professional growth, mutual
          respect, and diversity. Together, we strive to deliver the best
          solutions for our users while supporting local and international
          talents. If you’re looking for a place where your passion for
          technology, design, and innovation can flourish, Thortok is the
          perfect fit for you.
        </p>
      </div>
    </div>
  </div>
  <div class="overflow-auto">
    <div
      class="relative flex gap-4 mt-8 flex-wrap justify-center w-max mx-auto"
    >
      <!-- Loop through cards array to render each card -->
      <div v-for="(card, index) in cards" :key="index">
        <img
          :src="card.imgSrc"
          :alt="'Card ' + (index + 1)"
          class="rounded-[7px] border-[#DBF226] aspect-[3/2] object-cover xl:w-[462px] xl-max:w-[315px] lg-max:w-[315px] md-max:w-[258px] sm-max:w-[258px]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Data for cards
const cards = [
  { imgSrc: '/img/dummy3.png' },
  { imgSrc: '/img/dummy3.png' },
  { imgSrc: '/img/dummy3.png' },
  { imgSrc: '/img/dummy3.png' },
  { imgSrc: '/img/dummy3.png' },
  { imgSrc: '/img/dummy3.png' },
  { imgSrc: '/img/dummy3.png' },
  { imgSrc: '/img/dummy3.png' },
]

// Splide options

const splideRef = ref(null) // Reference to Splide instance

const goNext = () => {
  const splideInstance = splideRef.value?.splide
  if (splideInstance) splideInstance.go('>') // Move to next slide
}

const goPrev = () => {
  const splideInstance = splideRef.value?.splide
  if (splideInstance) splideInstance.go('<') // Move to previous slide
}
</script>

<style lang="scss"></style>
