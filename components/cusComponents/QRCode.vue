<!-- components/QRCode.vue -->
<script setup lang="ts">
import QrcodeVue from 'qrcode.vue'

defineProps<{
  value: string
  size?: number
  level?: 'L' | 'M' | 'Q' | 'H'
  bgColor?: string
  fgColor?: string
}>()
</script>

<template>
  <QrcodeVue
    :value="value"
    :size="size || 200"
    :level="level || 'M'"
    :bg-color="bgColor || '#ffffff'"
    :fg-color="fgColor || '#000000'"
  />
</template>
