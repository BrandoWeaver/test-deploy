<template>
  <div class="relative w-full h-auto min-h-screen">
    <NuxtImg
      src="/img/BG.png"
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover z-[-1]"
      format="webp"
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
          <p
            style="font-weight: 350; line-height: 25.2px; letter-spacing: 0%"
            class="lg:text-[14px] md:text-[13px] sm:text-[12px] text-[10px]"
          >
            WELCOME BACK!
          </p>

          <div
            class="flex sm:flex-row flex-col sm:items-center xll:flex-nowrap flex-wrap justify-between gap-[14px]"
          >
            <h1
              style="font-weight: 400; line-height: 37.4px; letter-spacing: 0%"
              class="whitespace-nowrap w-fit lg:text-[22px] md:text-[20px] sm:text-[18px] text-[17px]"
            >
              Log in with
            </h1>
            <div
              class="smx-min:grid w-full items-center justify-between xs:grid-cols-4 flex flex-row gap-[10px] flex-wrap"
            >
              <button
                @click.prevent="handleLogin('google')"
                type="button"
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
              <div
                class="relative min-h-[33px] hover:bg-[#EFF1D9] rounded-[6px]"
              >
                <!-- Telegram widget container -->
                <div
                  id="telegram-login-button"
                  class="absolute top-0 left-0 w-full h-full z-30 opacity-0 pointer-events-auto"
                />
                <!-- Your custom button -->
                <button
                  type="button"
                  class="absolute inset-0 disabled:opacity-50 py-1.5 w-full shrink-0 border border-[#EFF1D9] rounded-[6px] px-6 flex gap-1.5 items-center justify-center bg-transparent z-20"
                  @click.prevent="triggerTelegramLogin"
                  :disabled="isLoading"
                >
                  <span class="shrink-0"><Telegram /></span>
                  <p class="font-[350] text-[12px]">Telegram</p>
                </button>
              </div>

              <button
                type="button"
                @click.prevent="logwithPhone"
                class="py-1.5 z-50 w-full border shrink-0 hover:bg-[#EFF1D9] border-[#EFF1D9] rounded-[6px] px-6 flex gap-1.5 items-center justify-center min-w-[100px]"
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

              <!-- <button
                class="py-1.5 w-full border shrink-0 border-[#EFF1D9] rounded-[6px] px-6 flex gap-1.5 items-center justify-center"
              >
                <span class="shrink-0"><Apple /></span>

                <p class="font-[350] text-[12px]">Apple</p>
              </button> -->
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

          <CusBaseInput
            v-model="form.username"
            label="Your Email Or Username"
            type="text"
            v-if="!loginWithPhone"
            placeholder="Please Input Your Email"
            :errorMessage="errors.name"
          />

          <div
            v-else
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
              @country-changed="changeCountry"
            ></vue-tel-input>
          </div>
          <div class="">
            <CusBaseInput
              v-model="form.password"
              label="Your Password"
              type="password"
              placeholder="Please Input Your Password"
              :errorMessage="errors.name"
            />
          </div>
          <div ref="turnstileWrapper" id="tf" class="w-full"></div>
          <!-- <img
            src="/img/formCloudfare.png"
            alt=""
            class="w-full h-14 object-fit mt-2"
          /> -->
          <div v-if="errorLogin">
            <p class="text-red-500">{{ errorLogin.data.message }}</p>
          </div>
          <button
            style="
              font-weight: 500;
              line-height: 25.2px;
              letter-spacing: 0%;
              text-align: center;
            "
            type="submit"
            :disabled="statusLogin === 'pending' || !token"
            class="py-[14px] w-full disabled:opacity-50 text-center justify-center leading-none my-[7px] text-white px-8 rounded-[4px] lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px] flex items-center gap-2 hover:shadow-[0px_4px_16px_0px_#DBF226] bg-black"
          >
            <CusLoading
              width="25"
              height="25"
              v-if="statusLogin === 'pending'"
            />
            <span v-else>LOG IN</span>
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
                if you've forgotten your password, please click
                <NuxtLink href="/auth/reset" class="underline">here</NuxtLink>
              </p>
              <p
                style="
                  font-weight: 350;
                  letter-spacing: 0%;
                  text-decoration-style: solid;
                  text-decoration-thickness: Auto;
                "
                class="text-[#757575] font-[350] md:text-[14px] sm:text-[11px] text-[10px] md:leading-[25px] leading-[18px]"
              >
                In logging in, you agree to our
                <a href="#" class="underline">Terms</a> and
                <a href="#" class="underline">Privacy Policy.</a>
              </p>
            </div>
            <h3
              style="font-weight: 350; letter-spacing: 0%"
              class="md:text-[14px] sm:text-[11px] text-[10px] text-[#212121] md:leading-[25px] leading-[18px] flex flex-wrap flex-row gap-2"
            >
              Don't have an account yet?
              <NuxtLink to="/auth/register" class="underline">
                CREATE NOW</NuxtLink
              >
            </h3>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VueTelInput } from 'vue-tel-input'
import { ref, reactive } from 'vue'
import { useCookie } from '#app'
import Telegram from '@/icons/Telegram.vue'
import CusBaseInput from '@/components/cusComponents/CusBaseInput.vue'
import { API } from '~/constants/apiEndpoints'
import CusLoading from '~/components/cusComponents/CusLoading.vue'
import { useApi } from '~/composables/custom-fetch-api/useApi'
definePageMeta({
  layout: false,
  public: true,
  publicOnly: true,
  middleware: 'auth',
})
interface FormData {
  username: string
  password: string
}

interface FormErrors {
  name?: string
  username?: string
  subject?: string
  message?: string
}
const loginWithPhone = ref(false)
const config = useRuntimeConfig()
const changeContent = ref(true)
const route = useRoute()
const router = useRouter()

const handleChangeContent1 = () => {
  changeContent.value = !changeContent.value
}
const handleChangeContent2 = () => {
  changeContent.value = !changeContent.value
}
const form = reactive<FormData>({
  username: '',
  password: '',
})
const isFocused = ref(false)
const phoneNumber = ref<string>('')
function onFocusIn() {
  isFocused.value = true
}

function onFocusOut() {
  isFocused.value = false
}
const countryCode = ref<string>('')

const changeCountry = (countryObject: any) => {
  countryCode.value = countryObject.dialCode
}
const logwithPhone = () => {
  loginWithPhone.value = true
}
const wrapperStyle = computed(() => ({
  width: '100%',
  borderRadius: '6px',
  border: `1px solid ${isFocused.value ? '#000000' : '#9ca3af'}`,
  boxShadow: isFocused.value ? '0 0 0 1px #80b8dd' : 'none',
  transition: 'border-color 0.2s ease',
  backgroundColor: 'white',
}))
const errors = ref<FormErrors>({})
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
    alert(error.value) // Optional: replace with a toast or UI element
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
const validateForm = (): boolean => {
  errors.value = {}
  if (
    !form.username.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.username)
  ) {
    errors.value.username = 'Please enter a valid email address'
  }

  return Object.keys(errors.value).length === 0
}
const { locale } = useI18n()
const login2Fa = ref(false)
const loginBody = {
  username: '',
  password: '',
}
const {
  status: statusLogin,
  execute: executeLogin,
  error: errorLogin,
} = useApi<IAUTH.LogRes>(
  () =>
    API.AUTH.LOGIN.replace(':type', `${config.public.type}`)
      .replace(':version', `${config.public.version}`)
      .replace(':lang', locale.value),
  {
    method: 'POST',
    body: loginBody,
    watch: false,
    immediate: false,
    onSuccess(data) {
      if (data.data.enable_2fa) {
        useCookie('temp_token').value = data.data.temp_token
        navigateTo('/auth/two-factor')
      } else {
        useCookie('authToken').value = data.data.token
        const redirect = route.query.redirect
        router.push(redirect ? decodeURIComponent(redirect as string) : '/')
      }
      form.password = ''
      form.username = ''
    },
    onError(error) {
      form.password = ''
      form.username = ''
      console.log('err login', error)
    },
  }
)
const login = () => {
  // if (!validateForm()) return
  let phone = phoneNumber.value.replace(/\s/g, '')
  if (phone.startsWith('0')) {
    phone = phone.slice(1)
  }
  Object.assign(loginBody, {
    username: loginWithPhone.value ? countryCode.value + phone : form.username,
    password: form.password,
  })
  executeLogin()
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
</script>
