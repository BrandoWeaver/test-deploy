<template>
  <div
    class="bg-white justify-center relative w-[1440px] xl-max:w-full pt-[16px] md-max:pt-[6px] lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px]"
  >
    <div class="gap-2 flex md:hidden">
      <button
        @click="scrollLeft"
        class="w-[34px] h-[34px] flex items-center justify-center rounded-full bg-[#eff1d9] shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-transform duration-200 ease-in-out hover:scale-105 absolute bottom-[290px] z-10 left-0"
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
        class="w-[34px] h-[34px] flex items-center justify-center rounded-full bg-[#eff1d9] shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-transform duration-200 ease-in-out hover:scale-105 absolute bottom-[290px] z-10 right-0"
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
    <div
      ref="desktopCarousel"
      class="sm:grid hidden md:grid-cols-3 mdx:grid-cols-2 sm:grid-cols-1 gap-[28px] overflow-x-auto hide-scrollbar"
    >
      <div class="flex flex-row" v-if="status && !props.browseCollection">
        <div
          v-for="i in 3"
          :key="i"
          class="collection-card h-full flex flex-row items-start gap-4 bg-white rounded-lg w-full p-4"
        >
          <div class="flex flex-col gap-3">
            <div
              class="flex gap-2 w-full lg:h-[292px] sm:h-[220px] h-[152px] overflow-hidden rounded-lg"
            >
              <div
                class="flex-1 rounded-s-lg overflow-hidden bg-gray-200 shimmer-bg max-w-[270px] w-[270px]"
              ></div>
              <div class="flex flex-col gap-2 lg:w-[160px] w-[40%]">
                <div
                  class="flex-1 overflow-hidden bg-gray-200 shimmer-bg rounded-md"
                ></div>
                <div
                  class="flex-1 overflow-hidden bg-gray-200 shimmer-bg rounded-md"
                ></div>
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <h3 class="w-3/4 h-6 bg-gray-300 rounded-md shimmer-bg"></h3>
              <div class="flex flex-wrap gap-2 overflow-hidden w-full">
                <span
                  v-for="j in 3"
                  :key="j"
                  class="px-3 py-1 rounded-md border bg-gray-200 shimmer-bg h-8 w-20"
                >
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-else
        v-for="([key, collection], index) in filteredCollections"
        :key="collection.name"
        class="h-full flex flex-col items-start gap-4 bg-white rounded-lg w-full flex-shrink-0 hover:cursor-pointer"
      >
        <div
          class="flex gap-2 w-full lg:h-[292px] sm:h-[220px] h-[152px] overflow-auto rounded-lg"
        >
          <NuxtLink
            class="flex-1 rounded-s-lg overflow-auto"
            :to="`/all-products/${collection.items[0].section.slug || 'unknown'}/${collection.items[0]?.sub_section?.slug || 'unknown'}/${collection.items[0]?.categories[0]?.slug || 'unknown'}/${collection.items[0]?.collections[0]?.slug || 'unknown'}/${collection.items[0].slug || collection.items[0].id || 'unknown'}`"
          >
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
              quality="60"
              format="webp"
            />
          </NuxtLink>
          <div class="flex flex-col gap-2 lg:w-[160px] w-[40%]">
            <NuxtLink
              class="flex-1 overflow-hidden"
              :to="`/all-products/${collection.items[1].section.slug || 'unknown'}/${collection.items[1]?.sub_section?.slug || 'unknown'}/${collection.items[1]?.categories[0]?.slug || 'unknown'}/${collection.items[1]?.collections[0]?.slug || 'unknown'}/${collection.items[1].slug || collection.items[1].id || 'unknown'}`"
            >
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
                quality="60"
                format="webp"
              />
            </NuxtLink>
            <NuxtLink
              class="flex-1 overflow-hidden"
              :to="`/all-products/${collection.items[2].section.slug || 'unknown'}/${collection.items[2]?.sub_section?.slug || 'unknown'}/${collection.items[2]?.categories[0]?.slug || 'unknown'}/${collection.items[2]?.collections[0]?.slug || 'unknown'}/${collection.items[2].slug || collection.items[2].id || 'unknown'}`"
            >
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
                quality="60"
                format="webp"
              />
            </NuxtLink>
          </div>
        </div>
        <h3 class="text-black font-lexend text-lg font-bold">
          {{ formatKey(key) }}
        </h3>
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
        class="product-card w-[300.6px] h-full bg-white flex-shrink-0 flex flex-row items-start rounded-[7px]"
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
        <h3 class="text-black font-lexend text-lg font-bold pt-4">
          {{ formatKey(key) }}
        </h3>
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  browseCollection: BROWSERCOLLECTION.Data
  status: boolean
}>()
const filteredCollections = computed(() =>
  Object.entries(props.browseCollection ?? {}).filter(
    ([_, c]) => c.items?.length > 0
  )
)
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

const selectedTags = ref('')
function toggleTag(collectionIndex: any, tag: any) {
  selectedTags.value = selectedTags.value[collectionIndex] === tag ? null : tag
}
</script>
