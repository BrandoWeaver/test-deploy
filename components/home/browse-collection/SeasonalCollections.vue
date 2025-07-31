<template>
  <!-- Main Container with consistent padding -->
  <div
    class="flex flex-col items-start pb-[64px] relative w-[1440px] xl-max:w-full pt-[16px] md-max:pt-[6px] lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px]"
  >
    <div class="sm:hidden flex">
      <button
        @click="scrollLeft"
        class="nav-buttonSmall absolute top-[85px] z-10 left-0 flex"
      >
        <!-- Left Arrow SVG -->
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
        class="nav-buttonSmall absolute top-[85px] z-10 right-0"
      >
        <!-- Right Arrow SVG -->
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
    <!-- Title Section with Navigation Buttons -->
    <div class="flex items-center justify-between w-full">
      <!-- Title with Icon -->
      <div class="flex items-center gap-2">
        <!-- Calendar Icon -->
        <img
          src="@/assets/logo/fi-rr-calendar.svg"
          alt="Calendar Icon"
          width="18"
          height="17"
        />
        <h2
          class="text-black font-noto font-bold lg:text-[17px] md:text-[15px] sm:text-[14px] text-[13px] leading-[1.8]"
        >
          Discover Seasonal Collections
        </h2>
      </div>

      <!-- Navigation Buttons aligned with Title Text -->
      <div class="gap-2 sm:flex hidden">
        <button
          @click="scrollLeft"
          class="nav-button p-[10px] rounded-full w-[34px] h-[34px] md:w-[29px] md:h-[29px]"
        >
          <!-- Left Arrow SVG -->
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
          class="nav-button p-[10px] rounded-full w-[34px] h-[34px] md:w-[29px] md:h-[29px]"
        >
          <!-- Right Arrow SVG -->
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

    <!-- Card Row -->
    <div
      ref="carousel"
      class="card-row w-full flex gap-[14px] overflow-x-auto no-scrollbar relative"
    >
      <div
        v-for="(item, index) in seasonalData?.data"
        :key="index"
        class="card w-[273px] h-[65px] flex-shrink-0 relative overflow-hidden rounded-lg shadow-md"
        :style="{
          backgroundImage: `url(${item.image !== null ? item.image : config.public.DEFAULT_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      >
        <!-- Dark overlay -->
        <div
          class="absolute inset-0 bg-black opacity-40 rounded-lg hover:opacity-60 transition-opacity duration-300"
        ></div>

        <!-- Date Text centered in the middle -->
        <div
          class="absolute text-center inset-0 flex items-center justify-center text-white font-semibold text-sm z-10"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  seasonalData: ISEASONAL.ILISTSEASON
  status: string
}>()
const config = useRuntimeConfig()
const { locale } = useI18n()
const carousel = ref<any>(null)

// Calculate the scroll amount based on one card's width + gap
function scrollLeft() {
  if (carousel.value) {
    const scrollAmount = carousel.value.querySelector('.card').offsetWidth + 14 // 14px is the gap
    carousel.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  }
}

function scrollRight() {
  if (carousel.value) {
    const scrollAmount = carousel.value.querySelector('.card').offsetWidth + 14
    carousel.value.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }
}

// console.log('seasonalData', seasonalData.value)
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Navigation Button Styling */
.nav-button {
  display: flex;

  justify-content: center;
  align-items: center;
  background-color: #eff1d9;
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.nav-buttonSmall {
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: #eff1d9;
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.nav-button:hover {
  transform: scale(1.05);
}

/* Card Styling */
.card-row {
  display: flex;
  align-items: center;
}

.card {
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow:
    0px 4px 8px rgba(0, 0, 0, 0.1),
    0px 4px 4px 0px #dbf226;
}
</style>
