<template>
  <TransitionRoot as="template" :show="isOpen">
    <Dialog as="div" class="relative z-50" @close="closeModal">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-40" />
      </TransitionChild>

      <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <DialogPanel
            class="max-w-4xl w-full bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <DialogTitle class="text-lg font-semibold p-4 border-b"
              >Invoice Preview
            </DialogTitle>
            <div class="w-full h-[75vh]">
              <iframe
                :src="invoiceUrl"
                class="w-full h-full"
                frameborder="0"
              ></iframe>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { useApi } from '~/composables/custom-fetch-api/useApi'

const props = defineProps<{
  isOpen: boolean
  invoiceUrl: string
  filename: string
}>()

const emit = defineEmits(['close'])
const closeModal = () => emit('close')
</script>
