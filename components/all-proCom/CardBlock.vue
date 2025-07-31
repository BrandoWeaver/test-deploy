<template>
  <div
    class="self-stretch p-6 rounded-md border border-[#eeeeee] flex-col justify-start items-start gap-4 flex"
  >
    <div
      class="self-stretch h-auto flex-col justify-start items-start gap-[20px] flex"
    >
      <div
        class="self-stretch h-6 justify-start items-center gap-4 inline-flex"
      >
        <div
          class="self-stretch h-6 justify-start items-center gap-4 inline-flex"
        >
          <div class="flex justify-center items-center gap-2.5">
            <div class="text-[#686868] text-[17px] font-bold leading-[30.60px]">
              By Card
            </div>

            <div
              v-for="(method, index) in paymentMethods"
              :key="index"
              class="flex justify-center items-center gap-2.5"
            >
              <div
                v-if="method.icons"
                class="w-[35px] h-6 bg-white rounded border border-[#d9d9d9] flex justify-center items-center"
                :class="{ 'bg-[#eff1d9]': method.highlighted }"
              >
                <NuxtImg
                  class="w-[24.5px] h-[16.82px]"
                  :src="method.icons"
                  :alt="method.name"
                />
              </div>
            </div>
          </div>

          <div class="h-6 py-1.5 justify-start items-center gap-2.5 flex">
            <div
              class="h-3 origin-top-left rotate-90 justify-center items-center flex"
            >
              <div
                class="w-3 h-3 px-[2.50px] pt-1 pb-[4.46px] origin-top-left -rotate-90 justify-center items-center inline-flex"
              ></div>
            </div>
          </div>
        </div>
        <div class="h-6 py-1.5 justify-start items-center gap-2.5 flex">
          <div
            class="h-3 origin-top-left rotate-90 justify-center items-center flex"
          >
            <div
              class="w-3 h-3 px-[2.50px] pt-1 pb-[4.46px] origin-top-left -rotate-90 justify-center items-center inline-flex"
            ></div>
          </div>
        </div>
      </div>
      <div class="self-stretch flex-col justify-start items-start gap-5 flex">
        <CusBaseInput
          v-model="form.subject"
          label="Card Number"
          type="text"
          placeholder="2322 4243 2432 4542"
          :errorMessage="errors.name"
        />

        <div
          class="self-stretch justify-start items-start gap-6 xl:flex-row xl-max:flex-col lg-max:flex-row md-max:flex-row mdx-max:flex-col flex w-full"
        >
          <div class="xl:w-1/2 xl-max:w-full md-max:w-1/2 mdx-max:w-full">
            <CusBaseInput
              v-model="form.name"
              label="Name"
              type="text"
              placeholder="Oudom"
              :errorMessage="errors.name"
            />
          </div>

          <div
            class="flex gap-6 xl:w-1/2 xl-max:w-full md-max:w-1/2 mdx-max:w-full"
          >
            <!-- Expiry Date -->
            <CusBaseInput
              v-model="form.letter"
              label="Expiry date"
              type="text"
              placeholder="02 / 28"
              :errorMessage="errors.name"
            />

            <!-- CVV -->
            <CusBaseInput
              v-model="form.message"
              label="CVV"
              type="text"
              placeholder="843"
              :errorMessage="errors.name"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="self-stretch mt-4 py-3.5 justify-start items-center gap-2.5 inline-flex"
    >
      <ToggleSwitch
        :modelValue="defaultSaveCard"
        @update:modelValue="updateSaveCard"
      />
      <div class="text-[#262b43]/90 text-[15px] leading-[27px]">
        Save card for future billing?
      </div>
    </div>
    <div class="self-stretch justify-between items-center inline-flex">
      <div class="self-stretch justify-start items-center gap-2.5 flex">
        <div class="text-[#686868] text-[17px] font-light leading-[30.60px]">
          Registered Card
        </div>
      </div>
      <div class="justify-start items-center gap-2.5 flex">
        <div class="justify-start items-center gap-2 flex">
          <button
            class="text-[#686868] text-[11px] disabled:opacity-50 font-light leading-tight"
            @click="redirectToBillingPortal"
            :disabled="errorCardList !== undefined"
          >
            Edite my card
          </button>
        </div>
      </div>
    </div>
    <div
      class="self-stretch flex-col mdx:flex-row md:flex-row sm:flex-col justify-start items-start gap-2.5 inline-flex"
    >
      <div
        class="self-stretch sm:flex-row md-611:flex-col flex-col justify-start items-start gap-2.5 md:hidden w-full mdx:hidden sm:flex"
      >
        <div
          class="py-4 px-2 rounded-md border border-[#005b52] flex items-center gap-4 w-full"
        >
          <div class="flex flex-col justify-center flex-grow gap-5">
            <div class="flex justify-between items-center">
              <div class="w-12 h-8 flex items-center justify-center">
                <img
                  class="w-full h-auto object-contain"
                  src="../../public/img/Visa.svg"
                  alt="Visa Logo"
                />
              </div>
              <div class="text-sm text-[#686868]">First Name</div>
              <div
                class="w-5 h-5 p-[3px] rounded-[10px] border border-[#eeeeee] justify-start items-center gap-2.5 flex"
              >
                <div
                  class="w-3.5 h-3.5 bg-white rounded-full border border-[#eeeeee]"
                ></div>
              </div>
            </div>
            <div class="text-sm text-[#686868] mt-1">
              ABA Bank <span class="ml-2">**** 4578</span>
            </div>
          </div>
        </div>

        <div
          class="py-4 px-2 rounded-md border flex items-center gap-4 w-full mt-2.5 sm:mt-0"
        >
          <div class="flex flex-col justify-center flex-grow gap-5">
            <div class="flex justify-between items-center">
              <div class="w-12 h-8 flex items-center justify-center">
                <img
                  class="w-full h-auto object-contain"
                  src="../../public/img/Mastercard.svg"
                  alt="Visa Logo"
                />
              </div>
              <div class="text-sm text-[#686868]">First Name</div>
              <div
                class="w-5 h-5 p-[3px] rounded-[10px] border border-[#eeeeee] justify-start items-center gap-2.5 flex"
              >
                <div
                  class="w-3.5 h-3.5 bg-white rounded-full border border-[#eeeeee]"
                ></div>
              </div>
            </div>
            <div class="text-sm text-[#686868] mt-1">
              ABA Bank <span class="ml-2">**** 4578</span>
            </div>
          </div>
        </div>
      </div>
      <!-- bigscreen -->
      <div
        v-if="loadingListCard"
        class="max-w-[720px] w-full overflow-x-scroll hide-scrollbar"
      >
        <AllProComListCardSkeleton />
      </div>
      <div
        v-else-if="listCard && listCard?.length > 0"
        class="max-w-[720px] w-full overflow-x-scroll hide-scrollbar"
      >
        <div class="flex gap-4 min-w-max">
          <div
            v-for="card in listCard"
            :key="card.id"
            :class="{
              border: defaultSelectedCard !== card.id,
              'bg-[#EFF1D9] border border-[#EFF1D9]':
                defaultSelectedCard === card.id,
            }"
            class="min-w-[280px] max-w-[280px] flex-shrink-0 rounded-lg p-4 hover:cursor-pointer flex flex-col"
          >
            <div
              class="flex justify-between items-center mb-3"
              @click.prevent="onCheckboxChange(card.id)"
            >
              <div class="w-12 h-8">
                <NuxtImg
                  :src="useCardLogo(card.brand)"
                  alt="Card logo"
                  class="w-[46px] h-8 object-contain"
                />
              </div>
              <div class="text-sm text-[#686868]">
                {{ card.brand.toUpperCase() }}
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  :id="`card-${card.id}`"
                  class="hidden peer"
                  :checked="defaultSelectedCard === card.id"
                  @change="() => onCheckboxChange(card.id)"
                />

                <label
                  :for="`card-${card.id}`"
                  class="relative w-6 h-6 rounded-full border-[1.5px] border-gray-800 flex items-center justify-center cursor-pointer peer-checked:border-[3px] peer-checked:border-[#2D6054] peer-checked:bg-white"
                >
                  <span
                    v-if="defaultSelectedCard === card.id"
                    class="absolute w-3 h-3 rounded-full bg-[#2D6054]"
                  ></span>
                </label>
              </div>
            </div>

            <div class="text-sm text-[#686868]">
              {{ card.brand.toUpperCase()
              }}<span class="ml-2">**** {{ card.last4 }}</span>
            </div>
          </div>
        </div>
      </div>
      <div
        v-else
        class="text-[#686868] text-[17px] font-light leading-[30.60px] flex justify-center items-center w-full"
      >
        No Card found
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCardLogo } from '~/composables/subscription/useCardLogo'
import ToggleSwitch from '../cusComponents/ToggleSwitch.vue'
import CusBaseInput from '../cusComponents/CusBaseInput.vue'
const props = defineProps<{
  saveCard: boolean
  loadingListCard: boolean
  listCard?: ISUBSCRIPTION.CartDetail[] | null
  selectedCard: string
  errorCardList?: string
}>()

const emit = defineEmits(['update:card', 'update:selectedCard'])
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
const defaultSaveCard = ref(props.saveCard)
const defaultSelectedCard = ref('')
const errors = ref<FormErrors>({})
const form = reactive<FormData>({
  name: '',
  email: '',
  subject: '',
  message: '',
  cv: '',
  letter: '',
  portfolio: '',
})
watch(
  () => props.selectedCard,
  (newVal) => {
    defaultSelectedCard.value = newVal || ''
  },
  { immediate: true }
)
const updateSaveCard = () => {
  emit('update:card')
  defaultSaveCard.value = !defaultSaveCard.value
}
const onCheckboxChange = (id: string) => {
  emit('update:selectedCard', id)
  if (defaultSelectedCard.value === id) {
    defaultSelectedCard.value = ''
  } else {
    defaultSelectedCard.value = id
    emit('update:selectedCard', id)
  }
}
const customerId = 'cus_SfF1KosyXCHc7K' //exist in stripe

const redirectToBillingPortal = async () => {
  const { data, error } = await useFetch<any>('/api/stripe/billing-portal', {
    method: 'POST',
    body: { customerId },
  })

  if (error.value) {
    alert('Failed to open billing portal: ' + error.value.message)
    return
  }

  if (data.value?.url) {
    window.location.href = data.value.url || ''
  }
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
<style lang=""></style>
