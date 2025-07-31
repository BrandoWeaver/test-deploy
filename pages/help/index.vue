<template>
  <div
    class="w-[1440px] xl-max:w-full lg-max:w-full mx-auto md-max:px-[16px] px-6 pt-[14px]"
  >
    <nav
      class="py-4 text-[11px] lg-max:text-[10px] md-max:text-[9px] sm-max:text-[8px] text-black/50 font-light leading-[19px] lg-max:leading-[18px] md-max:leading-[16.2px] sm-max:leading-[14.4px] flex flex-wrap items-center gap-[8px] xs-max:inline-flex"
    >
      <NuxtLink to="/" class="hover:text-black transition-colors">Home</NuxtLink
      ><span>/</span>
      <NuxtLink to="/" class="hover:text-black transition-colors"
        >Help Center</NuxtLink
      >
    </nav>

    <div
      class="flex flex-col gap-[24px] lg:py-6 lg-max:py-6 md-max:py-4 sm-max:py-4"
    >
      <div class="flex flex-col gap-[10px]">
        <h1
          class="xl:text-[30px] xl-max:text-[30px] lg-max:text-[24px] md-max:text-[20px] sm-max:text-[18px] font-medium text-[#000] font-lexend"
        >
          Help Center
        </h1>
        <p
          class="text-[#000] xl:text-[17px] xl-max:text-[17px] lg-max:text-[15px] md-max:text-[14px] sm-max:text-[13px] font-noto font-light"
        >
          Quickly find the assistance you need to make the most of your Thortok
          experience.
        </p>
      </div>

      <div class="">
        <div class="relative w-full">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search for solution..."
            class="w-full rounded-[6px] bg-gradient-to-b from-[#F2F2F2] to-[#F2F2F2] bg-[#383838] px-4 py-2 outline-none pr-10 h-[56px] lg:placeholder:text-[14px] lg-max:placeholder:text-[13px] md-max:placeholder:text-[12px] sm-max:placeholder:text-[10px]"
          />
          <button
            type="button"
            @click="clearSearch"
            class="absolute inset-y-0 right-[44px] flex items-center pr-3 text-[#000]"
            :class="{ hidden: searchQuery === '' }"
          >
            <Remove />
          </button>

          <span class="absolute inset-y-0 right-0 flex items-center pr-3">
            <SearchIcon />
          </span>
        </div>
      </div>
    </div>

    <HelpCenterList :list-items="ListsCenter" />
  </div>
  <div class="w-full bg-[#F2F2F2] mt-8">
    <div
      class="w-[1440px] xl-max:w-full lg-max:w-full mx-auto md-max:px-[16px] xl:py-6 xl-max:py-6 lg-max:py-6 md-max:py-6 sm-max:py-6"
    >
      <div
        class="flex flex-col gap-6 xl:p-6 xl-max:p-6 lg-max:p-6 md-max:p-0 sm-max:p-0"
      >
        <div class="flex flex-col gap-[10px]">
          <h2
            class="xl:text-[30px] xl-max:text-[30px] lg-max:text-[24px] md-max:text-[20px] sm-max:text-[18px] font-medium font-lexend"
          >
            Need More Help?
          </h2>
          <p
            class="text-[#000] xl:text-[17px] xl-max:text-[17px] lg-max:text-[15px] md-max:text-[14px] sm-max:text-[13px] font-noto font-light"
          >
            Visit the sections above or contact our team for quick assistance.
          </p>
        </div>
        <div>
          <NuxtLink
            to="/contact"
            class="text-emerald-500 hover:underline flex items-center"
          >
            <div class="flex flex-row items-center">
              <p
                class="text-[#005B52] mr-[10px] xl:text-[17px] xl-max:text-[17px] lg-max:text-[15px] md-max:text-[14px] sm-max:text-[13px] font-noto font-bold"
              >
                Go to Contact Page
              </p>
              <Forward :color="'#005B52'" />
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Forward from '~/icons/help/forward.vue'
import HelpCenterList from '~/components/help_center/HelpCenterList.vue'
import SearchIcon from '~/icons/forum_icons/SearchIcon.vue'
import Remove from '~/icons/forum_icons/Remove.vue'
const searchQuery = ref('')
const clearSearch = () => {
  searchQuery.value = ''
}
</script>
