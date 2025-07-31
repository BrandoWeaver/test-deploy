<template>
  <!-- <ContentDetail :post_detail="slugDetail!" /> -->
  <!-- Preview Detail Image Component discouver Component this series component
  related image <ExampleComponent data="resData" /> -->
  <!-- <ContentDetail :post_detail="postDetail!" :dataDiscover="dataDiscover" /> -->
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
          >HOME</NuxtLink
        ><span>/</span>
        <NuxtLink to="/all-products" class="hover:text-black transition-colors"
          >ALL PRODUCTS</NuxtLink
        ><span>/</span>
        <NuxtLink
          :to="`/all-products/${dataSlugDetail?.data?.sections.slug}`"
          class="hover:text-black transition-colors"
          >{{
            dataSlugDetail?.data?.sections.slug?.toUpperCase() || 'UNKNOWN'
          }}</NuxtLink
        ><span>/</span>
        <NuxtLink
          :to="`/all-products/${dataSlugDetail?.data?.sections.slug}/${dataSlugDetail?.data?.sub_sections.slug}`"
          class="hover:text-black transition-colors"
          >{{
            dataSlugDetail?.data?.sub_sections.slug?.toUpperCase() || 'UNKNOWN'
          }}</NuxtLink
        ><span>/</span>
        <NuxtLink
          :to="`/all-products/${dataSlugDetail?.data?.sections.slug}/${dataSlugDetail?.data?.sub_sections.slug}/${dataSlugDetail?.data?.category_lists[0].slug}`"
          class="hover:text-black transition-colors"
          >{{
            dataSlugDetail?.data?.category_lists[0].slug?.toUpperCase() ||
            'UNKNOWN'
          }}</NuxtLink
        ><span>/</span
        ><NuxtLink
          :to="`/all-products/${dataSlugDetail?.data?.sections.slug}/${dataSlugDetail?.data?.sub_sections.slug}/${dataSlugDetail?.data?.category_lists[0].slug}/${dataSlugDetail?.data?.collection_lists[0].slug}`"
          class="hover:text-black transition-colors"
          >{{
            dataSlugDetail?.data?.collection_lists[0].slug?.toUpperCase() ||
            'UNKNOWN'
          }}</NuxtLink
        ><span>/</span
        ><NuxtLink
          :to="`/all-products/${dataSlugDetail?.data?.sections.slug}/${dataSlugDetail?.data?.sub_sections.slug}/${dataSlugDetail?.data?.category_lists[0].slug}/${dataSlugDetail?.data?.collection_lists[0].slug}/${dataSlugDetail?.data?.slug}`"
          class="hover:text-black transition-colors"
          >{{ dataSlugDetail?.data?.slug.toUpperCase() || 'UNKNOWN' }}</NuxtLink
        >
      </nav>

      <!-- Main Product Section -->
      <div
        class="flex flex-row w-full lg-max:w-full md-max:w-full mx-auto gap-8"
      >
        <!-- Left Section -->
        <div class="flex flex-col gap-6 flex-1 lg-max:block">
          <!-- Image Viewer -->
          <!-- <ImageView
            :angles="angles"
            :totalTicks="totalTicks"
            :angle_list="constentSlugDetail?.data?.angle_list! || []"
            :status="statusContentDetail"
          /> -->
          <div
            v-if="statusSlugDetail === 'pending'"
            class="w-full bg-[#f6f5f3] animate-pulse sm-max:w-[86vw] xs-max:w-[80vw] h-[605px] xl-max:h-[41.6vw] lg-max:h-[56vw] md-max:h-[63.5vw] sm-max:h-[55.6vw] rounded-lg shadow-lg object-contain"
          ></div>
          <component
            v-else
            :is="componentToRender"
            v-bind="componentProps"
            v-if="componentToRender"
          />
          <!-- Control Container -->
          <ControlContainer
            class="lg-max:hidden"
            :creator="dataSlugDetail?.data?.creator"
            :content_id="dataSlugDetail?.data?.id.toString() || ''"
            :IsFollow="dataFollowStatus?.data.status"
            :IsLike="dataLiksStatus?.data.status"
          />
          <!-- Underblock Section -->
          <UnderBlock
            class="lg-max:hidden"
            :description="dataSlugDetail?.data?.description"
            :metadata="dataSlugDetail?.data?.metadata"
            :upload_on="dataSlugDetail?.data?.uploaded_on"
            :views="dataSlugDetail?.data?.views"
            :downloads="dataSlugDetail?.data?.downloads"
            :like="dataSlugDetail?.data?.likes"
            :used_software="dataSlugDetail?.data?.used_software"
            :tags="dataSlugDetail?.data?.tags"
            :section_id="dataSlugDetail?.data.sections.id"
          />
          <xlContainer class="hidden lg:hidden lg-max:block md-max:hidden" />
          <UnderBlock class="hidden md-max:mt-[24px] md-max:hidden" />
          <lgContainer class="hidden lg:hidden md:hidden md-max:block" />
          <!-- <lgContainer class="hidden 2xl:hidden lg:block md:block sm:block xs:block" /> -->
        </div>
        <!-- Right Section: Product Details -->
        <div class="flex-row lg-max:hidden">
          <ProductDetails
            :productName="dataSlugDetail?.data?.title || ''"
            :author="dataSlugDetail?.data?.creator.name.toUpperCase() || ''"
            :content_id="dataSlugDetail?.data?.id.toString() || ''"
            :section_id="dataSlugDetail?.data?.sections.id || -1"
            :image_id="
              statusSlugDetail === 'pending' || $nuxt.ssrContext
                ? -1
                : imageIdToDownload
            "
          />
        </div>
      </div>
    </div>

    <!-- UnderProduct Block -->
    <div class="mt-8">
      <!-- <UnderProduct class="md-max:hidden" /> -->
      <LazyDetailDiscoverCardList
        :listItems="allItemsDiscover.listItems"
        :listMenus="allItemsDiscover.listMenu"
        class="md-max:hidden"
        :status="
          statusDiscover === 'pending' || $nuxt.ssrContext ? true : false
        "
        :page="pageDiscover"
        :load-more="loadMoreDiscover"
        :is-fetching="isFetchingDiscover"
        @update-selectedId="updateSelectedMenuId"
        :selected-menu-id="selectedMenuId"
        :content_id="dataSlugDetail?.data?.id"
        :isDetail="true"
      />
      <LazyProductPageLgunderproduct class="hidden md-max:block" />
    </div>
    <div class="mt-6">
      <!-- <UnderFrom
        class="md-max:hidden"
        :section_id="postDetail?.data.sections.id"
        :content_id="postDetail?.data.id"
      /> -->

      <LazyDetailSeriesCardList
        class="md-max:hidden"
        :section_id="dataSlugDetail?.data.sections.id!"
        :content_id="dataSlugDetail?.data.id!"
        :listCardSeries="allListCardSeries.listSeries"
        :status="statusSeriesCard === 'pending'"
        :load-more="loadMoreListSeries"
        :is-fetching="isFetchingSeries"
        :page_number="pageSeries"
      />
      <LazyProductPageLgunderFrom class="hidden md-max:block" />
    </div>
    <div class="mt-0">
      <LazyDetailRelatedCardList
        class="md-max:hidden"
        :listRelatedImage="allRelateImageList.listRelatedCard!"
        :status="statusRelateImage"
        :page_number="pageRelateImage"
        :is-fetching="isFetchingRelateImage"
        :load-more="loadMoreRelateImageList"
        :content_id="dataSlugDetail?.data?.id"
      />
      <LazyProductPageLgRelatedimages class="hidden md-max:block" />
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  colorMode: 'light',
})
import { useFollowStatus } from '~/composables/detail/useFollow'
import { useLikeStatus } from '~/composables/detail/useLike'
import { useRelateImage } from '~/composables/detail/useRelateImage'
import { useSeriesCard } from '~/composables/detail/useSeriesCard'
import { useSlugDetail } from '~/composables/detail/useSlugDetail'
import { useDiscover } from '~/composables/home/useDiscover'
import ControlContainer from '@/components/product_page/ControlContainer.vue'
import ProductDetails from '@/components/product_page/ProductDetails.vue'
import UnderBlock from '@/components/product_page/underblock.vue'
import xlContainer from '@/components/product_page/xlContainer.vue'
import lgContainer from '@/components/product_page/lgContainer.vue'
import ImageView from '~/components/detail/media-view/photos-2/ImageView.vue'
import PhotosView from '~/components/detail/media-view/graphic-1/PhotosView.vue'
import FontsView from '~/components/detail/media-view/fonts-3/FontsView.vue'
import VideoView from '~/components/detail/media-view/video-4/VideoView.vue'
import AudioView from '~/components/detail/media-view/audio-5/AudioView.vue'
import SoundEffectView from '~/components/detail/media-view/sound-affect-6/SoundEffectView.vue'
import ElementView from '~/components/detail/media-view/3d-element-7/ElementView.vue'
import { useApi } from '~/composables/custom-fetch-api/useApi'
const route = useRoute()
const angles = ref([90, 60, 30, 0, -30, -60, -90])
const auth = useAuthStore()
const imageIdToDownload = ref(-1)
const updateIdToDownload = (id: number) => {
  imageIdToDownload.value = id
}
const selectedMenuId = ref(0)
const { dataSlugDetail, statusSlugDetail } = await useSlugDetail({
  slug: route.params.slug[0] || '',
})

const {
  allItemsDiscover,
  isFetchingDiscover,
  loadMoreDiscover,
  pageDiscover,
  status: statusDiscover,
} = useDiscover()

const formatTags = computed(() =>
  dataSlugDetail.value?.data?.tags.map((tag) => tag.id).join(',')
)
const { dataFollowStatus, executeFollowStatus } = useFollowStatus(
  `${dataSlugDetail.value?.data?.creator.id}`
)
const { dataLiksStatus, executeLiksStatus } = useLikeStatus({
  slug_detail_id: `${dataSlugDetail.value?.data?.id}`,
})
const { data } = useApi<{ ip: string }>('https://api.ipify.org?format=json', {
  skipAuth: true,
  server: false,
  onSuccess: (data) => {
    useCookie('ip').value = data.ip
  },
})
onMounted(() => {
  if (auth.authenticated) {
    executeFollowStatus()
    executeLiksStatus()
  }
})
const componentToRender = computed(() => {
  switch (dataSlugDetail.value?.data?.sections.id) {
    case 1:
      return PhotosView
    case 2:
      return ImageView
    case 3:
      return FontsView
    case 4:
      return VideoView
    case 5:
      return AudioView
    case 6:
      return SoundEffectView
    case 7:
      return ElementView
    default:
      return null
  }
})
const componentProps = computed(() => {
  const sectionId = dataSlugDetail.value?.data?.sections.id
  const data = dataSlugDetail.value?.data
  if (!data) return {}
  switch (sectionId) {
    case 1:
      return {
        previewImage: data.thumbnail_preview,
        status: statusSlugDetail.value,
        altImage: data.title || route.params.slug[0],
        pathImage: data.thumbnail || '',
      }
    case 2:
      return {
        angles: angles.value,
        angle_list: data.angle_list || [],
        status: statusSlugDetail.value,
        updteId: updateIdToDownload,
      }
    case 3:
      return {
        imageSrc: data.thumbnail,
        status: statusSlugDetail.value,
      }
    case 4:
      return {
        imageSrc: data.thumbnail,
        status: statusSlugDetail.value,
      }
    case 5:
      return {
        imageSrc: data.thumbnail,
        status: statusSlugDetail.value,
      }
    case 6:
      return {
        imageSrc: data.thumbnail,
        status: statusSlugDetail.value,
      }
    case 7:
      return {
        model_preview: data.preview_3d_url,
      }
    default:
      return {}
  }
})
const updateSelectedMenuId = (id: number) => {
  selectedMenuId.value = id
}
const id = ref(dataSlugDetail.value?.data.sections.id)
const {
  statusSeriesCard,
  loadMoreListSeries,
  allListCardSeries,
  isFetchingSeries,
  pageSeries,
} = useSeriesCard(id)

const {
  allRelateImageList,
  isFetchingRelateImage,
  loadMoreRelateImageList,
  pageRelateImage,
  statusRelateImage,
} = useRelateImage(formatTags)
onMounted(() => {
  useSeoMeta({
    title: () => dataSlugDetail.value?.data?.title || 'Product Detail',
    description: () =>
      dataSlugDetail.value?.data?.description ||
      'Discover detailed information about this product.',
    ogTitle: () => dataSlugDetail.value?.data?.title || 'Product Detail',
    ogDescription: () =>
      dataSlugDetail.value?.data?.description ||
      'Discover detailed information about this product.',
    ogImage: () => dataSlugDetail.value?.data?.thumbnail + '?v=1' || '',
    ogUrl: () => (process.client ? window.location.href : ''),
    twitterCard: 'summary_large_image',
    twitterTitle: () =>
      dataSlugDetail.value?.data?.title + '?v=1' || 'Product Detail',
    twitterDescription: () =>
      dataSlugDetail.value?.data?.description ||
      'Discover detailed information about this product.',
    twitterImage: () => dataSlugDetail.value?.data?.thumbnail || '',
  })
})
</script>
