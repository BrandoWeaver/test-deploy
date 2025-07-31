<template>
  <div class="relative w-full h-auto min-h-screen">
    <img
      src="/img/BG.png"
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover z-[-1]"
    />
    <div
      class="flex md:flex-row flex-col h-full w-[1440px] xl-max:w-full xl:pt-[164px] lg:pt-[64px] sm:pt-[32px] pt-[64px] lg-max:w-full mx-auto lg:gap-[64px] gap-[32px] lg:px-[56px] md:px-[64px] sm:px-[32px] px-[24px] overflow-hidden"
    >
      <div
        class="flex flex-col text-[#FFFFFF] lg:w-[45%] md:w-[50%] w-full flex-grow max-w-[720px] min-w-0"
      >
        <h1
          style="letter-spacing: 0%"
          class="xl:text-[40px] lg:text-[40px] md:text-[30px] sm:text-[26px] text-[22px] font-bold lg:leading-[60px] md:leading-[45px] leading-[33px] lg:pt-[64px] md:pt-[32px] xl:pt-0"
        >
          {{
            changeContent
              ? 'A Well of Unique Cultural Inspiration'
              : 'A Community Built on Generosity and Support'
          }}
        </h1>
        <p
          style="line-height: 27px; letter-spacing: 0%"
          class="xl:text-[18px] lg:text-[18px] md:text-[16px] text-[15px] font-[400] xl:pt-[64px] pt-[32px]"
        >
          {{
            changeContent
              ? ' Thortok is not merely a platform; it’s a reservoir of creativity rooted in the vibrant cultural heritage of Asia. Every resource and image invites you to experience the depth of artistry and beauty, preserving tradition while inspiring modern creativity.'
              : 'At Thortok, every down ord is an act of upport for creators pursuing their passion. It`s a place nners crestors thrive, tradition is honored, and artistry is accessible to all n a warm, welcoming space crafted for connection.'
          }}
        </p>

        <div
          class="flex flex-row items-center py-4 gap-[20px] lg:mt-[64px] md:mt-[64px] mt-[32px]"
        >
          <button
            @click="handleChangeContent1"
            class="w-[70px] bg-white"
            :class="[changeContent ? 'h-[8px]' : 'h-[2px]']"
          ></button>
          <button
            @click="handleChangeContent2"
            class="w-[70px] bg-white"
            :class="[!changeContent ? 'h-[8px]' : 'h-[2px]']"
          ></button>
        </div>
      </div>
      <div
        class="lg:col-span-7 h-full lg:w-[55%] md:w-[50%] md:min-w-[400px] w-full"
      >
        <div
          class="bg-white text-black mx-auto w-full 2xl:w-full rounded-t-[10px] sm:h-screen flex flex-col gap-[14px]"
        >
          <RegisterForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Google from '@/icons/Google.vue'
import { VueTelInput } from 'vue-tel-input'
import Telegram from '@/icons/Telegram.vue'
import CusBaseInput from '@/components/cusComponents/CusBaseInput.vue'
import { API } from '~/constants/apiEndpoints'
import CusLoading from '~/components/cusComponents/CusLoading.vue'
import OtpInput from 'vue3-otp-input'
import Email from '~/icons/Email.vue'
import RegisterForm from '~/components/auth/RegisterForm.vue'
import { useApi } from '~/composables/custom-fetch-api/useApi'
definePageMeta({
  layout: false,
})
interface FormData {
  username: string
  password: string
  password_confirmation: string
}

interface FormErrors {
  name?: string
  email?: string
}

interface JobDetail {
  key: string
  value: string
}
const email = ref('')
const phoneNumber = ref<string>('')
const phoneError = ref('')

const changeContent = ref(false)
const otp = ref('')
const handleChange = (value: string) => {
  otp.value = value
}
const countdown = ref<number>(60)
const isWaiting = ref<boolean>(false)
let timer: ReturnType<typeof setInterval> | null = null

function startCountdown(): void {
  isWaiting.value = true
  countdown.value = 60

  timer = setInterval(() => {
    countdown.value--

    if (countdown.value <= 0) {
      clearInterval(timer as NodeJS.Timeout)
      isWaiting.value = false
    }
  }, 1000)
}
const handleChangeContent1 = () => {
  changeContent.value = !changeContent.value
}
const createWithPhone = ref(false)

const handleChangeContent2 = () => {
  changeContent.value = !changeContent.value
}
const config = useRuntimeConfig()
const { locale } = useI18n()
const form = reactive<FormData>({
  username: '',
  password: '',
  password_confirmation: '',
})
const countryCode = ref<string>('')
const {
  status: statusRegister,
  execute: executeRegister,
  data: dataRegister,
  error: errRegister,
} = useApi(
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
      console.log('err login', error)
      phoneNumber.value = ''
    },
  }
)
const code = useRoute()

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
      console.log('err login', error)
    },
  }
)
const resentOtp = {
  phone_number: '',
}
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
      console.log('err login', error)
    },
  }
)
const handleResetOtp = () => {
  let phone = phoneNumber.value.replace(/\s/g, '')
  if (phone.startsWith('0')) {
    phone = phone.slice(1)
  }
  Object.assign(resentOtp, {
    phone_number: countryCode.value + phone,
  })
  executeResendOTP()
}
const verify = {
  otp: otp,
}

const isFocused = ref(false)

function onFocusIn() {
  isFocused.value = true
}

function onFocusOut() {
  isFocused.value = false
}

const wrapperStyle = computed(() => ({
  width: '100%',
  borderRadius: '6px',
  border: `1px solid ${isFocused.value ? '#000000' : '#9ca3af'}`,
  boxShadow: isFocused.value ? '0 0 0 1px #80b8dd' : 'none',
  transition: 'border-color 0.2s ease',
  backgroundColor: 'white',
}))
const {
  status: statusVerifyOTP,
  execute: executeVerifyOTP,
  error: errVerifyOTP,
} = useApi<IVerify.IVerifyOtp>(
  () =>
    API.AUTH.VERIFY_OTP_LOGIN.replace(':type', `${config.public.type}`)
      .replace(':version', `${config.public.version}`)
      .replace(':lang', locale.value),
  {
    method: 'POST',
    body: verify,
    watch: false,
    immediate: false,
    onSuccess(data) {
      useCookie('auth').value = data.data.token
      navigateTo('/')
    },
    onError(error) {
      console.log('err login', error)
    },
  }
)
const handleVerify = () => {
  let phone = phoneNumber.value.replace(/\s/g, '')
  if (phone.startsWith('0')) {
    phone = phone.slice(1)
  }
  Object.assign(verify, {
    phone_number: countryCode.value + phone,
  })
  executeVerifyOTP()
}
const handleClickToRegisterWithPhone = () => {
  createWithPhone.value = true
}
const errors = ref<FormErrors>({})

const validateForm = (): boolean => {
  errors.value = {}
  if (!phoneNumber.value || phoneNumber.value.trim() === '') {
    phoneError.value = 'Phone number is required'
  } else {
    phoneError.value = ''
  }
  if (!form.username.trim())
    errors.value.name = 'Special characters are not accepted'

  return Object.keys(errors.value).length === 0
}
const changeCountry = (countryObject: any) => {
  countryCode.value = countryObject.dialCode
}

const handleSubmit = async () => {
  if (createWithPhone.value) {
    Object.assign(form, {
      register_type: 'phone',
      phone_number: phoneNumber.value.replace(/\s/g, ''),
      country_code: countryCode.value,
    })
  } else {
    Object.assign(form, {
      register_type: 'email',
      email: email.value,
    })
  }
  if (code.query.affiliate) {
    Object.assign(form, {
      ...form,
      affiliate_code: code.query.affiliate,
    })
  }

  if (validateForm()) {
    await executeRegister()
    Object.assign(form, {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
    })
  }
}

const showPassword = ref<boolean>(false)

const togglePasswordVisibility = (): void => {
  showPassword.value = !showPassword.value
}
const route = useRoute()
const turnstileWrapper = ref<HTMLElement | null>(null)
const keys = {
  managed: useRuntimeConfig().public.cloudflare || '',
  noninteractive: useRuntimeConfig().public.cloudflare || '',
  invisible: useRuntimeConfig().public.cloudflare || '',
}
const typeParam = route.query.type as string | undefined

const selectedKey = typeParam
  ? keys[typeParam.toLowerCase() as keyof typeof keys] || keys.managed
  : keys.managed
const token = ref('')
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
const router = useRouter()
const isLoading = ref(false)
const error = ref<string | null>(null)
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
    console.log('Login redirect failed:', err)
    error.value = 'Login failed. Please try again.'
  } finally {
    isLoading.value = false
  }
}
const loadTelegramWidget = () => {
  const script = document.createElement('script')
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
