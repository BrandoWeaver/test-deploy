<template>
  <Menu as="div" class="relative inline-block text-left">
    <slot name="button">
      <MenuButton
        class="inline-flex items-center py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
      >
        <img
          v-if="selectedItem?.icon"
          :src="selectedItem.icon"
          :alt="`${selectedItem.name} Icon`"
          class="w-[14px] h-[14px] mr-2"
        />
        {{ selectedItem?.name || buttonText }}
        <Icon icon="ri:arrow-drop-down-line" width="24" height="24" />
      </MenuButton>
    </slot>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute left-[-24px] top-[50px] z-10 mt-2 bg-white rounded-lg shadow-md w-[200px]"
      >
        <div class="py-0 text-sm text-gray-700 dark:text-gray-200">
          <MenuItem
            v-for="category in categories"
            :key="category.name"
            v-slot="{ active }"
            @mouseover="$emit('hoverCategory', category)"
            @mouseleave="$emit('hoverCategory', null)"
          >
            <button
              :class="[
                'flex items-center gap-2 px-4 py-2 w-full text-left',
                active || hoveredCategory?.name === category.name
                  ? 'bg-gradient-to-t from-[rgba(239,241,217,0.5)] to-[rgba(239,241,217,0.5)]'
                  : 'hover:bg-gradient-to-t hover:from-[rgba(239,241,217,0.5)] hover:to-[rgba(239,241,217,0.5)]',
              ]"
              @click="$emit('selectCategory', category)"
            >
              <img
                :src="category.icon"
                :alt="`${category.name} Icon`"
                class="w-[14px] h-[14px]"
              />
              {{ category.name }}
            </button>
          </MenuItem>
        </div>
        <div class="py-2 text-sm text-gray-700 dark:text-gray-200">
          <MenuItem
            v-for="item in staticItems"
            :key="item.name"
            v-slot="{ active }"
          >
            <button
              :class="[
                'flex items-center gap-2 px-4 py-2 w-full text-left',
                active || selectedItem?.value === item.value
                  ? 'bg-gradient-to-t from-[rgba(239,241,217,0.5)] to-[rgba(239,241,217,0.5)]'
                  : 'hover:bg-gradient-to-t hover:from-[rgba(239,241,217,0.5)] hover:to-[rgba(239,241,217,0.5)] dark:hover:bg-gray-600 dark:hover:text-white',
              ]"
              @click="selectItem(item)"
            >
              <img
                :src="item.icon"
                :alt="`${item.name} Icon`"
                class="w-[14px] h-[14px]"
              />
              {{ item.name }}
            </button>
          </MenuItem>
        </div>
        <div class="py-2 text-sm text-gray-700 dark:text-gray-200 border-t">
          <div
            v-for="toggle in toggles"
            :key="toggle.name"
            class="flex items-center justify-between px-4 py-2"
          >
            <span class="flex items-center gap-2">
              <img
                :src="toggle.icon"
                :alt="`${toggle.name} Icon`"
                class="w-[14px] h-[14px]"
              />
              {{ toggle.name }}
            </span>
            <input
              type="checkbox"
              :class="['toggle-switch', toggle.class || '']"
              v-model="toggle.value"
              @change="$emit(`update:${toggle.key}`, toggle.value)"
            />
          </div>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { ref, computed, watch } from 'vue'

const props = defineProps({
  buttonText: {
    type: String,
    default: 'Menu',
  },
  categories: {
    type: Array,
    default: () => [],
    validator: (categories) =>
      categories.every(
        (cat) => typeof cat.name === 'string' && typeof cat.icon === 'string'
      ),
  },
  staticItems: {
    type: Array,
    default: () => [
      { name: 'Graphics', icon: '/search/fi-rr-vector.svg', value: 1 },
      { name: 'Photos', icon: '/search/fi-rr-picture.svg', value: 2 },
      { name: 'Fonts', icon: '/search/fi-rr-text.svg', value: 3 },
      { name: 'Videos', icon: '/search/fi-rr-film.svg', value: 4 },
      { name: 'Audio', icon: '/search/fi-rr-music-alt.svg', value: 5 },
      { name: 'Sound Effects', icon: '/search/fi-rr-file-music.svg', value: 6 },
      { name: '3D Elements', icon: '/search/fi-rr-cube.svg', value: 7 },
    ],
    validator: (items) =>
      items.every(
        (item) =>
          typeof item.name === 'string' &&
          typeof item.icon === 'string' &&
          typeof item.value === 'number' &&
          (item.href === undefined || typeof item.href === 'string')
      ),
  },
  defaultOption: {
    type: Number,
    default: null,
  },
  hoveredCategory: {
    type: Object,
    default: null,
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  freelancer: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits([
  'selectCategory',
  'selectItem',
  'hoverCategory',
  'update:onSale',
  'update:freelancer',
])

const selectedItem = ref(null)

watch(
  () => props.defaultOption,
  (newValue) => {
    if (newValue !== null) {
      const defaultItem = props.staticItems.find(
        (item) => item.value === newValue
      )
      if (defaultItem) {
        selectedItem.value = defaultItem
        emit('selectItem', defaultItem)
      }
    }
  },
  { immediate: true }
)

const selectItem = (item) => {
  selectedItem.value = item
  emit('selectItem', item)
}

const toggles = computed(() => [
  {
    name: 'On Sale',
    key: 'onSale',
    value: ref(props.onSale),
    icon: '/search/fi-rr-shopping-cart-check.svg',
  },
  {
    name: 'Freelancer',
    key: 'freelancer',
    value: ref(props.freelancer),
    icon: '/search/fi-rr-user-add.svg',
  },
])
</script>

<style scoped>
.toggle-switch {
  width: 1.5rem;
  height: 0.75rem;
  background-color: #d1d5db;
  border-radius: 9999px;
  position: relative;
  cursor: pointer;
  appearance: none;
  transition: background-color 0.2s ease;
}
.toggle-switch:checked {
  background-color: #059669;
}
.toggle-switch::after {
  content: '';
  width: 0.75rem;
  height: 0.75rem;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 0.125rem;
  transform: translateY(-50%);
  transition: transform 0.2s ease;
}
.toggle-switch:checked::after {
  transform: translateY(-50%) translateX(0.75rem);
}
</style>
