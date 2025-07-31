<template>
  <div
    class="w-full justify-center items-center bg-[#EFF1D9] pb-8 rounded-[10px]"
  >
    <!-- Centered 1440px Content -->
    <div
      class="flex flex-col gap-6 p-6 md-max:p-[16px] rounded-lg w-full max-w-[1440px] mx-auto"
    >
      <div class="flex flex-col gap-5">
        <h2
          class="text-black font-lexend text-[20px] font-bold leading-[36px] lg-max:text-[18px] lg-max:leading-[32.4px]"
        >
          Discover our current offers
        </h2>
        <p
          class="text-black font-noto text-[17px] font-light leading-[30.6px] lg-max:text-[15px] lg-max:leading-[27px]"
        >
          Explore exclusive digital assets from top creators, available for
          purchase now.
        </p>
      </div>
      <div
        class="flex flex-row gap-2"
        v-if="(status || page_number === 1) && filteredItems.length === 0"
      >
        <div
          v-for="n in 2"
          :key="n"
          class="w-[100px] h-[41px] bg-[#F5F5F5] rounded animate-pulse"
        ></div>
      </div>
      <div class="relative w-full mb-0" v-else>
        <div class="flex gap-2">
          <button
            :class="[
              'filter-button px-3 py-1.5 flex justify-center border items-center gap-2 rounded-md text-[15px] font-light leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] transition-colors',
              selectedCategory === 0
                ? 'rounded-[4px] border border-[#005B52] bg-[#F5F5F5]'
                : 'border-[#EEE] bg-black text-white hover:bg-[#F5F5F5] hover:text-black hover:border-[#005B52]',
            ]"
            @click="selectCategory(0)"
          >
            {{ $t('home.all') }}
          </button>
          <button
            v-for="(category, index) in listMenus"
            :key="category.id"
            :class="[
              'filter-button px-3 py-1.5 flex justify-center border items-center gap-2 rounded-md text-[15px] font-light leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] transition-colors',
              category.id === selectedCategory
                ? 'rounded-[4px] border border-[#005B52] bg-[#F5F5F5]'
                : 'border-[#EEE] bg-black text-white hover:bg-[#F5F5F5] hover:text-black hover:border-[#005B52]',
            ]"
            @click="selectCategory(category.id)"
          >
            {{ category.name }}
          </button>
        </div>
        <div
          class="absolute right-0 top-1/2 flex gap-2 transform -translate-y-1/2"
        >
          <button
            @click="scrollLeft"
            :class="[
              'w-[34px] h-[34px] flex items-center justify-center rounded-full bg-white shadow-[0px_4px_16px_rgba(0,0,0,0.1)] transition-transform duration-200 ease-in-out hover:scale-105',
              isLeftButtonClicked ? 'shadow-[0px_4px_16px_0px_#DBF226]' : '',
            ]"
          >
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
            :class="[
              'w-[34px] h-[34px] flex items-center justify-center rounded-full bg-white shadow-[0px_4px_16px_rgba(0,0,0,0.1)] transition-transform duration-200 ease-in-out hover:scale-105',
              isRightButtonClicked ? 'shadow-[0px_4px_16px_0px_#DBF226]' : '',
            ]"
          >
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
    </div>
    <!-- Product Cards Container -->
    <div
      ref="carousel"
      class="relative justify-center w-full items-center flex overflow-x-auto gap-4 px-8 xl-max:px-6 md-max:px-[16px] pb-[14px] hide-scrollbar"
    >
      <div
        v-if="(status || page_number === 1) && filteredItems.length === 0"
        v-for="n in isDetail ? 20 : 5"
        :key="n"
        class="product-card w-[300.6px] animate-pulse p-[18px] h-[363.72px] bg-white rounded-lg flex-shrink-0 flex flex-col items-start gap-[10px] hover:shadow-[0px_4px_10px_0px_rgba(0,0,0,0.2)]"
      >
        <div class="w-full h-[300px] bg-[#F5F5F5] rounded animate-pulse"></div>
      </div>
      <div
        v-else
        v-for="(product, index) in filteredItems"
        :key="product.id"
        class="product-card w-[300.6px] p-[18px] h-[363.72px] bg-white rounded-lg flex-shrink-0 flex flex-col items-start gap-[10px] hover:shadow-[0px_4px_10px_0px_rgba(0,0,0,0.2)]"
        @mouseenter="startHover"
        @mouseleave="
          endHover({
            target: 'discover-list',
            section_id: product?.section?.id ?? -1,
            category_id: product?.categories?.[0]?.id ?? -1,
            collection_id: product?.collections?.[0]?.id ?? -1,
            sub_section_id: product?.sub_section?.id ?? -1,
          })
        "
        @click="
          trackClick({
            section_id: product?.section?.id ?? -1,
            content_id: props.content_id,
            category_id: product?.categories?.[0]?.id ?? -1,
            collection_id: product?.collections?.[0]?.id ?? -1,
            sub_section_id: product?.sub_section?.id ?? -1,
          })
        "
      >
        <NuxtLink
          :to="`/all-products/${product?.section?.slug || 'unknown'}/${product?.sub_section?.slug || 'unknown'}/${product?.categories[0]?.slug || 'unknown'}/${product?.collections[0]?.slug || 'unknown'}/${product?.slug || 'unknown'}`"
        >
          <!-- Product Image -->
          <div
            class="relative w-full h-40 mb-4 bg-[#f6f5f3] rounded-lg flex items-center justify-center overflow-hidden"
          >
            <NuxtImg
              :quality="80"
              :src="product.thumbnail"
              alt="Product Image"
              class="object-contain w-full h-full"
              format="webp"
            />
          </div>

          <!-- Creator Profile -->
          <div class="flex items-center gap-2 mb-2 w-full">
            <div class="relative">
              <NuxtImg
                :src="product.creator.profile || ''"
                :quality="80"
                alt="Creator Avatar"
                class="w-8 h-8 rounded-full border-[1.5px] border-[#DBF226] shadow-md"
                format="webp"
              />
              <span
                v-if="product.creator?.account_mode"
                class="absolute -top-0 -right-[6.2px] w-[15px] h-[15px] bg-[#DBF226] rounded-full flex items-center justify-center border-[1.5px] border-[#ffffff]"
              >
                <span class="text-[6px] text-black font-normal leading-[16px]"
                  >Pro</span
                >
              </span>
              <span
                v-if="true"
                class="absolute bottom-0 right-0 w-[9px] h-[9px] bg-[#78BF39] rounded-full border border-[#F5F5F5]"
              ></span>
            </div>
            <span
              class="text-[14px] leading-[25.2px] font-normal flex-1 lg-max:text-[13px] lg-max:leading-[23.4px]"
              >{{
                product.creator?.name.toUpperCase() || 'Unknown Creator'
              }}</span
            >
            <div class="flex gap-2 items-center" v-if="product.on_sale">
              <span
                class="text-black font-[350px] line-through text-[14px] leading-[25.2px]"
                >${{ product.price }}</span
              >
              <span
                class="text-black font-extrabold text-[22px] leading-[39.6px] lg-max:text-[20px] lg-max:leading-[36px]"
                >${{ product.dis_price }}</span
              >
            </div>
          </div>

          <!-- Product Title -->
          <h3
            class="text-black font-bold text-[20px] leading-[36px] lg-max:text-[18px] lg-max:leading-[32.4px] line-clamp-1"
          >
            {{ product.title }}
          </h3>

          <!-- Action Buttons -->
          <div class="flex gap-2 w-full">
            <button
              @click.prevent="
                !collection.isCollected(product.id.toString())
                  ? collection.add(product.id.toString())
                  : collection.remove(product.id.toString())
              "
              class="text-black bg-[#DBF226] hover:bg-black hover:text-white text-[15px] w-[124px] h-[40px] px-[12px] py-[6px] flex items-center justify-center gap-1.5 rounded-lg transition-shadow shadow"
              :class="{
                'bg-black text-white': collection.isCollected(
                  product.id.toString()
                ),
              }"
            >
              <span v-if="collection.isLoading(product.id.toString())"
                ><CusLoading width="20" height="20"
              /></span>
              <SvgCartIcon
                v-else
                :class="
                  collection.isCollected(product.id.toString())
                    ? 'fill-white'
                    : 'fill-current'
                "
              />
              <span v-if="collection.isCollected(product.id.toString())"
                >Added</span
              >
              <span v-else class="text-[15px] whitespace-nowrap"
                >Add to cart</span
              >
            </button>
            <button
              @click.prevent="
                !wishlist.isWishlisted(product.id.toString())
                  ? wishlist.add(product.id.toString())
                  : wishlist.remove(product.id.toString())
              "
              :class="[
                'wishlist-button text-black border-[rgba(0,0,0,0.5)] bg-white hover:bg-white hover:text-black hover:border-black hover:shadow-[0px_4px_4px_0px_#DBF226] w-[124px] px-[12px] py-[6px] flex items-center justify-center gap-[6px] text-[15px] rounded-lg border transition-shadow',
              ]"
            >
              <span v-if="wishlist.isLoading(product.id.toString())"
                ><CusLoading width="20" height="20"
              /></span>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
              >
                <path
                  v-if="wishlist.isWishlisted(product.id.toString())"
                  d="M13.2132 14.6205C13.0299 14.9104 12.7733 15.1404 12.4801 15.2704C12.2785 15.3603 12.0585 15.4103 11.8386 15.4103C11.6187 15.4103 11.4171 15.3603 11.2247 15.2704C11.0231 15.1804 10.8489 15.0504 10.7023 14.8905L7.17432 11.0714L3.65549 14.8905C3.4264 15.1404 3.14232 15.3104 2.8216 15.3803C2.51003 15.4503 2.18014 15.4103 1.88691 15.2704C1.58451 15.1404 1.32792 14.9104 1.14465 14.6205C0.970543 14.3306 0.878906 13.9807 0.878906 13.6308V3.53329C0.878906 2.71349 1.18131 1.91369 1.7128 1.32384C2.25345 0.74398 2.98654 0.414062 3.73796 0.414062H10.6107C10.9864 0.414062 11.3621 0.494043 11.7103 0.654003C12.0585 0.803965 12.3701 1.03391 12.6359 1.32384C12.9016 1.62376 13.1124 1.96368 13.259 2.34358C13.4056 2.72349 13.4789 3.12339 13.4789 3.53329V13.6308C13.4789 13.9807 13.3873 14.3306 13.2132 14.6205Z"
                  fill="#005B52"
                />
                <path
                  d="M11.0529 15.4141C10.8586 15.4134 10.6664 15.367 10.4874 15.2774C10.3083 15.1878 10.146 15.0569 10.0097 14.8922L6.78092 11.0709L3.55217 14.8947C3.34481 15.1451 3.07888 15.3154 2.78904 15.3833C2.49921 15.4512 2.19891 15.4136 1.9273 15.2753C1.653 15.144 1.41834 14.9172 1.25396 14.6246C1.08959 14.3321 1.00315 13.9873 1.00592 13.6353V3.53906C1.00592 2.71026 1.28249 1.91541 1.77477 1.32935C2.26705 0.743303 2.93473 0.414063 3.63092 0.414063L9.93093 0.414062C10.2756 0.414062 10.617 0.494893 10.9355 0.651939C11.254 0.808985 11.5433 1.03917 11.7871 1.32935C12.0308 1.61954 12.2242 1.96403 12.3561 2.34318C12.488 2.72232 12.5559 3.12868 12.5559 3.53906V13.6353C12.5589 13.987 12.4727 14.3316 12.3088 14.6241C12.1448 14.9166 11.9106 15.1436 11.6367 15.2753C11.4518 15.3674 11.2533 15.4145 11.0529 15.4141ZM3.63092 1.66406C3.21321 1.66406 2.8126 1.86161 2.51723 2.21324C2.22186 2.56487 2.05592 3.04178 2.05592 3.53906V13.6353C2.05573 13.7395 2.08148 13.8413 2.1299 13.9281C2.17832 14.0148 2.24725 14.0825 2.32797 14.1227C2.4087 14.1628 2.49761 14.1735 2.58347 14.1535C2.66932 14.1335 2.74827 14.0837 2.81035 14.0103L6.41342 9.74719C6.51179 9.63078 6.64485 9.56544 6.78355 9.56544C6.92225 9.56544 7.05531 9.63078 7.15368 9.74719L10.7526 14.0091C10.8146 14.0824 10.8936 14.1323 10.9794 14.1523C11.0653 14.1723 11.1542 14.1615 11.2349 14.1214C11.3157 14.0813 11.3846 14.0136 11.433 13.9268C11.4814 13.8401 11.5072 13.7382 11.507 13.6341V3.53906C11.507 3.04178 11.341 2.56487 11.0457 2.21324C10.7503 1.86161 10.3497 1.66406 9.93198 1.66406H3.63092Z"
                  fill="#005B52"
                />
              </svg>
              <span v-if="wishlist.isWishlisted(product.id.toString())"
                >Added
              </span>

              <span v-else>Wishlist</span>
            </button>
          </div>
        </NuxtLink>
      </div>
      <div v-if="props.isFetching"><CusLoading /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgCartIcon from '@/components/SvgIcon/SvgCartIcon.vue'
import { useBehaviorTracker } from '@/composables/tracking/useTracker'
import CusLoading from '~/components/cusComponents/CusLoading.vue'
const props = defineProps<{
  listItems: Discover.ListItem[]
  listMenus: Discover.ListMenu[]
  status?: boolean
  isDetail?: boolean
  page_number?: number
  loadMore?: () => void
  isFetching?: boolean
  selectedMenuId?: number
  content_id?: number
}>()
const wishlist = useWishlistStore()
const collection = useCollectionStore()
const emit = defineEmits(['update-selectedId'])
// State for category selection
const selectedCategory = ref<number>(0)
const filteredItems = computed(() => {
  if (selectedCategory.value === 0) return props?.listItems
  return props?.listItems.filter((item) => {
    return item?.categories?.[0]?.id === selectedCategory.value
  })
})
const hoverStart = ref(0)
const { sendEvent } = useBehaviorTracker()
const route = useRoute()
const startHover = () => {
  hoverStart.value = Date.now()
}
const endHover = ({
  target,
  section_id,
  sub_section_id,
  category_id,
  collection_id,
}: {
  target: string
  section_id: number
  sub_section_id?: number
  category_id?: number
  collection_id?: number
}) => {
  const duration = (Date.now() - hoverStart.value) / 1000

  const payload: Record<string, any> = {
    section_id,
    duration,
  }

  if (props.content_id) payload.content_id = props.content_id
  if (sub_section_id) payload.sub_section_id = sub_section_id
  if (category_id) payload.category_id = category_id
  if (collection_id) payload.collection_id = collection_id
  if (route.params.slug?.[0]) payload.slug = route.params.slug[0]

  sendEvent(2, payload)
}

const trackClick = ({
  section_id,
  sub_section_id,
  content_id,
  category_id,
  collection_id,
}: {
  section_id: number
  content_id?: number
  sub_section_id?: number
  category_id?: number
  collection_id?: number
}) => {
  const duration = (Date.now() - hoverStart.value) / 1000
  const payload: Record<string, any> = {
    section_id,
    duration,
  }
  if (content_id) payload.content_id = content_id
  if (sub_section_id) payload.sub_section_id = sub_section_id
  if (category_id) payload.category_id = category_id
  if (collection_id) payload.collection_id = collection_id
  if (route.params.slug?.[0]) payload.slug = route.params.slug[0]
  sendEvent(1, payload)
}
// Function to select a category
function selectCategory(category_id: number) {
  selectedCategory.value = category_id
}

// Carousel reference for scrolling
const carousel = ref<any>(null)

// State to track button click for shadow effect
const isLeftButtonClicked = ref(false)
const isRightButtonClicked = ref(false)

// Scroll carousel to the left
function scrollLeft() {
  if (
    carousel.value &&
    carousel.value.scrollWidth > carousel.value.clientWidth
  ) {
    carousel.value.scrollBy({ left: -300, behavior: 'smooth' })
  }
  // Add shadow effect temporarily
  isLeftButtonClicked.value = true
  setTimeout(() => {
    isLeftButtonClicked.value = false
  }, 200) // Remove shadow after 200ms
}

// Scroll carousel to the right
function scrollRight() {
  if (
    carousel.value &&
    carousel.value.scrollWidth > carousel.value.clientWidth
  ) {
    carousel.value.scrollBy({ left: 300, behavior: 'smooth' })
  }
  // Add shadow effect temporarily
  isRightButtonClicked.value = true
  setTimeout(() => {
    isRightButtonClicked.value = false
  }, 200) // Remove shadow after 200ms
}

const handleScroll = () => {
  if (!carousel.value || props.isFetching || !props.loadMore) {
    return
  }
  const { scrollWidth, scrollLeft, clientWidth } = carousel.value
  const scrollThreshold = 200
  if (scrollLeft + clientWidth >= scrollWidth - scrollThreshold) {
    props.loadMore()
  }
}

onMounted(() => {
  nextTick(() => {
    if (carousel.value) {
      carousel.value.addEventListener('scroll', handleScroll)
    }
  })
})

onUnmounted(() => {
  if (carousel.value) {
    carousel.value.removeEventListener('scroll', handleScroll)
  }
})
</script>
