<template>
  <!-- <div class="grid grid-cols-12 gap-4"> -->

  <div class="flex flex-row w-full">
    <!-- FilterSide Section -->
    <transition name="slide-right-left">
      <div
        v-show="!exit"
        class="h-full"
        style="border-right: 1px solid rgba(0, 0, 0, 0.1)"
      >
        <FilterSide :exit="exit" @update:exit="exit = $event" />
      </div>
    </transition>

    <!-- Main Content Section -->
    <div class="w-full flex flex-col overflow-x-hidden relative">
      <div
        v-show="!exit"
        class="h-full w-full absolute top-0 z-[99] md:hidden"
        style="background: rgba(0, 0, 0, 0.8)"
      ></div>
      <button
        v-show="!exit"
        @click="scrollLeft"
        class="nav-button absolute lg:top-10 md:top-9 sm:top-8 top-7 left-2 z-[90]"
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
        v-show="!exit"
        @click="scrollRight"
        class="nav-button absolute z-20 lg:top-10 md:top-9 sm:top-8 top-7 right-6 rounded-[6px]"
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

      <button
        @click="openSide"
        v-show="exit"
        class="lg:h-[65px] md:h-[57px] sm:h-[47px] h-[42px] absolute top-6 left-6 px-[24px] py-[20px] bg-common-paper border border-grey-500 flex flex-row gap-2 items-center z-30 rounded-[6px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
        >
          <g clip-path="url(#clip0_114_22255)">
            <path
              d="M0.75 3.78633H2.802C2.96298 4.37863 3.31438 4.9015 3.80199 5.27428C4.28961 5.64705 4.88634 5.84902 5.50012 5.84902C6.11391 5.84902 6.71064 5.64705 7.19826 5.27428C7.68587 4.9015 8.03727 4.37863 8.19825 3.78633H17.25C17.4489 3.78633 17.6397 3.70731 17.7803 3.56666C17.921 3.426 18 3.23524 18 3.03633C18 2.83741 17.921 2.64665 17.7803 2.506C17.6397 2.36534 17.4489 2.28633 17.25 2.28633H8.19825C8.03727 1.69403 7.68587 1.17116 7.19826 0.798379C6.71064 0.425601 6.11391 0.223633 5.50012 0.223633C4.88634 0.223633 4.28961 0.425601 3.80199 0.798379C3.31438 1.17116 2.96298 1.69403 2.802 2.28633H0.75C0.551088 2.28633 0.360322 2.36534 0.21967 2.506C0.0790176 2.64665 0 2.83741 0 3.03633C0 3.23524 0.0790176 3.426 0.21967 3.56666C0.360322 3.70731 0.551088 3.78633 0.75 3.78633ZM5.49975 1.72383C5.75934 1.72383 6.0131 1.8008 6.22894 1.94502C6.44478 2.08924 6.613 2.29423 6.71234 2.53406C6.81168 2.77388 6.83767 3.03778 6.78703 3.29238C6.73639 3.54698 6.61138 3.78085 6.42783 3.9644C6.24427 4.14796 6.01041 4.27296 5.75581 4.32361C5.50121 4.37425 5.23731 4.34826 4.99748 4.24892C4.75765 4.14958 4.55267 3.98135 4.40845 3.76551C4.26423 3.54967 4.18725 3.29592 4.18725 3.03633C4.18765 2.68835 4.32606 2.35474 4.57211 2.10869C4.81817 1.86263 5.15178 1.72422 5.49975 1.72383Z"
              fill="black"
            />
            <path
              d="M17.25 8.47309H15.198C15.0373 7.88065 14.686 7.35759 14.1985 6.98466C13.7109 6.61173 13.1141 6.40967 12.5002 6.40967C11.8864 6.40967 11.2896 6.61173 10.802 6.98466C10.3145 7.35759 9.96321 7.88065 9.8025 8.47309H0.75C0.551088 8.47309 0.360322 8.55211 0.21967 8.69276C0.0790176 8.83341 0 9.02418 0 9.22309C0 9.422 0.0790176 9.61277 0.21967 9.75342C0.360322 9.89407 0.551088 9.97309 0.75 9.97309H9.8025C9.96321 10.5655 10.3145 11.0886 10.802 11.4615C11.2896 11.8344 11.8864 12.0365 12.5002 12.0365C13.1141 12.0365 13.7109 11.8344 14.1985 11.4615C14.686 11.0886 15.0373 10.5655 15.198 9.97309H17.25C17.4489 9.97309 17.6397 9.89407 17.7803 9.75342C17.921 9.61277 18 9.422 18 9.22309C18 9.02418 17.921 8.83341 17.7803 8.69276C17.6397 8.55211 17.4489 8.47309 17.25 8.47309ZM12.5002 10.5356C12.2407 10.5356 11.9869 10.4586 11.7711 10.3144C11.5552 10.1702 11.387 9.96519 11.2877 9.72536C11.1883 9.48553 11.1623 9.22163 11.213 8.96703C11.2636 8.71243 11.3886 8.47857 11.5722 8.29501C11.7557 8.11146 11.9896 7.98645 12.2442 7.93581C12.4988 7.88517 12.7627 7.91116 13.0025 8.0105C13.2424 8.10984 13.4473 8.27806 13.5916 8.4939C13.7358 8.70974 13.8127 8.9635 13.8127 9.22309C13.8124 9.57106 13.6739 9.90467 13.4279 10.1507C13.1818 10.3968 12.8482 10.5352 12.5002 10.5356Z"
              fill="black"
            />
            <path
              d="M17.25 14.6613H8.19825C8.03727 14.069 7.68587 13.5462 7.19826 13.1734C6.71064 12.8006 6.11391 12.5986 5.50012 12.5986C4.88634 12.5986 4.28961 12.8006 3.80199 13.1734C3.31438 13.5462 2.96298 14.069 2.802 14.6613H0.75C0.551088 14.6613 0.360322 14.7403 0.21967 14.881C0.0790176 15.0216 0 15.2124 0 15.4113C0 15.6102 0.0790176 15.801 0.21967 15.9416C0.360322 16.0823 0.551088 16.1613 0.75 16.1613H2.802C2.96298 16.7536 3.31438 17.2765 3.80199 17.6493C4.28961 18.022 4.88634 18.224 5.50012 18.224C6.11391 18.224 6.71064 18.022 7.19826 17.6493C7.68587 17.2765 8.03727 16.7536 8.19825 16.1613H17.25C17.4489 16.1613 17.6397 16.0823 17.7803 15.9416C17.921 15.801 18 15.6102 18 15.4113C18 15.2124 17.921 15.0216 17.7803 14.881C17.6397 14.7403 17.4489 14.6613 17.25 14.6613ZM5.49975 16.7238C5.24016 16.7238 4.9864 16.6468 4.77056 16.5026C4.55472 16.3584 4.3865 16.1534 4.28716 15.9136C4.18782 15.6738 4.16183 15.4099 4.21247 15.1553C4.26311 14.9007 4.38812 14.6668 4.57167 14.4832C4.75523 14.2997 4.98909 14.1747 5.24369 14.124C5.49829 14.0734 5.76219 14.0994 6.00202 14.1987C6.24185 14.2981 6.44683 14.4663 6.59105 14.6821C6.73527 14.898 6.81225 15.1517 6.81225 15.4113C6.81166 15.7592 6.67318 16.0927 6.42717 16.3387C6.18116 16.5847 5.84766 16.7232 5.49975 16.7238Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_114_22255">
              <rect
                width="18"
                height="18"
                fill="white"
                transform="translate(0 0.223633)"
              />
            </clipPath>
          </defs>
        </svg>
        <span class="font-bold text-[17px] lg:flex hidden">Filters</span>
      </button>

      <button
        @click="openSide"
        v-show="exit"
        class="lg:h-[65px] md:h-[57px] sm:h-[47px] h-[42px] md:hidden absolute top-6 left-6 px-[24px] bg-common-paper border border-grey-500 flex flex-row gap-2 items-center z-30"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
        >
          <g clip-path="url(#clip0_114_22255)">
            <path
              d="M0.75 3.78633H2.802C2.96298 4.37863 3.31438 4.9015 3.80199 5.27428C4.28961 5.64705 4.88634 5.84902 5.50012 5.84902C6.11391 5.84902 6.71064 5.64705 7.19826 5.27428C7.68587 4.9015 8.03727 4.37863 8.19825 3.78633H17.25C17.4489 3.78633 17.6397 3.70731 17.7803 3.56666C17.921 3.426 18 3.23524 18 3.03633C18 2.83741 17.921 2.64665 17.7803 2.506C17.6397 2.36534 17.4489 2.28633 17.25 2.28633H8.19825C8.03727 1.69403 7.68587 1.17116 7.19826 0.798379C6.71064 0.425601 6.11391 0.223633 5.50012 0.223633C4.88634 0.223633 4.28961 0.425601 3.80199 0.798379C3.31438 1.17116 2.96298 1.69403 2.802 2.28633H0.75C0.551088 2.28633 0.360322 2.36534 0.21967 2.506C0.0790176 2.64665 0 2.83741 0 3.03633C0 3.23524 0.0790176 3.426 0.21967 3.56666C0.360322 3.70731 0.551088 3.78633 0.75 3.78633ZM5.49975 1.72383C5.75934 1.72383 6.0131 1.8008 6.22894 1.94502C6.44478 2.08924 6.613 2.29423 6.71234 2.53406C6.81168 2.77388 6.83767 3.03778 6.78703 3.29238C6.73639 3.54698 6.61138 3.78085 6.42783 3.9644C6.24427 4.14796 6.01041 4.27296 5.75581 4.32361C5.50121 4.37425 5.23731 4.34826 4.99748 4.24892C4.75765 4.14958 4.55267 3.98135 4.40845 3.76551C4.26423 3.54967 4.18725 3.29592 4.18725 3.03633C4.18765 2.68835 4.32606 2.35474 4.57211 2.10869C4.81817 1.86263 5.15178 1.72422 5.49975 1.72383Z"
              fill="black"
            />
            <path
              d="M17.25 8.47309H15.198C15.0373 7.88065 14.686 7.35759 14.1985 6.98466C13.7109 6.61173 13.1141 6.40967 12.5002 6.40967C11.8864 6.40967 11.2896 6.61173 10.802 6.98466C10.3145 7.35759 9.96321 7.88065 9.8025 8.47309H0.75C0.551088 8.47309 0.360322 8.55211 0.21967 8.69276C0.0790176 8.83341 0 9.02418 0 9.22309C0 9.422 0.0790176 9.61277 0.21967 9.75342C0.360322 9.89407 0.551088 9.97309 0.75 9.97309H9.8025C9.96321 10.5655 10.3145 11.0886 10.802 11.4615C11.2896 11.8344 11.8864 12.0365 12.5002 12.0365C13.1141 12.0365 13.7109 11.8344 14.1985 11.4615C14.686 11.0886 15.0373 10.5655 15.198 9.97309H17.25C17.4489 9.97309 17.6397 9.89407 17.7803 9.75342C17.921 9.61277 18 9.422 18 9.22309C18 9.02418 17.921 8.83341 17.7803 8.69276C17.6397 8.55211 17.4489 8.47309 17.25 8.47309ZM12.5002 10.5356C12.2407 10.5356 11.9869 10.4586 11.7711 10.3144C11.5552 10.1702 11.387 9.96519 11.2877 9.72536C11.1883 9.48553 11.1623 9.22163 11.213 8.96703C11.2636 8.71243 11.3886 8.47857 11.5722 8.29501C11.7557 8.11146 11.9896 7.98645 12.2442 7.93581C12.4988 7.88517 12.7627 7.91116 13.0025 8.0105C13.2424 8.10984 13.4473 8.27806 13.5916 8.4939C13.7358 8.70974 13.8127 8.9635 13.8127 9.22309C13.8124 9.57106 13.6739 9.90467 13.4279 10.1507C13.1818 10.3968 12.8482 10.5352 12.5002 10.5356Z"
              fill="black"
            />
            <path
              d="M17.25 14.6613H8.19825C8.03727 14.069 7.68587 13.5462 7.19826 13.1734C6.71064 12.8006 6.11391 12.5986 5.50012 12.5986C4.88634 12.5986 4.28961 12.8006 3.80199 13.1734C3.31438 13.5462 2.96298 14.069 2.802 14.6613H0.75C0.551088 14.6613 0.360322 14.7403 0.21967 14.881C0.0790176 15.0216 0 15.2124 0 15.4113C0 15.6102 0.0790176 15.801 0.21967 15.9416C0.360322 16.0823 0.551088 16.1613 0.75 16.1613H2.802C2.96298 16.7536 3.31438 17.2765 3.80199 17.6493C4.28961 18.022 4.88634 18.224 5.50012 18.224C6.11391 18.224 6.71064 18.022 7.19826 17.6493C7.68587 17.2765 8.03727 16.7536 8.19825 16.1613H17.25C17.4489 16.1613 17.6397 16.0823 17.7803 15.9416C17.921 15.801 18 15.6102 18 15.4113C18 15.2124 17.921 15.0216 17.7803 14.881C17.6397 14.7403 17.4489 14.6613 17.25 14.6613ZM5.49975 16.7238C5.24016 16.7238 4.9864 16.6468 4.77056 16.5026C4.55472 16.3584 4.3865 16.1534 4.28716 15.9136C4.18782 15.6738 4.16183 15.4099 4.21247 15.1553C4.26311 14.9007 4.38812 14.6668 4.57167 14.4832C4.75523 14.2997 4.98909 14.1747 5.24369 14.124C5.49829 14.0734 5.76219 14.0994 6.00202 14.1987C6.24185 14.2981 6.44683 14.4663 6.59105 14.6821C6.73527 14.898 6.81225 15.1517 6.81225 15.4113C6.81166 15.7592 6.67318 16.0927 6.42717 16.3387C6.18116 16.5847 5.84766 16.7232 5.49975 16.7238Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_114_22255">
              <rect
                width="18"
                height="18"
                fill="white"
                transform="translate(0 0.223633)"
              />
            </clipPath>
          </defs>
        </svg>
        <span class="font-bold text-[17px] lg:flex hidden">Filters</span>
      </button>

      <div ref="carousel" class="w-full overflow-x-auto no-scrollbar pl-6">
        <div
          :class="[exit ? 'lg:ml-[120px] ml-[60px] px-6' : 'ml-0']"
          class="inline-flex gap-4 mt-6"
        >
          <div
            v-for="(item, index) in collections"
            :key="index"
            class="card lg:w-[273px] md:w-[241px] sm:w-[172px] w-[121px] lg:h-[65px] md:h-[57px] sm:h-[47px] h-[42px] flex-shrink-0 relative overflow-hidden rounded-lg shadow-md"
            :style="{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }"
          >
            <!-- Dark overlay -->
            <div
              class="absolute inset-0 bg-black opacity-60 rounded-lg hover:opacity-60 transition-opacity duration-300"
            ></div>

            <!-- Date Text centered vertically and horizontally -->
            <div
              class="absolute inset-0 flex items-center justify-center text-center text-white font-semibold text-sm z-10"
            >
              {{ item.date }}
            </div>
          </div>
        </div>
      </div>

      <List :exit="exit" @update:exit="exit = $event" />
    </div>
  </div>
  <FooterSearchPage />
</template>

<script setup>
import { ref } from 'vue'
import j1 from '@/assets/images/collections/j1.png'
import j2 from '@/assets/images/collections/j2.png'
import j3 from '@/assets/images/collections/j3.png'
import j4 from '@/assets/images/collections/j4.png'
import j5 from '@/assets/images/collections/j5.png'
import FilterSide from '~/components/searchpageCom/FilterSide.vue'
import CusDrawer from '~/components/cusComponents/CusDrawer.vue'
import FooterSearchPage from '~/components/searchpageCom/FooterSearchPage.vue'

import List from './List.vue'
const isDrawerOpen = ref(false)
const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value
}

watchEffect(() => {
  console.log('isDrawerOpen', isDrawerOpen.value)
})

const exit = ref(true)

const openSide = () => {
  exit.value = !exit.value
}

const collections = ref([
  { date: 'January 1', image: j1 },
  { date: 'January 7', image: j2 },
  { date: 'February 5', image: j3 },
  { date: 'February 13', image: j4 },
  { date: 'February 15', image: j5 },
  { date: 'February 16', image: j3 },
  { date: 'February 17', image: j3 },
])
const carousel = ref(null)

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
  width: 34px;
  height: 34px;
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
.card {
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(0px);
  box-shadow:
    0px 4px 8px rgba(0, 0, 0, 0.1),
    0px 4px 4px 0px #dbf226;
}

.slide-right-left-enter-active,
.slide-right-left-leave-active {
  transition: transform 0.2s ease-in-out;
}

.slide-right-left-enter-from {
  transform: translateX(-100%);
}

.slide-right-left-leave-to {
  transform: translateX(-100%);
}
</style>
