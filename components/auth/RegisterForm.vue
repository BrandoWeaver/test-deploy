<template>
  <form
    @submit.prevent="handleSubmit"
    class="bg-white text-black mx-auto w-full 2xl:w-full p-[24px] md:p-[40px] rounded-t-[10px] flex flex-col gap-[14px]"
  >
    <p
      style="font-weight: 350; line-height: 25.2px; letter-spacing: 0%"
      class="lg:text-[14px] md:text-[13px] sm:text-[12px] text-[10px]"
    >
      START WITH THE FREE PLAN
    </p>
    <div v-if="dataRegister && email">
      <div>
        <h1
          style="font-weight: 400; line-height: 37.4px; letter-spacing: 0%"
          class="whitespace-nowrap w-fit lg:text-[22px] md:text-[20px] sm:text-[18px] text-[17px]"
        >
          Verify your email
        </h1>
      </div>
      <div>
        We've sent an email to <strong>{{ email }}</strong
        >. Continue account registration using the link via email.
      </div>
      <div class="flex flex-col">
        <button
          @click.prevent="executeResendEmail()"
          style="
            font-weight: 500;
            line-height: 25.2px;
            letter-spacing: 0%;
            text-align: center;
          "
          class="py-[14px] w-full text-center justify-center leading-none my-[7px] text-white px-8 rounded-[4px] lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px] flex items-center gap-2 hover:shadow-[0px_4px_16px_0px_#DBF226] bg-black"
        >
          <span v-if="statusResenEmail !== 'pending'">Resend Email</span
          ><span v-else>
            <CusLoading width="25" height="25" />
          </span>
        </button>
      </div>
    </div>
    <div
      class="w-full flex justify-center flex-col"
      v-if="dataRegister && phoneNumber"
    >
      <div>
        <h1
          style="font-weight: 400; line-height: 37.4px; letter-spacing: 0%"
          class="whitespace-nowrap w-fit lg:text-[22px] md:text-[20px] sm:text-[18px] text-[17px]"
        >
          Verification
        </h1>
      </div>
      <div class="">
        <p>
          Please enter the 6 digit code that send to you vai
          <strong>SMS</strong>
        </p>
        <div class="flex justify-center mt-4 w-full">
          <OtpInput
            v-model:value="otp"
            :num-inputs="6"
            separator=" "
            input-classes="w-12 h-12 border mr-2 rounded text-center text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            @on-change="handleChange"
          />
        </div>
        <div class="mt-4 flex justify-center">
          if you don't receive code:
          <button
            @click.prevent="handleResetOtp"
            :disabled="isWaiting"
            class="text-blue-600 underline disabled:text-gray-400"
          >
            {{ isWaiting ? `Resend in ${countdown}s` : 'Resend' }}
          </button>
        </div>
      </div>
      <div v-if="errVerifyOTP">
        <p class="text-red-500">{{ errVerifyOTP.data.message }}</p>
      </div>
      <div class="mt-4">
        <button
          style="
            font-weight: 500;
            line-height: 25.2px;
            letter-spacing: 0%;
            text-align: center;
          "
          :disabled="otp.length < 6"
          @click.prevent="handleVerify"
          class="py-[14px] w-full text-center disabled:opacity-50 justify-center leading-none my-[7px] text-white px-8 rounded-[4px] lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px] flex items-center gap-2 hover:shadow-[0px_4px_16px_0px_#DBF226] bg-black"
        >
          <span v-if="statusVerifyOTP !== 'pending'">Verify and Proceed</span>
          <span v-else><CusLoading width="25" height="25" /></span>
        </button>
      </div>
    </div>
    <div v-if="!dataRegister" class="flex flex-col gap-[14px]">
      <div
        class="flex sm:flex-row flex-col sm:items-center xll:flex-nowrap md:flex-wrap mdx:flex-nowrap sm:flex-wrap flex-wrap justify-between gap-[14px]"
      >
        <h1
          style="font-weight: 400; line-height: 37.4px; letter-spacing: 0%"
          class="whitespace-nowrap w-fit lg:text-[22px] md:text-[20px] sm:text-[18px] text-[17px]"
        >
          Register with
        </h1>

        <div
          class="smx-min:grid w-full items-center justify-between xs:grid-cols-4 flex flex-row gap-[10px] flex-wrap"
        >
          <button
            @click.prevent="handleLogin('google')"
            class="py-1.5 w-full shrink-0 disabled:opacity-50 rounded-[6px] px-6 border border-[#EFF1D9] hover:bg-[#EFF1D9] flex gap-1.5 items-center justify-center"
            :disabled="isLoading"
          >
            <span class="shrink-0"
              ><NuxtImg
                :src="'/images/login/google.svg'"
                :width="18"
                :heigt="18"
                format="webp"
            /></span>
            <p class="font-[350] text-[12px]">Google</p>
          </button>
          <!-- <button
            class="py-1.5 w-full shrink-0 disabled:opacity-50 rounded-[6px] px-6 border border-[#EFF1D9] hover:bg-[#EFF1D9] flex gap-1.5 items-center justify-center"
            @click.prevent="handleLogin('facebook')"
            :disabled="isLoading"
          >
            <span class="shrink-0">
              <NuxtImg
                :src="'/images/login/facebook.svg'"
                :width="18"
                :heigt="18"
                format="webp"
            /></span>
            <p class="font-[350] text-[12px]">Facebook</p>
          </button> -->
          <div class="relative min-h-[33px] hover:bg-[#EFF1D9] rounded-[6px]">
            <div
              id="telegram-login-button"
              class="absolute top-0 left-0 w-full h-full z-30 opacity-0 pointer-events-auto"
            />
            <button
              class="absolute inset-0 disabled:opacity-50 py-1.5 w-full shrink-0 border border-[#EFF1D9] rounded-[6px] px-6 flex gap-1.5 items-center justify-center bg-transparent z-20"
              @click.prevent="triggerTelegramLogin"
              :disabled="isLoading"
            >
              <span class="shrink-0"><Telegram /></span>
              <p class="font-[350] text-[12px]">Telegram</p>
            </button>
          </div>
          <button
            :disabled="isLoading"
            @click.prevent="handleClickToRegisterWithPhone"
            class="py-1.5 w-full hover:bg-[#EFF1D9] disabled:opacity-50 border shrink-0 border-[#EFF1D9] rounded-[6px] px-6 flex gap-1.5 items-center justify-center min-w-[100px]"
          >
            <span class="shrink-0"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 768 1280"
              >
                <path
                  fill="currentColor"
                  d="M464 1152q0-33-23.5-56.5T384 1072t-56.5 23.5T304 1152t23.5 56.5T384 1232t56.5-23.5T464 1152m208-160V288q0-13-9.5-22.5T640 256H128q-13 0-22.5 9.5T96 288v704q0 13 9.5 22.5t22.5 9.5h512q13 0 22.5-9.5T672 992M480 144q0-16-16-16H304q-16 0-16 16t16 16h160q16 0 16-16m288-16v1024q0 52-38 90t-90 38H128q-52 0-90-38t-38-90V128q0-52 38-90t90-38h512q52 0 90 38t38 90"
                />
              </svg>
            </span>
            <p class="font-[350] text-[12px]">Phone</p>
          </button>
        </div>
      </div>
      <div class="relative lg:py-[28px] md:py-[16px] py-[8px]">
        <div class="w-full bg-[#E0E0E0] h-[2px]"></div>
        <div
          style="
            font-weight: 700;
            line-height: 12px;
            letter-spacing: 0px;
            text-align: center;
          "
          class="px-[34px] absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 bg-white w-fit font-[700] md:text-[14px] sm:text-[11px] text-[10px]"
        >
          Or
        </div>
      </div>
      <div
        class="flex lg:flex-row md:flex-col mdx:flex-row flex-col gap-[24px]"
      >
        <CusBaseInput
          v-model="form.username"
          label="Username"
          type="text"
          autocomplete="username"
          placeholder="Oudom"
          :errorMessage="errors.name"
        />
        <CusBaseInput
          v-model="email"
          v-if="!createWithPhone"
          label="Email"
          type="text"
          autocomplete="email"
          placeholder="Oudom"
          :errorMessage="errors.email"
        />
        <div v-else class="w-full flex flex-col items-start mt-3">
          <div
            :style="wrapperStyle"
            @focusin="onFocusIn"
            @focusout="onFocusOut"
          >
            <vue-tel-input
              v-model="phoneNumber"
              autoFormat
              style="
                width: 100%;
                border-radius: 6px;
                box-shadow: none;
                height: 54px;
              "
              styleClasses="custome"
              id="phone-input"
              mode="national"
              aria-autocomplete="inline"
              @country-changed="changeCountry"
            ></vue-tel-input>
          </div>
          <span
            v-if="phoneError"
            class="text-red-600 text-xs flex items-center gap-1 mt-2"
          >
            {{ phoneError }}
          </span>
        </div>
      </div>
      <div class="">
        <CusBaseInput
          v-model="form.password"
          label="Password (min. 8 char)"
          type="password"
          autocomplete="new-password"
          placeholder="Password (min. 8 char)"
          :errorMessage="errors.password"
        />
      </div>
      <div class="">
        <CusBaseInput
          v-model="form.password_confirmation"
          label="Confirm Password"
          type="password"
          autocomplete="new-password"
          placeholder="Confirm Password"
          :errorMessage="errors.password_confirmation"
        />
      </div>
      <ClientOnly>
        <div ref="turnstileWrapper" id="tf" class="w-full"></div
      ></ClientOnly>
      <div v-if="errRegister">
        <p class="text-red-500">{{ errRegister.data.message }}</p>
      </div>

      <button
        style="
          font-weight: 500;
          line-height: 25.2px;
          letter-spacing: 0%;
          text-align: center;
        "
        :disabled="statusRegister === 'pending' || !token"
        class="py-[14px] w-full text-center justify-center disabled:opacity-50 leading-none my-[7px] text-white px-8 rounded-[4px] lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px] flex items-center gap-2 hover:shadow-[0px_4px_16px_0px_#DBF226] bg-black"
      >
        <span v-if="statusRegister !== 'pending'">GET STARTED</span>
        <span v-else><CusLoading width="25" height="25" /></span>
      </button>
      <div class="md:mt-[22px] mt-[10px] flex flex-col gap-[14px]">
        <div>
          <p
            style="
              font-weight: 350;
              letter-spacing: 0%;
              text-decoration-style: solid;
              text-decoration-thickness: Auto;
            "
            class="text-[#757575] md:text-[14px] text-[10px] md:leading-[25px] leading-[18px]"
          >
            By joining, you agree to the
            <a href="#" class="underline">Terms</a> and
            <a href="#" class="underline">Privacy Policy.</a>
          </p>
        </div>

        <h3
          style="font-weight: 350; letter-spacing: 0%"
          class="md:text-[14px] sm:text-[11px] text-[10px] text-[#212121] md:leading-[25px] leading-[18px] flex flex-wrap flex-row gap-2"
        >
          Already have an account?
          <NuxtLink to="/auth/login" class="underline"> LOGIN HERE</NuxtLink>
        </h3>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  computed,
  onMounted,
  onBeforeUnmount,
  nextTick,
} from 'vue'
import { API } from '~/constants/apiEndpoints'
import OtpInput from 'vue3-otp-input'
import { VueTelInput } from 'vue-tel-input'
import { useApi } from '~/composables/custom-fetch-api/useApi'
import Telegram from '@/icons/Telegram.vue'
import CusBaseInput from '@/components/cusComponents/CusBaseInput.vue'
import CusLoading from '~/components/cusComponents/CusLoading.vue'

interface FormData {
  username: string
  password: string
  password_confirmation: string
  register_type?: 'email' | 'phone'
  email?: string
  phone_number?: string
  country_code?: string
  affiliate_code?: string
}

interface FormErrors {
  name?: string
  email?: string
  password?: string
  password_confirmation?: string
}
const email = ref('')
const phoneNumber = ref<string>('')
const phoneError = ref('')
const otp = ref('')
const countdown = ref<number>(60)
const isWaiting = ref<boolean>(false)
let timer: ReturnType<typeof setInterval> | null = null
const createWithPhone = ref(false)
const form = reactive<FormData>({
  username: '',
  password: '',
  password_confirmation: '',
})
const countryCode = ref<string>('')
const errors = ref<FormErrors>({})
const showPassword = ref<boolean>(false)
const turnstileWrapper = ref<HTMLElement | null>(null)
const token = ref('')
const isLoading = ref(false)
const error = ref<string | null>(null)
const isFocused = ref(false)
const config = useRuntimeConfig()
const { locale } = useI18n()
const code = useRoute()
const {
  status: statusRegister,
  execute: executeRegister,
  data: dataRegister,
  error: errRegister,
} = useApi<IRegister.RegisterRes>(
  () =>
    API.AUTH.REGISTER.replace(':type', `${config.public.type}`)
      .replace(':version', `${config.public.version}`)
      .replace(':lang', locale.value),
  {
    method: 'POST',
    body: form,
    watch: false,
    immediate: false,
    onError(error) {
      console.error('Registration error:', error)
      phoneNumber.value = ''
    },
  }
)

const {
  status: statusResenEmail,
  execute: executeResendEmail,
  data: dataResendEmail,
  error: errResendEmail,
} = useApi(
  () =>
    API.AUTH.RESEND_LINK_EMAIL.replace(':type', `${config.public.type}`)
      .replace(':version', `${config.public.version}`)
      .replace(':lang', locale.value),
  {
    method: 'POST',
    body: { email: email },
    watch: false,
    immediate: false,
    onError(error) {
      console.error('Resend email error:', error)
    },
  }
)

const resentOtp = reactive({
  phone_number: '',
})
const {
  status: statusResendOTP,
  execute: executeResendOTP,
  data: dataResendOTP,
  error: errResendOTP,
} = useApi(
  () =>
    API.AUTH.RESEND_OTP.replace(':type', `${config.public.type}`)
      .replace(':version', `${config.public.version}`)
      .replace(':lang', locale.value),
  {
    method: 'POST',
    body: resentOtp,
    watch: false,
    immediate: false,
    onSuccess(data) {
      startCountdown()
    },
    onError(error) {
      console.error('Resend OTP error:', error)
    },
  }
)

const verifyPayload = reactive({
  otp: otp,
  phone_number: '',
})

const {
  status: statusVerifyOTP,
  execute: executeVerifyOTP,
  error: errVerifyOTP,
} = useApi<any>(
  () =>
    API.AUTH.VERIFY_OTP_LOGIN.replace(':type', `${config.public.type}`)
      .replace(':version', `${config.public.version}`)
      .replace(':lang', locale.value),
  {
    method: 'POST',
    body: verifyPayload,
    watch: false,
    immediate: false,
    onSuccess(data) {
      useCookie('auth').value = data.data.token
      navigateTo('/')
    },
    onError(error) {
      console.error('Verify OTP error:', error)
    },
  }
)
const wrapperStyle = computed(() => ({
  width: '100%',
  borderRadius: '6px',
  border: `1px solid ${isFocused.value ? '#000000' : '#9ca3af'}`,
  boxShadow: isFocused.value ? '0 0 0 1px #80b8dd' : 'none',
  transition: 'border-color 0.2s ease',
  backgroundColor: 'white',
}))
const handleChange = (value: string) => {
  otp.value = value
}

function startCountdown(): void {
  isWaiting.value = true
  countdown.value = 60

  if (timer) clearInterval(timer)
  timer = setInterval(() => {
    countdown.value--

    if (countdown.value <= 0) {
      clearInterval(timer as NodeJS.Timeout)
      isWaiting.value = false
      timer = null
    }
  }, 1000)
}

const handleResetOtp = () => {
  let phone = phoneNumber.value.replace(/\s/g, '')
  if (phone.startsWith('0')) {
    phone = phone.slice(1)
  }
  resentOtp.phone_number = countryCode.value + phone
  executeResendOTP()
}

const handleVerify = () => {
  let phone = phoneNumber.value.replace(/\s/g, '')
  if (phone.startsWith('0')) {
    phone = phone.slice(1)
  }
  verifyPayload.phone_number = countryCode.value + phone
  executeVerifyOTP()
}

const handleClickToRegisterWithPhone = () => {
  createWithPhone.value = true
}

const validateForm = (): boolean => {
  errors.value = {}
  if (createWithPhone.value) {
    if (!phoneNumber.value || phoneNumber.value.trim() === '') {
      phoneError.value = 'Phone number is required'
    } else {
      phoneError.value = ''
    }
  } else {
    if (!email.value || !email.value.includes('@')) {
      errors.value.email = 'Please enter a valid email address'
    }
  }

  if (!form.username.trim()) {
    errors.value.name = 'Username is required'
  } else if (!/^[a-zA-Z0-9_.-]*$/.test(form.username)) {
    errors.value.name = 'Special characters are not accepted'
  }
  if (form.password.length < 8) {
    errors.value.password = 'Password must be at least 8 characters'
  }
  if (form.password !== form.password_confirmation) {
    errors.value.password_confirmation = 'Passwords do not match'
  }

  return Object.keys(errors.value).length === 0 && !phoneError.value
}

const changeCountry = (countryObject: any) => {
  countryCode.value = countryObject.dialCode
}

const handleSubmit = async () => {
  if (!validateForm()) {
    console.log('Form validation failed.')
    return
  }

  if (createWithPhone.value) {
    form.register_type = 'phone'
    form.phone_number = phoneNumber.value.replace(/\s/g, '')
    form.country_code = countryCode.value
    delete form.email
  } else {
    form.register_type = 'email'
    form.email = email.value
    delete form.phone_number
    delete form.country_code
  }
  if (code.query.affiliate) {
    form.affiliate_code = code.query.affiliate as string
  }
  await executeRegister()
}

const togglePasswordVisibility = (): void => {
  showPassword.value = !showPassword.value
}

function onFocusIn() {
  isFocused.value = true
}

function onFocusOut() {
  isFocused.value = false
}

const handleLogin = async (provider: 'google' | 'facebook') => {
  isLoading.value = true
  error.value = null

  try {
    const res = await fetch(
      `${config.public.apiUrl}${API.AUTH.REDIRECT.replace(':provider', provider)}`
    )

    if (!res.ok) {
      throw new Error(
        `Failed to fetch redirect URL: ${res.status} ${res.statusText}`
      )
    }

    const url = await res.text()
    window.location.href = url
  } catch (err) {
    console.error('Login redirect failed:', err)
    error.value = 'Login failed. Please try again.'
  } finally {
    isLoading.value = false
  }
}

const loadTelegramWidget = () => {
  if (document.getElementById('telegram-widget-script')) {
    return
  }
  const script = document.createElement('script')
  script.id = 'telegram-widget-script'
  script.src = 'https://telegram.org/js/telegram-widget.js?7'
  script.setAttribute('data-telegram-login', config.public.bot_id)
  script.setAttribute('data-size', 'large')
  script.setAttribute('data-userpic', 'true')
  script.setAttribute('data-request-access', 'write')
  script.setAttribute(
    'data-auth-url',
    `${config.public.apiUrl}${API.AUTH.TELEGRAM_CALL_BACK.replace(
      ':type',
      `${config.public.type}`
    )
      .replace(':version', `${config.public.version}`)
      .replace(':lang', locale.value)}`
  )
  script.async = true
  document.getElementById('telegram-login-button')?.appendChild(script)
}

function triggerTelegramLogin() {
  const telegramBtn = document.querySelector(
    '#telegram-login-button button'
  ) as HTMLElement | null
  if (telegramBtn) {
    telegramBtn.click()
  } else {
    loadTelegramWidget()
  }
}
let turnstileRendered = false
onMounted(async () => {
  await nextTick()

  const renderTurnstile = () => {
    if (!turnstileWrapper.value || turnstileRendered) return

    const div = document.createElement('div')
    div.classList.add('cf-turnstile')
    div.dataset.sitekey = config.public.cloudflare || ''
    div.dataset.theme = 'light'
    turnstileWrapper.value.appendChild(div)

    window.turnstile.render(div, {
      sitekey: config.public.cloudflare || '',
      theme: 'light',
      callback: (tokenValue: string) => {
        token.value = tokenValue
      },
    })

    turnstileRendered = true
  }

  if (typeof window.turnstile !== 'undefined') {
    renderTurnstile()
  } else if (turnstileWrapper.value) {
    if (!document.querySelector('script[src*="turnstile/v0/api.js"]')) {
      const script = document.createElement('script')
      script.src =
        'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback'
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }

    ;(window as any).onloadTurnstileCallback = () => {
      renderTurnstile()
    }
  }

  if (isWaiting.value && !timer) {
    startCountdown()
  }
})

onBeforeUnmount(() => {
  // Clear the interval if the component is unmounted
  if (timer) {
    clearInterval(timer)
    timer = null
  }
  // Remove Telegram widget script if it was dynamically added
  const telegramScript = document.getElementById('telegram-widget-script')
  if (telegramScript && telegramScript.parentNode) {
    telegramScript.parentNode.removeChild(telegramScript)
  }
})
</script>

<style scoped>
.custome .vti__input {
  border: 1px solid #9ca3af;
  border-radius: 6px;
  height: 54px;
  padding: 0 1rem;
  outline: none;
  transition: all 0.2s ease;
}

.custome .vti__input:focus {
  border-color: #000000;
}
</style>
