<template>
  <!-- Full-Screen Container -->
  <div class="w-full pt-[14px] lg-max:pt-[8px] md-max:pt-[8px]">
    <!-- Centered Content Container -->
    <div
      class="flex flex-col w-[1440px] xl-max:w-full pt-[16px] md-max:pt-[6px] lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px] rounded-lg"
    >
      <!-- Breadcrumb Navigation -->
      <nav
        class="text-[11px] lg-max:text-[10px] md-max:text-[9px] sm-max:text-[8px] text-black/50 font-light mb-4 leading-[19px] lg-max:leading-[18px] md-max:leading-[16.2px] sm-max:leading-[14.4px] flex flex-wrap items-center gap-[8px] xs-max:inline-flex"
      >
        <NuxtLink to="/" class="hover:text-black transition-colors"
          >Home</NuxtLink
        ><span>/</span>
        <NuxtLink to="/" class="hover:text-black transition-colors"
          >All Products</NuxtLink
        ><span>/</span>
        <NuxtLink to="/" class="hover:text-black transition-colors"
          >Photos</NuxtLink
        ><span>/</span>
        <NuxtLink to="/" class="hover:text-black transition-colors"
          >Food & Beverages</NuxtLink
        ><span>/</span>
        <NuxtLink to="/" class="hover:text-black transition-colors"
          >Fruits & Desserts</NuxtLink
        >
      </nav>

      <!-- Main Product Section -->
      <div
        class="flex flex-row w-full lg-max:w-full md-max:w-full mx-auto gap-8"
      >
        <!-- Left Section -->
        <div class="flex flex-col gap-6 flex-1 lg-max:block">
          <!-- Image Viewer -->
          <ImageViewer
            :angles="angles"
            :imageSrc="pineappleImage"
            :totalTicks="totalTicks"
            :angle_list="props.post_detail?.data?.angle_list!"
          />
          <!-- Control Container -->
          <ControlContainer
            class="lg-max:hidden"
            :creator="props.post_detail?.data?.creator"
          />
          <!-- Underblock Section -->
          <UnderBlock
            class="lg-max:hidden"
            :description="post_detail?.data?.description"
            :metadata="post_detail?.data?.metadata"
            :upload_on="post_detail?.data?.uploaded_on"
            :views="post_detail?.data?.views"
            :downloads="post_detail?.data?.downloads"
            :like="post_detail?.data?.likes"
            :used_software="post_detail?.data?.used_software"
            :tags="post_detail?.data?.tags"
          />
          <xlContainer class="hidden lg:hidden lg-max:block md-max:hidden" />
          <UnderBlock class="hidden md-max:mt-[24px] md-max:hidden" />
          <lgContainer class="hidden lg:hidden md:hidden md-max:block" />
          <!-- <lgContainer class="hidden 2xl:hidden lg:block md:block sm:block xs:block" /> -->
        </div>

        <!-- Right Section: Product Details -->
        <div class="flex-row lg-max:hidden">
          <!-- <ProductDetails
            :productName="props.post_detail?.data?.title || ''"
            :author="props.post_detail?.data?.creator.name.toUpperCase() || ''"
            :section_id="props.post_detail?.data?.sections.id || -1"
            :content_id="props.post_detail?.data?.id.toString() || ''"
          /> -->
        </div>
      </div>
    </div>

    <!-- UnderProduct Block -->
    <div class="mt-8">
      <!-- <UnderProduct class="md-max:hidden" /> -->
      <!-- <DiscoverCardList
        :data_discover="dataDiscover?.data"
        class="md-max:hidden"
      /> -->
      <LgUnderProduct class="hidden md-max:block" />
    </div>
    <div class="mt-6">
      <UnderFrom
        class="md-max:hidden"
        :section_id="props.post_detail?.data?.sections.id"
        :content_id="props.post_detail?.data?.id"
      />
      <LgUnderFrom class="hidden md-max:block" />
    </div>
    <div class="mt-0">
      <Relatedimages
        class="md-max:hidden"
        :tags="props.post_detail?.data?.tags!"
      />
      <LgRelatedimages class="hidden md-max:block" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import DiscoverCardList from '~/components/detail/discover/DiscoverCardList.vue'
import pineappleImage from '@/assets/images/Pineapple.jpg'
import ControlContainer from '@/components/product_page/ControlContainer.vue'
import ProductDetails from '@/components/product_page/ProductDetails.vue'
import UnderBlock from '@/components/product_page/underblock.vue'
import UnderProduct from '@/components/product_page/underproduct.vue'
import UnderFrom from '@/components/product_page/underFrom.vue'
import Relatedimages from '@/components/product_page/Relatedimages.vue'
import xlContainer from '@/components/product_page/xlContainer.vue'
import lgContainer from '@/components/product_page/lgContainer.vue'
import LgUnderProduct from '@/components/product_page/lgunderproduct.vue'
import LgUnderFrom from '@/components/product_page/lgunderFrom.vue'
import LgRelatedimages from '@/components/product_page/lgRelatedimages.vue'
const angles = [90, 60, 30, 0, -30, -60, -90]
const totalTicks = 33
const props = defineProps<{
  post_detail?: POST.PostDetail
  dataDiscover: Discover.Detail | null
}>()
console.log('post detail get from index page: ', props.post_detail)
</script>

<style scoped>
:root {
  --Space-800: 32px;
}
</style>
