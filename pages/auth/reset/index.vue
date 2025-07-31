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
          v-if="!dataRes"
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
          <CusBaseInput
            v-model="email"
            label="Your Email Or Username"
            type="text"
            placeholder="Please Input Your Email"
            autocomplete="username"
            :class="{ 'input-error': emailError }"
          />
          <button
            style="
              font-weight: 500;
              line-height: 25.2px;
              letter-spacing: 0%;
              text-align: center;
            "
            :disabled="statusForget === 'pending'"
            class="py-[14px] w-full disabled:opacity-50 text-center justify-center leading-none my-[7px] text-white px-8 rounded-[4px] lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px] flex items-center gap-2 hover:shadow-[0px_4px_16px_0px_#DBF226] bg-black"
          >
            <CusLoading
              width="25"
              height="25"
              v-if="statusForget === 'pending'"
            />
            <span v-else>Send a password reset email</span>
          </button>
          <p v-if="errorForget">{{ errorForget?.message }}</p>
        </form>
        <EmailSent :email="email" @try-again="tryAgain" v-else />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  colorMode: 'light',
})
import { ref, computed } from 'vue'
import CusBaseInput from '~/components/cusComponents/CusBaseInput.vue'
import CusLoading from '~/components/cusComponents/CusLoading.vue'
import EmailSent from '~/components/reset-password/EmailSent.vue'
import { useApi } from '~/composables/custom-fetch-api/useApi'
import { API } from '~/constants/apiEndpoints'
const config = useRuntimeConfig()
const { locale } = useI18n()
const email = ref('')
const emailError = ref('')
const successMessage = ref('')
const errorMessage = ref('')
const isLoading = ref(false)

const validateEmail = (value: any) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i
  return re.test(value)
}
const tryAgain = () => {
  email.value = ''
}
const isFormValid = computed(() => {
  return email.value.length > 0 && validateEmail(email.value)
})
const changeContent = ref(true)
const handleChangeContent1 = () => {
  changeContent.value = !changeContent.value
}
const handleChangeContent2 = () => {
  changeContent.value = !changeContent.value
}
function resetMessages() {
  emailError.value = ''
  successMessage.value = ''
  errorMessage.value = ''
}
interface IRESET {
  status: string
  message: string
  data: null
}
const {
  status: statusForget,
  execute: executeForget,
  error: errorForget,
  data: dataRes,
} = useApi<IRESET>(
  () =>
    API.AUTH.FORGET_PASSWORD.replace(':type', `${config.public.type}`)
      .replace(':version', `${config.public.version}`)
      .replace(':lang', locale.value),
  {
    method: 'POST',
    body: { email: email },
    watch: false,
    immediate: false,
    onSuccess(data) {
      resetMessages()
    },
    onError(error) {
      resetMessages()
      console.log('err login', error)
    },
  }
)
const handleSubmit = async () => {
  if (!validateEmail(email.value)) {
    emailError.value = 'Please enter a valid email address.'
    return
  }
  executeForget()
}
</script>
