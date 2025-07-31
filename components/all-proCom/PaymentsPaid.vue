<template>
  <div class="w-full">
    <div class="pt-2.5 flex flex-col gap-2.5">
      <div class="flex flex-col lg:flex-row gap-8">
        <div class="w-full p-[44px] bg-[#f2f2f2] rounded-2xl">
          <div v-if="loadingCheckoutData"><AllProComCheckoutSkeleton /></div>
          <div v-else>
            <p
              class="px-[8px] pb-[33px] lg:text-[17px] md:text-[15px] sm:text-[14px] text-[13px] font-bold"
            >
              Your Purchase Summary
            </p>

            <div class="bg-white p-4 rounded-2xl">
              <PlanItem
                :item="{
                  id: props.checkoutData?.subscription_id!,
                  currency: '$',
                  name: `${props.checkoutData?.subscription_title}`,
                  price: `${props.checkoutData?.subscription_unit_price || 0}`,
                }"
                :is-free="!props.checkoutData?.is_sub_yearly ? true : false"
              />
              <div class="flex justify-between px-4 border-t mt-4 pt-6">
                <div class="flex gap-[10px]">
                  <p>Add Device:</p>
                  <p>{{ props.checkoutData?.add_device || 0 }}</p>
                </div>
                <div>${{ props.checkoutData?.total_amount || 0 }}</div>
              </div>
            </div>

            <!-- Payment Details -->
            <div class="bg-white p-4 rounded-lg mt-[33px]">
              <h3 class="text-sm font-semibold text-[#444444]">
                Payment Details
              </h3>
              <hr class="my-2 border-gray-200" />
              <div class="flex justify-between text-sm">
                <span class="text-[#444444]">Order</span>
                <span class="text-[#444444]"
                  >${{ props.checkoutData?.sub_amount || 0 }}</span
                >
              </div>
              <div class="flex justify-between text-sm pt-3">
                <span class="text-[#444444]"
                  >Coupon:{{ props.checkoutData?.coupon_code }}(
                  {{ props.checkoutData?.coupon_type || 'NA' }})</span
                >
                <span class="text-[#444444]"
                  >${{ props.checkoutData?.coupon_amount || 0 }}
                </span>
              </div>
              <div
                v-if="discountApplied"
                class="flex justify-between text-sm text-green-600"
              >
                <span class="text-[#444444]"
                  >Coupon Discount ({{ appliedCoupon }})</span
                >
                <span class="text-[#444444]">-{{ discountAmount }}%</span>
              </div>
              <hr class="my-2 border-gray-200" />
              <div class="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${{ props.checkoutData?.total_amount || 0.0 }}</span>
              </div>
            </div>

            <!-- Pay Now Button -->
            <div class="flex sm:flex-row flex-col gap-4 mt-[20px]">
              <button
                v-if="!props.checkoutData?.pmt_status"
                class="w-full mt-4 py-3 bg-white text-black rounded-lg font-bold flex items-center justify-center gap-2"
                @click="
                  checkout(
                    props.checkoutData?.link_inv_download || '',
                    'Invoice'
                  )
                "
              >
                <span v-if="!loadingDownload" class="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_8_48111)">
                      <path
                        d="M14.916 12.1667C14.916 12.3877 14.8282 12.5997 14.6719 12.7559C14.5157 12.9122 14.3037 13 14.0827 13H7.41602C7.195 13 6.98304 12.9122 6.82676 12.7559C6.67048 12.5997 6.58268 12.3877 6.58268 12.1667C6.58268 11.9457 6.67048 11.7337 6.82676 11.5774C6.98304 11.4211 7.195 11.3334 7.41602 11.3334H14.0827C14.3037 11.3334 14.5157 11.4211 14.6719 11.5774C14.8282 11.7337 14.916 11.9457 14.916 12.1667ZM11.5827 14.6667H7.41602C7.195 14.6667 6.98304 14.7545 6.82676 14.9108C6.67048 15.067 6.58268 15.279 6.58268 15.5C6.58268 15.721 6.67048 15.933 6.82676 16.0893C6.98304 16.2456 7.195 16.3334 7.41602 16.3334H11.5827C11.8037 16.3334 12.0157 16.2456 12.1719 16.0893C12.3282 15.933 12.416 15.721 12.416 15.5C12.416 15.279 12.3282 15.067 12.1719 14.9108C12.0157 14.7545 11.8037 14.6667 11.5827 14.6667ZM19.0827 9.23752V16.3334C19.0814 17.438 18.6419 18.4971 17.8608 19.2782C17.0797 20.0593 16.0207 20.4987 14.916 20.5H6.58268C5.47802 20.4987 4.41898 20.0593 3.63787 19.2782C2.85675 18.4971 2.41734 17.438 2.41602 16.3334V4.66669C2.41734 3.56202 2.85675 2.50298 3.63787 1.72187C4.41898 0.940754 5.47802 0.501342 6.58268 0.500019H10.3452C11.1115 0.498047 11.8707 0.648009 12.5787 0.941235C13.2867 1.23446 13.9296 1.66513 14.4702 2.20835L17.3735 5.11335C17.917 5.65355 18.348 6.29623 18.6414 7.00416C18.9348 7.7121 19.0848 8.4712 19.0827 9.23752ZM13.2918 3.38669C13.0296 3.13265 12.7351 2.91412 12.416 2.73669V6.33335C12.416 6.55437 12.5038 6.76633 12.6601 6.92261C12.8164 7.07889 13.0283 7.16669 13.2493 7.16669H16.846C16.6685 6.84768 16.4496 6.55347 16.1952 6.29169L13.2918 3.38669ZM17.416 9.23752C17.416 9.10002 17.3893 8.96835 17.3768 8.83335H13.2493C12.5863 8.83335 11.9504 8.56996 11.4816 8.10112C11.0127 7.63228 10.7493 6.99639 10.7493 6.33335V2.20585C10.6143 2.19335 10.4818 2.16669 10.3452 2.16669H6.58268C5.91964 2.16669 5.28376 2.43008 4.81492 2.89892C4.34607 3.36776 4.08268 4.00364 4.08268 4.66669V16.3334C4.08268 16.9964 4.34607 17.6323 4.81492 18.1011C5.28376 18.57 5.91964 18.8334 6.58268 18.8334H14.916C15.5791 18.8334 16.2149 18.57 16.6838 18.1011C17.1526 17.6323 17.416 16.9964 17.416 16.3334V9.23752Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_8_48111">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(0.75 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Invoice
                </span>
                <span v-else>
                  <CusLoading width="24" height="24" />
                </span>
              </button>
              <button
                v-else
                class="w-full mt-4 py-3 bg-black text-white rounded-lg font-bold flex items-center justify-center gap-2"
                @click="
                  checkout(
                    props.checkoutData?.link_recpt_download || '',
                    'Receipt'
                  )
                "
              >
                <span v-if="loadingDownload">
                  <CusLoading width="24" height="24" />
                </span>
                <span v-else class="flex gap-2"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_8_47705)">
                      <path
                        d="M16.5 0.5H8.5C7.17441 0.501588 5.90356 1.02888 4.96622 1.96622C4.02888 2.90356 3.50159 4.17441 3.5 5.5V23.5C3.50014 23.6819 3.54989 23.8603 3.64388 24.016C3.73788 24.1717 3.87256 24.2989 4.03344 24.3837C4.19431 24.4686 4.37529 24.508 4.55688 24.4976C4.73847 24.4873 4.9138 24.4276 5.064 24.325L7.17 22.886L9.276 24.325C9.44239 24.4389 9.63934 24.4999 9.841 24.4999C10.0427 24.4999 10.2396 24.4389 10.406 24.325L12.506 22.886L14.606 24.325C14.7725 24.4392 14.9696 24.5003 15.1715 24.5003C15.3734 24.5003 15.5705 24.4392 15.737 24.325L17.837 22.887L19.937 24.324C20.0871 24.4263 20.2623 24.4857 20.4436 24.496C20.625 24.5062 20.8057 24.4669 20.9664 24.3821C21.127 24.2974 21.2616 24.1706 21.3556 24.0151C21.4496 23.8597 21.4996 23.6816 21.5 23.5V5.5C21.4984 4.17441 20.9711 2.90356 20.0338 1.96622C19.0964 1.02888 17.8256 0.501588 16.5 0.5V0.5ZM19.5 21.6L18.4 20.848C18.2334 20.7336 18.0361 20.6724 17.834 20.6724C17.6319 20.6724 17.4346 20.7336 17.268 20.848L15.168 22.287L13.068 20.848C12.9015 20.7338 12.7044 20.6727 12.5025 20.6727C12.3006 20.6727 12.1035 20.7338 11.937 20.848L9.837 22.287L7.737 20.848C7.57071 20.7343 7.37396 20.6734 7.1725 20.6734C6.97105 20.6734 6.77429 20.7343 6.608 20.848L5.5 21.6V5.5C5.5 4.70435 5.81607 3.94129 6.37868 3.37868C6.94129 2.81607 7.70435 2.5 8.5 2.5H16.5C17.2956 2.5 18.0587 2.81607 18.6213 3.37868C19.1839 3.94129 19.5 4.70435 19.5 5.5V21.6Z"
                        fill="white"
                      />
                      <path
                        d="M16.5 8.50098H8.5C7.94772 8.50098 7.5 8.94869 7.5 9.50097C7.5 10.0533 7.94772 10.501 8.5 10.501H16.5C17.0523 10.501 17.5 10.0533 17.5 9.50097C17.5 8.94869 17.0523 8.50098 16.5 8.50098Z"
                        fill="white"
                      />
                      <path
                        d="M14.5 12.5H8.5C7.94771 12.5 7.5 12.9477 7.5 13.5C7.5 14.0523 7.94771 14.5 8.5 14.5H14.5C15.0523 14.5 15.5 14.0523 15.5 13.5C15.5 12.9477 15.0523 12.5 14.5 12.5Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_8_47705">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.5 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Receipt</span
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <InvoicePreviewModal
    :isOpen="viewInvoice"
    :invoiceUrl="invoiceUrl"
    :filename="invoiceFilename"
    @close="viewInvoice = false"
  />
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import PlanItem from '../payment/PlanItem.vue'
import { useApi } from '~/composables/custom-fetch-api/useApi'
import CusLoading from '../cusComponents/CusLoading.vue'
import CusDialog from '../cusComponents/CusDialog.vue'
import InvoicePreviewModal from '../cusComponents/InvoicePreviewModal.vue'

interface CartItem {
  name: string
  image: string
  originalPrice: number
  discountedPrice: number
}
const props = defineProps<{
  pay: boolean
  loadingCheckoutData: boolean
  checkoutData?: ISUBSCRIPTION.DataCheckoutRes
}>()
const cartItems = ref<CartItem[]>([
  {
    name: 'Nike Men’s Joyride Run Flyknit Shoes',
    image: '/img/image-3.svg',
    originalPrice: 40,
    discountedPrice: 30,
  },
  {
    name: 'Nike Men’s Joyride Run Flyknit Shoes',
    image: '/img/image-2.svg',
    originalPrice: 35,
    discountedPrice: 25,
  },
  {
    name: 'Subscription to the Pro Yearly Plan',
    image: '/img/proplane.svg',
    originalPrice: 35.88,
    discountedPrice: 35.88,
  },
])

const coupon = ref('')
const appliedCoupon = ref<string | null>(null)
const discountAmount = ref(0)
const viewInvoice = ref(false)
const invoiceUrl = ref('')
const invoiceFilename = ref('')
const emit = defineEmits(['update:pay'])

const totalPrice = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.discountedPrice, 0)
})

const finalPrice = computed(() => {
  return totalPrice.value * ((100 - discountAmount.value) / 100)
})

const discountApplied = computed(() => appliedCoupon.value !== null)

const applyCoupon = () => {
  if (coupon.value === 'Welcome10') {
    appliedCoupon.value = coupon.value
    discountAmount.value = 10
  } else {
    alert('Invalid coupon!')
  }
}

const removeItem = (index: number) => {
  cartItems.value.splice(index, 1)
}

const moveToWishlist = (item: CartItem, index: number) => {
  console.log(`Moved ${item.name} to wishlist`)
  removeItem(index)
}

const checkout = (url: string, fileName: string) => {
  // alert('Proceeding to payment!')
  downloadFile(url, fileName)
  invoiceFilename.value = fileName
  emit('update:pay', true)
}
const loadingDownload = ref(false)
const downloadFile = async (url: string, filename: string) => {
  // console.log(url)
  loadingDownload.value = true
  const { data, error } = await useApi('/api/invoice', {
    query: { url: url },
    key: `download-invoice-${props.checkoutData?.id}`,
    onSuccess(data) {
      console.log('File downloaded successfully', data)
      loadingDownload.value = false
      viewInvoice.value = true
    },
  })
  if (error.value) {
    console.error('Download failed', error.value)
    return
  }
  const blob = data.value as unknown as Blob
  invoiceUrl.value = URL.createObjectURL(blob)
  // const objectUrl = URL.createObjectURL(blob)
  // console.log('Object URL created:', objectUrl)
  // const link = document.createElement('a')
  // console.log('Creating download link:', link)
  // link.href = objectUrl
  // link.download = filename
  // link.style.display = 'none'
  // document.body.appendChild(link)
  // link.click()
  // document.body.removeChild(link)
  // URL.revokeObjectURL(objectUrl)
}
</script>
