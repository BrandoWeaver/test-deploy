<template>
  <div
    class="bg-white text-black mx-auto w-full 2xl:w-full rounded-t-[10px] lg:h-screen flex flex-col items-center gap-[14px]"
  >
    <div class="bg-white rounded-lg p-8 w-96 text-center">
      <h1 class="text-2xl font-bold mb-4">Email sent</h1>
      <p class="text-gray-700 mb-4">
        We sent an email to <strong>{{ email }}</strong
        >! If this email is connected to a Thortok account, you'll be able to
        reset your password.
      </p>

      <div class="flex justify-between">
        <button
          class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
          @click="handleTryAgain"
        >
          Try again
        </button>
        <NuxtLink
          :to="'/auth/login'"
          class="text-white font-semibold py-2 px-4 rounded bg-[#0D0D0D] hover:bg-[#EFF1D9] hover:text-black"
          >Back to login</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  email: string
}>()
const emit = defineEmits(['try-again'])
const handleTryAgain = () => {
  emit('try-again')
}
const email = 'srunrotha614@gmail.com'
const router = useRouter()
const tryAgain = () => {
  console.log('Trying again...')
}
const goBack = () => {
  router.push('/auth/login')
}
</script>

<style scoped></style>
