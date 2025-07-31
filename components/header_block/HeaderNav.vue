<template>
  <div
    class="w-full mx-auto flex flex-col justify-between items-center self-stretch"
  >
    <!-- Logo and Navigation -->
    <div class="flex items-center justify-between w-full">
      <!-- Logo and Navigation Links -->
      <div
        class="flex justify-start items-center gap-[32px] lg-max:gap-[18px] md-max:gap-[12px]"
      >
        <!-- SVG for dynamic navigation on md screens -->
        <div @click="toggleMenu" class="hidden lg-max:block cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <g clip-path="url(#clip0_2071_128444)">
              <path
                d="M19.1667 9.66602H0.833333C0.373096 9.66602 0 10.0391 0 10.4994C0 10.9596 0.373096 11.3327 0.833333 11.3327H19.1667C19.6269 11.3327 20 10.9596 20 10.4994C20 10.0391 19.6269 9.66602 19.1667 9.66602Z"
                fill="black"
              />
              <path
                d="M19.1667 3.83398H0.833333C0.373096 3.83398 0 4.20708 0 4.66732C0 5.12755 0.373096 5.50065 0.833333 5.50065H19.1667C19.6269 5.50065 20 5.12755 20 4.66732C20 4.20708 19.6269 3.83398 19.1667 3.83398Z"
                fill="black"
              />
              <path
                d="M19.1667 15.5H0.833333C0.373096 15.5 0 15.8731 0 16.3333C0 16.7936 0.373096 17.1667 0.833333 17.1667H19.1667C19.6269 17.1667 20 16.7936 20 16.3333C20 15.8731 19.6269 15.5 19.1667 15.5Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_2071_128444">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <!-- Logo -->
        <NuxtLink
          class="text-black flex-col mb-[6px] justify-center text-center font-lexend text-[22px] font-bold leading-[30px]"
          to="/"
        >
          thortok
        </NuxtLink>
        <!-- <NuxtLink
          class="text-black flex-col mb-[6px] justify-center text-center font-lexend text-[22px] font-bold leading-[30px]"
          to="/details"
        >
          detail
        </NuxtLink> -->

        <!-- Dynamic Navigation Links -->
        <div
          class="flex gap-[24px] xl-max:gap-[18px] lg-max:hidden items-center"
        >
          <NuxtLink
            v-for="(link, index) in navigationList"
            :key="index"
            :to="link.url"
            class="text-[#000000] text-[14px] hover:text-black border-b border-transparent hover:border-black transition-all duration-300 leading-[25px] py-[4px] px-[3px]"
          >
            {{ $t(link.title) }}
          </NuxtLink>
        </div>
      </div>

      <!-- Utility Links and Buttons -->
      <div class="flex items-center gap-[24px]">
        <!-- Wrapper div with flex layout, alignment, and gap -->
        <div
          class="flex items-center gap-[24px] xl-max:gap-[14px] md-max:gap-[8px]"
        >
          <button
            :class="{
              'bg-white text-black shadow-[0px_4px_4px_0px_#DBF226]': isActive,
              'bg-[#EFF1D9] text-black  hover:bg-[#0D0D0D] hover:text-white':
                !isActive,
            }"
            class="flex py-[8px] px-[14px] justify-center items-center gap-[4px] rounded-[4px] border text-[13px] font-noto font-bold leading-normal md-max:hidden"
            @click="toggleActive"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              :class="
                isActive ? 'fill-black text-black' : 'fill-current text-current'
              "
              class="w-[12px] h-[12px] dark:fill-current dark:text-white"
            >
              <g clip-path="url(#clip0_2845_151947)">
                <path
                  d="M11.6582 3.875C11.0946 3.875 10.5541 3.63795 10.1556 3.21599C9.75709 2.79403 9.5332 2.22174 9.5332 1.625C9.5332 1.32663 9.42126 1.04048 9.222 0.829505C9.02275 0.618526 8.7525 0.5 8.4707 0.5C8.18891 0.5 7.91866 0.618526 7.7194 0.829505C7.52014 1.04048 7.4082 1.32663 7.4082 1.625C7.4082 2.22174 7.18432 2.79403 6.7858 3.21599C6.38729 3.63795 5.84679 3.875 5.2832 3.875C5.00141 3.875 4.73116 3.99353 4.5319 4.2045C4.33264 4.41548 4.2207 4.70163 4.2207 5C4.2207 5.29837 4.33264 5.58452 4.5319 5.7955C4.73116 6.00647 5.00141 6.125 5.2832 6.125C5.84679 6.125 6.38729 6.36205 6.7858 6.78401C7.18432 7.20597 7.4082 7.77826 7.4082 8.375C7.4082 8.67337 7.52014 8.95952 7.7194 9.1705C7.91866 9.38147 8.18891 9.5 8.4707 9.5C8.7525 9.5 9.02275 9.38147 9.222 9.1705C9.42126 8.95952 9.5332 8.67337 9.5332 8.375C9.5332 7.77826 9.75709 7.20597 10.1556 6.78401C10.5541 6.36205 11.0946 6.125 11.6582 6.125C11.94 6.125 12.2102 6.00647 12.4095 5.7955C12.6088 5.58452 12.7207 5.29837 12.7207 5C12.7207 4.70163 12.6088 4.41548 12.4095 4.2045C12.2102 3.99353 11.94 3.875 11.6582 3.875Z"
                  fill="currentColor"
                />
                <path
                  d="M5.0957 9.375C4.76418 9.375 4.44624 9.2433 4.21182 9.00888C3.9774 8.77446 3.8457 8.45652 3.8457 8.125C3.8457 7.95924 3.77986 7.80027 3.66265 7.68306C3.54544 7.56585 3.38646 7.5 3.2207 7.5C3.05494 7.5 2.89597 7.56585 2.77876 7.68306C2.66155 7.80027 2.5957 7.95924 2.5957 8.125C2.5957 8.45652 2.46401 8.77446 2.22959 9.00888C1.99517 9.2433 1.67722 9.375 1.3457 9.375C1.17994 9.375 1.02097 9.44085 0.903761 9.55806C0.786551 9.67527 0.720703 9.83424 0.720703 10C0.720703 10.1658 0.786551 10.3247 0.903761 10.4419C1.02097 10.5592 1.17994 10.625 1.3457 10.625C1.67722 10.625 1.99517 10.7567 2.22959 10.9911C2.46401 11.2255 2.5957 11.5435 2.5957 11.875C2.5957 12.0408 2.66155 12.1997 2.77876 12.3169C2.89597 12.4342 3.05494 12.5 3.2207 12.5C3.38646 12.5 3.54544 12.4342 3.66265 12.3169C3.77986 12.1997 3.8457 12.0408 3.8457 11.875C3.8457 11.5435 3.9774 11.2255 4.21182 10.9911C4.44624 10.7567 4.76418 10.625 5.0957 10.625C5.26146 10.625 5.42043 10.5592 5.53765 10.4419C5.65486 10.3247 5.7207 10.1658 5.7207 10C5.7207 9.83424 5.65486 9.67527 5.53765 9.55806C5.42043 9.44085 5.26146 9.375 5.0957 9.375Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_2845_151947">
                  <rect
                    width="12"
                    height="12"
                    fill="white"
                    transform="translate(0.720703 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            AI Tools
          </button>

          <!-- Pricing and Log in Links -->
          <button
            class="text-gray-700 py-[4px] text-[14px] md-max:text-[11px] leading-[25px] md-max:leading-[19.8px] hover:text-black border-b border-transparent hover:border-black transition-all duration-300 sm-max:hidden"
          >
            Pricing
          </button>
          <button href="#" class="text-gray-700 hidden hover:text-black">
            Log in
          </button>

          <!-- Cart Icon with Badge -->
          <div class="relative">
            <div
              class="hover-for-menuicon flex w-[31.428px] h-[31.428px] p-[6.428px] justify-center items-center rounded-full bg-[#F2F2F2]"
            >
              <img
                src="~/assets/logo/bascket.svg"
                alt="Cart"
                class="w-[18px] h-[18px]"
              />
            </div>
            <div class="absolute top-[-6px] right-[-12px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <circle
                  cx="10.3024"
                  cy="9.85711"
                  r="8.85711"
                  fill="#DBF226"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
              <span
                class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-[##000000] font-lexend text-[9px] font-normal leading-[16px]"
                >15</span
              >
            </div>
          </div>
          <NuxtLink
            v-if="!authStore?.authenticated"
            :to="`/auth/login?redirect=${$route.fullPath}`"
            class="text-gray-700 text-[14px] md-max:text-[11px] sm-max:text-[10px] leading-[25px] md-max:leading-[19.8px] sm-max:leading-[18px] py-1 hover:text-black border-b border-transparent hover:border-black transition-all duration-300"
          >
            Login
          </NuxtLink>

          <div class="relative hidden" @click="isOpen = true">
            <div
              class="hover-for-menuicon flex w-[31.428px] h-[31.428px] p-[6.428px] justify-center items-center rounded-full bg-[#F2F2F2]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <g clip-path="url(#clip0_3405_82998)">
                  <path
                    d="M13.3054 15C13.0742 14.9994 12.8454 14.9529 12.6323 14.8633C12.4191 14.7738 12.2258 14.6428 12.0636 14.4781L8.2198 10.6569L4.37605 14.4806C4.1292 14.7311 3.81261 14.9014 3.46756 14.9692C3.12252 15.0371 2.76502 14.9995 2.44168 14.8613C2.11513 14.7299 1.83577 14.5031 1.64009 14.2106C1.44441 13.918 1.3415 13.5732 1.3448 13.2213V3.125C1.3448 2.2962 1.67404 1.50134 2.2601 0.915291C2.84615 0.32924 3.641 0 4.4698 0L11.9698 0C12.3802 0 12.7865 0.0808305 13.1657 0.237876C13.5448 0.394922 13.8893 0.625108 14.1795 0.915291C14.4697 1.20547 14.6999 1.54997 14.8569 1.92911C15.014 2.30826 15.0948 2.71462 15.0948 3.125V13.2213C15.0983 13.5729 14.9958 13.9175 14.8006 14.21C14.6053 14.5026 14.3265 14.7295 14.0004 14.8613C13.7803 14.9533 13.544 15.0005 13.3054 15ZM4.4698 1.25C3.97252 1.25 3.49561 1.44754 3.14398 1.79918C2.79235 2.15081 2.5948 2.62772 2.5948 3.125V13.2213C2.59458 13.3254 2.62522 13.4273 2.68287 13.514C2.74051 13.6008 2.82257 13.6685 2.91867 13.7086C3.01478 13.7487 3.12062 13.7595 3.22283 13.7395C3.32504 13.7195 3.41903 13.6696 3.49293 13.5963L7.7823 9.33313C7.89941 9.21672 8.05781 9.15138 8.22293 9.15138C8.38805 9.15138 8.54645 9.21672 8.66355 9.33313L12.9479 13.595C13.0218 13.6684 13.1158 13.7182 13.218 13.7382C13.3202 13.7582 13.4261 13.7475 13.5222 13.7073C13.6183 13.6672 13.7003 13.5995 13.758 13.5128C13.8156 13.426 13.8463 13.3241 13.8461 13.22V3.125C13.8461 2.62772 13.6485 2.15081 13.2969 1.79918C12.9452 1.44754 12.4683 1.25 11.9711 1.25H4.4698Z"
                    fill="#005B52"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3405_82998">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(0.719727)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="absolute top-[-6px] right-[-12px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <circle
                  cx="10.3024"
                  cy="9.85711"
                  r="8.85711"
                  fill="#DBF226"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
              <span
                class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-[##000000] font-lexend text-[9px] font-normal leading-[16px]"
                >1</span
              >
            </div>
          </div>
          <!-- Join for Free Button -->
          <button
            v-if="!authStore?.authenticated"
            :class="{
              ' bg-white text-black shadow-[0px_4px_4px_0px_#DBF226]':
                isJoinSelected,
              'bg-[#0D0D0D] text-white  hover:bg-[#EFF1D9] hover:text-black':
                !isJoinSelected,
            }"
            class="py-[8px] px-[14px] justify-center items-center gap-[10px] rounded-[4px] border font-noto text-[13px] md-max:text-[10px] sm-max:text-[9px] font-bold leading-normal xs1:flex"
            @click="toggleJoinSelected"
          >
            <p class="flex gap-1">
              Join
              <span class="xl-max:hidden lg-max:flex sm-max:hidden"
                >for free</span
              >
            </p>
          </button>
        </div>

        <!-- Divider Line -->
        <div class="ml-0" v-if="authStore?.authenticated">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="21"
            viewBox="0 0 2 21"
            fill="none"
            style="transform: rotate(-180deg)"
          >
            <path
              d="M1.16016 20.5L1.16016 0.5"
              stroke="rgba(155, 155, 155, 0.50)"
              stroke-width="1"
            />
          </svg>
        </div>

        <!-- Icons with Badges (Bell, Message, Bookmark) and Profile -->
        <div
          class="flex justify-end items-center gap-[14px]"
          v-if="authStore?.authenticated"
        >
          <!-- Bell Icon with Badge -->
          <div class="relative">
            <div
              class="hover-for-menuicon flex w-[31.428px] h-[31.428px] p-[6.428px] justify-center items-center"
            >
              <img
                src="~/assets/logo/fi-rr-bell-school.svg"
                alt="Bell Icon"
                class="w-[18px] h-[18px]"
              />
            </div>
            <div class="absolute top-[-6px] right-[-12px]">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                <circle
                  cx="10.3024"
                  cy="9.85711"
                  r="8.85711"
                  fill="#DBF226"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
              <span
                class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-black font-lexend text-[8px] font-normal leading-[10px]"
                >6</span
              >
            </div>
          </div>

          <!-- Message Icon with Badge -->
          <div class="relative">
            <div
              class="flex w-[31.428px] h-[31.428px] p-[6.428px] justify-center items-center"
            >
              <img
                src="~/assets/logo/msginbox.svg"
                alt="Message Icon"
                class="w-[18px] h-[18px]"
              />
            </div>
            <div class="absolute top-[-6px] right-[-12px]">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                <circle
                  cx="10.3024"
                  cy="9.85711"
                  r="8.85711"
                  fill="#DBF226"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
              <span
                class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-black font-lexend text-[8px] font-normal leading-[10px]"
                >12</span
              >
            </div>
          </div>

          <!-- Bookmark Icon with Badge -->
          <div class="relative" @click="isOpen = true">
            <div
              class="flex w-[31.428px] h-[31.428px] p-[6.428px] justify-center items-center"
            >
              <img
                src="~/assets/logo/bookmark.svg"
                alt="Bookmark Icon"
                class="w-[18px] h-[18px]"
              />
            </div>
            <div class="absolute top-[-6px] right-[-12px]">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                <circle
                  cx="10.3024"
                  cy="9.85711"
                  r="8.85711"
                  fill="#DBF226"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
              <span
                class="absolute top-0 left-0 w-full h-full flex items-center justify-center text-black font-lexend text-[8px] font-normal leading-[10px]"
                >4</span
              >
            </div>
          </div>
          <!-- Profile Image with Badges -->
          <div class="relative inline-block text-left">
            <Menu as="div" class="relative">
              <div>
                <MenuButton
                  class="flex items-center justify-center rounded-full border border-[#DBF226] overflow-hidden w-9 h-9 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-400"
                >
                  <div
                    class="relative w-[36.707px] h-[36.665px] rounded-full border-[1px] border-[#DBF226] overflow-hidden flex justify-center items-center"
                  >
                    <!-- assets/images/Picture.png -->
                    <NuxtImg
                      :src="userStore.userData?.profile || ''"
                      alt="Profile Image"
                      class="w-full h-full object-cover"
                      v-if="userStore.userData?.profile"
                      quality="20"
                      format="webp"
                    />
                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                  </div>
                  <div
                    class="absolute top-[-10px] right-[-15px] w-[25px] h-[25px] rounded-full bg-[#DBF226] flex items-center justify-center border-[1px] border-white"
                  >
                    <span
                      class="text-black text-[6px] font-lexend font-bold leading-[10px]"
                      >Pro</span
                    >
                  </div>
                  <div
                    class="absolute bottom-[-6px] right-[-8px] w-[15px] h-[15px] rounded-full bg-[#78BF39] border-[1px] border-white"
                  ></div>
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <MenuItems
                  class="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-20"
                >
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <button
                        class="group flex w-full items-center rounded-md px-4 py-2 text-sm"
                      >
                        Profile
                      </button>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <NuxtLink
                        :to="'/setting'"
                        class="group flex w-full items-center rounded-md px-4 py-2 text-sm"
                      >
                        Settings
                      </NuxtLink>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <button
                        @click="handleLogout"
                        class="group flex w-full items-center rounded-md px-4 py-2 text-sm"
                      >
                        Logout
                      </button>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <button
                        class="group flex w-full items-center rounded-md px-4 py-2 text-sm"
                      >
                        <ColorModePicker />
                      </button>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
        <!-- End of Icons with Badges and Profile -->
      </div>
      <!-- End of Utility Links -->
    </div>
    <!-- End of Logo and Navigation -->

    <!-- Search Bar -->
    <!-- <SearchBar :show="showSearchBar" @close="closeSearchBar" /> -->
    <!-- Side Menu Component -->
    <SideMenu
      :isOpen="isMenuOpen"
      :menuLinks="navigationList"
      @close="closeMenu"
    />
    <CusDialog v-model:open="isOpen">
      <WishlistUserWishList />
    </CusDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CusDialog from '../cusComponents/CusDialog.vue'
import SearchBar from '~/components/header_block/SearchBar.vue'
import SideMenu from '~/components/header_block/SideMenu.vue'
import ColorModePicker from '../color-mode/ColorModePicker.vue'
import { useAuthStore } from '~/stores/useAuthStore'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import WishlistUserWishList from '@/components/wishlist/UserWishList.vue'
const authStore = useAuthStore()
const userStore = useUserStore()
const isOpenAcc = ref(false)
const route = useRoute()
const router = useRouter()
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}
const t = useI18n()
const showSearchBar = ref(false)
const isMenuOpen = ref(false) // Manage menu state
const isOpen = ref(false)
const isActive = ref(false)
// State for the "Join for Free" button
const isJoinSelected = ref(false)
const wishlist = useWishlistStore()
const collection = useCollectionStore()
const handleLogout = () => {
  authStore.logUserOut()
  wishlist.clearLocal()
  collection.clearLocal()
  const currentPath = route.fullPath
  const protectedRoute = ['/checkout']
  if (protectedRoute.includes(route.path)) {
    router.push(`/auth/login?redirect=${encodeURIComponent(currentPath)}`)
  }
}
// Function to toggle the selected state
const toggleJoinSelected = () => {
  isJoinSelected.value = !isJoinSelected.value
}
const toggleSearchBar = () => {
  showSearchBar.value = !showSearchBar.value
}

const toggleActive = () => {
  isActive.value = !isActive.value
}
const closeSearchBar = () => {
  showSearchBar.value = false
}
// Functions to toggle and close the menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
// import { API } from '~/constants/apiEndpoints'
// import { useApi } from '~/composables/custom-fetch-api/useApi'
// const { locale } = useI18n()
// const navigateToLogin = () => {
//   window.location.href = '/auth/login'
// }
// const { data: headerData } = useApi<HEADER.ListHeader>(
//   () =>
//     API.HOME.LIST_HEADER.replace(':type', 'web')
//       .replace(':version', 'v1')
//       .replace(':lang', locale.value),
//   {
//     method: 'GET',
//     server: false,
//     watch: [locale],
//   }
// )
</script>
