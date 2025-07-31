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
          class="bg-white text-black mx-auto w-full 2xl:w-full p-[24px] md:p-[40px] rounded-t-[10px] sm:h-screen flex flex-col gap-[14px]"
        >
          <p
            style="font-weight: 350; line-height: 25.2px; letter-spacing: 0%"
            class="lg:text-[14px] md:text-[13px] sm:text-[12px] text-[10px]"
          >
            START WITH THE FREE PLAN
          </p>
          <div v-if="!verify">
            <div
              class="flex sm:flex-row flex-col justify-center sm:items-center xll:flex-nowrap md:flex-wrap mdx:flex-nowrap sm:flex-wrap flex-wrap gap-[14px]"
            >
              <h1
                style="
                  font-weight: 400;
                  line-height: 37.4px;
                  letter-spacing: 0%;
                "
                class="whitespace-nowrap w-fit lg:text-[22px] md:text-[20px] sm:text-[18px] text-[17px]"
              >
                Verify your email
              </h1>
            </div>
            <div class="flex justify-center flex-col text-center">
              <p>
                Welcome to
                <NuxtLink
                  :to="'https://dev.thortok.com/'"
                  class="hover:underline hover:text-primary-light text-sky-400"
                  >https://dev.thortok.com/</NuxtLink
                >
              </p>
              <p class="mt-5">
                Please click the button below to confirm your email address and
                activate your account
              </p>
            </div>
          </div>
          <div v-else>
            <div
              class="flex sm:flex-row flex-col justify-center sm:items-center xll:flex-nowrap md:flex-wrap mdx:flex-nowrap sm:flex-wrap flex-wrap gap-[14px]"
            >
              <h1
                style="
                  font-weight: 400;
                  line-height: 37.4px;
                  letter-spacing: 0%;
                "
                class="whitespace-nowrap w-fit lg:text-[22px] md:text-[20px] sm:text-[18px] text-[17px] text-green-600"
              >
                Email Verified!
              </h1>
            </div>
            <div class="flex justify-center flex-col text-center mt-5">
              <p class="text-gray-700">
                Your email address has been successfully verified for
                <NuxtLink
                  :to="'https://dev.thortok.com/'"
                  class="hover:underline hover:text-primary-light text-sky-400"
                  >https://dev.thortok.com/</NuxtLink
                >
              </p>
              <p class="mt-5 text-lg font-medium text-gray-800">
                You can now log in to your account.
              </p>
            </div>
          </div>
          <button
            v-if="!dataVerifyAccount"
            style="
              font-weight: 500;
              line-height: 25.2px;
              letter-spacing: 0%;
              text-align: center;
            "
            class="py-[14px] w-full text-center justify-center leading-none my-[7px] text-white px-8 rounded-[4px] lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px] flex items-center gap-2 hover:shadow-[0px_4px_16px_0px_#DBF226] bg-black"
          >
            <span v-if="statusVerifyAccount !== 'pending'">Confirm Email</span
            ><span v-else><CusLoading width="25" height="25" /></span>
          </button>
          <button
            v-else
            @click.prevent="backToLogin"
            style="
              font-weight: 500;
              line-height: 25.2px;
              letter-spacing: 0%;
              text-align: center;
            "
            class="py-[14px] w-full text-center justify-center leading-none my-[7px] text-white px-8 rounded-[4px] lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px] flex items-center gap-2 hover:shadow-[0px_4px_16px_0px_#DBF226] bg-black"
          >
            Back to login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { API } from '~/constants/apiEndpoints'
import CusLoading from '~/components/cusComponents/CusLoading.vue'
import { useApi } from '~/composables/custom-fetch-api/useApi'
definePageMeta({
  layout: false,
})
interface FormData {
  username: string
  email?: string
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
const route = useRoute()
const changeContent = ref(false)

const handleChangeContent1 = () => {
  changeContent.value = !changeContent.value
}

const handleChangeContent2 = () => {
  changeContent.value = !changeContent.value
}
const config = useRuntimeConfig()
const code = route.query.code
const { locale } = useI18n()

const {
  status: statusVerifyAccount,
  execute: executeVerifyAccount,
  data: dataVerifyAccount,
} = useApi(
  () =>
    API.AUTH.VERIFY_ACCOUNT.replace(':type', `${config.public.type}`)
      .replace(':version', `${config.public.version}`)
      .replace(':lang', locale.value),
  {
    method: 'POST',
    body: { code: code },
    watch: false,
    immediate: false,
    onSuccess(data) {
      navigateTo('/auth/login')
    },
    onError(error) {
      console.log('err login', error)
    },
  }
)
const backToLogin = () => {
  navigateTo('/auth/login')
}

const verify = ref(false)
const handleSubmit = (): void => {
  executeVerifyAccount()
}
</script>

<style scoped></style>
