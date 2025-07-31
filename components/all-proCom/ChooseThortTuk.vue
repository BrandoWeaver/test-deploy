<template>
  <div
    class="relative py-5 smm:px-6 sm:rounded-xl mt-8 w-[1440px] xl-max:w-full pt-[48px] md-max:pt-[6px] lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px]"
  >
    <div class="self-stretch justify-center items-center gap-11 inline-flex">
      <div class="flex-col justify-start items-start gap-6 inline-flex w-full">
        <!-- Section Title and Description -->
        <div
          class="self-stretch sm:flex-row flex-col justify-center items-start gap-3.5 flex"
        >
          <div class="flex flex-col w-full">
            <div
              class="self-stretch justify-start items-center gap-2.5 inline-flex"
            >
              <div
                class="grow shrink basis-0 text-black text-sm esm:text-[16px] md:text-2xl leading-6 lg:text-3xl font-medium lg:leading-[54px]"
              >
                {{ props.title || 'Why Choose Thortok for Your Graphic Needs' }}
              </div>
            </div>
            <div
              class="self-stretch text-black text-[12px] esm:text-[13px] eesm:text-[16px] md:text-[18px] mt-2 lg:text-[17px] font-light lg:leading-[30.60px]"
            >
              {{
                props.des ||
                'At Thortok, we believe every creator deserves access to premium visual resources that empower their full creative potential. We’ve crafted a rich, diverse, and inclusive platform where graphics aren’t just visual assets, but true sources of inspiration and value. Discover why Thortok is the perfect choice for unique, impactful creations.'
              }}
            </div>
          </div>
          <!-- Image Placeholder -->
          <div
            class="flex-col justify-center items-center flex md:hidden w-full eesm:w-1/2 md:w-full"
          >
            <div class="relative w-full h-full flex">
              <img
                class="object-cover w-full esm:h-[250px] md:h-[300px] lg:h-full"
                src="/img/dummy3.png"
                alt="Image placeholder"
              />
            </div>
          </div>
        </div>

        <!-- Benefits Section with Accordion -->
        <div class="flex gap-8 w-full">
          <div
            class="self-stretch flex-col justify-start items-start gap-3.5 flex w-full"
          >
            <div
              v-for="(item, index) in benefits || arr"
              :key="index"
              :class="[
                'self-stretch p-3 md:px-6 md:py-3.5 bg-[#eff1d9] hover:border-[#dbf226] rounded-[10px] border-2 inline-flex',
                item.isOpen ? 'border-[#dbf226]' : 'border-transparent',
              ]"
            >
              <div
                class="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex w-full"
              >
                <div class="self-stretch justify-start items-start inline-flex">
                  <div
                    class="grow shrink basis-0 text-black text-xs md:text-[17px] font-bold leading-[30.60px]"
                  >
                    {{ item.title }}
                  </div>
                </div>
                <!-- Accordion Content -->
                <transition name="accordion">
                  <div
                    v-if="item.isOpen"
                    class="self-stretch py-2 justify-start items-start gap-2.5 inline-flex"
                  >
                    <div
                      class="grow shrink basis-0 text-black text-[14px] esm:text-sm leading-5 esm:leading-[25.20px] font-[350]"
                    >
                      {{ item.description }}
                    </div>
                  </div>
                </transition>
              </div>
              <div
                class="p-4 w-3.5 h-3.5 bg-white rounded-[50px] justify-center items-center gap-2.5 flex"
              >
                <span
                  @click="toggleAccordion(index)"
                  class="text-2xl cursor-pointer select-none"
                >
                  {{ item.isOpen ? '-' : '+' }}
                </span>
              </div>
            </div>
          </div>
          <div
            class="flex-col lg:hidden md:flex hidden justify-center items-center w-full eesm:w-1/2 md:w-full"
          >
            <div class="relative w-full h-full flex">
              <img
                class="object-cover w-full lg:h-full"
                src="/img/dummy3.png"
                alt="Image placeholder"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Image Placeholder -->
      <div class="flex-col justify-center items-center hidden lg:inline-flex">
        <div class="relative">
          <img
            class="lg:h-[645px]"
            src="/img/dummy2.png"
            alt="Image placeholder"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  des: String,
  arr: Array,
})

const benefits = ref([
  {
    title: 'A Comprehensive and Diverse Collection',
    description:
      'Access a vast array of styles and formats, from modern icons to refined templates and customizable PSDs, tailored for all project types.',
    isOpen: true,
  },
  {
    title: 'Premium, Professional Quality',
    description: '',
    isOpen: false,
  },
  {
    title: 'Encouragement of Creativity and Originality',
    description: '',
    isOpen: false,
  },
  {
    title: 'Celebration of Culture and Tradition',
    description: '',
    isOpen: false,
  },
  {
    title: 'Support & Monetization for Creators',
    description: '',
    isOpen: false,
  },
])

const toggleAccordion = (index) => {
  benefits.value = benefits.value.map((item, i) => ({
    ...item,
    isOpen: i === index ? !item.isOpen : false,
  }))
}
</script>

<style scoped>
/* Accordion transition for smooth opening and closing */
.accordion-enter-active,
.accordion-leave-active {
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
}
.accordion-enter,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
</style>
