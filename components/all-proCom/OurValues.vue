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
                Our Values
              </div>
            </div>
            <div
              class="text-black text-[12px] esm:text-[13px] eesm:text-[16px] md:text-[18px] mt-2 lg:text-[17px] lg:leading-[30.60px]"
            >
              We are guided by a set of core values that reflect our mission and
              commitment to creativity, culture, and community:
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
              src="/img/dummy2.png"
              alt="Image placeholder"
            />
          </div>
        </div>
      </div>

      <!-- Image Placeholder -->
      <div
        class="xl:flex xl-max:flex lg-max:hidden md-max:hidden sm-max:hidden w-full h-[640px]"
      >
        <img
          class="w-full h-full object-cover"
          src="/img/dummy2.png"
          alt="Image placeholder"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import Add from '~/icons/value/Add.vue'
import Subtract from '~/icons/value/Subtract.vue'

const benefits = [
  {
    title: 'Cultural Authenticity',
    description:
      'We celebrate the unique richness of Cambodian culture by offering digital assets deeply rooted in tradition and modern aesthetics. From intricate traditional patterns to contemporary designs, we ensure our resources authentically represent Cambodia’s heritage.',
  },
  {
    title: 'Creativity and Accessibility',
    description:
      'We believe that every creator deserves access to tools that fuel their imagination. Thortok simplifies the creative process, making high-quality resources accessible to all, empowering both budding and experienced designers.',
  },
  {
    title: 'Community Support',
    description:
      'Thortok thrives on a community-centric approach. By spotlighting local and international talent, we provide fair monetization opportunities and a platform for Cambodian designers to gain recognition and contribute to a growing creative network.',
  },
  {
    title: 'Cultural Preservation',
    description:
      'Rooted in Cambodia, we take pride in preserving and showcasing Asian art and culture. Our platform bridges the beauty of Cambodia’s past with the digital present, ensuring its cultural heritage is both honored and shared globally.',
  },
  {
    title: 'Innovation and Collaboration',
    description:
      'Thortok isn’t just a platform; it’s a community where creative minds come together. Through innovation and shared ideas, we foster collaboration that inspires groundbreaking projects and enriches the digital creative ecosystem.',
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
