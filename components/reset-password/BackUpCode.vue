<template lang="html">
  <div>
    <div class="max-w-md mx-auto">
      <div class="flex items-baseline flex-row">
        <p class="mb-4">
          Save this emergency backup code and store it somewhere safe. If you
          lose your phone, you can use backup codes to sign in.
        </p>
        <button @click="emit('close')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div class="grid grid-cols-3 gap-2 mb-4" v-if="!loadingRegenerate">
        <div
          v-for="code in props.dataBackUpCode"
          :key="code"
          class="border p-2 text-center"
        >
          {{ code }}
        </div>
        <button
          @click="emit('regenerate')"
          class="bg-gray-200 text-gray-700 hover:bg-gray-300 rounded flex justify-center px-4 py-2"
        >
          <span v-if="!loadingRegenerate">Regenerate</span
          ><span v-else><CusLoading height="25" width="25" /></span>
        </button>
      </div>
      <div class="grid grid-cols-3 gap-2 mb-4" v-if="loadingRegenerate">
        <div
          v-for="i in 6"
          :key="i"
          class="border p-2 text-center bg-gray-200 rounded animate-pulse h-10"
        ></div>
        <div
          class="bg-gray-200 rounded flex justify-center px-4 py-2 animate-pulse h-10 items-center"
        ></div>
      </div>
      <div class="flex justify-between">
        <button
          @click="downloadBackupCodes"
          class="bg-gray-200 text-gray-700 hover:bg-gray-300 rounded px-4 py-2"
        >
          Download
        </button>
        <button
          @click="copyBackupCodes"
          class="bg-gray-200 text-gray-700 hover:bg-gray-300 rounded px-4 py-2"
        >
          Copy
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CusLoading from '../cusComponents/CusLoading.vue'

const props = defineProps<{
  dataBackUpCode: string[]
  loadingRegenerate: boolean
}>()
const emit = defineEmits(['regenerate', 'close'])
const downloadBackupCodes = () => {
  const data = props.dataBackUpCode.join('\n')
  const blob = new Blob([data || ''], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'backup_codes.txt'
  link.click()
  URL.revokeObjectURL(url)
}
const copyBackupCodes = async () => {
  try {
    props.dataBackUpCode &&
      (await navigator.clipboard.writeText(props.dataBackUpCode?.join('\n')))
    alert('Backup codes copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}
</script>
