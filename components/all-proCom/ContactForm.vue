<template>
  <div
    class="w-[1440px] xl-max:w-full pt-[16px] md-max:pt-[6px] lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px]"
  >
    <div class="Section flex-col items-start gap-8 inline-flex w-full">
      <div class="flex-col items-start gap-8 flex w-full">
        <div class="inline-flex flex-col">
          <div
            class="grow shrink basis-0 text-black text-3xl font-medium leading-[54px] font-lexend md:text-[24px] sm:text-[20px] text-[18px]"
          >
            Submit your request
          </div>
          <div>
            <p
              class="lg:text-[17px] text-[13px] sm:text-sm md:text-[15px] leading-[23px] sm:leading-6 md:leading-[27px] lg:leading-[30px] font-[300] pt-3"
            >
              Please provide the details of your request, and if you have
              inquiries about our terms of use, include specific examples of how
              you intend to utilize our resources. For issues, provide as much
              detail as possible, including screenshots or videos, to help us
              address your concern efficiently. Once submitted, our support team
              will respond promptly.
            </p>
          </div>
        </div>

        <div
          v-if="showMessage"
          :class="dataContactRes ? 'bg-green-400' : 'bg-red-400'"
          class="w-full flex justify-between items-center rounded-md text-white py-2 px-4"
        >
          <span>
            {{
              dataContactRes?.message ||
              error?.data.message ||
              'Something went wrong'
            }}
          </span>
          <button
            @click="showMessage = false"
            class="text-white font-bold text-lg ml-4"
          >
            &times;
          </button>
        </div>

        <form
          @submit.prevent="validateForm"
          class="p-6 esm:p-10 rounded-[10px] border-[#BDBDBD] border-[1px] flex-col items-start gap-11 flex w-full"
        >
          <!-- Name Field -->
          <div class="flex flex-col esm:flex-row items-center w-full gap-6">
            <div class="flex sm:flex-row flex-col items-center w-full gap-6">
              <CusBaseInput
                v-model="form.name"
                label="Your Name"
                type="text"
                placeholder="Oudom"
                :errorMessage="errors.name"
              />
              <CusBaseInput
                v-model="form.email"
                label="Your Email"
                type="email"
                placeholder="oudom@gmail.com"
                :errorMessage="errors.email"
              />
            </div>
            <!-- <div
              class="Input relative grow shrink basis-0 flex-col items-start inline-flex w-full"
            >
              <label
                class="absolute left-4 top-0 Label px-2 bg-white items-center gap-2.5 inline-flex text-[#757575]"
              >
                Your Name
              </label>
              <input
                v-model="form.name"
                type="text"
                placeholder="Oudom"
                class="px-6 py-3.5 mt-3 rounded-[6px] border border-[#bdbdbd] w-full"
              />
              <span
                v-if="errors.name"
                class="text-red-500 text-xs flex items-center gap-1 mt-2"
                ><img src="../public/img/Calque 1.svg" alt="" />
                {{ errors.name }}</span
              >
            </div> -->
            <!-- Email Field -->
            <CusBaseInput
              v-model="form.subject"
              label="Select a subject"
              type="select"
              placeholder="General Inquiries"
              :errorMessage="errors.subject"
              :options="dropdownOptions"
            />

            <!-- <div
              class="Input relative grow shrink basis-0 flex-col items-start inline-flex w-full"
            >
              <label
                class="absolute left-4 top-0 Label px-2 bg-white items-center gap-2.5 inline-flex text-[#757575]"
              >
                Your Email
              </label>
              <input
                v-model="form.email"
                type="email"
                placeholder="oudom@gmail.com"
                class="px-6 py-3.5 mt-3 rounded-[6px] border border-[#bdbdbd] w-full"
              />
              <span
                v-if="errors.email"
                class="text-red-500 text-xs flex items-center gap-1 mt-2"
                ><img src="../public/img/Calque 1.svg" alt="" />
                {{ errors.email }}</span
              >
            </div> -->
          </div>
          <!-- Subject Field -->

          <!-- <div
            class="Input relative grow shrink basis-0 flex-col items-start inline-flex w-full"
          >
            <label
              class="absolute left-4 top-0 Label px-2 bg-white items-center gap-2.5 inline-flex text-[#757575]"
            >
              Select a Subject
            </label>
            <select
              v-model="form.subject"
              class="px-6 py-3.5 mt-3 rounded-[6px] border border-[#bdbdbd] w-full"
            >
              <option value="General Inquiries" selected>
                General Inquiries
              </option>
              <option value="Support Request">Support Request</option>
            </select>
            <span
              v-if="errors.subject"
              class="text-red-500 text-xs flex items-center gap-1 mt-2"
              ><img src="../public/img/Calque 1.svg" alt="" />{{
                errors.subject
              }}</span
            >
          </div> -->
          <!-- Message Field -->
          <CusBaseInput
            v-model="form.message"
            label="Write us your message"
            type="textarea"
            placeholder="How does your platform ensure that my payment and personal information are kept secure?"
            :errorMessage="errors.message"
          />
          <!-- <div
            class="Input relative grow shrink basis-0 flex-col items-start inline-flex w-full"
          >
            <label
              class="absolute left-4 top-0 Label px-2 bg-white items-center gap-2.5 inline-flex text-[#757575]"
            >
              Write us your message
            </label>
            <textarea
              v-model="form.message"
              placeholder="How does your platform ensure that my payment and personal information are kept secure?"
              class="px-6 h-40 py-3.5 mt-3 rounded-[6px] border border-[#bdbdbd] w-full"
            ></textarea>
            <span
              v-if="errors.message"
              class="text-red-500 text-xs flex items-center gap-1 mt-2"
              ><img src="../public/img/Calque 1.svg" alt="" />{{
                errors.message
              }}</span
            >
          </div> -->
          <!-- Submit Button -->
          <div
            class="flex sm-max:flex-col sm-max:gap-4 flex-row sm:items-center justify-between w-full"
          >
            <div ref="turnstileWrapper" id="tf"></div>

            <button
              type="submit"
              :disabled="!token"
              class="text-sm disabled:opacity-50 px-16 max-h-[44px] py-3 bg-[#212121] rounded-md shadow items-center text-white hover:shadow-[0px_4px_16px_0px_#dbf226] flex-shrink-0"
            >
              Send
            </button>
          </div>
        </form>
        <div>
          <p
            class="lg:text-[11px] text-[8px] sm:text-[9px] md:text-[10px] leading-[23px] sm:leading-6 md:leading-[27px] lg:leading-[30px] font-[300] pt-3"
          >
            Thortok, based in Cambodia, will process your data to respond to
            your inquiries, suggestions, or complaints, based on your consent
            provided by clicking the "Send" button. Your information will not be
            shared with third parties but may be transferred outside your
            jurisdiction in accordance with our Privacy Policy. To learn more
            about your rights, revoke consent, or access additional details,
            please refer to our Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CusBaseInput from '../cusComponents/CusBaseInput.vue'
import { API } from '~/constants/apiEndpoints'
import { useApi } from '~/composables/custom-fetch-api/useApi'

interface JobDetail {
  key: string
  value: string
}

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}
const dropdownOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
]
const token = ref('')
const turnstileWrapper = ref<HTMLElement | null>(null)
const keys = {
  managed: useRuntimeConfig().public.cloudflare,
  noninteractive: useRuntimeConfig().public.cloudflare,
  invisible: useRuntimeConfig().public.cloudflare,
}
const route = useRoute()
const typeParam = route.query.type as string | undefined
const selectedKey = typeParam
  ? keys[typeParam.toLowerCase() as keyof typeof keys] || keys.managed
  : keys.managed

onMounted(async () => {
  await nextTick()

  if (!turnstileWrapper.value) return

  const div = document.createElement('div')
  div.classList.add('cf-turnstile')
  div.dataset.sitekey = selectedKey
  div.dataset.theme = 'light'
  turnstileWrapper.value.appendChild(div)

  if (window.turnstile) {
    window.turnstile.render(div, {
      sitekey: selectedKey,
      theme: 'light',
      callback: (tokenValue: string) => {
        token.value = tokenValue
      },
    })
  }
})

const { locale, setLocale } = useI18n()
const config = useRuntimeConfig()
const form = reactive<FormData>({
  name: '',
  email: '',
  subject: '',
  message: '',
})
const {
  data: dataContactRes,
  execute,
  error,
} = useApi<CONTACT.IResContact>(
  () =>
    API.HOME.SEND_EMAIL.replace(':type', `${config.public.type}`)
      .replace(':version', `${config.public.version}`)
      .replace(':lang', locale.value),
  {
    method: 'POST',
    body: form,
    onSuccess: (data) => {
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''
    },
    onError: (err) => {
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''
    },
    watch: false,
    immediate: false,
  }
)
const showMessage = ref(false)
watch(
  [() => dataContactRes.value, () => error.value],
  ([newSuccess, newError]) => {
    if (newSuccess || newError) {
      showMessage.value = true
      if (newSuccess) {
        setTimeout(() => {
          showMessage.value = false
        }, 5000)
      }
    }
  }
)
const errors = ref<FormErrors>({})
const validateForm = () => {
  errors.value = {}
  if (!form.name.trim())
    errors.value.name = 'Special characters are not accepted'
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.value.email = 'Please enter a valid email address'
  if (!form.subject.trim()) errors.value.subject = 'Subject is required.'
  if (!form.message.trim()) errors.value.message = 'Message is required.'
  const isValid = Object.keys(errors.value).length === 0
  if (isValid) {
    execute()
  }
  return isValid
}
</script>

<style>
select {
  background-image: url('/img/arrowdown.svg');
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 0.6em;
}
select {
  appearance: none; /* Removes default dropdown arrow */
  -webkit-appearance: none; /* For Safari */
  -moz-appearance: none; /* For Firefox */
}

/* Optional: Add a custom arrow or styling if needed */
select::-ms-expand {
  display: none; /* Hides the arrow in Internet Explorer */
}
</style>
