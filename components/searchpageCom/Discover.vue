<template>
  <!-- Main Container -->
  <div
    class="flex flex-col gap-2 pt-[24px] pb-[32px] rounded-lg bg-[#EFF1D9] mx-auto w-full"
  >
    <!-- Header Section -->
    <div
      class="mb-6 flex lg:items-center items-end gap-6 justify-between px-[24px]"
    >
      <div class="flex flex-col lg:flex-row gap-4">
        <h2
          class="text-black font-lexend lg:text-[20px] md:text-[18px] sm:text:[17px] text:[16px] font-bold leading-[36px]"
        >
          Discover our current offers:
        </h2>
        <div class="flex gap-2 justify-between items-center">
          <div class="flex gap-2 items-center flex-wrap">
            <button
              v-for="(dis, index) in discover"
              :key="index"
              :class="[
                index === 0
                  ? 'bg-primary-light text-primary-dark'
                  : 'bg-common-main text-grey-100',
                'px-4 py-2 flex justify-center items-center gap-2 font-[100] rounded-[4px] lg:text-[15px] md:text-[14px] sm:text-[12px] text-[11px]',
              ]"
            >
              <span v-if="dis.icon === true" class="text-green-dark">{{
                dis.label
              }}</span>

              <span v-else="dis.icon === false" class="">{{ dis.label }}</span>
              <svg
                v-show="dis.icon === true"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
              >
                <g clip-path="url(#clip0_1_3701)">
                  <path
                    d="M13.4867 6.28102L11.2292 4.00019C11.1749 3.94551 11.1104 3.90211 11.0393 3.8725C10.9683 3.84288 10.892 3.82764 10.815 3.82764C10.738 3.82764 10.6617 3.84288 10.5907 3.8725C10.5196 3.90211 10.4551 3.94551 10.4008 4.00019C10.2922 4.10948 10.2312 4.25733 10.2312 4.41144C10.2312 4.56554 10.2922 4.71339 10.4008 4.82269L12.4775 6.91685H0.583333C0.428624 6.91685 0.280251 6.97831 0.170854 7.08771C0.0614582 7.1971 0 7.34548 0 7.50019H0C0 7.6549 0.0614582 7.80327 0.170854 7.91266C0.280251 8.02206 0.428624 8.08352 0.583333 8.08352H12.5125L10.4008 10.1894C10.3462 10.2436 10.3028 10.3081 10.2731 10.3792C10.2435 10.4503 10.2283 10.5265 10.2283 10.6035C10.2283 10.6805 10.2435 10.7568 10.2731 10.8279C10.3028 10.8989 10.3462 10.9635 10.4008 11.0177C10.4551 11.0724 10.5196 11.1158 10.5907 11.1454C10.6617 11.175 10.738 11.1902 10.815 11.1902C10.892 11.1902 10.9683 11.175 11.0393 11.1454C11.1104 11.1158 11.1749 11.0724 11.2292 11.0177L13.4867 8.75435C13.8144 8.42623 13.9985 7.98144 13.9985 7.51769C13.9985 7.05393 13.8144 6.60914 13.4867 6.28102Z"
                    fill="#005B52"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_3701">
                    <rect
                      width="14"
                      height="14"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="hidden md:flex items-center gap-4 justify-between">
        <div class="flex gap-2">
          <button @click="scrollLeft" class="nav-button">
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
          <button @click="scrollRight" class="nav-button">
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

    <div class="relative">
      <div class="md:hidden flex items-center gap-4 justify-between">
        <div class="flex gap-2">
          <button
            @click="scrollLeft"
            class="nav-button top-[130px] z-10 left-0 absolute"
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
            class="nav-button top-[130px] z-10 right-0 absolute"
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

      <!-- card -->
      <div
        ref="carousel"
        class="relative w-full flex overflow-y-hidden no-scrollbar gap-4 px-[24px]"
      >
        <div
          v-for="(product, index) in filteredProducts"
          :key="index"
          class="w-[300px] p-[18px] bg-white rounded-lg shadow-md flex-shrink-0 flex flex-col items-start gap-2"
        >
          <div
            class="relative w-full mb-4 bg-gray-300 rounded-lg flex items-center justify-center"
            style="height: 200px; width: 100%"
          >
            <NuxtImg
              :src="product.image"
              alt="Product Image"
              class="object-cover absolute top-0 left-0 w-full h-full rounded-t-lg"
              format="webp"
              quality="80"
            />
          </div>

          <div class="flex items-center gap-2 mb-2 w-full">
            <div class="relative">
              <img
                :src="product.creator.avatar"
                alt="Creator Avatar"
                class="w-8 h-8 rounded-full border border-white"
              />

              <span
                v-if="product.creator.pro"
                class="absolute -top-1 -right-1 flex items-center justify-center w-[16px] h-[16px] bg-[#DBF226] rounded-full border border-[#F5F5F5]"
              >
                <span class="text-[8px] font-bold text-black">Pro</span>
              </span>

              <span
                v-if="product.active"
                class="absolute bottom-0 right-0 w-[9px] bg-[#78BF39] rounded-full border border-[#F5F5F5]"
              ></span>
            </div>

            <span class="text-sm text-gray-800 font-semibold flex-1">{{
              product.creator.name
            }}</span>

            <div class="flex gap-2 items-center">
              <span class="text-black font-light text-[14px] leading-[25.2px]"
                >${{ product.originalPrice }}</span
              >

              <span
                class="text-black font-extrabold text-[22px] leading-[39.6px]"
                >${{ product.price }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { discover } from '~/utils/discover'
import { NuxtImg } from '#components'

const selectedCategory = ref('All')

// Function to get a random placeholder

// Filter products based on selected category
const filteredProducts = computed(() => {
  return selectedCategory.value === 'All'
    ? products.value
    : products.value.filter(
        (product) => product.category === selectedCategory.value
      )
})

function selectCategory(category: any) {
  selectedCategory.value = category
}

const carousel = ref<any>(null)

function scrollLeft() {
  if (carousel.value) {
    carousel.value.scrollBy({ left: -300, behavior: 'smooth' })
  }
}

function scrollRight() {
  if (carousel.value) {
    carousel.value.scrollBy({ left: 300, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.nav-button {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}
.nav-button:hover {
  transform: scale(1.05);
}
</style>
