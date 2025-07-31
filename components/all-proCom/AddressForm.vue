<template>
  <form
    class="w-[500px] p-6 bg-white rounded-xl shadow space-y-6"
    @submit.prevent="submitForm"
  >
    <h2 class="text-xl font-semibold text-gray-800">Create New Address</h2>

    <!-- Name -->
    <CusBaseInput
      v-model="form.name"
      label="Name"
      type="text"
      placeholder="Oudom"
      :errorMessage="errors.name"
    />
    <!-- Address Type -->
    <div class="w-full">
      <label class="block text-sm font-medium text-gray-700"
        >Address Type</label
      >
      <Listbox v-model="form.address_type">
        <div class="relative mt-3">
          <ListboxButton
            class="px-4 py-[14px] w-full text-left border border-gray-400 rounded-md focus:border-black focus:ring-1 focus:ring-black outline-none transition-all"
          >
            <span class="block truncate">
              {{ form.address_type || 'Select type' }}
            </span>
            <span
              class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
            >
              ChevronUpDownIcon
            </span>
          </ListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
            >
              <ListboxOption
                v-for="type in addressTypes"
                :key="type"
                :value="type"
                v-slot="{ active, selected }"
                as="template"
              >
                <li
                  :class="[
                    'cursor-default select-none py-2 pl-10 pr-4',
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  ]"
                >
                  <span
                    :class="[
                      selected ? 'font-medium' : 'font-normal',
                      'block truncate',
                    ]"
                  >
                    {{ type }}
                  </span>

                  <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600"
                  >
                    CheckIcon
                  </span>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
    </div>

    <!-- Address -->
    <CusBaseInput
      v-model="form.address"
      label="Address"
      type="text"
      placeholder="123 Main St"
      :errorMessage="errors.address"
    />

    <!-- Phone Number -->
    <CusBaseInput
      v-model="form.phone_number"
      label="Phone Number"
      type="tel"
      placeholder="012345678"
      :errorMessage="errors.phone_number"
    />

    <!-- Email -->
    <CusBaseInput
      v-model="form.email"
      label="Email"
      type="email"
      placeholder="you@example.com"
      :errorMessage="errors.email"
    />

    <!-- Country -->
    <CusBaseInput
      v-model="form.country"
      label="Country"
      type="text"
      placeholder="KH"
      :errorMessage="errors.country"
    />

    <!-- Is Default Checkbox -->
    <div class="flex items-center space-x-2">
      <input
        id="isDefault"
        v-model="form.is_default"
        type="checkbox"
        class="w-5 h-5 text-green-600 rounded border-gray-300 focus:ring-green-500"
      />
      <label for="isDefault" class="text-sm text-gray-700">
        Set as default address
      </label>
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      class="w-full py-2 flex items-center justify-center px-4 bg-[#2D6054] text-white rounded hover:bg-[#234d44] transition"
    >
      <span v-if="loading"><CusLoading width="25" height="25" /></span>
      <span v-else>Save Address</span>
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import CusBaseInput from '../cusComponents/CusBaseInput.vue'
import { SUBSCRIPTION_SERVICE } from '~/services/subscriptionServices'
import CusLoading from '../cusComponents/CusLoading.vue'
const props = defineProps<{ defaultData?: ISUBSCRIPTION.Address }>()
const emit = defineEmits(['refreshAddressList', 'closeDialog'])
const addressTypes = ['Home', 'Work', 'Other']
const config = useRuntimeConfig()
const { locale } = useI18n()
const form = ref({
  name: props.defaultData?.name || '',
  address_type:
    addressTypes.find((val) => val === props.defaultData?.address_type) || '',
  address: props.defaultData?.address || '',
  phone_number: props.defaultData?.phone_number || '',
  email: props.defaultData?.email || '',
  country: props.defaultData?.country || '',
  is_default: props.defaultData?.is_default || false,
})

const errors = ref({
  name: '',
  address: '',
  phone_number: '',
  email: '',
  country: '',
})
const resetForm = () => {
  form.value = {
    name: '',
    address_type: '',
    address: '',
    phone_number: '',
    email: '',
    country: '',
    is_default: false,
  }
}
let createData = {
  name: '',
  address_type: '',
  address: '',
  phone_number: '',
  email: '',
  country: '',
  is_default: false,
}
const loading = ref(false)
const submitForm = () => {
  createData = {
    ...form.value,
    ...(props.defaultData?.id ? { id: props.defaultData.id } : {}),
  }
  loading.value = true
  const { execute: runAddAddress } = SUBSCRIPTION_SERVICE.addAddress({
    config,
    locale,
    body: createData,
    onError(error) {
      resetForm()
    },
    onSuccess: () => {
      loading.value = false
      resetForm()
      emit('refreshAddressList')
      emit('closeDialog')
    },
  })
  runAddAddress()
}
</script>
