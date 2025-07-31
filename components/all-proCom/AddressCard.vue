<template>
  <div
    @click.prevent="onCheckboxChange(data.id)"
    :class="{
      border: selectedAddr !== data.id,
      'bg-[#EFF1D9] border border-[#EFF1D9]': selectedAddr === data.id,
    }"
    class="min-w-[348px] hover:cursor-pointer p-4 rounded-[10px] border border-[#eeeeee] flex-col justify-start items-start gap-3.5 inline-flex"
  >
    <div class="self-stretch justify-start items-center inline-flex">
      <div class="grow shrink basis-0 justify-start items-center gap-2.5 flex">
        <div class="text-black text-sm leading-[25.20px] font-bold">
          {{ data.name.toUpperCase() }}
        </div>
      </div>
      <div class="justify-start items-center gap-2.5 flex">
        <div
          v-if="data.address_type"
          class="px-2.5 py-1 bg-[#eff1d9] rounded-[50px] border justify-center items-center gap-2.5 flex"
        >
          <div class="text-center text-[#444444] text-[11px] leading-tight">
            {{ data.address_type }}
          </div>
        </div>

        <div class="flex items-center">
          <input
            type="checkbox"
            :id="`card-${data.id}`"
            class="hidden peer"
            :checked="selectedAddr === data.id"
            @change="() => onCheckboxChange(data.id)"
          />

          <label
            :for="`card-${data.id}`"
            class="relative w-6 h-6 rounded-full border-[1.5px] border-gray-800 flex items-center justify-center cursor-pointer peer-checked:border-[3px] peer-checked:border-[#2D6054] peer-checked:bg-white"
          >
            <span
              v-if="selectedAddr === data.id"
              class="absolute w-3 h-3 rounded-full bg-[#2D6054]"
            ></span>
          </label>
        </div>
      </div>
    </div>

    <div class="self-stretch flex-col justify-start items-start gap-3 flex">
      <div class="self-stretch text-[#444444] text-[13px] leading-normal">
        {{ data.address }}<br />
        Mobile : {{ data.phone_number }}
      </div>
      <div class="self-stretch h-[0px] border border-[#262b43]/10"></div>
    </div>

    <div
      class="self-stretch py-1.5 justify-start items-start gap-4 inline-flex"
    >
      <div
        class="text-[#444444] text-[11px] font-light leading-tight"
        @click.stop.prevent="getAddressToUpdate(data)"
      >
        Edit
      </div>
      <button
        class="text-[#444444] text-[11px] font-light leading-tight"
        @click.stop.prevent="openDialog(data.id)"
      >
        Remove
      </button>
    </div>
  </div>
  <CusConfirmDialog :open="remove.open" :title="'Delete Address'">
    <div class="py-5">Are you sure?</div>
    <div class="flex w-full justify-end gap-3">
      <button @click="closeDialog">No</button>
      <button
        class="ml-3 px-4 py-2 flex justify-center items-center text-center min-w-[75px] disabled:opacity-50 bg-[#005b52] text-white rounded-md"
        :disabled="statusRemove === 'pending'"
        @click="handleRemove"
      >
        <span v-if="statusRemove !== 'pending'">Yes</span>
        <span v-else><CusLoading width="24" height="24" /></span>
      </button>
    </div>
  </CusConfirmDialog>
</template>

<script setup lang="ts">
import { SUBSCRIPTION_SERVICE } from '~/services/subscriptionServices'
import CusConfirmDialog from '../cusComponents/CusConfirmDialog.vue'
import CusLoading from '../cusComponents/CusLoading.vue'

const props = defineProps<{
  data: ISUBSCRIPTION.Address
  selectedAddr: number | null
}>()

const remove = ref({ open: false, removeId: -1 })
const closeDialog = () => {
  remove.value.open = false
  remove.value.removeId = -1
}
const openDialog = (removeId: number) => {
  remove.value.open = true
  remove.value.removeId = removeId
}

const emit = defineEmits([
  'getAddressToUpdate',
  'update:selectedCard',
  'refreshAddressList',
])
const onCheckboxChange = (id: number) => {
  emit('update:selectedCard', props.selectedAddr === id ? -1 : id)
}
const getAddressToUpdate = (data: ISUBSCRIPTION.Address) => {
  emit('getAddressToUpdate', data)
}

const config = useRuntimeConfig()
const { locale } = useI18n()
const body = ref({ addressId: -1 })

const { status: statusRemove, execute: runRemoveAddress } =
  SUBSCRIPTION_SERVICE.removeAddress({
    config,
    locale: locale,
    body: body.value,
    onError(error) {},
    onSuccess: () => {
      remove.value.open = false
      emit('refreshAddressList')
    },
  })

const handleRemove = () => {
  body.value.addressId = remove.value.removeId
  runRemoveAddress()
}
</script>
