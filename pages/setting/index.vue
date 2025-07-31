<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r border-gray-200 p-4">
      <nav>
        <ul>
          <li class="mb-2">
            <NuxtLink
              to="/setting"
              class="block p-2 rounded-md text-red-500 border border-gray-300 hover:bg-gray-100"
              active-class="bg-gray-100 border-red-500"
            >
              Setting
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/checkout"
              class="block p-2 rounded-md text-red-500 border border-gray-300 hover:bg-gray-100"
              active-class="bg-gray-100 border-red-500"
            >
              checkout
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 p-8 bg-white flex items-center justify-center">
      <div class="flex justify-center items-center w-full">
        <div class="w-full flex flex-col justify-center gap-4">
          <div class="flex justify-center">
            <div class="flex items-center">
              <div>Two Factor Authentication</div>
              <ToggleSwitch
                v-model="isTwoFaEnabled"
                v-if="userStore.userData?.enable_two_fa"
              />
              <button
                v-else
                @click="setUp = true"
                class="bg-black hover:bg-[#EFF1D9] disabled:opacity-50 hover:text-black text-white font-semibold py-2 px-4 rounded"
              >
                Set Up
              </button>
            </div>
            <CusDialog :open="setUp">
              <div class="rounded-lg w-full max-w-md">
                <div class="flex flex-row justify-between items-center">
                  <h2 class="text-2xl font-semibold">
                    Two-factor authentication
                  </h2>
                  <button @click="setUp = false">
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
                <div>
                  <div class="flex justify-center mb-4 mt-4">
                    <QRCode :value="data2Fa?.data.qr_url || ''" />
                  </div>

                  <div class="mb-4">
                    <p>
                      1. Scan the QR code using any authentication application
                      on your phone (e.g.
                      <a href="#" class="text-blue-500 hover:underline"
                        >Google Authenticator</a
                      >,
                      <a href="#" class="text-blue-500 hover:underline"
                        >Duo Mobile</a
                      >,
                      <a href="#" class="text-blue-500 hover:underline">Authy</a
                      >) or enter the following code:
                    </p>
                    <div class="flex justify-center bg-gray-200 mt-4">
                      <p class="font-mono text-gray-700 p-2 rounded mt-2">
                        {{ data2Fa?.data.secret }}
                      </p>
                    </div>
                  </div>

                  <div class="mb-4">
                    <p>
                      2. Enter the 6 figure confirmation code shown on the app:
                    </p>
                    <div class="flex justify-center">
                      <OtpInput
                        v-model:value="otp"
                        :num-inputs="6"
                        separator=" "
                        input-classes="w-12 h-12 border mr-2 rounded text-center text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        @on-change="handleChange"
                      />
                    </div>
                  </div>

                  <p class="text-yellow-500 text-sm mb-4">
                    ⚠️ You will be logged out from all your devices and browsers
                    that have been used to log in to your account recently for
                    security reasons.
                  </p>

                  <div class="w-full">
                    <button
                      :disabled="statusVerify === 'pending'"
                      @click="executeVerify()"
                      class="bg-black hover:bg-[#EFF1D9] disabled:opacity-50 hover:text-black text-white font-semibold w-full py-2 px-4 rounded"
                    >
                      Activate
                    </button>
                  </div>
                </div>
              </div></CusDialog
            >
          </div>
          <div class="flex justify-center">
            <div class="flex flex-row items-center">
              <div>Back up codes</div>
              <button
                @click="viewBackupCode = true"
                class="bg-black hover:bg-[#EFF1D9] disabled:opacity-50 hover:text-black text-white font-semibold py-2 px-4 rounded"
              >
                View
              </button>
            </div>
            <CusDialog :open="viewBackupCode">
              <BackUpCode
                :dataBackUpCode="
                  dataGenerateBackUpCode?.data ||
                  dataBackUpCode?.data?.backup_codes ||
                  []
                "
                @regenerate="executeGenerateBackUpCode"
                :loadingRegenerate="
                  statusGenerateBackUpCode === 'pending' ||
                  statusBackUpCode === 'pending'
                "
                @close="() => (viewBackupCode = false)"
              />
            </CusDialog>
          </div>

          <div class="flex justify-center items-center">
            Upgrad to contributor
            <button
              @click="executeUpgradeContributor()"
              class="bg-black hover:bg-[#EFF1D9] disabled:opacity-50 hover:text-black text-white font-semibold py-2 px-4 rounded"
            >
              Active
            </button>
          </div>
          <div class="flex items-center justify-center">
            Change theme mode
            <ColorModeDropdown />
          </div>
          <div class="flex items-center justify-center">
            Change language
            <ChangeLocale />
          </div>
          <div class="flex justify-center items-center">
            Referal Link: <span>{{ referralLink }}</span>
            <button
              @click="copyLink"
              class="bg-black hover:bg-[#EFF1D9] disabled:opacity-50 hover:text-black text-white font-semibold py-2 px-4 rounded"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import CusDialog from '~/components/cusComponents/CusDialog.vue'
import QRCode from '~/components/cusComponents/QRCode.vue'
import ToggleSwitch from '~/components/cusComponents/ToggleSwitch.vue'
import { API } from '~/constants/apiEndpoints'
import OtpInput from 'vue3-otp-input'
import { ref } from 'vue'
import BackUpCode from '~/components/reset-password/BackUpCode.vue'
import ColorModeDropdown from '~/components/setting/ColorModeDropdown.vue'
import ChangeLocale from '~/components/setting/ChangeLocale.vue'
import { useApi } from '~/composables/custom-fetch-api/useApi'
const userStore = useUserStore()
const viewBackupCode = ref(false)
const otp = ref('')
const handleChange = (value: string) => {
  otp.value = value
}
definePageMeta({ colorMode: 'light' })
const referralLink = ref('')
onMounted(() => {
  const baseURL = window.location.origin
  const referralPath = '/register?affiliate='
  referralLink.value = `${baseURL}${referralPath}${userStore.userData?.referal_code}`
})
const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(referralLink.value)
    alert('Referral link copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy link: ', err)
    alert('Failed to copy the link. Please copy it manually.')
  }
}
const isTwoFaEnabled = computed({
  get() {
    return userStore.userData?.enable_two_fa ?? false
  },
  set(newValue: boolean) {
    userStore.setEnableTwoFa(newValue)
    if (newValue === true) {
      execute2Fa()
    } else {
      executeDisable2Fa()
    }
  },
})

const setUp = ref(false)
const isOn = ref(false)

function toggle() {
  isOn.value = !isOn.value
}
const config = useRuntimeConfig()
const { locale } = useI18n()
const changeTheme = ref(false)
const {
  status: status2Fa,
  execute: execute2Fa,
  data: data2Fa,
  error: errorData2Fa,
} = await useApi<I2FA.I2faRes>(
  () =>
    API.AUTH.ENABLE_2FA.replace(':type', config.public.type)
      .replace(':version', config.public.version)
      .replace(':lang', locale.value),
  {
    method: 'POST',
    watch: false,
    immediate: false,
  }
)
watch(setUp, (value, oldValue) => {
  value === true && execute2Fa()
})
const {
  status: statusUpgradeContributor,
  execute: executeUpgradeContributor,
  data: dataUpgradeContributor,
  error: errorUpgradeContributor,
} = await useApi(
  () =>
    API.AUTH.UPGRADE_CONTRIBUTOR.replace(':type', config.public.type)
      .replace(':version', config.public.version)
      .replace(':lang', locale.value),
  {
    method: 'POST',
    watch: false,
    immediate: false,
  }
)

const {
  status: statusDisable2Fa,
  execute: executeDisable2Fa,
  data: dataDisable2Fa,
  error: errorDataDisable2Fa,
} = await useApi(
  () =>
    API.AUTH.DISABLE_2FA.replace(':type', config.public.type)
      .replace(':version', config.public.version)
      .replace(':lang', locale.value),
  {
    method: 'POST',
    watch: false,
    immediate: false,
  }
)
const {
  status: statusBackUpCode,
  execute: executeBackUpCode,
  data: dataBackUpCode,
  error: errorBackUpCode,
} = await useApi<ILISTBACKUP.LIST>(
  () =>
    API.AUTH.BACKUP_CODE_LIST.replace(':type', config.public.type)
      .replace(':version', config.public.version)
      .replace(':lang', locale.value),
  {
    method: 'GET',
    immediate: false,
    watch: false,
  }
)
watch(viewBackupCode, (value, oldValue) => {
  value === true && executeBackUpCode()
})
const {
  status: statusGenerateBackUpCode,
  execute: executeGenerateBackUpCode,
  data: dataGenerateBackUpCode,
  error: errorGenerateBackUpCode,
} = await useApi<ILISTBACKUP.GenerateCode>(
  () =>
    API.AUTH.RE_GENERATE_BACK_UP_CODE.replace(':type', config.public.type)
      .replace(':version', config.public.version)
      .replace(':lang', locale.value),
  {
    method: 'POST',
    watch: false,
    immediate: false,
  }
)
onMounted(() => {
  isOn.value = userStore.userData?.enable_two_fa || false
})
const { status: statusVerify, execute: executeVerify } = useApi<IAUTH.LogRes>(
  () =>
    API.AUTH.VERIFY_2FA.replace(':type', `${config.public.type}`)
      .replace(':version', `${config.public.version}`)
      .replace(':lang', locale.value),
  {
    method: 'POST',
    body: { otp: otp, temp_token: useCookie('temp_token').value || '' },
    watch: false,
    immediate: false,
    onSuccess(data) {
      useCookie('authToken').value = data.data.token
      userStore.setEnableTwoFa(true)
      setUp.value = false
    },
    onError(error) {
      console.log('err login', error)
    },
  }
)
</script>
