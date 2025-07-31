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
          @submit.prevent="handleSubmit"
          class="bg-white text-black mx-auto w-full 2xl:w-full p-[24px] md:p-[40px] rounded-t-[10px] lg:h-screen flex flex-col gap-[14px]"
        >
          <div
            class="flex sm:flex-row flex-col sm:items-center xll:flex-nowrap flex-wrap justify-between gap-[14px]"
          >
            <h1
              style="font-weight: 400; line-height: 37.4px; letter-spacing: 0%"
              class="whitespace-nowrap w-fit lg:text-[22px] md:text-[20px] sm:text-[18px] text-[17px]"
            >
              Reset Password
            </h1>
          </div>
          <!-- <CusBaseInput
            v-model="otp"
            label="OTP Code"
            type="text"
            placeholder="Please Enter OTP Code"
          /> -->
          <CusBaseInput
            v-model="password"
            label="New Password"
            type="text"
            placeholder="Please Enter New Password"
          />
          <CusBaseInput
            v-model="confirmPassword"
            label="Confirm Password"
            type="text"
            placeholder="Please Enter Confirm Password"
          />
          <button
            style="
              font-weight: 500;
              line-height: 25.2px;
              letter-spacing: 0%;
              text-align: center;
            "
            :disabled="statusReset === 'pending'"
            class="py-[14px] w-full disabled:opacity-50 text-center justify-center leading-none my-[7px] text-white px-8 rounded-[4px] lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px] flex items-center gap-2 hover:shadow-[0px_4px_16px_0px_#DBF226] bg-black"
          >
            <CusLoading
              width="25"
              height="25"
              v-if="statusReset === 'pending'"
            />
            <span v-else>Confirm Reset Password</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  colorMode: 'light',
})
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CusBaseInput from '~/components/cusComponents/CusBaseInput.vue'
import CusLoading from '~/components/cusComponents/CusLoading.vue'
import { useApi } from '~/composables/custom-fetch-api/useApi'
import { API } from '~/constants/apiEndpoints'
const config = useRuntimeConfig()
const password = ref('')
const otp = ref('')
const confirmPassword = ref('')
const passwordError = ref('')
const confirmPasswordError = ref('')
const successMessage = ref('')
const errorMessage = ref('')
const isLoading = ref(false)
const { locale } = useI18n()
const route = useRoute()
const router = useRouter()
const token = ref(route.query.link || '')
const changeContent = ref(true)
const handleChangeContent1 = () => {
  changeContent.value = !changeContent.value
}
const handleChangeContent2 = () => {
  changeContent.value = !changeContent.value
}
const validatePassword = (value: any) => {
  if (!value) return 'Password is required.'
  if (value.length < 8) return 'Password must be at least 8 characters.'
  return ''
}

const validateConfirmPassword = (value: any) => {
  if (!value) return 'Please confirm your password.'
  if (value !== password.value) return 'Passwords do not match.'
  return ''
}

const isFormValid = computed(() => {
  return (
    !validatePassword(password.value) &&
    !validateConfirmPassword(confirmPassword.value) &&
    token.value
  )
})

function resetMessages() {
  passwordError.value = ''
  confirmPasswordError.value = ''
  successMessage.value = ''
  errorMessage.value = ''
}
const body: Record<string, any> = {
  password,
  password_confirmation: confirmPassword,
}

const { status: statusReset, execute: executeReset } = useApi(
  () =>
    API.AUTH.RESET_PASSWORD.replace(':type', `${config.public.type}`)
      .replace(':version', `${config.public.version}`)
      .replace(':lang', locale.value),
  {
    method: 'POST',
    body,
    watch: false,
    immediate: false,
    onSuccess(data) {
      resetMessages()
      navigateTo('/auth/login')
      console.log('res login', data)
    },
    onError(error) {
      resetMessages()
      console.log('err login', error)
    },
  }
)

const handleSubmit = async () => {
  passwordError.value = validatePassword(password.value)
  confirmPasswordError.value = validateConfirmPassword(confirmPassword.value)
  if (passwordError.value || confirmPasswordError.value) return
  if (otp.value !== '') {
    body.reset_code = otp
  }
  if (token.value !== '') {
    body.reset_link = token
  }
  await executeReset()
}
</script>

<style scoped>
.reset-password-container {
  max-width: 400px;
  margin: 3rem auto;
  padding: 2rem;
  border-radius: 12px;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
}

p {
  margin-bottom: 1rem;
  font-size: 1rem;
  text-align: center;
  line-height: 1.4;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  font-weight: 600;
  font-size: 0.9rem;
}

input[type='password'] {
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid grey; /* Added grey border */
  font-size: 1rem;
  outline: none;
  color: black; /* Changed text color to black */
  background-color: white; /* Changed background color to white for better contrast */
}

button {
  background-color: #fff200;
  color: #333;
  border: none;
  padding: 0.75rem 1rem;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

button:not(:disabled):hover {
  background-color: #e6d500;
}

.error-message {
  color: #ff9a9a;
  font-weight: 600;
  font-size: 0.875rem;
  text-align: center;
}

.success-message {
  color: #b5f0a1;
  font-weight: 600;
  font-size: 0.925rem;
  text-align: center;
  margin-top: 1rem;
}
</style>
