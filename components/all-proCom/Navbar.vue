<template>
  <div>
    <div
      class="bg-[#DBF226] relative w-full py-[15px] px-4 sm:px-6 flex items-center justify-center gap-2 md:gap-5"
    >
      <div
        id="current-time"
        class="flex items-center gap-[3px] text-[8px] sm:text-[10px] md:text-[12px] lg:text-[13px] font-[700] text-center"
      >
        <!-- Hour Digits in Separate Boxes -->
        <div id="hours" class="flex gap-1">
          <div
            class="time-box bg-white sm:w-[13px] w-[10px] h-[20px] sm:h-[22px] md:w-4 lg:w-[18px] md:h-[31px] lg:h-[33px] rounded-[2px] md:rounded-[3px] lg:rounded-[4px] flex items-center justify-center leading-none"
            v-text="hours[0]"
          ></div>
          <div
            class="time-box bg-white sm:w-[13px] w-[10px] h-[20px] sm:h-[22px] md:w-4 lg:w-[18px] md:h-[31px] lg:h-[33px] rounded-[2px] md:rounded-[3px] lg:rounded-[4px] flex items-center justify-center leading-none"
            v-text="hours[1]"
          ></div>
        </div>

        <div
          class="h-[20px] sm:h-[22px] md:h-[31px] lg:h-[33px] rounded-[4px] flex items-center justify-center leading-none"
        >
          :
        </div>

        <!-- Minutes Digits in Separate Boxes -->
        <div id="minutes" class="flex gap-1">
          <div
            class="time-box bg-white sm:w-[13px] w-[10px] h-[20px] sm:h-[22px] md:w-4 lg:w-[18px] md:h-[31px] lg:h-[33px] rounded-[2px] md:rounded-[3px] lg:rounded-[4px] flex items-center justify-center leading-none"
            v-text="minutes[0]"
          ></div>
          <div
            class="time-box bg-white sm:w-[13px] w-[10px] h-[20px] sm:h-[22px] md:w-4 lg:w-[18px] md:h-[31px] lg:h-[33px] rounded-[2px] md:rounded-[3px] lg:rounded-[4px] flex items-center justify-center leading-none"
            v-text="minutes[1]"
          ></div>
        </div>

        <!-- Separator (:) -->
        <div
          class="h-[20px] sm:h-[22px] md:h-[31px] lg:h-[33px] rounded-[4px] flex items-center justify-center leading-none"
        >
          :
        </div>

        <!-- Seconds Digits in Separate Boxes -->
        <div id="seconds" class="flex gap-1">
          <div
            class="time-box bg-white sm:w-[13px] w-[10px] h-[20px] sm:h-[22px] md:w-4 lg:w-[18px] md:h-[31px] lg:h-[33px] rounded-[2px] md:rounded-[3px] lg:rounded-[4px] flex items-center justify-center leading-none"
            v-text="seconds[0]"
          ></div>
          <div
            class="time-box bg-white sm:w-[13px] w-[10px] h-[20px] sm:h-[22px] md:w-4 lg:w-[18px] md:h-[31px] lg:h-[33px] rounded-[2px] md:rounded-[3px] lg:rounded-[4px] flex items-center justify-center leading-none"
            v-text="seconds[1]"
          ></div>
        </div>
      </div>
      <h1
        class="font-[700] text-[8px] truncate sm:text-[10px] md:text-[12px] lg:text-sm"
      >
        Celebrate Khmer New Year with 30% off our contributor collections!
      </h1>
      <button
        class="bg-[#0D0D0D] whitespace-nowrap py-[6px] md:py-[7px] lg:py-2 lg:px-[14px] md:px-3 px-[10px] rounded-[4px] lg:text-[13px] text-xs font-medium text-white"
      >
        Shop Now
      </button>
      <div class="sm:absolute shrink-0 right-3 cursor-pointer">
        <Cross />
      </div>
    </div>

    <nav
      class="bg-white py-4 px-4 sm:px-6 flex items-center justify-between gap-4"
    >
      <div class="flex lg:items-center gap-5 xl:gap-8">
        <div @click="toggleDrawer" class="lg:hidden block cursor-pointer">
          <HamBurger />
        </div>
        <a href="#" class="lg:ml-0">
          <NavLogo />
        </a>
        <div
          class="flex -translate-x-full lg:translate-x-0 lg:p-0 p-6 md:p-10 lg:font-[350] font-medium text-[2vw] text-sm xl:text-[13px] lg:text-black text-white lg:flex-row flex-col lg:relative fixed lg:h-auto h-screen lg:bg-transparent bg-black left-0 top-0 lg:w-auto w-[40%] gap-2 lg:gap-[14px] xl:gap-6"
        >
          <div class="absolute lg:hidden block right-2 top-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M7.293 8L3.146 3.854a.5.5 0 1 1 .708-.708L8 7.293l4.146-4.147a.5.5 0 0 1 .708.708L8.707 8l4.147 4.146a.5.5 0 0 1-.708.708L8 8.707l-4.146 4.147a.5.5 0 0 1-.708-.708z"
              />
            </svg>
          </div>
          <a href="#" class="py-1 w-fit border-b border-white lg:border-black"
            >Graphics</a
          >
          <a
            href="#"
            class="py-1 border-b w-fit border-transparent hover:border-white lg:hover:border-black"
            >Photos</a
          >
          <a
            href="#"
            class="py-1 border-b w-fit border-transparent hover:border-white lg:hover:border-black"
            >Fonts</a
          >
          <a
            href="#"
            class="py-1 border-b w-fit border-transparent hover:border-white lg:hover:border-black"
            >Videos</a
          >
          <a
            href="#"
            class="py-1 border-b w-fit border-transparent hover:border-white lg:hover:border-black"
            >Audio</a
          >
          <a
            href="#"
            class="py-1 border-b w-fit border-transparent hover:border-white lg:hover:border-black"
            >Sound Effects</a
          >
          <a
            href="#"
            class="py-1 w-fit border-b border-transparent hover:border-white lg:hover:border-black"
            >3D Elements</a
          >
        </div>
        <transition name="drawer-transition">
          <div
            v-show="isDrawerOpen"
            class="fixed inset-0 bg-black bg-opacity-50 z-50"
            @click.self="toggleDrawer"
          >
            <div
              class="bg-white relative p-6 w-3/5 h-full flex flex-col items-start space-y-4 transform transition-transform"
            >
              <!-- Close Button -->
              <div
                class="absolute top-4 right-4 cursor-pointer"
                @click="toggleDrawer"
              >
                <Cross />
              </div>

              <!-- Drawer Menu Items -->
              <a
                href="#"
                class="py-1 text-sm w-fit border-b border-white lg:border-black"
              >
                Graphics
              </a>
              <a
                href="#"
                class="py-1 text-sm border-b w-fit border-transparent hover:border-white lg:hover:border-black"
              >
                Photos
              </a>
              <a
                href="#"
                class="py-1 text-sm border-b w-fit border-transparent hover:border-white lg:hover:border-black"
              >
                Fonts
              </a>
              <a
                href="#"
                class="py-1 text-sm border-b w-fit border-transparent hover:border-white lg:hover:border-black"
              >
                Videos
              </a>
              <a
                href="#"
                class="py-1 text-sm border-b w-fit border-transparent hover:border-white lg:hover:border-black"
              >
                Audio
              </a>
              <a
                href="#"
                class="py-1 text-sm border-b w-fit border-transparent hover:border-white lg:hover:border-black"
              >
                Sound Effects
              </a>
              <a
                href="#"
                class="py-1 text-sm w-fit border-b border-transparent hover:border-white lg:hover:border-black"
              >
                3D Elements
              </a>
            </div>
          </div>
        </transition>
      </div>
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-2 sm:gap-3 md:gap-[14px] xl:gap-6">
          <button
            class="bg-[#EFF1D9] md:flex hidden text-[13px] xl:text-[12px] font-medium py-2 px-[14px] rounded-[4px] items-center gap-2"
          >
            <AiTool />
            AI Tools
          </button>
          <a
            href="#"
            class="py-1 sm:flex hidden border-b border-transparent hover:border-black text-sm xl:text-[13px] font-[350] text-black"
            >Pricing</a
          >
          <div class="relative">
            <button
              class="bg-[#F2F2F2] text-[#005B52] flex items-center justify-center size-[31px] rounded-full"
            >
              <Cart />
            </button>
            <div
              class="bg-[#DBF226] absolute -top-1.5 -right-1.5 text-[8px] font-[400] size-[18px] rounded-full flex items-center justify-center border-2 border-white"
            >
              15
            </div>
          </div>
          <a
            href="/auth/login"
            class="py-1 sm:flex hidden border-b border-transparent hover:border-black text-sm xl:text-[13px] font-[350] text-black"
            >Log in</a
          >
          <button
            class="bg-[#0D0D0D] sm:flex hidden py-[6px] md:py-[7px] lg:py-2 lg:px-[14px] md:px-3 px-[10px] rounded-[4px] text-[13px] xl:text-[12px] text-xs font-medium text-white"
          >
            Join <span class="xl:flex flex ml-1 lg:hidden">for free</span>
          </button>
          <div class="relative sm:hidden flex ml-1">
            <button
              class="bg-[#F2F2F2] flex items-center overflow-hidden justify-center size-[31px] rounded-full"
            >
              <div class="border border-[#DBF226] overflow-hidden">
                <img src="" alt="" class="object-cover" />
              </div>
              <!-- <NuxtImg class="object-cover" src="/image.png" /> -->
            </button>
            <div
              class="bg-[#DBF226] cursor-context-menu absolute -top-2 -right-2.5 text-[6px] font-[400] size-[20px] rounded-full flex items-center justify-center border-2 border-white"
            >
              Pro
            </div>
            <div
              class="bg-[#78BF39] absolute -bottom-[2px] -right-[2px] text-[8px] font-[400] size-[10px] rounded-full flex items-center justify-center border border-white"
            ></div>
          </div>
        </div>
        <div
          class="border-l xl:flex hidden pl-3 border-[#9B9B9B80] items-center gap-2"
        >
          <div class="relative">
            <button
              class="bg-[#F2F2F2] flex items-center justify-center size-[31px] rounded-full"
            >
              <Calls />
            </button>
            <div
              class="bg-[#DBF226] absolute -top-1.5 -right-1.5 text-[8px] font-[400] size-[18px] rounded-full flex items-center justify-center border-2 border-white"
            >
              6
            </div>
          </div>
          <div class="relative">
            <button
              class="bg-[#F2F2F2] flex items-center justify-center size-[31px] rounded-full"
            >
              <Message />
            </button>
            <div
              class="bg-[#DBF226] absolute -top-1.5 -right-1.5 text-[8px] font-[400] size-[18px] rounded-full flex items-center justify-center border-2 border-white"
            >
              12
            </div>
          </div>
          <div class="relative">
            <button
              class="bg-[#F2F2F2] flex items-center justify-center size-[31px] rounded-full"
            >
              <Save />
            </button>
            <div
              class="bg-[#DBF226] absolute -top-1.5 -right-1.5 text-[8px] font-[400] size-[18px] rounded-full flex items-center justify-center border-2 border-white"
            >
              4
            </div>
          </div>

          <div class="relative ml-2">
            <button
              class="bg-[#F2F2F2] flex items-center overflow-hidden justify-center size-[31px] rounded-full"
            >
              <div class="border border-[#DBF226] overflow-hidden">
                <img src="" alt="" class="object-cover" />
              </div>
              <!-- <NuxtImg class="object-cover" src="/image.png" /> -->
            </button>
            <div
              class="bg-[#DBF226] cursor-context-menu absolute -top-2 -right-2.5 text-[6px] font-[400] size-[20px] rounded-full flex items-center justify-center border-2 border-white"
            >
              Pro
            </div>
            <div
              class="bg-[#78BF39] absolute -bottom-[2px] -right-[2px] text-[8px] font-[400] size-[10px] rounded-full flex items-center justify-center border border-white"
            ></div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Cross from '../icons/Cross'
import NavLogo from '../icons/NavLogo'
import AiTool from '../icons/AiTool'
import Cart from '../icons/Cart'
import Calls from '../icons/Calls'
import Message from '../icons/Message'
import Save from '../icons/Save'
import HamBurger from '../icons/HamBurger'

const isDrawerOpen = ref(false)

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value
}

// Reactive time data
const hours = ref(['0', '5']) // Start time (e.g., 5 hours)
const minutes = ref(['0', '0']) // Start time (e.g., 0 minutes)
const seconds = ref(['0', '0']) // Start time (e.g., 0 seconds)

// Update the time every second
const updateTime = () => {
  // Convert the time to total seconds
  let totalSeconds =
    parseInt(hours.value.join('')) * 3600 +
    parseInt(minutes.value.join('')) * 60 +
    parseInt(seconds.value.join(''))

  if (totalSeconds > 0) {
    totalSeconds-- // Decrement the total time by 1 second
  }

  // Calculate the new hours, minutes, and seconds
  const newHours = Math.floor(totalSeconds / 3600)
  const newMinutes = Math.floor((totalSeconds % 3600) / 60)
  const newSeconds = totalSeconds % 60

  // Update the display
  hours.value = String(newHours).padStart(2, '0').split('')
  minutes.value = String(newMinutes).padStart(2, '0').split('')
  seconds.value = String(newSeconds).padStart(2, '0').split('')
}

// Start the countdown
onMounted(() => {
  setInterval(updateTime, 1000) // Update the time every second
  updateTime() // Initial time update
})
</script>

<style scoped>
/* Drawer transition styles */
.drawer-transition-enter-active,
.drawer-transition-leave-active {
  transition:
    transform 0.8s cubic-bezier(0.25, 1, 0.5, 1),
    opacity 0.8s ease-out;
}

.drawer-transition-enter {
  transform: translateX(-100%);
  opacity: 0;
}

.drawer-transition-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.drawer-transition-leave-active {
  transition:
    transform 0.8s ease-in,
    opacity 0.8s ease-in;
}

.drawer-transition-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
