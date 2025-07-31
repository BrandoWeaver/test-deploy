<template>
  <div class="Input relative w-full">
    <div class="relative w-full">
      <label
        v-if="label"
        :class="{
          'md:text-[13px] sm:text-[11px] text-[10px] top-0 left-4 bg-white px-1 text-[#757575]':
            modelValue || isFocused || type === 'select' || type === 'file',
          'md:text-[14px] sm:text-[11px] text-[10px] top-[60%] left-4 -translate-y-1/2 text-[#757575] leading-none':
            !modelValue &&
            !isFocused &&
            type !== 'select' &&
            type !== 'file' &&
            type !== 'textarea',
          'top-[-18%]': type === 'file',
          'md:text-[14px] sm:text-[11px] text-[10px] top-[30%] left-4 -translate-y-1/2 text-[#757575] leading-none':
            !modelValue &&
            !isFocused &&
            type !== 'select' &&
            type !== 'file' &&
            type === 'textarea',
        }"
        class="absolute transition-all duration-200 pointer-events-none"
      >
        {{ label }}
      </label>

      <!-- File Upload Input -->
      <div v-if="type === 'file'" class="w-full">
        <input
          ref="fileInput"
          type="file"
          class="hidden"
          @change="handleFileUpload"
        />
        <div
          class="flex items-center justify-between pr-[10px] pl-[16px] py-[10px] mt-3 rounded-md border border-gray-400 w-full cursor-pointer"
          @click="triggerFileUpload"
        >
          <span
            v-if="fileName"
            class="text-black truncate w-[200px] overflow-hidden whitespace-nowrap"
          >
            {{ fileName }}
          </span>

          <span
            v-else
            class="text-[#757575] xl:text-[14px] xl-max:text-[14px] lg-max:text-[13px] md-max:text-[11px] sm-max:text-[10px]"
            >{{ placeholder || 'Upload a file' }}</span
          >
          <button
            type="button"
            :class="{
              'bg-gradient-to-b from-[#DBF226] to-[#DBF226]': isCurrentUpload,
              'bg-[#F5F5F5]': !isCurrentUpload,
            }"
            class="text-gray-700 border border-[#EEE] px-4 py-2 rounded-md hover:bg-[#EFF1D9] transition xl:text-[14px] xl-max:text-[14px] lg-max:text-[13px] md-max:text-[11px] sm-max:text-[10px]"
            @click.stop="triggerFileUpload"
          >
            Upload
          </button>
        </div>
      </div>

      <!-- Password Toggle Input -->
      <div v-else-if="type === 'password'" class="w-full">
        <input
          :type="showPassword ? 'text' : 'password'"
          :value="modelValue"
          :placeholder="showPlaceholder ? placeholder : ''"
          @input="
            $emit(
              'update:modelValue',
              ($event.target as HTMLInputElement).value
            )
          "
          :autocomplete="autocomplete || ''"
          @focus="isFocused = true"
          @blur="isFocused = !!modelValue"
          class="px-4 py-[14px] mt-3 rounded-md border border-gray-400 w-full focus:border-black focus:ring-1 focus:black outline-none transition-all pr-10"
        />
        <button
          type="button"
          class="absolute right-4 top-[60%] -translate-y-1/2 text-gray-500"
          @click="togglePasswordVisibility"
        >
          <component :is="showPassword ? Eye : UnEye" class="w-5 h-5" />
        </button>
      </div>

      <!-- Select Input with Icon -->
      <div v-else-if="type === 'select'" class="">
        <select
          :value="modelValue"
          @change="
            $emit(
              'update:modelValue',
              ($event.target as HTMLSelectElement).value
            )
          "
          @focus="isFocused = true"
          @blur="isFocused = !!modelValue"
          class="text-[#757575] px-4 py-[14px] mt-3 rounded-md border border-gray-400 w-full focus:border-black focus:ring-1 focus:black outline-none transition-all appearance-none pr-10 lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px]"
        >
          <option value="" disabled selected class="text-[#757575]">
            {{ placeholder || 'Select an option' }}
          </option>
          <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            class="text-[#757575]"
          >
            {{ option.label }}
          </option>
        </select>
        <!-- <span
          class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-[16px] flex items-center justify-center w-5 h-5"
        >
          ▼
        </span> -->
      </div>

      <!-- Text Input or Textarea -->
      <component
        v-else
        :is="type === 'textarea' ? 'textarea' : 'input'"
        :value="modelValue"
        :placeholder="showPlaceholder ? placeholder : ''"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        @focus="isFocused = true"
        @blur="isFocused = !!modelValue"
        class="px-4 py-[14px] mt-3 rounded-md border border-gray-400 w-full focus:border-black focus:ring-1 focus:black outline-none transition-all"
        :rows="type === 'textarea' ? 3 : undefined"
      />
    </div>

    <!-- Error Message -->
    <span
      v-if="errorMessage"
      class="text-red-600 text-xs flex items-center gap-1 mt-2"
    >
      <!-- <img :src="'/img/Calque 1.svg' || ''" alt="error" /> -->
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import Eye from '@/icons/Eye.vue'
import UnEye from '@/icons/UnEye.vue'

const props = defineProps<{
  modelValue?: string
  label?: string
  type?: string
  placeholder?: string
  errorMessage?: string
  options?: { label: string; value: string }[]
  isCurrentUpload?: boolean
  autocomplete?: string
}>()

const emit = defineEmits(['update:modelValue'])

const fileInput = ref<HTMLInputElement | null>(null)
const fileName = ref<string | null>(null)
const isFocused = ref(false)
const showPassword = ref(false)

const triggerFileUpload = () => {
  fileInput.value?.click()
}

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    fileName.value = target.files[0].name
    emit('update:modelValue', target.files[0])
  }
}

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const showPlaceholder = computed(() => isFocused.value && !props.modelValue)

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) {
      isFocused.value = true
    }
  },
  { immediate: true }
)
</script>
