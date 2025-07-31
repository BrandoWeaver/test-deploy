<template>
  <div class="bg-black w-screen text-white pt-16">
    <div
      class="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:justify-between gap-16 px-6"
    >
      <!-- Left Section: Promotional Text -->
      <div class="w-auto lg:w-[50%]">
        <h1
          class="xl:text-[52px] lg:text-[52px] md:text-[30px] sm:text-[26px] text-[22px] font-bold"
        >
          Unlock a World<br />
          of Creative Resources!
        </h1>
        <p
          class="font-normal xl:text-[22px] lg-text-[22px] md:text-[20px] sm:text-[18px] text-[17px] leading-[37px] text-[#FFFFFF] font-lexend mt-[24px]"
        >
          Sign up for free today and start exploring exclusive digital assets
          tailored for creators like you.
        </p>
        <p
          class="text-[#FFFFFF] mt-[24px] leading-[30px] text-opacity-[70%] xl:text-[17px] lg:text-[17px] md:text-[15px] sm:text-[14px] text-[13px]"
        >
          Thortok offers thousands of unique digital resources at your
          fingertips. Whether you're looking for high-quality designs,
          templates, or creative inspiration, our platform has it all.
        </p>
        <p
          class="text-[#FFFFFF] text-lg mt-[24px] leading-[30px] text-opacity-[70%] xl:text-[17px] lg:text-[17px] md:text-[15px] sm:text-[14px] text-[13px]"
        >
          By joining, you'll gain access to daily downloads, exclusive content,
          and the tools you need to elevate your projects. Don't miss out—join a
          growing community of creators today!
        </p>
        <a
          href="#"
          class="font-bold text-[#DBF226] text-lg leading-[30px] mt-6 inline-flex items-center xl:text-[17px] lg:text-[17px] md:text-[15px] sm:text-[14px] text-[13px]"
        >
          Join Now and Start Creating!
          <img
            src="@/assets/logo/fi-rr-arrow-right.svg"
            alt="Arrow Right"
            class="ml-2 w-[24px] h-[24px]"
          />
        </a>
      </div>

      <!-- Right Section: Sign-up Form -->
      <div
        class="w-auto bg-white text-[14px] font-light leading-[180%] text-black rounded-t-lg shadow-lg"
        v-if="!authStore.authenticated"
      >
        <RegisterForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FormData {
  name: string
  email: string
  subject: string
  message: string
  cv: string
  letter: string
  portfolio: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}
const authStore = useAuthStore()
const form = reactive<FormData>({
  name: '',
  email: '',
  subject: '',
  message: '',
  cv: '',
  letter: '',
  portfolio: '',
})

const errors = ref<FormErrors>({})

const validateForm = (): boolean => {
  errors.value = {}

  if (!form.name.trim())
    errors.value.name = 'Special characters are not accepted'
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.value.email = 'Please enter a valid email address'
  if (!form.subject.trim()) errors.value.subject = 'Subject is required.'
  if (!form.message.trim()) errors.value.message = 'Message is required.'

  return Object.keys(errors.value).length === 0
}
</script>

<style scoped>
.custom-heading {
  color: #fff;
  font-family: 'Lexend', sans-serif;
  font-size: 52px;
  line-height: 150%; /* Equivalent to 78px for a 52px font size */
}

.primary-link {
  color: #dbf226;
  font-weight: 600;
  text-decoration: none;
}
.primary-link:hover {
  text-decoration: underline;
}

.custom-heading {
  color: #000;
  font-family: 'Noto Sans JP', sans-serif; /* Make sure it's imported */
  font-size: 14px;
  font-style: normal;
  font-weight: 350; /* Use closest available weight */
  line-height: 1.8; /* 180% */
}
.social-button {
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
}

.social-button:hover {
  background-color: #f2f3e9; /* Slightly lighter background on hover */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow on hover */
}
.social-signin-section {
  align-content: center; /* Center content within the container */
}
</style>
