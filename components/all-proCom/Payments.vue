<template>
  <div class="pt-6 lg:min-w-[540px] lg:max-w-[600px] w-full h-full">
    <div class="pt-2.5 flex flex-col gap-2.5 h-full">
      <div class="flex flex-col lg:flex-row gap-8 h-full">
        <div class="w-full p-6 bg-[#f2f2f2] rounded-2xl">
          <TabSelectPlan
            @update-id="updatePlanId"
            :listPlan="listPlan"
            :getDefaultPlan="getDefaultPlan"
            :is-renew="isRenew"
          />
          <div v-if="loadingPlan" class="my-10">
            <AllProComSkeletonListPlan />
          </div>
          <div v-else class="max-w-2xl mx-auto my-10 space-y-4">
            <PlanItem :item="filterPlan" />
          </div>
          <!-- Alpine.js is required for this example -->
          <div
            class="flex items-center justify-between bg-white p-3 rounded-lg mb-4"
          >
            <div class="flex items-center space-x-4">
              <p class="text-[#2B2B2B] font-noto text-[14px]">Add Device:</p>
              <div
                class="flex items-center border border-[#EEE] rounded-lg p-[9px] py-1 bg-white"
              >
                <button
                  class="p-1 disabled:opacity-50 rounded hover:bg-gray-200 text-gray-700"
                  @click="removeDevice"
                  :disabled="numDevice === 1 || isRenew"
                >
                  <Icon icon="ic:round-minus" width="24" height="24" />
                </button>
                <input
                  min="0"
                  max="10"
                  :disabled="isRenew"
                  v-model="defaultDeviceNumber"
                  @input="onDeviceInput"
                  class="w-12 text-center mx-2 border-none focus:ring-0 outline-none bg-white text-gray-700"
                />
                <button
                  class="p-1 disabled:opacity-50 rounded hover:bg-gray-200 text-gray-700"
                  @click="addMoreDevice"
                  :disabled="numDevice === 10 || isRenew"
                >
                  <Icon
                    icon="material-symbols:add-rounded"
                    width="24"
                    height="24"
                  />
                </button>
              </div>
            </div>
            <span class="text-[17px] font-bold font-noto">{{
              numDevice === 1 ? 'Free' : `$${totalDevicePrice.toFixed(2)}`
            }}</span>
          </div>

          <!-- Coupon Input -->
          <div class="flex items-center bg-white p-3 rounded-lg mb-2">
            <input
              v-model="defaultCoupon"
              @input="onCouponInput"
              placeholder="Enter Coupon"
              class="w-full text-sm outline-none pr-8"
            />
            <!-- {{ defaultCoupon }} -->
            <!-- Clear button (only visible when coupon has value) -->
            <div class="flex items-center">
              <button
                v-if="defaultCoupon"
                @click="clearCoupon"
                class="text-gray-500 hover:text-gray-700 text-[18px]"
              >
                ✕
              </button>
              <button
                @click="applyCoupon"
                class="ml-3 px-4 py-2 flex justify-center items-center text-center min-w-[75px] disabled:opacity-50 bg-[#005b52] text-white rounded-md"
                :disabled="defaultCoupon.length === 0"
              >
                <span v-if="statusCheckCoupon === 'pending'">
                  <CusLoading width="24" height="24" />
                </span>
                <span v-else>Apply</span>
              </button>
            </div>
          </div>
          <div
            class="error_message text-red-500 text-[13px] pb-4"
            v-if="
              errorCode !== null && defaultCoupon !== '' && !dataCoupon?.data
            "
          >
            {{ errorCode }}
          </div>

          <!-- Payment Details -->
          <div class="bg-white p-4 rounded-lg">
            <h3 class="text-sm font-semibold text-[#444444]">
              Payment Details
            </h3>
            <hr class="my-2 border-gray-200" />
            <div class="flex flex-col gap-[16px]">
              <div class="flex justify-between text-sm">
                <span>Order</span>
                <span>${{ totalPrice.toFixed(2) }}</span>
              </div>
              <!-- <div class="flex justify-between text-sm">
                <span>VAT</span>
                <span>10%</span>
              </div> -->
              <div class="flex justify-between text-sm" v-if="dataCoupon">
                <span>Coupon Discount: {{ appliedCoupon }}</span>
                <span v-if="dataCoupon?.data.amount_type === '$'">
                  <span
                    >-{{ dataCoupon?.data.amount_type
                    }}{{ dataCoupon?.data.amount }}</span
                  ></span
                >
                <span v-else>
                  <span
                    >{{ dataCoupon?.data.amount
                    }}{{ dataCoupon?.data.amount_type }}</span
                  ></span
                >
              </div>
            </div>
            <hr class="my-2 border-gray-200" />
            <div class="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${{ finalPrice.toFixed(2) }}</span>
            </div>
          </div>
          <div
            v-if="formErrorMessages.length"
            class="mt-2 text-red-500 text-sm w-full"
          >
            <p v-for="(error, index) in formErrorMessages" :key="index">
              {{ error }}
            </p>
          </div>
          <!-- Pay Now Button -->
          <button
            class="w-full disabled:opacity-50 mt-4 py-3 text-center flex items-center justify-center bg-black text-white rounded-lg font-bold hover:shadow-[0px_4px_16px_0px_#dbf226]"
            @click="checkout"
            :disabled="statusSubScriptionRes"
          >
            <span v-if="!props.statusSubScriptionRes">{{
              isRenew ? 'Renew Plan' : 'Pay Now'
            }}</span>
            <span v-else><CusLoading width="24" height="24" /></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import TabSelectPlan from '../payment/TabSelectPlan.vue'
import PlanItem from '../payment/PlanItem.vue'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { SUBSCRIPTION_SERVICE } from '~/services/subscriptionServices'
import CusLoading from '~/components/cusComponents/CusLoading.vue'

const props = defineProps<{
  pay: boolean
  listPlan?: ISUBSCRIPTION.ListSubscription
  loadingPlan: boolean
  planId: number
  numDevice: number
  statusSubScriptionRes: boolean
  coupon: string
  getDefaultPlan: 'monthly' | 'yearly'
  isRenew?: boolean
  formErrorMessages: string[]
}>()
const emit = defineEmits([
  'update:pay',
  'update:PlanId',
  'onDeviceInput',
  'addMoreDevice',
  'removeDevice',
  'payNow',
  'onCouponInput',
  'clearCoupon',
  'renewPlan',
])

const updatePlanId = (id: number) => {
  emit('update:PlanId', id)
}
const errorCode = ref(null)
const appliedCoupon = ref<string | null>(null)
const defaultDeviceNumber = ref(props.numDevice)
const defaultCoupon = ref(props.coupon)
function onDeviceInput(event: Event) {
  emit('onDeviceInput', event)
}
function onCouponInput(event: Event) {
  emit('onCouponInput', event)
}
const addMoreDevice = () => {
  emit('addMoreDevice')
  defaultDeviceNumber.value += 1
}
const removeDevice = () => {
  emit('removeDevice')
  defaultDeviceNumber.value -= 1
}
const totalDevicePrice = computed(() => {
  let total = 0
  if (props.planId === 2) {
    total = (props.numDevice - 1) * 2
  } else {
    total = (props.numDevice - 1) * 24
  }
  return total
})
const clearCoupon = () => {
  defaultCoupon.value = ''
  emit('clearCoupon')
  errorCode.value = null
}
const filterPlan = computed(() => {
  return props.listPlan?.data.find((val) => val.id === props.planId)
})
const totalPrice = computed(() => {
  return +(+filterPlan.value?.price! + totalDevicePrice.value || 0.0).toFixed(2)
})
const vat = 0 // 10% VAT

const couponReq = {
  coupon_code: '',
}
const applyCoupon = () => {
  couponReq.coupon_code = defaultCoupon.value.toUpperCase()
  runCheckCoupon()
}

const checkout = () => {
  emit('payNow')
}
const config = useRuntimeConfig()
const { locale } = useI18n()
const {
  data: dataCoupon,
  status: statusCheckCoupon,
  execute: runCheckCoupon,
  error: errorCheckCoupon,
} = SUBSCRIPTION_SERVICE.checkCouponCode({
  config,
  couponReq,
  locale: locale,
  onError(error) {
    console.error('Failed to load:', error.message)
    errorCode.value = error.message
  },
  onSuccess(data) {
    console.log('data:', data)
  },
})
const finalPrice = computed(() => {
  const total = totalPrice.value
  const couponData = dataCoupon.value?.data
  let discountedPrice = total
  if (
    couponData &&
    typeof couponData.amount === 'number' &&
    (couponData.amount_type === '$' || couponData.amount_type === '%')
  ) {
    if (couponData.amount_type === '$') {
      discountedPrice = total - couponData.amount
    } else if (couponData.amount_type === '%') {
      discountedPrice = total - (total * couponData.amount) / 100
    }
  }
  discountedPrice = Math.max(0, discountedPrice)
  const finalWithVat = discountedPrice * (1 + vat / 100)
  return +finalWithVat.toFixed(2)
})
</script>
