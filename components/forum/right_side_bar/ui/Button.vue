<template>
  <button
    :type="type"
    class="inline-flex w-full rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    :class="[sizeClasses, iconOnlyClasses, $attrs.class]"
    v-bind="$attrs"
    @click="$emit('click')"
  >
    <Icon v-if="icon && !iconRight" :name="icon" :class="iconClasses" />
    <slot />
    <Icon v-if="icon && iconRight" :name="icon" :class="iconClasses" />
  </button>
</template>

<script setup>
import { computed, useSlots } from 'vue'

defineOptions({
  inheritAttrs: false, // Prevents automatic attribute inheritance
})

const slots = useSlots()

const props = defineProps({
  type: { type: String, default: 'button' },
  color: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'danger'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  icon: { type: String, default: null },
  iconRight: { type: Boolean, default: false },
  iconSize: { type: String, default: 'w-5 h-5' },
})

const sizeClasses = computed(
  () =>
    ({
      sm: 'px-3 py-1.5',
      md: 'px-4 py-2',
      lg: 'px-6 py-3',
    })[props.size]
)

const colorClasses = computed(
  () =>
    ({
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      secondary:
        'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-500',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    })[props.color]
)

const iconOnlyClasses = computed(() =>
  props.icon && !slots.default ? 'p-2' : ''
)

const iconClasses = computed(() => [
  props.iconSize,
  {
    'mr-2': !!slots.default && !props.iconRight,
    'ml-2': !!slots.default && props.iconRight,
  },
])
</script>
