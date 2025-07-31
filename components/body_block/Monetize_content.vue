<template>
  <!-- Outer Wrapper with Full Width Black Background -->
  <div class="bg-black w-screen py-16">
    <!-- Inner Container with Width of 1392px -->
    <div
      class="flex flex-col lg:flex-row items-start lg:items-stretch text-white w-[1440px] xl-max:w-full pt-[16px] md-max:pt-[6px] lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px]"
    >
      <!-- Left Section: Title and Description -->
      <div class="w-auto">
        <h2
          class="xl:text-[52px] lg:text-[40px] md:text-[32px] sm:text-[26px] text-[26px] font-bold mb-4"
        >
          Monetize Your Talent with Thortok
        </h2>
        <p
          class="text-[17px] md:text-[17px] sm:text-[14px] text-[#ffffff] mb-6"
        >
          Our platform offers a variety of monetization programs that allow you
          to turn your creative work into income. Join today and explore how you
          can benefit from our unique opportunities.
        </p>
        <button
          class="bg-[#DBF226] text-black font-semibold px-6 py-3 rounded-md hover:bg-[#c9da1e] transition-all xl:text-[17px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[13px]"
        >
          Learn more →
        </button>
      </div>

      <!-- Right Section: Program Cards -->
      <div class="flex flex-col md:flex-row mdx:flex-row gap-6 w-full">
        <!-- Card 1: Content Sharing Program -->
        <div
          class="program-card relative bg-white text-black p-6 rounded-lg border-2 border-[#DBF226] w-full h-full shadow-lg flex flex-col"
        >
          <img
            src="@/assets/logo/fi-rr-cloud-share.svg"
            alt="Share Icon"
            class="w-[40px] h-[40px] mb-4"
          />
          <h3 class="text-[22px] font-semibold mb-2">
            Content Sharing <span class="font-normal">Program</span>
          </h3>
          <p class="sm:text-[14px] text-[10px] text-gray-600 mb-4 flex-grow">
            Upload your digital content and earn money each time it’s downloaded
            by our users. The more downloads, the more you earn.
          </p>
          <p class="sm:text-[14px] text-[10px] text-gray-600 mb-4">
            Turn your creativity into profit effortlessly.
          </p>
          <span
            class="absolute bottom-0 right-0 text-[200px] leading-[75%] font-lexend font-bold text-[#EFF1D980] opacity-50"
            >01</span
          >
        </div>

        <!-- Card 2: Sell Content Program -->
        <div
          class="program-card relative bg-white text-black p-6 rounded-lg border-2 border-[#DBF226] w-full h-full shadow-lg flex flex-col"
        >
          <img
            src="@/assets/logo/fi-rr-shopping-cart.svg"
            alt="Sell Icon"
            class="w-[40px] h-[40px] mb-4"
          />
          <h3 class="text-[22px] font-semibold mb-2">
            Sell Content <span class="font-normal">Program</span>
          </h3>
          <p class="sm:text-[14px] text-[10px] text-gray-600 mb-4 flex-grow">
            Set your own price and sell your digital content directly to our
            users. Each sale earns you revenue, with a small commission
            deducted.
          </p>
          <p class="sm:text-[14px] text-[10px] text-gray-600 mb-4">
            The more you sell, the more you earn.
          </p>
          <span
            class="absolute bottom-0 right-0 text-[200px] leading-[75%] font-lexend font-bold text-[#EFF1D980] opacity-50"
            >02</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Additional Styles for Cards */
.program-card {
  position: relative;
  overflow: hidden;
}
</style>
