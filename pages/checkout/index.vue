<template>
  <Breadcrumbs
    :items="[
      { label: 'HOME', to: '/' },
      { label: 'SUBSCRIPTION', to: '/checkout' },
    ]"
  />
  <div
    class="flex flex-col lg:flex-row justify-center items-start w-[1440px] xl-max:w-full pt-[16px] md-max:pt-[6px] lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px]"
  >
    <Payments
      v-if="!pay"
      :pay="pay"
      :listPlan="listPlan!"
      :loadingPlan="
        status === 'pending' ||
        statusSubScriptionDetail == 'pending' ||
        $nuxt.ssrContext
          ? true
          : false
      "
      :statusSubScriptionRes="statusSubScriptionRes === 'pending'"
      :planId="subscription_id"
      v-model:numDevice="device"
      v-model:coupon="coupon"
      @update:PlanId="updatePlanId"
      @update:pay="pay = $event"
      @onCouponInput="onCouponInput"
      @onDeviceInput="onDeviceInput"
      @removeDevice="removeDevice"
      @clearCoupon="clearCouponInput"
      @addMoreDevice="addMoreDevice"
      @payNow="handleSubScription"
      :getDefaultPlan="getDefaultPlan"
      :formErrorMessages="formErrorMessages"
      :isRenew="$route.query.renewUrl !== undefined"
    />
    <PlacedOrder
      :checkoutData="checkoutData!"
      :loadingCheckoutData="
        (statusCheckoutData === 'pending' || $nuxt.ssrContext) && pay
          ? true
          : false
      "
      v-else="pay"
    />
    <Mehods
      v-if="!pay"
      :loadingListCard="
        status === 'pending' ||
        statusSubScriptionDetail == 'pending' ||
        $nuxt.ssrContext
          ? true
          : false
      "
      :listCard="listCard?.data! || dataSubScriptionDetail?.data.users.cards"
      :loadingListAddress="
        statusAddress === 'pending' ||
        statusSubScriptionDetail == 'pending' ||
        $nuxt.ssrContext
          ? true
          : false
      "
      :autoRenew="autoRenew"
      :listAddress="
        listAddress?.data! ||
        dataSubScriptionDetail?.data.users.invoice_address!
      "
      :payment_id="payment_id"
      :card_id="cardId"
      @update:PaymentId="updatePaymentId"
      @updateCardId="updateCardId"
      @update:address="updateAddressId"
      @refreshAddressList="refreshAddressList"
      @update:autoRenew="updateAutoRenew"
      :errorAddress="errorAddress?.data.message || ''"
      :errorCardList="errorCardList?.data.message || ''"
    />
    <PaymentsPaid
      :pay="pay"
      :loadingCheckoutData="
        statusCheckoutData === 'pending' || $nuxt.ssrContext ? true : false
      "
      :checkoutData="checkoutData!"
      @update:pay="pay = $event"
      v-else
    />
    <!-- <div class="flex flex-col">
      <Mehods />
      <PlacedOrder />
    </div> -->

    <!-- </div>
      </div>
    </div> -->
    <CusComponentsCusDialog
      :open="openKhqr"
      width="w-[calc(100vw-400px)]"
      height="h-[calc(100vh-600px)]"
    >
      <div class="flex flex-row justify-between px-4 pt-4">
        <div>
          <button
            class="hover:bg-gray-200 p-1 rounded-full"
            @click="closeDialog"
          >
            <Icon
              icon="material-symbols:arrow-back-rounded"
              width="24"
              height="24"
            />
          </button>
        </div>
        <div>
          <h1 class="text-xl md:text-2xl font-semibold text-gray-800">
            Checkout
          </h1>
        </div>
      </div>
      <Khqr
        :subScriptionData="dataSubScriptionRes?.data"
        @closeDialog="closeDialog"
        :havingTrouble="havingTrouble"
        @verifyPaymentStatus="clickVerifyAfterexceedMaxAttempts"
        :timeOfClickingVerification="
          timeOfClickingVerificationAfterExceedMaxAttempts
        "
        :loading-paymen-status="statusPaymentStatusRes === 'pending'"
        :paymentMessage="dataPaymentStatus?.responseMessage"
        :showMessageError="showMessageErrorFor5Attemts"
      />
    </CusComponentsCusDialog>
  </div>
  <ErrorDialog
    :show="isError"
    :error-message="errorSubScriptionRes?.data.message || ''"
    @update:show="isError = $event"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Breadcrumbs from '~/components/all-proCom/Breadcrumbs.vue'
import Mehods from '@/components/all-proCom/Mehods.vue'
import Payments from '@/components/all-proCom/Payments.vue'
import PaymentsPaid from '@/components/all-proCom/PaymentsPaid.vue'
import PlacedOrder from '@/components/all-proCom/PlacedOrder.vue'
import { useSubscription } from '~/composables/subscription/useSubscription'
import { SUBSCRIPTION_SERVICE } from '~/services/subscriptionServices'
import { Icon } from '@iconify/vue/dist/iconify.js'
import Khqr from '~/components/all-proCom/Khqr.vue'
import { useSessionStorage } from '~/composables/localStorage/useSession'
import ErrorDialog from '~/components/cusComponents/ErrorDialog.vue'
definePageMeta({
  colorMode: 'light',
  middleware: 'auth',
})
//session storage
const { getSessionItem } = useSessionStorage()
const isError = ref(false)
//State
const config = useRuntimeConfig()
const checkoutData = ref<ISUBSCRIPTION.DataCheckoutRes>()
const statusCheckoutData = ref<'idle' | 'pending' | 'success' | 'error'>('idle')
const errorCheckoutData = ref(null)
//Router
const route = useRoute()
const navigation = useRouter()
const pay = ref(false)
const openKhqr = ref(false)
const subscription_id = ref(getSessionItem(config.public.plan_id) || 2)
const device = ref(1)
const payment_id = ref(-1)
const cardId = ref('')
const addrId = ref(-1)
const autoRenew = ref(false)
const coupon = ref('')
const sub_id = ref<string>('')
const pollingInterval = ref<ReturnType<typeof setInterval> | null>(null)
const attemptCount = ref(0)
const showMessageErrorFor5Attemts = ref(false)
const maxAttempts = 15
const timeOfClickingVerificationAfterExceedMaxAttempts = ref(0)
const { locale } = useI18n()
const havingTrouble = ref(false)
const invoice_id = ref<number>(-1)
const newRenewUrl = route.query.renewUrl as string

const formErrorMessages = reactive<string[]>([])

// Validation Form
const validateForm = () => {
  formErrorMessages.length = 0

  if (payment_id.value === -1) {
    formErrorMessages.push('Please select a payment method')
  }
  if (payment_id.value === 2 && !cardId.value) {
    formErrorMessages.push('Please select a card for payment')
  }

  return formErrorMessages.length === 0
}

// Watch form fields to clear errors when corrected
watch([payment_id, cardId], () => {
  if (payment_id.value !== -1 && (payment_id.value !== 2 || cardId.value)) {
    formErrorMessages.length = 0
  } else {
    validateForm()
  }
})

//Composable
const {
  listCard,
  status,
  listAddress,
  statusAddress,
  errorAddress,
  errorCardList,
  refreshAddress,
  listPlan,
} = useSubscription()
//Function
const onCouponInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  coupon.value = input.value
}
const closeDialog = () => {
  openKhqr.value = false
}
const clearCouponInput = () => {
  coupon.value = ''
}
const updateAutoRenew = (status: boolean) => {
  autoRenew.value = status
}
const updateAddressId = (id: number) => {
  addrId.value = id
}
const updateCardId = (card_id: string) => {
  cardId.value = card_id
  payment_id.value = 2
}
const updatePlanId = (id: number) => {
  subscription_id.value = id
}
const updatePaymentId = (id: number) => {
  payment_id.value = id
  if (id === 1) {
    cardId.value = ''
  }
}
const clearAllData = () => {
  body.id = -1
  body.subscription_id = -1
  body.payment_method_id = -1
  body.add_device = 1
  body.auto_renewal = 'false'
  body.address_id = -1
  body.coupon_code = ''
  pay.value = false
  openKhqr.value = false
  subscription_id.value = 2
  device.value = 1
  payment_id.value = -1
  cardId.value = ''
  addrId.value = -1
  autoRenew.value = false
  coupon.value = ''
  sub_id.value = ''
  pollingInterval.value = null
  attemptCount.value = 0
  timeOfClickingVerificationAfterExceedMaxAttempts.value = 0
  havingTrouble.value = false
  invoice_id.value = -1
}
const onDeviceInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  let value = input.value.replace(/[^0-9]/g, '')
  let numeric = Number(value)
  if (numeric === 0 || value === '') {
    device.value = 1
    input.value = ''
    return
  }
  if (numeric > 10) {
    numeric = 10
  }
  device.value = numeric
  input.value = numeric.toString()
}
const addMoreDevice = () => {
  if (device.value === 10) {
    return
  }
  device.value += 1
}
const removeDevice = () => {
  device.value -= 1
}
//Initial Data To Pass To API
const body = {
  id: -1,
  subscription_id: subscription_id.value,
  payment_method_id: -1,
  add_device: 1,
  auto_renewal: 'false',
  address_id: -1,
  coupon_code: '',
}
//subscription detail
const { data: dataSubScriptionDetail, status: statusSubScriptionDetail } =
  SUBSCRIPTION_SERVICE.subscriptionDetail({
    config,
    locale,
    data: { short_link: `${newRenewUrl}` },
    onError(error) {
      console.error('Failed to fetch subscription detail:', error)
    },
    onSuccess: (res) => {
      console.log('Subscription detail:', res)
      device.value = res.data.add_device || 1
    },
  })
//Computed to track default plan
const getDefaultPlan = computed(() => {
  return (
    (dataSubScriptionDetail.value?.data.subscription_type as
      | 'monthly'
      | 'yearly') ||
    (listPlan.value?.data
      .find((val) => val.id === getSessionItem(config.public.plan_id || ''))
      ?.name.toLocaleLowerCase() as 'monthly' | 'yearly') ||
    'monthly'
  )
})
//API call for subscription plan
const {
  data: dataSubScriptionRes,
  status: statusSubScriptionRes,
  execute: runSubScription,
  error: errorSubScriptionRes,
} = SUBSCRIPTION_SERVICE.subScriptionPlan({
  config,
  locale: locale,
  body: body,
  onError(error) {
    console.error('Failed to load seasonal:', error)
    formErrorMessages.length = 0
    isError.value = true
    clearAllData()
  },
  onSuccess: (data) => {
    if (data.data.payment_method_id === 1) {
      openKhqr.value = true
      invoice_id.value = data.data.id
      sub_id.value = `${data.data.id}`
      startPolling()
    } else {
      if (data.data.payment_method_id === 2 && data.data.payment_status) {
        navigation.push({
          path: route.path,
          query: {
            payment: 'true',
            invoice_id: data.data.id,
          },
        })
      }
    }
  },
})
// Function to create subscription plan
const handleSubScription = () => {
  body.subscription_id = subscription_id.value
  body.payment_method_id = payment_id.value
  body.add_device = device.value
  body.address_id = addrId.value
  body.auto_renewal = `${autoRenew.value}`
  body.id = dataSubScriptionRes.value?.data.id!
  body.coupon_code = coupon.value
  if (route.query.renewUrl !== undefined) {
    Object.assign(body, {
      renew_url: `${route.query.renewUrl}`,
      id: dataSubScriptionDetail.value?.data.id || '',
    })
  }
  if (cardId.value !== '') {
    Object.assign(body, { pm_stripe_id: cardId.value })
  }
  if (!validateForm()) {
    return
  }
  runSubScription()
}
//Function to refresh list of address
const refreshAddressList = () => {
  refreshAddress()
}
//This function use to run checkout payment status if user exceed max attemts
const clickVerifyAfterexceedMaxAttempts = () => {
  timeOfClickingVerificationAfterExceedMaxAttempts.value += 1
  runPaymentStatusRes()
}
//this fun run to check payment after khrq pop up.
const {
  status: statusPaymentStatusRes,
  execute: runPaymentStatusRes,
  data: dataPaymentStatus,
  error: errorPaymentStatusRes,
} = SUBSCRIPTION_SERVICE.checkPaymentStatus({
  config,
  locale,
  invoice_id: invoice_id,
  onError(error) {
    console.log('Failed to check payment status:', error)
    // stopPolling()
    if (error.status === 'OK' && error.data == null) {
      navigation.push({
        path: route.path,
        query: {
          payment: 'true',
          invoice_id: invoice_id.value,
        },
      })
      closeDialog()
      stopPolling()
      clearAllData()
    }
  },
  onSuccess: (res) => {
    console.log('onSuccess', res)
    if (res.data && payment_id.value === 1) {
      pay.value = true
      navigation.push({
        path: route.path,
        query: {
          payment: 'true',
          invoice_id: invoice_id.value,
        },
      })
      closeDialog()
      stopPolling()
      clearAllData()
    }
    if (!res.responseCode && res.data == null) {
      pay.value = true
      stopPolling()
    }
    // Check if success
    if (res.responseCode === 0 && res.data !== null) {
      console.log('Payment successful!')
      pay.value = true
      stopPolling()
    }
    // If failed or not found
    if (res.responseCode === 1 && res.data !== null) {
      console.log('Payment failed or not found.')
      stopPolling()
    }
  },
})
//trigger api after khqr pop up
const startPolling = () => {
  if (pollingInterval.value) return
  attemptCount.value = 0
  runPaymentStatusRes()
  pollingInterval.value = setInterval(() => {
    attemptCount.value++
    if (attemptCount.value === 5) {
      showMessageErrorFor5Attemts.value = true
    }
    if (attemptCount.value >= maxAttempts) {
      console.warn(' Max attempts reached. Stopping polling.')
      stopPolling()
      havingTrouble.value = true
    } else {
      runPaymentStatusRes()
    }
  }, 3000)
}
//clear pollingInterval to stop trigger api check payment
const stopPolling = () => {
  if (pollingInterval.value) {
    clearInterval(pollingInterval.value)
    pollingInterval.value = null
  }
}
watch(openKhqr, (val) => {
  if (!val) {
    stopPolling()
    invoice_id.value = -1
  }
})
//stop polling after unmounted
onUnmounted(() => {
  stopPolling()
})
// set pay state to try if query exist key value of payment
watchEffect(() => {
  const paymentParam = route.query.payment
  pay.value = paymentParam === 'true'
})
//if invoice_id exist will trigger download invoice auto
watch(
  () => route.query.invoice_id,
  async (newInvoiceId) => {
    if (!newInvoiceId) return
    statusCheckoutData.value = 'pending'
    const { data, error } = await SUBSCRIPTION_SERVICE.dowloadInvoice({
      config,
      locale,
      body: { invoice_id: `${newInvoiceId}` },
      onError(error) {
        errorCheckoutData.value = error.value
        statusCheckoutData.value = 'error'
      },
      onSuccess(data) {
        checkoutData.value = data.data
        statusCheckoutData.value = 'success'
      },
    })
  },
  { immediate: true }
)
</script>
