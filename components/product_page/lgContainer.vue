<template>
  <div
    class="md-max:w-full sm-max:w-full md:hidden flex justify-center items-center gap-6 md-max:mt-[24px]"
  >
    <!-- ProPlanModal component -->
    <ProPlanModal ref="proPlanModal" class="block md:hidden lg:hidden" />
    <!-- Left Section: Product Details -->
    <div class="sm-max:pr-0 xs-max:pr-0">
      <!-- Product Details -->
      <div class="sm-max:space-y-1">
        <h1
          class="text-[20px] md-max:text-[18px] md-max:leading-[30.6px] sm:text-[17px] font-lexend font-normal leading-[34px]"
        >
          Pineapple Fruit
        </h1>
        <!-- Author Information -->
        <p class="flex items-center gap-2 text-gray-600">
          <span
            class="text-[#000000] font-noto font-[300] md-max:text-[8px] leading-[18px]"
            >By</span
          >
          <a
            href="#"
            class="text-[#000000] font-noto md-max:text-[8px] font-[300] leading-[1.8] hover:border-b-2 border-black"
            >Ch. Ratana</a
          >
        </p>
        <!-- Pro Plan Warning -->
        <p
          class="flex flex-wrap items-c10enter md-max:text-[11px] font-noto leading-[23px]"
        >
          <span class="text-black font-bold">You don't have a pro plan.</span>
          <a href="#" class="text-black font-[350] ml-1 sm-max:ml-0"
            >Please check your usage rights</a
          >
          <a class="text-black font-[350] underline hover:no-underline ml-1"
            >here</a
          >.
        </p>
      </div>

      <!-- Buttons Section -->
      <div
        class="flex flex-row md-max:flex-row sm-max:flex-col gap-4 mt-6 pr-[16px] md-max:pr-0 xs-max:pr-0"
      >
        <!-- Download Button -->
        <button
          :class="{
            'bg-white text-black ': isDownloadSelected,
            'bg-black text-white hover:bg-white hover:text-black':
              !isDownloadSelected,
          }"
          class="w-full border border-black/50 sm-max:h-[69px] xs-max:h-[69px] flex items-center justify-center gap-2 py-3 rounded-[10px] shadow-md group"
          @click="toggleDownloadSelected"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="currentColor"
              :class="
                isDownloadSelected
                  ? 'text-black'
                  : 'text-white group-hover:text-black'
              "
            >
              <g clip-path="url(#clip0_1973_144448)">
                <path
                  d="M7.40843 13.6599C7.61738 13.8689 7.86548 14.0348 8.13855 14.148C8.41163 14.2611 8.70433 14.3194 8.99993 14.3194C9.29552 14.3194 9.58822 14.2611 9.8613 14.148C10.1344 14.0348 10.3825 13.8689 10.5914 13.6599L12.9997 11.2516C13.1288 11.1088 13.1981 10.9218 13.1931 10.7294C13.1882 10.5369 13.1094 10.3537 12.9731 10.2177C12.8368 10.0817 12.6535 10.0033 12.461 9.99881C12.2685 9.99428 12.0817 10.0639 11.9392 10.1934L9.74468 12.3886L9.74993 0.818359C9.74993 0.619447 9.67091 0.428682 9.53025 0.288029C9.3896 0.147377 9.19884 0.0683594 8.99993 0.0683594V0.0683594C8.80101 0.0683594 8.61025 0.147377 8.4696 0.288029C8.32894 0.428682 8.24993 0.619447 8.24993 0.818359L8.24318 12.3744L6.06068 10.1934C5.91995 10.0527 5.72911 9.97376 5.53016 9.97383C5.33121 9.9739 5.14043 10.053 4.9998 10.1937C4.85917 10.3345 4.7802 10.5253 4.78027 10.7242C4.78034 10.9232 4.85944 11.114 5.00018 11.2546L7.40843 13.6599Z"
                />
                <path
                  d="M17.25 12.0684C17.0511 12.0684 16.8603 12.1474 16.7197 12.288C16.579 12.4287 16.5 12.6194 16.5 12.8184V15.8184C16.5 16.0173 16.421 16.208 16.2803 16.3487C16.1397 16.4893 15.9489 16.5684 15.75 16.5684H2.25C2.05109 16.5684 1.86032 16.4893 1.71967 16.3487C1.57902 16.208 1.5 16.0173 1.5 15.8184V12.8184C1.5 12.6194 1.42098 12.4287 1.28033 12.288C1.13968 12.1474 0.948912 12.0684 0.75 12.0684C0.551088 12.0684 0.360322 12.1474 0.21967 12.288C0.0790176 12.4287 0 12.6194 0 12.8184L0 15.8184C0 16.4151 0.237053 16.9874 0.65901 17.4093C1.08097 17.8313 1.65326 18.0683 2.25 18.0683H15.75C16.3467 18.0683 16.919 17.8313 17.341 17.4093C17.7629 16.9874 18 16.4151 18 15.8184V12.8184C18 12.6194 17.921 12.4287 17.7803 12.288C17.6397 12.1474 17.4489 12.0684 17.25 12.0684Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_1973_144448">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(0 0.0683594)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>Download</span>
        </button>

        <!-- Add to Wishlist -->
        <button
          :class="[
            'w-full border border-black/50 sm-max:h-[69px] xs-max:h-[69px] text-black flex items-center justify-center gap-2 py-3 rounded-[10px]',
            isWishlisted
              ? 'bg-white text-black'
              : 'bg-white  text-black hover:bg-black hover:text-white',
          ]"
          @click="toggleWishlist"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="19"
              viewBox="0 0 17 19"
              :fill="isWishlisted ? '#005B52' : '#005B52'"
            >
              <g clip-path="url(#clip0_1973_144454)">
                <path
                  d="M13.6262 18.0684C13.3932 18.0676 13.1625 18.0119 12.9477 17.9044C12.7328 17.7969 12.538 17.6398 12.3744 17.4421L8.4999 12.8566L4.6254 17.4451C4.37657 17.7457 4.05745 17.95 3.70964 18.0315C3.36184 18.1129 3.00148 18.0678 2.67555 17.9019C2.34639 17.7442 2.0648 17.4721 1.86755 17.121C1.67031 16.77 1.56657 16.3562 1.5699 15.9339V3.81836C1.5699 2.8238 1.90178 1.86997 2.49252 1.16671C3.08326 0.463448 3.88447 0.0683594 4.7199 0.0683594L12.2799 0.0683594C12.6936 0.0683594 13.1032 0.165356 13.4854 0.353811C13.8675 0.542266 14.2148 0.818489 14.5073 1.16671C14.7998 1.51493 15.0318 1.92833 15.1901 2.3833C15.3484 2.83827 15.4299 3.3259 15.4299 3.81836V15.9339C15.4334 16.3559 15.3301 16.7694 15.1333 17.1204C14.9365 17.4714 14.6555 17.7438 14.3268 17.9019C14.1049 18.0123 13.8667 18.0689 13.6262 18.0684ZM4.7199 1.56836C4.21864 1.56836 3.73791 1.80541 3.38347 2.22737C3.02903 2.64933 2.8299 3.22162 2.8299 3.81836V15.9339C2.82967 16.0588 2.86056 16.1811 2.91867 16.2852C2.97677 16.3893 3.05949 16.4705 3.15636 16.5187C3.25324 16.5668 3.35993 16.5797 3.46295 16.5557C3.56598 16.5317 3.66072 16.4719 3.73521 16.3839L8.0589 11.2681C8.17694 11.1284 8.33662 11.05 8.50305 11.05C8.66949 11.05 8.82916 11.1284 8.9472 11.2681L13.2659 16.3824C13.3403 16.4704 13.4351 16.5302 13.5381 16.5542C13.6411 16.5782 13.7478 16.5653 13.8447 16.5172C13.9416 16.469 14.0243 16.3878 14.0824 16.2837C14.1405 16.1796 14.1714 16.0573 14.1712 15.9324V3.81836C14.1712 3.22162 13.972 2.64933 13.6176 2.22737C13.2632 1.80541 12.7824 1.56836 12.2812 1.56836H4.7199Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_1973_144454">
                  <rect
                    width="15.12"
                    height="18"
                    fill="white"
                    transform="translate(0.939941 0.0683594)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>Add to wishlist</span>
        </button>
      </div>

      <!-- Author Profile and Actions -->
      <div class="flex pt-6 md-max:flex-col md:hidden md-max:pb-[24px]">
        <ControlContainer class="md-max:hidden" />
        <div
          class="flex md-max:flex-1 md-maxx:flex-col sm-max:flex-col md-max:gap-[10px] sm-max:gap-4 md-max:items-center md-maxx:items-end justify-between md-maxx:justify-end sm-max:items-end"
        >
          <!-- ProfilePro Section -->
          <div class="md-max:w-full sm-max:w-full flex items-center">
            <ProfilePro
              name="Ch. Ratana"
              profileImage="https://via.placeholder.com/150"
              :isPro="true"
              @portfolio-click="handlePortfolioClick"
              @unfollow-click="handleUnfollowClick"
              class="w-full"
            />
          </div>

          <!-- SimilarActions Section -->
          <div class="md-max:w-auto md-max:justify-end md-max:items-end flex-1">
            <SimilarActions class="w-full md-max:flex" />
          </div>
        </div>
      </div>
    </div>

    <!-- Right Section: Description -->
    <div class="flex-1 bg-white w-full md:hidden sm-max:pr-[16px] xs-max:pr-0">
      <UnderBlock />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue' // Import ref for reactivity
import ControlContainer from '@/components/product_page/ControlContainer.vue'
import UnderBlock from '@/components/product_page/underblock.vue'
import SimilarActions from '@/components/product_page/SimilarActions.vue'
import ProfilePro from '@/components/product_page/ProfilePro.vue'
import ProPlanModal from '@/components/product_page/ProPlanModal.vue'

const isWishlisted = ref(false)
const isDownloadSelected = ref(false)
const handlePortfolioClick = () => {
  console.log('handlePortfolioClick')
}
const handleUnfollowClick = () => {
  console.log('handleUnfollowClick')
}
// Function to toggle the selected state
const toggleDownloadSelected = () => {
  isDownloadSelected.value = !isDownloadSelected.value
}

// Toggle wishlist state
const toggleWishlist = () => {
  isWishlisted.value = !isWishlisted.value
}

// Reference for the modal
const proPlanModalRef = ref<InstanceType<typeof ProPlanModal> | null>(null)

// Show modal function
const showProPlanModal = () => {
  proPlanModalRef.value?.showModal?.()
}

// Automatically show the modal when the component is mounted
onMounted(() => {
  proPlanModalRef.value?.showModal?.()
})
</script>

<style scoped>
button {
  transition: all 0.3s ease-in-out;
}
</style>
