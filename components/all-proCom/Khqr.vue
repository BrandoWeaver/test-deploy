<template>
  <div class="flex flex-col border-t mt-4">
    <div
      class="flex flex-1 flex-col md:flex-row mt-4 md:mt-0 px-4 md:px-6 pb-0"
    >
      <div
        id="main-content"
        class="flex-1 bg-white p-6 md:p-8 flex flex-col items-center justify-center md:mr-4 mb-4 md:mb-0"
      >
        <div class="relative flex items-center justify-end mb-4 w-full">
          <div
            class="absolute left-1/2 -translate-x-1/2 text-red-500 text-base md:text-lg font-semibold text-center"
          >
            Scan to Pay
          </div>
          <div
            class="text-red-500 text-base md:text-lg font-semibold flex justify-end"
          >
            00:{{ String(waitingForCheckingPaymentStatus).padStart(2, '0') }}
          </div>
        </div>
        <div
          class="p-2 border border-gray-200 rounded-md bg-white min-w-[300px]"
        >
          <div
            class="bg-[#E1232E] py-4 flex justify-center w-full rounded-t-lg"
          >
            <NuxtImg src="/payment/bakong.svg" alt="logo" class="h-[40px]" />
          </div>
          <div class="border-b border-dashed pb-3 w-full px-3 mb-3">
            <h1 class="uppercase mt-3">
              {{ subScriptionData?.khqr_name || 'Thortok' }}
            </h1>
            <h1 class="text-xl font-bold">
              {{ subScriptionData?.total_amount }} USD
            </h1>
          </div>
          <div class="w-full">
            <a
              target="_blank"
              class="flex flex-col justify-center items-center text-center relative"
            >
              <NuxtImg
                src="https://link.payway.com.kh/images/usd-aba-qr.svg"
                alt="logo"
                class="absolute w-auto"
              />
              <NuxtImg
                :src="qrCodeUrl!"
                alt="Generated QR Code"
                class="w-full h-full object-contain"
                style="width: 100%; display: block"
              />
            </a>
            <p class="text-[11px] text-gray-400 text-center p-3 mb-3">
              Scan with any Mobile Banking App supporting KHQR
            </p>
          </div>
        </div>
        <div
          v-if="showMessageError"
          class="text-center bg-red-600 text-white rounded-md mt-4 text-sm font-semibold"
        >
          {{ paymentMessage }}
        </div>
        <div class="flex flex-col items-center mt-8" v-if="havingTrouble">
          <div class="flex items-center gap-6">
            <p class="text-base text-black">
              Click this button to verify the payment status.
            </p>
            <button
              @click="emit('verifyPaymentStatus')"
              class="bg-red-600 disabled:opacity-50 flex justify-center rounded-md text-sm font-semibold px-6 py-2 text-white shadow-sm hover:bg-red-700"
              :disabled="
                timeOfClickingVerification === 3 || loadingPaymenStatus
              "
            >
              <span v-if="!loadingPaymenStatus">Verify</span>
              <span v-else>
                <CusLoading width="24" height="24" />
              </span>
            </button>
          </div>

          <div
            class="mt-4 text-red-600 text-left max-w-md"
            v-if="timeOfClickingVerification === 3 && !loadingPaymenStatus"
          >
            <p class="font-semibold mb-1">Having trouble with your payment?</p>
            <p class="text-sm">
              Please check with your bank or use this
              <a href="#" class="underline">link</a> to view your transaction
              status. If you need more help, visit our
              <a href="#" class="underline">FAQ section</a> dedicated to payment
              and transaction issues.
            </p>
          </div>

          <button
            @click="emit('closeDialog')"
            class="mt-6 px-12 py-3 border border-gray-300 rounded-md text-gray-800 text-base font-medium bg-white hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </div>

      <div class="w-full bg-white p-6 md:p-8 border-l">
        <h2
          class="text-lg md:text-xl font-semibold text-gray-800 mb-4 border-b pb-3"
        >
          Transaction Summary
        </h2>
        <div class="space-y-2 text-gray-700">
          <div class="flex justify-betweent gap-1 items-center">
            <span class="font-medium text-[13px] font-noto">No: </span>
            <div class="flex justify-end w-full">
              <span class="font-bold text-sm font-noto">
                {{ subScriptionData?.invoice_no }}</span
              >
            </div>
          </div>
          <div class="flex justify-between">
            <span class="font-medium text-[13px] font-noto">Plan:</span>
            <span class="font-bold text-sm font-noto">{{
              subScriptionData?.subscription_type
            }}</span>
          </div>
          <div class="flex justify-between">
            <span class="font-medium text-[13px] font-noto">Device:</span>
            <span class="font-bold text-sm font-noto"
              >{{ subScriptionData?.add_device }}
              {{
                subScriptionData?.add_device === 1
                  ? '(Free)'
                  : `(${subScriptionData?.amount_device} USD) `
              }}</span
            >
          </div>
          <!-- <div class="flex justify-between">
            <span class="font-medium">Tax:</span>
            <span class="font-bold"> {{ subScriptionData?.tax }}%</span>
          </div> -->
          <div
            class="flex justify-between items-center"
            v-if="subScriptionData?.coupon_code"
          >
            <span class="font-medium text-[13px] font-noto">Coupon:</span>
            <span class="font-bold text-sm font-noto">
              {{ subScriptionData?.coupon_code }}
              {{ `(${subScriptionData.coupon_amount} USD)` }}</span
            >
          </div>
          <div class="flex justify-between pt-2 border-t">
            <span class="font-medium text-[13px] font-noto">Sub Total:</span>
            <span class="font-bold text-sm font-noto"
              >{{ subScriptionData?.total_amount }}
              {{ subScriptionData?.currency }}</span
            >
          </div>

          <div class="flex justify-between mt-2">
            <span class="font-bold text-gray-900 font-noto">TOTAL:</span>
            <span class="font-bold text-gray-900 font-noto"
              >{{ subScriptionData?.total_amount }}
              {{ subScriptionData?.currency }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import QRCode from 'qrcode'
import CusLoading from '../cusComponents/CusLoading.vue'
const props = defineProps<{
  subScriptionData?: ISUBSCRIPTION.DataSubscriptionRes
  havingTrouble: boolean
  timeOfClickingVerification: number
  loadingPaymenStatus: boolean
  paymentMessage?: string
  showMessageError: boolean
}>()
const qrCodeUrl = ref<string | null>(null)
const waitingForCheckingPaymentStatus = ref(60)
let timer: ReturnType<typeof setInterval> | null = null
const qrSize = ref(300)
const emit = defineEmits(['closeDialog', 'verifyPaymentStatus'])
const generateQRCode = async (text: string) => {
  try {
    qrCodeUrl.value = await QRCode.toDataURL(text)
  } catch (err) {
    console.error(' Failed to generate QR:', err)
    qrCodeUrl.value = null
  }
}
const handleResize = () => {
  const mainContentElement = document.getElementById('main-content')
  if (mainContentElement) {
    qrSize.value = Math.min(mainContentElement.offsetWidth * 0.8, 300)
  }
}
onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()

  if (props.subScriptionData?.khqr_qr) {
    generateQRCode(props.subScriptionData.khqr_qr)
  }
  timer = setInterval(() => {
    if (waitingForCheckingPaymentStatus.value > 0) {
      waitingForCheckingPaymentStatus.value--
    } else {
      clearInterval(timer!)
      timer = null
    }
  }, 1000)
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
watch(
  () => props.subScriptionData?.khqr_qr,
  (newVal) => {
    if (newVal) generateQRCode(newVal)
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<style></style>
