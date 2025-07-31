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
        <form
          @submit.prevent="login"
          class="bg-white text-black mx-auto w-full 2xl:w-full p-[24px] md:p-[40px] rounded-t-[10px] lg:h-screen flex flex-col gap-[14px]"
        >
          <div
            class="flex sm:flex-row flex-col sm:items-center xll:flex-nowrap flex-wrap justify-between gap-[14px]"
          >
            <h1
              style="font-weight: 400; line-height: 37.4px; letter-spacing: 0%"
              class="whitespace-nowrap w-fit lg:text-[22px] md:text-[20px] sm:text-[18px] text-[17px]"
            >
              Verify Your Identity
            </h1>
          </div>
          <p>
            A verification code has been sent to
            <strong>Authentication APP</strong>. Enter the code and continue.
          </p>
          <CusBaseInput
            v-model="form.otp"
            label="Enter OTP Code"
            type="text"
            placeholder="Please Input Your Email"
            :errorMessage="errors.otp"
          />
          <button
            style="
              font-weight: 500;
              line-height: 25.2px;
              letter-spacing: 0%;
              text-align: center;
            "
            :disabled="statusLogin === 'pending'"
            class="py-[14px] w-full disabled:opacity-50 text-center justify-center leading-none my-[7px] text-white px-8 rounded-[4px] lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px] flex items-center gap-2 hover:shadow-[0px_4px_16px_0px_#DBF226] bg-black"
          >
            <CusLoading
              width="25"
              height="25"
              v-if="statusLogin === 'pending'"
            />
            <span v-else>Continue</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useCookie } from '#app'
import Telegram from '@/icons/Telegram.vue'
import CusBaseInput from '@/components/cusComponents/CusBaseInput.vue'
import { API } from '~/constants/apiEndpoints'
import CusLoading from '~/components/cusComponents/CusLoading.vue'
import { useApi } from '~/composables/custom-fetch-api/useApi'
definePageMeta({
  colorMode: 'light',
  layout: false,
})
interface FormData {
  otp: string
  temp_token: string
}

interface FormErrors {
  otp?: string
}

interface JobDetail {
  key: string
  value: string
}
const config = useRuntimeConfig()
const changeContent = ref(true)
const route = useRoute()
const handleChangeContent1 = () => {
  changeContent.value = !changeContent.value
}
const handleChangeContent2 = () => {
  changeContent.value = !changeContent.value
}
const form = reactive<FormData>({
  otp: '',
  temp_token: useCookie('temp_token').value || '',
})
const errors = ref<FormErrors>({})
const isLoading = ref(false)
const error = ref<string | null>(null)
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

const { locale } = useI18n()

const { status: statusLogin, execute: executeLogin } = useApi<IAUTH.LogRes>(
  () =>
    API.AUTH.VERIFY_2FA.replace(':type', `${config.public.type}`)
      .replace(':version', `${config.public.version}`)
      .replace(':lang', locale.value),
  {
    method: 'POST',
    body: form,
    watch: false,
    immediate: false,
    onSuccess(data) {
      useCookie('authToken').value = data.data.token
      navigateTo('/')
      form.otp = ''
    },
    onError(error) {
      form.otp = ''
      console.log('err login', error)
    },
  }
)
const login = () => {
  // if (!validateForm()) return
  executeLogin()
}

const showPassword = ref<boolean>(false) // Initial state of password visibility
const togglePasswordVisibility = (): void => {
  showPassword.value = !showPassword.value // Toggle between true and false
}
onMounted(() => {
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
})
const turnstileWrapper = ref<HTMLElement | null>(null)
const keys = {
  managed: useRuntimeConfig().public.cloudflare,
  noninteractive: useRuntimeConfig().public.cloudflare,
  invisible: useRuntimeConfig().public.cloudflare,
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
</script>

<style scoped></style>
