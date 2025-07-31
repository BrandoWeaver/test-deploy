<template>
  <div class="w-full mx-auto bg-[#EFF1D9] py-8 relative rounded-[10px]">
    <!-- Header Section -->
    <div class="md-max:px-4 mb-6 md-max:space-y-4">
      <h2
        class="text-black font-lexend md-max:text-[17px] sm-max:text-[16px] font-bold md-max:leading-[30.6px] sm-max:leading-[28.8px]"
      >
        Discover our current offers
      </h2>
      <p
        class="text-black font-noto md-max:text-[14px] font-light leading-[25.2px] sm-max:text-[13px] sm-max:leading-[23.4px]"
      >
        Explore exclusive digital assets from top creators, available for
        purchase now.
      </p>
    </div>

    <!-- Filter Buttons -->
    <div class="flex flex-wrap gap-2 px-6 md-max:px-4 mb-6">
      <button
        v-for="(category, index) in categories"
        :key="index"
        :class="[
          'px-[12px] py-[6px] rounded-md md-max:text-[12px] md-max:leading-[21.6px] sm-max:text-[11px] sm-max:leading-[19.8px] font-semibold transition-colors',
          selectedCategory === category
            ? 'rounded-[4px] border border-[#005B52] bg-[#F5F5F5]'
            : 'border-[#EEE] bg-black text-white hover:bg-gray-800',
        ]"
        @click="selectCategory(category)"
      >
        {{ category }}
      </button>
    </div>

    <!-- Product Cards Carousel -->
    <div class="relative w-full overflow-hidden">
      <!-- Left Navigation Button -->
      <button
        @click="scrollLeft"
        class="absolute top-1/2 left-0 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-[25px] h-[25px] flex items-center justify-center hover:scale-110 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="11"
          fill="none"
          viewBox="0 0 12 12"
        >
          <path
            d="M6.693 11.174l-.558.559a.999.999 0 01-1.408 0L.32 6.807a.999.999 0 010-1.414L4.727.993a.999.999 0 011.408 0l.558.558a.999.999 0 010 1.414L3.62 5.359h7.287c.356 0 .61.253.61.61v.812c0 .33-.254.61-.61.61H3.62l3.073 2.894a.999.999 0 010 1.414z"
            fill="black"
          />
        </svg>
      </button>

      <!-- Products -->
      <div
        ref="carousel"
        class="flex gap-4 overflow-x-auto hide-scrollbar md-max:px-4 lg:w-full"
      >
        <div
          v-for="(product, index) in filteredProducts"
          :key="index"
          class="w-[260px] bg-white rounded-lg flex-shrink-0 p-4"
        >
          <!-- Product Image -->
          <div
            class="relative w-full h-[180px] bg-gray-200 rounded-lg mb-4 overflow-hidden"
          >
            <NuxtImg
              :src="product.image"
              alt="Product Image"
              class="object-cover w-full h-full"
              format="webp"
              quality="80"
              sizes="(max-width: 768px) 100vw, 260px"
            />
          </div>

          <!-- Creator Profile -->
          <div class="flex items-center gap-2 mb-2 w-full">
            <div class="relative">
              <img
                :src="product.creator?.avatar || '/default-avatar.png'"
                alt="Creator Avatar"
                class="w-8 h-8 rounded-full border-[1.5px] border-[#DBF226] shadow-md"
              />
              <span
                v-if="product.creator?.pro"
                class="absolute -top-0 -right-[6.2px] w-[15px] h-[15px] bg-[#DBF226] rounded-full flex items-center justify-center border-[1.5px] border-[#ffffff]"
              >
                <span class="text-[6px] text-black font-normal leading-[16px]"
                  >Pro</span
                >
              </span>
              <span
                v-if="product.active"
                class="absolute bottom-0 right-0 w-[9px] h-[9px] bg-[#78BF39] rounded-full border border-[#F5F5F5]"
              ></span>
            </div>
            <span
              class="text-[11px] font-normal md-max:leading-[19.8px] sm-max:text-[10px] sm-max:leading-[18px] flex-1"
              >{{ product.creator?.name || 'Unknown Creator' }}</span
            >
            <div class="flex gap-2 items-center">
              <span
                class="text-black font-[350px] line-through text-[11px] leading-[19.8px] sm-max:text-[10px] sm-max:leading-[18px]"
                >${{ product.originalPrice }}</span
              >
              <span
                class="text-black font-extrabold text-[18px] leading-[32.4px] sm-max:text-[17px] sm-max:leading-[30.6px]"
                >${{ product.price }}</span
              >
            </div>
          </div>

          <!-- Product Title -->
          <h3
            class="text-black font-bold md-max:text-[17px] md-max:leading-[30.6px] md-max:pb-[8px]"
          >
            {{ product.title }}
          </h3>

          <!-- Action Buttons -->
          <div class="flex gap-2 w-full">
            <button
              @click="toggleCart(product)"
              :class="[
                'text-[15px] w-[124px] h-[40px] px-[12px] py-[6px] flex items-center justify-center gap-1.5 rounded-lg transition-shadow shadow',
                product.cartSelected
                  ? 'text-white bg-black shadow-[0px_4px_4px_0px_#DBF226]'
                  : 'text-black bg-[#DBF226] hover:bg-black hover:text-white ',
              ]"
            >
              <SvgCartIcon
                :class="product.cartSelected ? 'fill-red-500' : 'fill-current'"
              />
              <span class="text-[15px] whitespace-nowrap">Add to cart</span>
            </button>
            <button
              @click="toggleWishlist(product)"
              :class="[
                'wishlist-button w-[124px] px-[12px] py-[6px] flex items-center justify-center gap-[6px] text-[15px] rounded-lg border transition-shadow',
                product.wishlistSelected
                  ? 'text-[#000000] border-[#005B52] bg-[#ffffff]'
                  : 'text-black border-[rgba(0,0,0,0.5)] bg-white hover:border-black hover:shadow-[0px_4px_4px_0px_#DBF226]',
              ]"
            >
              <!-- SVG Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
              >
                <path
                  v-if="product.wishlistSelected"
                  d="M13.2132 14.6205C13.0299 14.9104 12.7733 15.1404 12.4801 15.2704C12.2785 15.3603 12.0585 15.4103 11.8386 15.4103C11.6187 15.4103 11.4171 15.3603 11.2247 15.2704C11.0231 15.1804 10.8489 15.0504 10.7023 14.8905L7.17432 11.0714L3.65549 14.8905C3.4264 15.1404 3.14232 15.3104 2.8216 15.3803C2.51003 15.4503 2.18014 15.4103 1.88691 15.2704C1.58451 15.1404 1.32792 14.9104 1.14465 14.6205C0.970543 14.3306 0.878906 13.9807 0.878906 13.6308V3.53329C0.878906 2.71349 1.18131 1.91369 1.7128 1.32384C2.25345 0.74398 2.98654 0.414062 3.73796 0.414062H10.6107C10.9864 0.414062 11.3621 0.494043 11.7103 0.654003C12.0585 0.803965 12.3701 1.03391 12.6359 1.32384C12.9016 1.62376 13.1124 1.96368 13.259 2.34358C13.4056 2.72349 13.4789 3.12339 13.4789 3.53329V13.6308C13.4789 13.9807 13.3873 14.3306 13.2132 14.6205Z"
                  fill="#005B52"
                />
                <path
                  v-else
                  d="M11.0529 15.4141C10.8586 15.4134 10.6664 15.367 10.4874 15.2774C10.3083 15.1878 10.146 15.0569 10.0097 14.8922L6.78092 11.0709L3.55217 14.8947C3.34481 15.1451 3.07888 15.3154 2.78904 15.3833C2.49921 15.4512 2.19891 15.4136 1.9273 15.2753C1.653 15.144 1.41834 14.9172 1.25396 14.6246C1.08959 14.3321 1.00315 13.9873 1.00592 13.6353V3.53906C1.00592 2.71026 1.28249 1.91541 1.77477 1.32935C2.26705 0.743303 2.93473 0.414063 3.63092 0.414063L9.93093 0.414062C10.2756 0.414062 10.617 0.494893 10.9355 0.651939C11.254 0.808985 11.5433 1.03917 11.7871 1.32935C12.0308 1.61954 12.2242 1.96403 12.3561 2.34318C12.488 2.72232 12.5559 3.12868 12.5559 3.53906V13.6353C12.5589 13.987 12.4727 14.3316 12.3088 14.6241C12.1448 14.9166 11.9106 15.1436 11.6367 15.2753C11.4518 15.3674 11.2533 15.4145 11.0529 15.4141ZM3.63092 1.66406C3.21321 1.66406 2.8126 1.86161 2.51723 2.21324C2.22186 2.56487 2.05592 3.04178 2.05592 3.53906V13.6353C2.05573 13.7395 2.08148 13.8413 2.1299 13.9281C2.17832 14.0148 2.24725 14.0825 2.32797 14.1227C2.4087 14.1628 2.49761 14.1735 2.58347 14.1535C2.66932 14.1335 2.74827 14.0837 2.81035 14.0103L6.41342 9.74719C6.51179 9.63078 6.64485 9.56544 6.78355 9.56544C6.92225 9.56544 7.05531 9.63078 7.15368 9.74719L10.7526 14.0091C10.8146 14.0824 10.8936 14.1323 10.9794 14.1523C11.0653 14.1723 11.1542 14.1615 11.2349 14.1214C11.3157 14.0813 11.3846 14.0136 11.433 13.9268C11.4814 13.8401 11.5072 13.7382 11.507 13.6341V3.53906C11.507 3.04178 11.341 2.56487 11.0457 2.21324C10.7503 1.86161 10.3497 1.66406 9.93198 1.66406H3.63092Z"
                  fill="#005B52"
                />
              </svg>
              Wishlist
            </button>
          </div>
        </div>
      </div>

      <!-- Right Navigation Button -->
      <button
        @click="scrollRight"
        class="absolute top-1/2 right-0 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-[25px] h-[25px] flex items-center justify-center hover:scale-110 transition"
      >
        <svg
          width="9"
          height="11"
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
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { categories, products } from '../../utils/productData'
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
// Toggle wishlist selection for a specific product
function toggleWishlist(product: any) {
  if (!product) return
  product.wishlistSelected = !product.wishlistSelected
}
// Reactive state to track cart selection
function toggleCart(product: any) {
  if (!product) return
  product.cartSelected = !product.cartSelected // Toggle state for the individual product
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
.wishlist-button {
  position: relative;
}

.wishlist-icon-default {
  display: block;
}

.wishlist-icon-hover {
  display: none;
}

.wishlist-button:hover .wishlist-icon-default {
  display: none;
}

.wishlist-button:hover .wishlist-icon-hover {
  display: block;
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
