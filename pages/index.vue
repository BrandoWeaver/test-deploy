<template>
  <HeaderBlockSearchHead
    backgroundImage="/img/hero_image.png"
    :popularSearch="popularSearch"
    @search="handleSearch"
    :options="collectionOptions"
    defaultValue="all"
  >
    <template #title>
      <p class="leading-[78px] flex flex-col font-lexend">
        Discover, Download,<span>Create!</span>
      </p>
    </template>
    <template #description>
      <div
        class="text-white font-noto lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px] font-light leading-[25.2px] text-start max-w-[1372px]"
      >
        <p class="leading-[19.8px]">
          Unleash your creativity with thousands of high-quality
          <span
            class="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-[rgba(255,255,255,0.20)]"
            >design assets,</span
          >
          audio, photos, videos, templates. Whether you’re a creator or a
          designer, find everything you need to bring
          <span
            class="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-[rgba(255,255,255,0.20)]"
            >your ideas to life.</span
          >
        </p>
      </div>
    </template>
  </HeaderBlockSearchHead>

  <div class="w-full pt-[32px] bg-cover bg-center overflow-hidden">
    <BodyBlockSeasonalCollections
      :seasonalData="seasonalList || []"
      :status="statusSeasonal === 'pending' || $nuxt.ssrContext ? true : false"
      :loadMoreSeasonal="loadMoreSeasonal"
      :isFetchingSeasonal="isFetchingSeasonal"
      :pageSeasonal="pageSeasonal"
    />
    <div
      class="flex flex-col items-start justify-start w-[1440px] xl-max:w-full pt-[16px] md-max:pt-[6px] lg-max:w-full mx-auto gap-[18px] px-6 md-max:px-[16px]"
    >
      <DetailDiscoverCardList
        :listItems="allItemsDiscover?.listItems"
        :listMenus="allItemsDiscover.listMenu"
        class="md-max:hidden"
        :status="statusDiscover === 'pending' ? true : false"
        :page_number="pageDiscover"
        :load-more="loadMoreDiscover"
        :is-fetching="isFetchingDiscover"
      />
      <ProductPageLgunderproduct class="hidden md-max:block" />
    </div>
    <div class="py-[32px]">
      <HomeBrowseCollection
        :browseCollection="browseCollectionData?.data!"
        :status="
          statusBrowseCollection === 'pending' || $nuxt.ssrContext
            ? true
            : false
        "
      />
    </div>
  </div>
  <div
    class="flex flex-col items-center justify-center w-full bg-cover bg-center overflow-hidden"
  >
    <BodyBlockFontsCollection />
    <LazyBodyBlockFeaturedCreators
      :listCreator="allItemsCreator.data"
      :status="statusCreator === 'pending' ? true : false"
      :loadMoreCreator="loadMoreCreator"
      :isFetchingCreator="isFetchingCreator"
      :pageCreator="pageCreator"
    />
    <LazyAllProComChoosePlan />
    <LazyBodyBlockMonetizeProgram />
    <LazyBodyBlockMonetizeContent />
    <LazyBodyBlockFreelanceServices />
    <LazyHomeComFAQShort />
    <LazyBodyBlockCtaSUB v-if="!authStore.authenticated" />
    <LazyBodyBlockSubRe v-if="!authStore.authenticated" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  colorMode: 'light',
})
import {
  BodyBlockSeasonalCollections,
  HeaderBlockSearchHead,
} from '#components'
import { useBrowseCollection } from '~/composables/home/useBrowseCollection'
import { useCreator } from '~/composables/home/useCreator'
import { useDiscover } from '~/composables/home/useDiscover'
import { useSeasonal } from '~/composables/home/useSeasonal'
const authStore = useAuthStore()
const {
  seasonalList,
  status: statusSeasonal,
  loadMoreSeasonal,
  isFetchingSeasonal,
  pageSeasonal,
} = useSeasonal()
const {
  allItemsDiscover,
  isFetchingDiscover,
  loadMoreDiscover,
  pageDiscover,
  status: statusDiscover,
} = useDiscover()
const { browseCollectionData, statusBrowseCollection } = useBrowseCollection()
const {
  allItemsCreator,
  isFetchingCreator,
  loadMoreCreator,
  statusCreator,
  pageCreator,
} = useCreator()
const handleSearch = (title: string) => {
  alert('search:' + title)
}
const collectionOptions = [
  { value: 'all', label: 'All Collections' },
  { value: 'photos', label: 'Photos' },
  { value: 'videos', label: 'Videos' },
  { value: 'audio', label: 'Audio' },
]

const popularSearch = ref([{ link: '/', name: 'Popular Search' }])
</script>
