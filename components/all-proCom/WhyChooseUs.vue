<template>
  <div
    class="relative py-5 sm:px-6 sm:rounded-xl mt-8 w-[1440px] xl-max:w-full pt-[48px] md-max:pt-[6px] lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px]"
  >
    <div class="flex xl:gap-11 xl-max:gap-8 lg-max:gap-8 w-full">
      <div class="flex-col justify-start items-start gap-6 inline-flex w-full">
        <!-- Section Title and Description -->
        <div
          class="self-stretch flex-col essm:flex-row lg:flex-col justify-center items-start gap-3.5 flex"
        >
          <div class="flex flex-col w-full eesm:w-1/2 md:w-full">
            <div
              class="self-stretch justify-start items-center gap-2.5 inline-flex"
            >
              <div
                class="text-[#000] xl:text-[30px] lg:text-[24px] md:text-[20px] sm:text-[20px] font-lexend font-medium leading-6 lg:leading-[54px]"
              >
                Why Choose Thortok for Your Graphic Needs
              </div>
            </div>
            <div
              class="text-black text-[14px] leading-7 mt-4"
            >
              At Thortok, we believe every creator deserves access to premium visual resources that empower their full creative potential. We’ve crafted a rich, diverse, and inclusive platform where graphics aren’t just visual assets, but true sources of inspiration and value. Discover why Thortok is the perfect choice for unique, impactful creations.
            </div>
          </div>
        </div>
        <div class="w-full hidden sm-495:block mdx:block mdx-max:block">
          <img
            class="object-cover w-full sm:h-[250px] md:h-[300px] lg:h-full"
            src="/img/dummy2.png"
            alt="Image placeholder"
          />
        </div>
        <!-- Benefits Section with Headless UI Disclosure -->
        <div
          class="grid grid-cols-2 sm-495:grid-cols-1 lg:grid-cols-1 mdx:grid-cols-1 mdx-max:grid-cols-1 gap-8 w-full"
        >
          <div>
            <div
              class="self-stretch flex-col justify-start items-start gap-3.5 flex w-full h-full"
            >
              <Disclosure v-for="(item, index) in benefits" :key="index">
                <div
                  @click="toggleAccordion(index)"
                  class="h-full p-3 md:px-6 md:py-3.5 bg-[#eff1d9] hover:border-[#dbf226] rounded-[10px] border-2 w-full"
                  :class="{
                    'border-[#dbf226]': activeIndex === index,
                    'border-transparent': activeIndex !== index,
                  }"
                >
                  <DisclosureButton
                    class="flex justify-between items-center w-full text-left"
                  >
                    <span
                      class="text-black text-xs md:text-[17px] font-bold leading-[30.60px]"
                    >
                      {{ item.title }}
                    </span>
                    <span
                      class="text-2xl transition-transform duration-300 flex justify-center items-center w-8 h-8 bg-white rounded-full border border-gray-300"
                      :class="{
                        'rotate-180 bg-[#dbf226] border-[#b5d80f]':
                          activeIndex === index,
                      }"
                    >
                      <span v-if="activeIndex === index">
                        <Subtract />
                      </span>
                      <span v-else> <Add /></span>
                    </span>
                  </DisclosureButton>

                  <div
                    v-show="activeIndex === index"
                    class="overflow-hidden transition-all duration-300 ease-in-out justify-start items-start"
                  >
                    <p
                      class="text-black xl:text-[14px] xl-max:tex-[14px] lg-max:text-[13px] md-max:text-[11px] w-[95%] sm-max:text-[11px] py-2"
                    >
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </Disclosure>
            </div>
          </div>

          <div
            class="w-full block sm-495:hidden lg:hidden mdx:hidden mdx-max:hidden"
          >
            <img
              class="w-full h-full object-cover"
              src="/images/why-choose-us.png"
              alt="Image placeholder"
            />
          </div>
        </div>
      </div>

      <!-- Image Placeholder -->
      <div class="w-[50%]">
        <NuxtImg
            src="/images/why-choose-us.png" 
            alt="Why Choose Us"
            class="w-full"
            format="webp"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Disclosure, DisclosureButton } from '@headlessui/vue'
import Add from '~/icons/value/Add.vue'
import Subtract from '~/icons/value/Subtract.vue'

const benefits = [
  {
    title: 'A Comprehensive and Diverse Collection',
    description:
      'Access a vast array of styles and formats, from modern icons to refined templates and customizable PSDs, tailored for all project types.'
    },
  {
    title: 'Premium, Professional Quality',
    description:
      'Our graphics are carefully curated to meet professional standards, ensuring high-quality resources ready for your top-tier projects.'
    },
  {
    title: 'Encouragement of Creativity and Originality',
    description:
      'Thortok offers customizable visual elements that allow creators to innovate, experiment, and produce authentic works that reflect their unique vision.'
    },
  {
    title: 'Celebration of Culture and Tradition',
    description:
      'Our collections include designs inspired by Southeast Asian art, helping to celebrate and preserve rich cultural heritage while enhancing creative projects.'
    },
  {
    title: 'Support & Monetization for Creators',
    description:
      'By providing monetization opportunities, Thortok supports creators on their journey, allowing them to turn their passion into a sustainable income while showcasing their talent to a global community.' 
    },
]

// Track which accordion is open
const activeIndex = ref(null)

// Toggle function
const toggleAccordion = (index: any) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
/* Smooth transition for accordion */
.rotate-180 {
  transform: rotate(180deg);
}
</style>
