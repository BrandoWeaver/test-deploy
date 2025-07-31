<template>
  <section
    class="sm:py-5 sm:pr-[36px] flex md:flex-row flex-col justify-between w-[1440px] xl-max:w-full pt-[16px] md-max:pt-[6px] lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px]"
  >
    <div class="mt-8">
      <div class="mb-6 flex flex-col gap-[24px]">
        <h2 class="text-[16px] md:text-[20px] font-bold">
          Explore Our Graphics Collections
        </h2>
        <p
          class="text-[12px] lg:text-[17px] md:text-[15px] sm:text-[14px] lg:leading-[27px]"
        >
          At Thortok, we believe that the right visuals have the power to
          transform your projects. Our Graphics section is crafted to offer
          creators a wide range of resources, from sleek icons to customizable
          templates. We aim to inspire your creativity while helping you build
          unique and authentic designs.
        </p>
        <p class="text-[12px] lg:text-[17px] md:text-[15px] sm:text-[14px]">
          Our Graphics Categories
        </p>
        <p
          class="text-[12px] lg:text-[17px] md:text-[15px] sm:text-[14px] lg:leading-[27px]"
        >
          Each category in the Graphics section is designed to meet the specific
          needs of creators and designers. Get a preview of what’s possible and
          find the inspiration you need for your projects.
        </p>
      </div>

      <div class="flex flex-wrap gap-6">
        <!-- Left Div -->

        <!-- Middle Div -->
        <div class="lg:w-[20%] md:w-[100%] w-full lg:max-w-[220px] xl:w-[14vw]">
          <div v-for="(tab, index) in tabs" :key="index" class="cursor-pointer">
            <!-- Tab Header -->
            <div
              @click="selectTab(tab)"
              :class="[
                'border-[#EFF1D9] border py-3 px-4 flex items-center justify-between rounded-[6px] ',
                selectedTab === tab
                  ? 'bg-[#DBF226] hover:bg-[#DBF226]'
                  : 'hover:bg-[#eff1d9]',
                { 'mt-2': index },
              ]"
            >
              <span class="flex items-center gap-2 text-nowrap mr-2">
                <component :is="tab.Icon" class="text-black" />
                <span>{{ tab.title }}</span>
              </span>
              <span
                :class="[
                  selectedTab === tab
                    ? 'block rotate-90 md:rotate-0'
                    : 'md:hidden block',
                ]"
              >
                <RightArrow class="text-black" />
              </span>
            </div>

            <!-- Accordion Content -->
            <div v-if="selectedTab === tab" class="my-4 mb-2 md:hidden p-4">
              <h3 class="text-[18px] font-semibold mb-[14px]">
                {{ selectedTab?.data.title || 'Select a tab' }}
              </h3>
              <p class="text-[14px] leading-[25.2px] text-[#005b52] mb-4">
                {{ selectedTab?.data.text || '' }}
              </p>
              <h3 class="my-6 text-[18px] leading-5 font-semibold">
                Our Categories
              </h3>
              <ul class="flex flex-wrap gap-2">
                <li
                  v-for="(category, index) in selectedTab?.data.categories ||
                  []"
                  :key="index"
                  @click="selectCategory(category)"
                  :class="[
                    'rounded-[4px] border border-[#EEE] px-3 py-[6px] text-[12px] cursor-pointer ',
                    isCategorySelected(category)
                      ? 'bg-[#DBF226] hover:bg-[#DBF226]'
                      : 'bg-[#F5F5F5] hover:bg-[#eff1d9]',
                  ]"
                >
                  {{ category }}
                </li>
              </ul>
              <div class="text-[#005B52] flex items-center mt-6 gap-[10px]">
                <p class="leading-8 font-bold cursor-pointer">See more</p>
                <RightLongArrow class="w-[18px] h-[18px] mt-1" />
              </div>
            </div>
          </div>
        </div>

        <!-- Right Div (Hidden on small screens) -->
        <div
          class="flex-1 lg:w-[40%] md:w-full w-full p-2 rounded-lg min-w-[300px] hidden md:block"
        >
          <!-- <h3 class="text-[18px] font-semibold mb-[14px]">
            {{ selectedTab?.data.title || 'Select a tab' }}
          </h3> -->
          <p class="text-[14px] leading-[25.2px] text-[#005b52] mb-4">
            {{ selectedTab?.data.text || '' }}
          </p>
          <h3 class="my-6 text-[18px] leading-5 font-[400]">
            Our Subcategories
          </h3>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="(category, index) in selectedTab?.data.categories || []"
              :key="index"
              @click="selectCategory(category)"
              :class="[
                'rounded-[4px] border border-[#EEE] px-3 py-[6px] text-[12px] cursor-pointer ',
                isCategorySelected(category)
                  ? 'bg-[#DBF226] hover:bg-[#DBF226]'
                  : 'bg-[#F5F5F5] hover:bg-[#eff1d9]',
              ]"
            >
              {{ category }}
            </li>
          </ul>

          <div class="text-[#005B52] flex items-center my-6 gap-[10px]">
            <p class="leading-8 font-bold cursor-pointer">See more</p>
            <RightLongArrow class="w-[18px] h-[18px] mt-1" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex lg:flex-row md:flex-col flex-row lg:gap-[24px] gap-[14px] rounded-lg overflow-hidden mx-auto w-full relative justify-center"
    >
      <!-- Centered Text -->
      <div
        class="absolute w-[178px] h-[178px] bg-[#DBF226] px-[30px] py-[52px] font-[400] text-[22px] rounded-[90px] text-center"
        style="
          border: 8.919px solid #fff;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        "
      >
        Black Outline
      </div>

      <!-- Left Box -->
      <div
        class="lg:w-[318px] lg:h-[528px] md:w-[300px] w-full h-[401px] flex justify-center items-center rounded-[10px]"
        style="background: #0000001a"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
        >
          <g clip-path="url(#clip0_8_45713)">
            <path
              d="M95 0H25C18.372 0.00793929 12.0178 2.64441 7.3311 7.3311C2.64441 12.0178 0.00793929 18.372 0 25L0 95C0.00793929 101.628 2.64441 107.982 7.3311 112.669C12.0178 117.356 18.372 119.992 25 120H95C101.628 119.992 107.982 117.356 112.669 112.669C117.356 107.982 119.992 101.628 120 95V25C119.992 18.372 117.356 12.0178 112.669 7.3311C107.982 2.64441 101.628 0.00793929 95 0V0ZM25 10H95C98.9782 10 102.794 11.5804 105.607 14.3934C108.42 17.2064 110 21.0218 110 25V95C109.991 97.2274 109.479 99.424 108.5 101.425L62.685 55.61C60.3634 53.2878 57.6072 51.4458 54.5736 50.189C51.54 48.9322 48.2886 48.2853 45.005 48.2853C41.7214 48.2853 38.47 48.9322 35.4364 50.189C32.4028 51.4458 29.6466 53.2878 27.325 55.61L10 72.93V25C10 21.0218 11.5804 17.2064 14.3934 14.3934C17.2064 11.5804 21.0218 10 25 10ZM25 110C21.0218 110 17.2064 108.42 14.3934 105.607C11.5804 102.794 10 98.9782 10 95V87.07L34.39 62.68C35.783 61.2861 37.437 60.1804 39.2575 59.4259C41.078 58.6715 43.0294 58.2832 45 58.2832C46.9706 58.2832 48.922 58.6715 50.7425 59.4259C52.563 60.1804 54.217 61.2861 55.61 62.68L101.425 108.5C99.424 109.479 97.2274 109.991 95 110H25Z"
              fill="black"
              fill-opacity="0.1"
            />
            <path
              d="M80.0005 52.4981C83.4617 52.4981 86.8451 51.4717 89.723 49.5488C92.6008 47.6258 94.8438 44.8927 96.1684 41.695C97.4929 38.4973 97.8395 34.9786 97.1642 31.584C96.489 28.1893 94.8223 25.0711 92.3749 22.6237C89.9274 20.1763 86.8092 18.5096 83.4146 17.8343C80.0199 17.1591 76.5012 17.5056 73.3035 18.8302C70.1058 20.1547 67.3727 22.3977 65.4498 25.2756C63.5268 28.1534 62.5005 31.5369 62.5005 34.9981C62.5005 39.6393 64.3442 44.0905 67.6261 47.3724C70.908 50.6543 75.3592 52.4981 80.0005 52.4981ZM80.0005 27.4981C81.4838 27.4981 82.9339 27.9379 84.1673 28.762C85.4006 29.5861 86.3619 30.7575 86.9296 32.1279C87.4972 33.4984 87.6458 35.0064 87.3564 36.4612C87.067 37.9161 86.3527 39.2525 85.3038 40.3014C84.2549 41.3503 82.9185 42.0646 81.4637 42.3539C80.0088 42.6433 78.5008 42.4948 77.1304 41.9272C75.7599 41.3595 74.5886 40.3982 73.7645 39.1648C72.9404 37.9315 72.5005 36.4814 72.5005 34.9981C72.5005 33.0089 73.2907 31.1013 74.6972 29.6948C76.1037 28.2882 78.0114 27.4981 80.0005 27.4981Z"
              fill="black"
              fill-opacity="0.1"
            />
          </g>
          <defs>
            <clipPath id="clip0_8_45713">
              <rect width="120" height="120" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <!-- Right Box -->
      <div
        class="lg:w-[318px] lg:h-[528px] md:w-[300px] w-full h-[401px] flex justify-center items-center rounded-[10px] self-end"
        style="background: #0000001a"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
        >
          <g clip-path="url(#clip0_8_45713)">
            <path
              d="M95 0H25C18.372 0.00793929 12.0178 2.64441 7.3311 7.3311C2.64441 12.0178 0.00793929 18.372 0 25L0 95C0.00793929 101.628 2.64441 107.982 7.3311 112.669C12.0178 117.356 18.372 119.992 25 120H95C101.628 119.992 107.982 117.356 112.669 112.669C117.356 107.982 119.992 101.628 120 95V25C119.992 18.372 117.356 12.0178 112.669 7.3311C107.982 2.64441 101.628 0.00793929 95 0V0ZM25 10H95C98.9782 10 102.794 11.5804 105.607 14.3934C108.42 17.2064 110 21.0218 110 25V95C109.991 97.2274 109.479 99.424 108.5 101.425L62.685 55.61C60.3634 53.2878 57.6072 51.4458 54.5736 50.189C51.54 48.9322 48.2886 48.2853 45.005 48.2853C41.7214 48.2853 38.47 48.9322 35.4364 50.189C32.4028 51.4458 29.6466 53.2878 27.325 55.61L10 72.93V25C10 21.0218 11.5804 17.2064 14.3934 14.3934C17.2064 11.5804 21.0218 10 25 10ZM25 110C21.0218 110 17.2064 108.42 14.3934 105.607C11.5804 102.794 10 98.9782 10 95V87.07L34.39 62.68C35.783 61.2861 37.437 60.1804 39.2575 59.4259C41.078 58.6715 43.0294 58.2832 45 58.2832C46.9706 58.2832 48.922 58.6715 50.7425 59.4259C52.563 60.1804 54.217 61.2861 55.61 62.68L101.425 108.5C99.424 109.479 97.2274 109.991 95 110H25Z"
              fill="black"
              fill-opacity="0.1"
            />
            <path
              d="M80.0005 52.4981C83.4617 52.4981 86.8451 51.4717 89.723 49.5488C92.6008 47.6258 94.8438 44.8927 96.1684 41.695C97.4929 38.4973 97.8395 34.9786 97.1642 31.584C96.489 28.1893 94.8223 25.0711 92.3749 22.6237C89.9274 20.1763 86.8092 18.5096 83.4146 17.8343C80.0199 17.1591 76.5012 17.5056 73.3035 18.8302C70.1058 20.1547 67.3727 22.3977 65.4498 25.2756C63.5268 28.1534 62.5005 31.5369 62.5005 34.9981C62.5005 39.6393 64.3442 44.0905 67.6261 47.3724C70.908 50.6543 75.3592 52.4981 80.0005 52.4981ZM80.0005 27.4981C81.4838 27.4981 82.9339 27.9379 84.1673 28.762C85.4006 29.5861 86.3619 30.7575 86.9296 32.1279C87.4972 33.4984 87.6458 35.0064 87.3564 36.4612C87.067 37.9161 86.3527 39.2525 85.3038 40.3014C84.2549 41.3503 82.9185 42.0646 81.4637 42.3539C80.0088 42.6433 78.5008 42.4948 77.1304 41.9272C75.7599 41.3595 74.5886 40.3982 73.7645 39.1648C72.9404 37.9315 72.5005 36.4814 72.5005 34.9981C72.5005 33.0089 73.2907 31.1013 74.6972 29.6948C76.1037 28.2882 78.0114 27.4981 80.0005 27.4981Z"
              fill="black"
              fill-opacity="0.1"
            />
          </g>
          <defs>
            <clipPath id="clip0_8_45713">
              <rect width="120" height="120" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import RightArrow from '../../icons/RightArrow.vue'
import Graphics from '../../icons/Graphics.vue'
import Picture from '../../icons/Picture.vue'
import Fonts from '../../icons/Fonts.vue'
import Videos from '../../icons/Videos.vue'
import Audio from '../../icons/Audio.vue'
import SoundFile from '../../icons/SoundFile.vue'
import Box3d from '../../icons/Box3d.vue'
import Icons from '../../icons/Icons.vue'
import Psd from '../../icons/Psd.vue'
import Vectors from '../../icons/Vectors.vue'
import Templates from '../../icons/Templates.vue'
import Mockups from '../../icons/Mockups.vue'

import RightLongArrow from '../../icons/RightLongArrow.vue'

const tabs = ref([
  {
    Icon: Icons,
    title: 'Icons',
    data: {
      img1: '/img/all_product_graphics1.png',
      img2: '/img/all_product_graphics2.png',
      img3: '/img/all_product_graphic3.png',
      title: 'Visual Foundations for Every Idea',
      text: 'A vast collection of icons in various styles, from minimal black to vibrant colors, designed to enrich your interfaces and visuals.',
      categories: [
        'Black Outline ',
        'Black Fill',
        'Gradient',
        'Hand Drawn',
        'Lineal Color',
        'Color Fill',
      ],
    },
  },
  {
    Icon: Psd,
    title: 'PSD',
    data: {
      img1: '/img/all_product_photos1.png',
      img2: '/img/all_product_photos2.png',
      img3: '/img/all_product_photos3.png',
      title: 'Capture Realism and Beauty',
      text: 'A vast collection of icons in various styles, from minimal black to vibrant colors, designed to enrich your interfaces and visuals.',
      categories: [
        'Culture & Tradition',
        'Products',
        'Food & Beverages',
        'Peoples',
        'Animals',
        'Lifestyle',
        'Nature & Place',
      ],
    },
  },
  {
    Icon: Vectors,
    title: 'Vectors',
    data: {
      img1: '/img/all_product_grid1.png',
      img2: '/img/all_product_grid2.png',
      img3: '/img/all_product_grid3.png',
      title: 'The Voice of Your Visual Message',
      text: 'Typography can make or break a design. Our Fonts section offers curated options in various styles—from Serif to Sans Serif and Script, each designed to convey the tone and character of any project, bringing words to life on the screen.',
      categories: [
        'Serif',
        'Sans-serif',
        'Script',
        'Slab Serif',
        'Display',
        'Monospaced-width',
        'Variable',
      ],
    },
  },
  {
    Icon: Templates,
    title: 'Templates',
    data: {
      img1: '/img/all_product_videos1.png',
      img2: '/img/all_product_videos2.png',
      img3: '/img/all_product_videos3.png',
      title: 'Motion Brings Impact',
      text: 'For dynamic storytelling, Thortok’s Video section provides high-quality footage that adds depth and movement to any creation. Creators can find footage that enhances the narrative, engages the audience, and makes projects memorable.',
      categories: [
        'Culture & Tradition',
        'Products',
        'Food & Beverages',
        'Peoples',
        'Animals',
        'Lifestyle',
        'Nature & Place',
      ],
    },
  },
  {
    Icon: Mockups,
    title: 'Mockups',
    data: {
      img1: '/img/all_product_audio1.png',
      img2: '/img/all_product_audio2.png',
      img3: '/img/all_product_audio3.png',
      title: 'Amplify the Experience',
      text: 'Sound brings emotion and immersion. Our Audio section contains a range of tracks suited for various moods and styles, from soft ambient tunes to high-energy tracks, making it easy for creators to find the perfect soundtrack.',
      categories: ['Genres', 'Moods', 'Themes'],
    },
  },
])

const selectedTab = ref(tabs.value[0])
const selectedCategories = ref([])

function selectTab(tab) {
  selectedTab.value = tab
  selectedCategories.value = [] // Clear selected categories when switching tabs
}

function selectCategory(category) {
  const index = selectedCategories.value.findIndex((cat) => cat === category)
  if (index === -1) {
    // Add category if not already selected
    selectedCategories.value.push(category)
  } else {
    // Remove category if already selected
    selectedCategories.value.splice(index, 1)
  }
}

function isCategorySelected(category) {
  return selectedCategories.value.includes(category)
}
</script>

<style scoped></style>
