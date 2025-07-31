<template>
  <!-- Main Container -->
  <div
    class="h-auto flex flex-col rounded-lg bg-[#EFF1D9] pb-[18px] relative w-[1440px] xl-max:w-full pt-[16px] md-max:pt-[6px] lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px]"
  >
    <div class="gap-2 flex md:hidden">
      <button
        @click="scrollLeft"
        class="nav-button absolute bottom-[210px] z-10 left-0"
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
        class="nav-button absolute bottom-[210px] z-10 right-0"
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
    <div class="mb-4 flex flex-col gap-4">
      <h2 class="text-black font-lexend text-[20px] font-bold leading-[36px]">
        Discover our current offers
      </h2>
      <p class="text-black font-noto text-[17px] font-light leading-[30.6px]">
        Explore exclusive digital assets from top creators, available for
        purchase now.
      </p>
    </div>

    <!-- Filter Buttons and Navigation -->
    <div class="flex justify-between items-center w-full">
      <!-- Filter Buttons -->

      <div class="flex gap-2 flex-wrap w-full">
        <button
          v-for="(category, index) in categories"
          :key="index"
          :class="[
            'filter-button px-3 py-1.5 flex justify-center items-center gap-2 rounded-md text-sm font-semibold transition-colors',
            selectedCategory === category
              ? 'border-[#005B52] bg-[#F5F5F5] text-black'
              : 'border-[#EEE] bg-black text-white hover:bg-gray-800',
          ]"
          @click="selectCategory(category)"
        >
          {{ category }}
        </button>
      </div>

      <!-- Navigation Buttons -->
      <div class="gap-2 md:flex hidden">
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

    <!-- Product Cards Container -->

    <div
      ref="carousel"
      class="w-full flex overflow-y-hidden no-scrollbar gap-4 relative py-4"
    >
      <div
        v-for="(product, index) in filteredProducts"
        :key="index"
        class="product-card w-[300.6px] p-[18px] h-full bg-white flex-shrink-0 flex flex-col items-start gap-2 rounded-[7px]"
      >
        <!-- Product Image -->
        <div
          class="relative w-full h-40 mb-4 bg-gray-300 rounded-lg flex items-center justify-center"
          style="box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2)"
        >
          <NuxtImg
            :src="product.image"
            alt="Product Image"
            class="object-cover w-full h-full rounded-t-lg"
            quality="80"
            format="webp"
          />
        </div>

        <!-- Creator Profile and Name below the image -->
        <div class="flex items-center gap-2 mb-2 w-full">
          <!-- Creator Avatar -->
          <div class="relative">
            <img
              :src="product.creator.avatar"
              alt="Creator Avatar"
              class="w-8 h-8 rounded-full border border-white"
            />

            <!-- Pro Badge with Yellow Circle and 'Pro' Text -->
            <span
              v-if="product.creator.pro"
              class="absolute -top-1 -right-1 flex items-center justify-center w-[15.65px] h-[15.65px] bg-[#DBF226] rounded-full border border-[#F5F5F5]"
            >
              <span
                style="
                  font-weight: 400;
                  line-height: 16px;
                  letter-spacing: 0px;
                  text-align: center;
                "
                class="text-[5px] font-bold text-black"
                >Pro</span
              >
            </span>

            <!-- Status Indicator, shown only if product.active is true -->
            <span
              v-if="product.active"
              class="absolute bottom-0 right-0 w-[9px] h-[9px] bg-[#78BF39] rounded-full border border-[#F5F5F5]"
            ></span>
          </div>

          <!-- Creator Name -->
          <span
            style="
              color: #000;
              font-style: normal;
              font-weight: 350;
              line-height: 180%; /* 23.4px */
            "
            class="text-sm flex-1"
            >{{ product.creator.name }}</span
          >

          <!-- Price Section -->
          <div class="flex gap-2 items-center">
            <!-- Original Price -->
            <span class="text-black font-light text-[14px] leading-[25.2px]"
              >${{ product.originalPrice }}</span
            >

            <!-- Discounted Price -->
            <span class="text-black font-extrabold text-[22px] leading-[39.6px]"
              >${{ product.price }}</span
            >
          </div>
        </div>

        <!-- Product Title -->
        <h3 class="text-black font-semibold text-base">
          {{ product.title }}
        </h3>

        <!-- Action Buttons -->
        <div class="flex gap-2 w-full">
          <!-- Add to Cart Button -->
          <button
            class="add-to-cart w-full flex items-center justify-center gap-1.5 py-2 rounded-lg text-black bg-[#DBF226] hover:bg-black hover:text-white hover:border hover:border-black shadow hover:shadow-[0px_4px_4px_0px_#DBF226] transition"
          >
            <!-- SVG Cart Icon -->
            <SvgCartIcon width="19" height="19" />
            <!-- Button Text -->
            <span class="hover:text-white">Add to cart</span>
          </button>

          <!-- Wishlist Button with SVG Icon -->
          <button
            class="w-[234px] flex items-center justify-center gap-[6px] text-black text-sm border border-[rgba(0,0,0,0.5)] rounded-lg group"
          >
            <!-- SVG Icon -->
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0159 14.7485C12.8326 15.0384 12.576 15.2683 12.2828 15.3983C12.0812 15.4883 11.8613 15.5383 11.6413 15.5383C11.4214 15.5383 11.2198 15.4883 11.0274 15.3983C10.8258 15.3083 10.6517 15.1783 10.5051 15.0184L6.97706 11.1993L3.45822 15.0184C3.22913 15.2683 2.94506 15.4383 2.62433 15.5083C2.31277 15.5782 1.98288 15.5383 1.68964 15.3983C1.38724 15.2683 1.13066 15.0384 0.947386 14.7485C0.773277 14.4585 0.681641 14.1086 0.681641 13.7587V3.66121C0.681641 2.84142 0.984041 2.04162 1.51553 1.45177C2.05619 0.87191 2.78928 0.541992 3.5407 0.541992H10.4134C10.7891 0.541992 11.1648 0.621972 11.5131 0.781932C11.8613 0.931895 12.1728 1.16184 12.4386 1.45177C12.7043 1.75169 12.9151 2.09161 13.0617 2.47151C13.2083 2.85142 13.2816 3.25132 13.2816 3.66121V13.7587C13.2816 14.1086 13.19 14.4585 13.0159 14.7485Z"
                class="fill-none stroke-[#005B52] group-hover:fill-[#005B52] group-hover:stroke-black"
              />
            </svg>
            <!-- Button Text -->
            Wishlist
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SvgCartIcon from '@/components/SvgIcon/SvgCartIcon.vue'

const selectedCategory = ref('All')

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
