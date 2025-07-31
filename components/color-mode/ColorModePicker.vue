<template>
  <ClientOnly>
    <div class="bg-white">
      <button @click="toggleColorMode" class="">
        {{ currentLabel }}
      </button>
    </div>
  </ClientOnly>
</template>
<script setup lang="ts">
const colorMode = useColorMode()

const modes = [
  { label: 'System', value: 'system' },
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
]

const currentLabel = computed(() => {
  const currentMode = modes.find(
    (mode) => mode.value === (colorMode.value || 'system')
  )
  return currentMode ? currentMode.label : 'System'
})

const toggleColorMode = () => {
  const currentIndex = modes.findIndex(
    (mode) => mode.value === (colorMode.value || 'system')
  )
  const nextIndex = (currentIndex + 1) % modes.length
  colorMode.value = modes[nextIndex].value
}
</script>
<style scoped></style>
