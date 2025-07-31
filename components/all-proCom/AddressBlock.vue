<template>
  <div
    class="self-stretch p-6 w-full rounded-md border border-[#eeeeee] flex-col justify-start items-start gap-4 flex"
  >
    <div class="self-stretch justify-between items-center inline-flex">
      <div class="self-stretch justify-start items-center gap-2.5 flex">
        <div class="text-[#686868] text-[17px] font-bold leading-[30.60px]">
          Address
        </div>
      </div>
      <div class="justify-start items-center gap-2 flex">
        <button
          class="text-[#686868] text-[11px] disabled:opacity-50 font-light leading-tight hover:cursor-pointer"
          @click="handleAddr"
          :disabled="errorAddress !== undefined"
        >
          +Add address
        </button>
      </div>
    </div>
    <div
      class="w-full min-w-[720px] overflow-x-scroll hide-scrollbar flex-col mdx:flex-row md:flex-row sm:flex-col justify-start items-start gap-4"
    >
      <div
        v-if="loadingListAddress"
        class="flex overflow-scroll gap-4 max-w-[720px] w-full overflow-x-scroll hide-scrollbar"
      >
        <AddressCardSkeleton v-for="n in 3" :key="n" />
      </div>
      <div
        v-else-if="listAddress && listAddress?.length > 0"
        class="flex flex-row self-stretch w-full gap-4"
      >
        <AddressCard
          v-for="addr in listAddress"
          :key="addr.id"
          :data="addr"
          :selectedAddr="selectedAddr"
          @update:selectedCard="updateCard"
          @getAddressToUpdate="getAddressToUpdate"
          @refreshAddressList="refreshAddressList"
        />
      </div>
      <div
        v-else
        class="text-[#686868] text-[17px] font-light leading-[30.60px] flex justify-center items-center"
      >
        No address found
      </div>
    </div>
    <CusComponentsCusDialog
      :open="addNewAddr"
      @update:open="closeDialog"
      width=" max-w-[calc(100vw-400px)]"
      height="h-[calc(100vh-600px)]"
    >
      <AddressForm
        :defaultData="updateAddress"
        @refreshAddressList="refreshAddressList"
        @closeDialog="closeDialog"
      />
    </CusComponentsCusDialog>
  </div>
</template>
<script lang="ts" setup>
import AddressCard from './AddressCard.vue'
import AddressCardSkeleton from './AddressCardSkeleton.vue'
import AddressForm from './AddressForm.vue'
const props = defineProps<{
  loadingListAddress: boolean
  listAddress: ISUBSCRIPTION.Address[] | null
  selectedAddr: number | null
  errorAddress?: string
}>()
const updateAddress = ref<ISUBSCRIPTION.Address>()
const getAddressToUpdate = (data: ISUBSCRIPTION.Address) => {
  addNewAddr.value = true
  updateAddress.value = data
}
const emit = defineEmits(['update:selectedCard', 'refreshAddressList'])
const updateCard = (id: number) => {
  emit('update:selectedCard', id)
}
const refreshAddressList = () => {
  emit('refreshAddressList')
}
const addNewAddr = ref(false)
const handleAddr = () => {
  addNewAddr.value = true
}
const closeDialog = () => {
  addNewAddr.value = false
  updateAddress.value = undefined
}
</script>
