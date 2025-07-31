<template>
  <TransitionRoot appear :show="open" as="template">
    <Dialog as="div" @close="emitClose" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              :class="[
                props.width,
                props.height,
                'transform w-auto h-auto overflow-hidden rounded-md bg-white text-left align-middle shadow-xl transition-all',
              ]"
            >
              <slot />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue'

const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
  width: {
    type: String,
    default: 'max-w-md',
  },
  height: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['update:open'])

function emitClose() {
  emit('update:open', false)
}
</script>
