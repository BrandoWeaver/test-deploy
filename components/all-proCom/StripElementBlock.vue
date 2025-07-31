<template>
  <div
    class="self-stretch h-[161px] flex-col justify-start items-start gap-1.5 flex"
  >
    <div class="flex justify-between items-center gap-2.5 w-full">
      <div
        class="grow shrink basis-0 text-[#000000] text-[17px] font-bold leading-[30.60px]"
      >
        Express checkout
      </div>
      <div class="flex flex-row gap-[10px]" v-if="payment_id !== 1">
        <p class="font-noto text-[14px] font-bold text-[#000000]">
          Auto Renewal
        </p>
        <ToggleSwitch
          :modelValue="autoRenewDefault"
          @update:modelValue="updateAutoRenew"
        />
      </div>
    </div>
    <div class="self-stretch py-2.5 justify-start items-start inline-flex">
      <div
        class="grow shrink basis-0 h-12 justify-start items-center gap-3.5 flex"
      >
        <!-- <div
          class="h-12 relative rounded-md border justify-center items-center flex"
        >
          <button class="w-full h-full" @click="updatePaymentId(2)">
            <NuxtImg src="/card/stripe.svg" alt="" class="w-full h-full" />
          </button>
          <Icon
            icon="icon-park-solid:check-one"
            width="16"
            height="16"
            class="absolute top-1 right-1 bg-transparent rounded-full text-[#DBF226]"
            v-if="payment_id == 2"
          />
        </div> -->
        <div
          class="h-12 relative rounded-md border justify-center items-center flex"
        >
          <button class="w-full h-full" @click="updatePaymentId(1)">
            <NuxtImg
              src="/card/khqr.svg"
              alt="thortok"
              class="w-full h-full"
              format="webp"
            />
          </button>
          <Icon
            icon="icon-park-solid:check-one"
            width="16"
            height="16"
            class="absolute top-1 right-1 bg-transparent rounded-full text-[#DBF226]"
            v-if="payment_id == 1"
          />
        </div>
        <!-- <div>
          <ClientOnly>
            <ExpressCheckout :client-secret="clientSecret" />
          </ClientOnly>
        </div> -->
      </div>
    </div>
    <div class="self-stretch justify-center items-center inline-flex">
      <div class="grow shrink basis-0 text-[#667085] text-sm leading-[25.20px]">
        With the Express Checkout mode, when you click the “Pay Now” button, you
        will be redirected to an external payment link from the platform you
        selected.
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import ToggleSwitch from '../cusComponents/ToggleSwitch.vue'
import ExpressCheckout from '../ExpressCheckout.vue'
const props = defineProps<{ payment_id: number; autoRenew: boolean }>()
const emit = defineEmits(['updateAutoRenew', 'updatePaymentId'])
const autoRenewDefault = ref(props.autoRenew)
const updateAutoRenew = () => {
  emit('updateAutoRenew')
  autoRenewDefault.value = !autoRenewDefault.value
}
const updatePaymentId = (id: number) => {
  emit('updatePaymentId', id)
}
</script>
