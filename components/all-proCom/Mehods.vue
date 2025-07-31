<template>
  <div>
    <!-- <Navbar /> -->
    <div class="mx-auto 2xl:px-0">
      <div
        class="pt-2.5 flex-col justify-start items-start gap-2.5 inline-flex"
      >
        <div
          class="self-stretch flex-col lgBig:flex-row justify-start items-start gap-8 inline-flex"
        >
          <div
            class="lg:pb-16 flex-col justify-start items-start gap-8 inline-flex"
          >
            <div
              class="self-stretch text-[#252525] text-3xl font-medium leading-[54px]"
            >
              Payment Method
            </div>
            <!-- <StripePaymentElement /> -->
            <AllProComStripElementBlock
              :payment_id="payment_id"
              v-model:autoRenew="autoRenew"
              @updateAutoRenew="updateAutoRenew"
              @updatePaymentId="updatePaymentId"
            />
            <div
              class="self-stretch h-0.5 flex-col justify-start items-center flex"
            >
              <div
                class="h-[31px] px-[34px] bg-white flex-col justify-center items-start gap-2.5 flex"
              >
                <div
                  class="text-center text-[#212121] text-[17px] font-bold leading-[30.60px]"
                >
                  Or
                </div>
              </div>
            </div>
            <!-- fix -->
            <CardBlock
              v-model:saveCard="saveCard"
              @update:card="updateSaveCard"
              :loadingListCard="loadingListCard"
              :listCard="listCard"
              :selectedCard="props.card_id || ''"
              @update:selectedCard="onCheckboxChange"
              :errorCardList="errorCardList"
            />
            <div class="flex overflow-scroll hide-scrollbar w-full">
              <AddressBlock
                :loadingListAddress="loadingListAddress"
                :listAddress="listAddress"
                :selectedAddr="selectedAddr"
                @update:selectedCard="updateSelectedAddr"
                @refreshAddressList="refreshAddressList"
                :errorAddress="errorAddress"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AddressBlock from './AddressBlock.vue'
import CardBlock from './CardBlock.vue'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
  cv: string
  letter: string
  portfolio: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}
const props = defineProps<{
  listCard: ISUBSCRIPTION.CartDetail[] | null
  loadingListCard: boolean
  loadingListAddress: boolean
  listAddress: ISUBSCRIPTION.Address[] | null
  autoRenew: boolean
  payment_id: number
  errorAddress?: string
  errorCardList?: string
  card_id?: string
}>()
const selectedAddr = ref<number | null>(null)
const updateSelectedAddr = (id: number) => {
  selectedAddr.value = id
}
const form = reactive<FormData>({
  name: '',
  email: '',
  subject: '',
  message: '',
  cv: '',
  letter: '',
  portfolio: '',
})
const emit = defineEmits([
  'update:PaymentId',
  'updateCardId',
  'update:address',
  'update:autoRenew',
  'refreshAddressList',
])
const refreshAddressList = () => {
  emit('refreshAddressList')
}
const autoRenew = ref<boolean>(props.autoRenew)
const updateAutoRenew = () => {
  autoRenew.value = !autoRenew.value
  emit('update:autoRenew', autoRenew.value)
}
watch(selectedAddr, (val) => {
  emit('update:address', val)
})
// selected card id state
const selectedCard = ref<string>(props.card_id || '')
const updatePaymentId = (id: number) => {
  emit('update:PaymentId', id)
}
const onCheckboxChange = (id: string) => {
  emit('updateCardId', id)
}
const saveCard = ref(false)
const updateSaveCard = () => {
  saveCard.value = !saveCard.value
}

const paymentMethods = [
  {
    name: 'Visa',
    icons: `/card/visa.svg`,
    highlighted: false,
  },
  {
    name: 'Mastercard',
    icons: '/card/mastercard.svg',
    highlighted: false,
  },
  {
    name: 'Amex',
    icons: '/card/amex.svg',
    highlighted: false,
  },
  {
    name: 'Paypal',
    icons: '/img/UnionPay.png',
    highlighted: false,
  },
  {
    name: 'Discover',
    icons: '/card/discover.svg',
    highlighted: false,
  },
  {
    name: 'JCB',
    icons: '/card/jcb.svg',
    highlighted: false,
  },
]
</script>

<style lang="scss" scoped></style>
