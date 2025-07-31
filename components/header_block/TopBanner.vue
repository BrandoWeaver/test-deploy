<template>
  <div
    v-if="isBannerVisible"
    class="w-full bg-[#DBF226] flex items-center h-[55px] px-[24px] md:px-[16px] py-[11px]"
  >
    <div
      class="flex items-center justify-between w-full lg:justify-center gap-4 md:gap-2 flex-nowrap overflow-hidden"
    >
      <!-- Countdown Timer -->
      <div class="flex space-x-[2px] py-2 px-[4px] shrink-0">
        <template
          v-for="(digit, index) in formattedDigits"
          :key="`${index}-${digit}`"
        >
          <div
            v-if="digit !== ':'"
            class="flex items-center justify-center w-[18px] px-[4px] py-[6px] rounded-[4px] bg-white text-black font-noto text-[13px] lg:text-[12px] md:text-[10px] font-bold leading-[17px]"
          >
            {{ digit }}
          </div>
          <span
            v-else
            class="flex items-center justify-center text-black text-center font-noto text-[13px] font-bold leading-[17px]"
          >
            :
          </span>
        </template>
      </div>

      <!-- Message Text -->
      <div
        class="text-black font-noto text-[14px] lg-max:text-[14px] lg:leading-normal md-max:text-[10px] font-bold whitespace-nowrap overflow-hidden text-center"
        :class="{ 'md-max:w-[40%] lg:w-auto': true }"
        style="max-width: calc(100% - 50px)"
      >
        Celebrate Khmer New Year with 30% off our contributor collections!
      </div>

      <!-- Right Section (Shop Now + Close) -->
      <div class="flex items-center gap-2 shrink-0">
        <button
          class="py-[6px] px-[12px] md:px-[8px] rounded-[4px] bg-[#0D0D0D] text-white font-noto text-[13px] md:text-[10px] font-medium"
        >
          Shop Now
        </button>

        <!-- Close Button -->
        <button @click="emitClose" class="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <path
              d="M9.87832 0.121994C9.80018 0.0438814 9.69422 0 9.58373 0C9.47325 0 9.36729 0.0438814 9.28915 0.121994L5.0004 4.41074L0.711649 0.121994C0.633513 0.0438814 0.527551 0 0.417066 0C0.306581 0 0.200619 0.0438814 0.122483 0.121994C0.0443697 0.200131 0.000488281 0.306093 0.000488281 0.416578C0.000488281 0.527063 0.0443697 0.633025 0.122483 0.711161L4.41123 4.99991L0.122483 9.28866C0.0443697 9.3668 0.000488281 9.47276 0.000488281 9.58324C0.000488281 9.69373 0.0443697 9.79969 0.122483 9.87783C0.200619 9.95594 0.306581 9.99982 0.417066 9.99982C0.527551 9.99982 0.633513 9.95594 0.711649 9.87783L5.0004 5.58908L9.28915 9.87783C9.36729 9.95594 9.47325 9.99982 9.58373 9.99982C9.69422 9.99982 9.80018 9.95594 9.87832 9.87783C9.95643 9.79969 10.0003 9.69373 10.0003 9.58324C10.0003 9.47276 9.95643 9.3668 9.87832 9.28866L5.58957 4.99991L9.87832 0.711161C9.95643 0.633025 10.0003 0.527063 10.0003 0.416578C10.0003 0.306093 9.95643 0.200131 9.87832 0.121994Z"
              fill="#374957"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Props for controlling banner visibility
defineProps({
  showBanner: {
    type: Boolean,
    required: true,
  },
})

// Emit event to notify parent about the close action
const emit = defineEmits(['close-banner'])

// Local state to control banner visibility
const isBannerVisible = ref(true)

const emitClose = () => {
  emit('close-banner')
  isBannerVisible.value = false
}

// Reactive state
const oneWeekRemaining = ref(false)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

// Timer reference for cleanup
let countdownTimer = null

// Automatically adjust the target date to UTC
const localTargetDate = new Date('2026-01-01T07:00:00+07:00') // Adjusted for January 1, 2026
const targetDate = new Date(
  Date.UTC(
    localTargetDate.getFullYear(),
    localTargetDate.getMonth(),
    localTargetDate.getDate(),
    localTargetDate.getHours(),
    localTargetDate.getMinutes(),
    localTargetDate.getSeconds()
  )
)

// Function to calculate the countdown
const updateCountdown = () => {
  const now = new Date().getTime()
  const targetTime = targetDate.getTime()
  const timeLeft = Math.max(targetTime - now, 0)

  if (timeLeft > 0) {
    // Update current values
    hours.value = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
    minutes.value = Math.floor((timeLeft / (1000 * 60)) % 60)
    seconds.value = Math.floor((timeLeft / 1000) % 60)

    // Highlight if within one week
    oneWeekRemaining.value = timeLeft <= 7 * 24 * 60 * 60 * 1000
  } else {
    // Countdown has ended
    hours.value = 0
    minutes.value = 0
    seconds.value = 0

    if (countdownTimer) {
      clearInterval(countdownTimer)
      countdownTimer = null
    }
  }
}

// Computed property to format the digits with animation
const formattedDigits = computed(() => {
  const h = hours.value.toString().padStart(2, '0')
  const m = minutes.value.toString().padStart(2, '0')
  const s = seconds.value.toString().padStart(2, '0')
  return [...h, ':', ...m, ':', ...s]
})

// Start the countdown on component mount
onMounted(() => {
  const now = new Date().getTime()
  if (targetDate.getTime() <= now) {
    console.warn('Target date is in the past. Countdown cannot start.')
    return
  }
  updateCountdown() // Initial update
  countdownTimer = setInterval(updateCountdown, 1000) // Update every second
})

// Clear the interval on component unmount to avoid memory leaks
onUnmounted(() => {
  if (countdownTimer) {
    clearInterval(countdownTimer)
    countdownTimer = null
  }
})
</script>

<style scoped>
/* Slide up animation */
@keyframes slide-up {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  50% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-up {
  animation: slide-up 0.4s ease-in-out;
}

@keyframes slide-right-to-left {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.text-slide {
  animation: slide-right-to-left 1s ease-in-out;
}
</style>
