<template>
  <!-- Main Container -->

  <div
    class="bg-white justify-center relative w-[1440px] xl-max:w-full pt-[16px] md-max:pt-[6px] lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px]"
  >
    <div class="gap-2 flex md:hidden">
      <button
        @click="scrollLeft"
        class="nav-button absolute bottom-[290px] z-10 left-0"
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
        class="nav-button absolute bottom-[290px] z-10 right-0"
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
    <!-- Header Section -->
    <div class="flex-1 gap-x-[10px] pb-[48px]">
      <div class="flex justify-start items-center gap-2 mb-[10px]">
        <h2
          class="text-black font-lexend text-[20px] font-bold leading-[36px] border-b border-black pb-1 inline-block"
        >
          Browse by collections
        </h2>
      </div>

      <p class="text-black font-noto text-[17px] font-light leading-[30.6px]">
        Discover endless possibilities with our curated digital resources,
        perfect for all your creative needs.
      </p>
    </div>
    <!-- Collection Grid -->
    <div
      ref="desktopCarousel"
      class="sm:grid hidden md:grid-cols-3 mdx:grid-cols-2 sm:grid-cols-1 gap-[28px] overflow-x-auto"
    >
      <div
        v-for="([key, collection], index) in filteredCollections"
        :key="collection.name"
        class="collection-card h-full flex flex-col items-start gap-4 bg-white rounded-lg w-full"
      >
        <!-- Collection Images Grid -->
        <div
          class="flex gap-2 w-full lg:h-[292px] sm:h-[220px] h-[152px] overflow-hidden rounded-lg"
        >
          <div class="flex-1 rounded-s-lg overflow-hidden">
            <NuxtImg
              :src="collection.items[0]?.thumbnail || ''"
              :alt="collection.items[0]?.title || 'thortok'"
              class="w-full h-full object-cover"
              :class="{
                'bg-white hidden': !collection.items[0]?.thumbnail,
                'bg-gray-200 block': collection.items[0]?.thumbnail,
              }"
              :width="198"
              :height="292"
              quality="90"
              format="webp"
            />
          </div>

          <!-- Side images -->
          <div class="flex flex-col gap-2 lg:w-[160px] w-[40%]">
            <div class="flex-1 overflow-hidden">
              <NuxtImg
                :src="collection.items[1]?.thumbnail || ''"
                :alt="collection.items[1]?.title || 'thortok'"
                class="w-full h-full object-cover"
                :width="142"
                :height="160"
                :class="{
                  'bg-white hidden': !collection.items[1]?.thumbnail,
                  'bg-gray-200 block': collection.items[1]?.thumbnail,
                }"
                quality="90"
                format="webp"
              />
            </div>
            <div class="flex-1 overflow-hidden">
              <NuxtImg
                :src="collection.items[2]?.thumbnail || ''"
                :alt="collection.items[2]?.title || 'thortok'"
                class="w-full h-full object-cover"
                :class="{
                  'bg-white hidden': !collection.items[2]?.thumbnail,
                  'bg-gray-200 block': collection.items[2]?.thumbnail,
                }"
                :width="142"
                :height="160"
                quality="90"
                format="webp"
              />
            </div>
          </div>
        </div>

        <!-- Collection Title -->
        <h3 class="text-black font-lexend text-lg font-bold">
          {{ formatKey(key) }}
        </h3>

        <!-- Collection Tags -->
        <div class="flex flex-wrap gap-2 overflow-hidden">
          <span
            v-for="(tag, index) in collection.sub_sections"
            :key="tag"
            :class="[
              'px-3 py-1 rounded-md border text-center font-noto text-[15px] font-light cursor-pointer transition-colors duration-200',
              tag === selectedTags
                ? 'bg-[#DBF226] text-black border-[#EEE]'
                : 'bg-[#F5F5F5] text-gray-700 border-[#EEE]',
            ]"
            @click="toggleTag(index, tag)"
          >
            {{ tag.name }}
          </span>
        </div>
      </div>
    </div>

    <div
      ref="mobileCarousel"
      class="w-full overflow-y-hidden no-scrollbar relative py-4 sm:hidden flex gap-4"
    >
      <div
        v-for="([key, collection], index) in filteredCollections"
        :key="collection.name"
        class="product-card w-[300.6px] h-full bg-white flex-shrink-0 flex flex-col items-start rounded-[7px]"
      >
        <div class="flex w-full h-[150px] overflow-hidden rounded-lg">
          <div class="flex-1 bg-gray-300 rounded-s-lg overflow-hidden">
            <NuxtImg
              :src="collection.items[0]?.thumbnail || ''"
              alt="Main Image"
              class="w-full h-full object-cover"
              format="webp"
            />
          </div>

          <!-- Side images -->
          <div class="flex flex-col gap-2 w-[100px] h-[150px]">
            <div class="bg-gray-200 flex-1 rounded-e-lg overflow-hidden">
              <NuxtImg
                :src="collection.items[1]?.thumbnail || ''"
                alt="Side Image 1"
                class="w-full h-full object-cover"
                format="webp"
              />
            </div>
            <div class="bg-gray-200 flex-1 rounded-e-lg overflow-hidden">
              <NuxtImg
                :src="collection.items[2]?.thumbnail || ''"
                alt="Side Image 2"
                class="w-full h-full object-cover"
                format="webp"
              />
            </div>
          </div>
        </div>

        <!-- Collection Title -->
        <h3 class="text-black font-lexend text-lg font-bold pt-4">
          {{ formatKey(key) }}
        </h3>

        <!-- Collection Tags -->
        <div class="flex flex-wrap gap-2 overflow-hidden pt-4">
          <span
            v-for="(tag, index) in collection.sub_sections"
            :key="tag"
            :class="[
              'px-3 py-1 rounded-md border text-center font-noto text-[15px] font-light cursor-pointer transition-colors duration-200',
              tag === selectedTags
                ? 'bg-[#DBF226] text-black border-[#EEE]'
                : 'bg-gray-100 text-gray-700 border-[#EEE]',
            ]"
            @click="toggleTag(index, tag)"
          >
            {{ tag.name }}
          </span>
        </div>

        <!-- Creator Profile and Name below the image -->

        <!-- Action Buttons -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Import images
import m1 from '@/assets/images/collections/m1.png'
import s1 from '@/assets/images/collections/s1.png'
import s2 from '@/assets/images/collections/s2.png'
import m2 from '@/assets/images/collections/m2.png'
import s3 from '@/assets/images/collections/s3.png'
import s4 from '@/assets/images/collections/s4.png'
import m3 from '@/assets/images/collections/m3.png'
import s5 from '@/assets/images/collections/s5.png'
import s6 from '@/assets/images/collections/s6.png'
import m4 from '@/assets/images/collections/m4.png'
import s7 from '@/assets/images/collections/s7.png'
import s8 from '@/assets/images/collections/s8.png'
import m5 from '@/assets/images/collections/m5.png'
import s9 from '@/assets/images/collections/s9.png'
import s10 from '@/assets/images/collections/s10.png'
import m6 from '@/assets/images/collections/m6.png'
import s11 from '@/assets/images/collections/s11.png'
import s12 from '@/assets/images/collections/s12.png'
import BrowseCollection from '~/components/body_block/BrowseCollection.vue'
import { API } from '~/constants/apiEndpoints'
import HelpCenterList from '../help_center/HelpCenterList.vue'
import { useApi } from '~/composables/custom-fetch-api/useApi'
const config = useRuntimeConfig()
const { locale } = useI18n()
const { data: browseCollectionData } = await useApi<BROWSERCOLLECTION.Root>(
  () =>
    API.HOME.LIST_COLLECTION.replace(':type', `${config.public.type}`)
      .replace(':version', `${config.public.version}`)
      .replace(':lang', locale.value),
  {
    method: 'GET',
    watch: [locale],
  }
)
const filteredCollections = computed(() =>
  Object.entries(browseCollectionData.value?.data ?? {}).filter(
    ([_, c]) => c.items?.length > 0
  )
)
// console.log('filteredCollections', filteredCollections)
function formatKey(key: string) {
  return key.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
}
const desktopCarousel = ref<HTMLElement | null>(null)
const mobileCarousel = ref<HTMLElement | null>(null)

function scrollLeft() {
  if (mobileCarousel.value) {
    mobileCarousel.value.scrollBy({ left: -300, behavior: 'smooth' })
  }
}

function scrollRight() {
  if (mobileCarousel.value) {
    mobileCarousel.value.scrollBy({ left: 300, behavior: 'smooth' })
  }
}

const collections = ref([
  {
    title: 'Graphics',
    tags: ['Icons', 'PSD', 'Vectors', 'Templates', 'Mockups'],
    mainImage: m1,
    sideImage1: s1,
    sideImage2: s2,
  },
  {
    title: 'Photos',
    tags: [
      'Culture & Tradition',
      'Products',
      'Food & Beverages',
      'Peoples',
      'Animals',
      'Lifestyle',
      'Nature & Place',
    ],
    mainImage: m2,
    sideImage1: s3,
    sideImage2: s4,
  },
  {
    title: 'Videos',
    tags: [
      'Culture & Tradition',
      'Products',
      'Food & Beverages',
      'Peoples',
      'Animals',
      'Lifestyle',
      'Nature & Place',
    ],
    mainImage: m3,
    sideImage1: s5,
    sideImage2: s6,
  },
  {
    title: 'Audio',
    tags: ['Genres', 'Products', 'Moods', 'Themes'],
    mainImage: m4,
    sideImage1: s7,
    sideImage2: s8,
  },
  {
    title: 'Sound Effects',
    tags: ['Genres', 'Products', 'Moods', 'Themes'],
    mainImage: m5,
    sideImage1: s9,
    sideImage2: s10,
  },
  {
    title: '3D Elements',
    tags: [
      'Culture & Tradition',
      'Products',
      'Food & Beverages',
      'Peoples',
      'Animals',
      'Lifestyle',
      'Nature & Place',
    ],
    mainImage: m6,
    sideImage1: s11,
    sideImage2: s12,
  },
])

// State to track selected tags for each collection
const selectedTags = ref('')

// // Function to set or toggle the selected tag
function toggleTag(collectionIndex: any, tag: any) {
  // Toggle the selected tag for each collection separately
  selectedTags.value = selectedTags.value[collectionIndex] === tag ? null : tag
}
</script>

<style scoped>
.nav-button {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #eff1d9;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}
/* .collection-card {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
.collection-card:hover {
  transform: translateY(-4px);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
} */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
