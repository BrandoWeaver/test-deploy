<template>
  <div class="">
    <footer class="bg-[#0D0D0D]">
      <div class="2xl:max-w-7xl 2xl:px-0 pl-4 px-4 2xl:pl-4 md:px-6 mx-auto">
        <div class="text-gray-400">
          <div class="max-w-7xl mx-auto py-10">
            <div class="md:grid grid-cols-2 gap-10 xl:gap-0 md:justify-between">
              <div class="mb-8 md:mb-0">
                <h2 class="text-white text-[30px] font-bold mb-4">thortok</h2>
                <div class="flex items-center gap-3 mb-6">
                  <Instagram />
                  <TikTok />
                  <Facebook />
                  <Youtube />
                  <LinkedIn />
                  <Pinterest />
                </div>
                <p class="text-white">
                  Be the first to discover our updates, subscribe now!
                </p>
                <form class="mt-4">
                  <div class="flex relative w-[85%]">
                    <input
                      type="text"
                      placeholder="Your Email"
                      class="py-2.5 pl-10 pr-10 rounded-[6px] bg-[#383838] w-full"
                    />
                    <div class="absolute -translate-y-1/2 top-1/2 left-3">
                      <Email />
                    </div>
                    <div class="absolute top-1/2 -translate-y-1/2 right-1.5">
                      <button
                        class="py-2 px-[14px] rounded-[4px] bg-[#DBF226] text-sm font-medium text-black"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
                <p class="text-sm mt-2">
                  Unsubscribe at any time.
                  <a href="#" class="text-gray-300 underline">Privacy Policy</a>
                </p>
              </div>

              <div
                class="grid grid-cols-2 font-[300] text-white text-sm sm:grid-cols-4 md:grid-cols-2 gap-x-6 gap-y-10 xl:grid-cols-4"
              >
                <div>
                  <h3 class="text-white font-bold mb-6">Information</h3>
                  <ul class="space-y-3">
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >About Us</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >Our Products</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >Our Pricing & Plans</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >Careers</a
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-white font-bold mb-6">Discover</h3>
                  <ul class="space-y-3">
                    <li>
                      <a
                        href="#"
                        class="hover:underline whitespace-nowrap underline-offset-4 hover:text-gray-200"
                        >Calendar of Festivities</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >Popular Searches</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >Become a Contributor</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >Affiliate Program</a
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-white font-bold mb-6">Support</h3>
                  <ul class="space-y-3">
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >Contact</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >Our Forum</a
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-white font-bold mb-6">Legal</h3>
                  <ul class="space-y-3">
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >Terms & Conditions</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >Privacy Policy</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >License</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-black relative text-white px-4 py-8 md:py-4 lg:px-6">
        <div
          class="2xl:max-w-7xl px-4 md:px-6 mx-auto flex md:flex-row flex-col-reverse items-center justify-between gap-3"
        >
          <p class="text-[11px] sm:text-left font-[300] text-center">
            © 2024 Thortok Trademarks and brands are the property of their
            respective owners.
          </p>
          <div
            class="bg-[#DBF226] -rotate-90 absolute top-0 left-[50%] lg:left-0 lg:translate-x-0 -translate-x-1/2 lg:top-0 lg:translate-y-0 -translate-y-[50%] lg:relative shadow-[0px_4px_16px_0px_#0000001A] cursor-pointer size-10 rounded-full flex items-center justify-center"
          >
            <Arrow />
          </div>
          <div
            class="flex whitespace-nowrap md:text-sm text-[8px] md:flex-nowrap font-light items-center text-[#EDEDED] gap-4"
          >
            <a
              href="#"
              class="hover:border-[#EDEDED] border-transparent border-b"
              >Privacy</a
            >
            <a
              href="#"
              class="hover:border-[#EDEDED] border-transparent border-b"
              >Terms of Use</a
            >
            <a
              href="#"
              class="hover:border-[#EDEDED] border-transparent border-b"
              >Cookie</a
            >
            <button
              class="border flex items-center gap-2 border-[#787878] bg-[#383838] rounded-[6px] p-2 text-white"
            >
              English
              <div class="overflow-hidden rounded-full w-fit h-fit">
                <Flag />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import RightLongArrow from '../icons/RightLongArrow.vue'
import Google from '../icons/Google.vue'
import Telegram from '../icons/Telegram.vue'
import Apple from '../icons/Apple.vue'
import Eye from '../icons/Eye.vue'
import UnEye from '../icons/UnEye.vue'
import Warning from '../icons/Warning.vue'
import Instagram from '../icons/Instagram.vue'
import TikTok from '../icons/TikTok.vue'
import Facebook from '../icons/Facebook.vue'
import Youtube from '../icons/Youtube.vue'
import LinkedIn from '../icons/LinkedIn.vue'
import Pinterest from '../icons/Pinterest.vue'
import Flag from '../icons/Flag.vue'
import Email from '../icons/Email.vue'
import Arrow from '../icons/CarouselRightArrow.vue'

const showPassword = ref(false) // Initial state of password visibility

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value // Toggle between true and false
}
</script>
