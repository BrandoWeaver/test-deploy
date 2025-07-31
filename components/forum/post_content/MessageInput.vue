<template>
  <div class="mx-auto mt-6">
    <div class="space-y-4">
      <!-- Message Input Container -->
      <div class="border rounded-2xl bg-white shadow-sm">
        <!-- Header -->

        <!-- Textarea Container -->
        <div class="relative">
          <textarea
            type="text"
            id="message"
            v-model="message"
            rows="6"
            placeholder="Type your message here..."
            class="peer w-full resize-none rounded-lg bg-transparent px-4 py-4 text-gray-900 placeholder-transparent focus:border-gray-500 focus:outline-none"
          ></textarea>
          <label
            htmlFor="message"
            class="absolute -top-2.5 left-4 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:text-sm peer-focus:text-gray-600"
          >
            Your Message
          </label>
          <!-- Utility Icons -->
          <div
            class="absolute bottom-2 right-2 flex gap-2 rounded-md shadow-[0_2px_10px_0_rgba(0,0,0,0.12)] p-[5px]"
          >
            <button
              class="hover:bg-gray-100 rounded-lg transition-colors p-[9px]"
              @click="triggerFileUpload"
              :class="{
                'bg-gradient-to-t from-[#EFF1D9] to-[#EFF1D9]':
                  activeButton === 'clip',
              }"
            >
              <ClipIcon />
            </button>
            <input
              type="file"
              ref="fileInput"
              class="hidden"
              @change="handleFileUpload"
            />

            <div ref="menuRef">
              <Menu
                as="div"
                class="relative inline-block z-50 bg-transparent"
                ref="menuRef"
              >
                <div class="z-50">
                  <MenuButton
                    @click="
                      () => {
                        toggleEmojiPicker()
                        toggleMenu()
                      }
                    "
                    :class="{
                      'bg-gradient-to-t from-[#EFF1D9] to-[#EFF1D9]':
                        activeButton === 'emoji',
                    }"
                    class="p-[9px] hover:bg-gray-100 rounded-lg transition-colors relative"
                  >
                    <Laugh />
                  </MenuButton>
                </div>

                <MenuItems
                  v-if="menuOpen"
                  class="absolute z-50 right-64 bottom-full mt-2 w-full origin-top-right divide-y bg-transparent"
                >
                  <MenuItem class="w-full z-50">
                    <div class="w-full px-4 py-2 text-sm">
                      <EmojiPicker @select="addEmoji" @click.stop />
                    </div>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex justify-end gap-3">
        <button
          @click="cancel"
          class="px-6 py-2 border border-[#000] rounded-lg hover:bg-gray-50 transition-colors hover:shadow-[0px_4px_16px_0px_#DBF226]"
        >
          Cancel
        </button>
        <button
          @click="send"
          class="px-6 py-2 hover:shadow-[0px_4px_16px_0px_#DBF226] bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import EmojiPicker from 'vue3-emoji-picker'
import 'vue3-emoji-picker/css' // Import stylesimport { ref } from 'vue'
import ClipIcon from '~/icons/forum_icons/ClipIcon.vue'
import Laugh from '~/icons/forum_icons/Laugh.vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { onClickOutside } from '@vueuse/core'
const menuOpen = ref(false)
const menuRef = ref(null)
const toggleMenu = () => {
  menuOpen.value = true
}

const closeMenuOnClickOutside = (event) => {
  const menuRef = $refs.menuRef
  if (menuRef && !menuRef.contains(event.target)) {
    menuOpen.value = false
  }
}
watch(() => {
  console.log('menuOpen', menuOpen.value)
}, [menuOpen])
onClickOutside(menuRef, () => {
  menuOpen.value = false
})
const message = ref('')
const fileInput = ref(null)
const uploadedFile = ref(null)
const showEmojiPicker = ref(false)
const activeButton = ref(null)
const emit = defineEmits(['cancel'])

const toggleEmojiPicker = () => {
  showEmojiPicker.value = !showEmojiPicker.value
  activeButton.value = 'emoji'
}

const triggerFileUpload = () => {
  fileInput.value.click()
  activeButton.value = 'clip'
}

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    uploadedFile.value = file
  }
}

// Add emoji to the message
const addEmoji = (emoji) => {
  message.value += emoji.i // `i` contains the emoji unicode
}

// Send message function
const send = () => {
  alert(message.value)
  console.log('Sending message:', message.value)
}

const cancel = () => {
  // Handle cancel logic here
  emit('cancel')
  message.value = ''
}
</script>

<style scoped>
textarea {
  min-height: 150px;
}

/* Remove default textarea styles */
textarea:focus {
  outline: none;
}
</style>
