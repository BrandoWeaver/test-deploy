<template>
  <div
    class="2xl:px-6 w-[1440px] xl-max:w-full lg-max:w-full mx-auto px-6 md-max:px-[16px]"
  >
    <div class="flex flex-col gap-[24px]">
      <p
        class="text-[#000] xl:text-[30px] xl-max:text-[30px] lg-max:text-[24px] md-max:text-[20px] sm-max:text-[18px] font-lexend font-medium"
      >
        Fill in the application form
      </p>

      <p
        style="
          color: #000;

          /* SUBTILE */
          font-style: normal;
          font-weight: 350;
          line-height: 180%; /* 27px */
        "
        class="lg:text-[15px] md:text-[14px] text-[13px]"
      >
        To apply for this position, please complete the application form below.
        Make sure to provide all the required information, including your CV and
        any relevant portfolio or supporting documents. We’re excited to learn
        more about you and your potential contribution to the Thortok team!
      </p>
    </div>
    <div class="py-[32px]">
      <div
        class="h-auto border border-[#757575] rounded-[10px] xl:p-[40px] xl-max:p-[40px] lg-max:p-[40px] md-max:p-[32px] sm-max:p-[24px]"
      >
        <form @submit.prevent="handleSubmit" class="">
          <!-- Name Field -->
          <div class="flex flex-col gap-[44px]">
            <div
              class="flex sm:flex-col md:flex-row lg:flex-row xl:flex-row flex-col items-center w-full gap-6"
            >
              <CusBaseInput
                v-model="form.name"
                label="Your Name"
                type="text"
                placeholder="Oudom"
                :errorMessage="errors.name"
              />
              <CusBaseInput
                v-model="form.email"
                label="Your Email"
                type="email"
                placeholder="oudom@gmail.com"
                :errorMessage="errors.name"
              />
            </div>
            <div
              class="flex gap-[24px] xl:flex-row xl-max:flex-row lg-max:flex-row md-max:flex-col sm-max:flex-col"
            >
              <CusBaseInput
                v-model="form.cv"
                label="Your CV"
                type="file"
                placeholder="Supported format: PDF (Max 50MB)"
                :errorMessage="errors.name"
                :isCurrentUpload="isCurrentUpload === 'cv'"
                @click="isCurrentUpload = 'cv'"
              />
              <CusBaseInput
                v-model="form.letter"
                label="Your Cover Letter"
                type="file"
                placeholder="Supported format: PDF (Max 50MB)"
                :errorMessage="errors.name"
                :isCurrentUpload="isCurrentUpload === 'letter'"
                @click="isCurrentUpload = 'letter'"
              />
              <CusBaseInput
                v-model="form.portfolio"
                label="Porfolio / Other"
                type="file"
                placeholder="your-file-here.PDF"
                :errorMessage="errors.name"
                :isCurrentUpload="isCurrentUpload === 'portfolio'"
                @click="isCurrentUpload = 'portfolio'"
              />
              <!-- <CusBaseInput
                class="md:flex hidden"
                v-model="form.letter"
                label="Your Cover Letter"
                type="file"
                placeholder="Supported format: PDF (Max 50Mo)"
                :errorMessage="errors.name"
              />
              <CusBaseInput
                class="lg:flex hidden"
                v-model="form.portfolio"
                label="Porfolio / Other"
                type="file"
                placeholder="your-file-here.PDF"
                :errorMessage="errors.name"
              /> -->
            </div>

            <!-- <div class="lg:hidden flex">
              <CusBaseInput
                v-model="form.portfolio"
                label="Porfolio / Other"
                type="file"
                placeholder="your-file-here.PDF"
                :errorMessage="errors.name"
              />
            </div>
            <div class="lg:hidden flex">
              <CusBaseInput
                v-model="form.portfolio"
                label="Porfolio / Other"
                type="file"
                placeholder="your-file-here.PDF"
                :errorMessage="errors.name"
              />
            </div> -->

            <div class="flex flex-col gap-[16px]">
              <CusBaseInput
                v-model="form.subject"
                label="Subject"
                type="text"
                placeholder="Apply for the position General Accountant"
                :errorMessage="errors.name"
              />
              <CusBaseInput
                v-model="form.message"
                label="Write us your message"
                type="textarea"
                placeholder="How does your platform ensure that my payment and personal information are kept secure?"
                :errorMessage="errors.name"
              />
            </div>
          </div>

          <div
            class="flex flex-col md:flex-row sm-max:gap-4 items-center justify-between w-full pt-[44px]"
          >
            <div class="w-auto h-auto">
              <img
                src="/img/Capture d’écran 2024-10-29 à 19.59.46 1.png"
                alt=""
                class="w-[301px] h-[74px]"
              />
            </div>
            <button
              type="submit"
              class="hover:shadow-[0px_4px_16px_0px_#DBF226] text-sm px-10 py-4 bg-[#212121] rounded-md shadow justify-end items-center text-white md:w-fit w-full whitespace-nowrap"
            >
              Apply for this job
            </button>
          </div>
        </form>
      </div>

      <p
        style="
          color: #000;

          /* DETAILS */
          font-style: normal;
          font-weight: 300;
          line-height: 180%; /* 19.8px */
        "
        class="pt-[32px] lg:text-[11px] md:text-[10px] sm:text-[9px] text-[8px]"
      >
        Thortok, based in Cambodia, will process your data to respond to your
        inquiries, suggestions, or complaints, based on your consent provided by
        clicking the "Apply for this job" button. Your information will not be
        shared with third parties but may be transferred outside your
        jurisdiction in accordance with our Privacy Policy. To learn more about
        your rights, revoke consent, or access additional details, please refer
        to our Privacy Policy.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import CusBaseInput from '../cusComponents/CusBaseInput.vue'

interface JobDetail {
  key: string
  value: string
}

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

const discoverJob = ref<JobDetail[]>([
  {
    key: 'Location',
    value: 'Head office in Phnom Penh',
  },
  {
    key: 'Type of contract',
    value: 'Permanent',
  },
  {
    key: 'Salary',
    value: '$12,480 gross per year with 13th month bonus',
  },
  {
    key: 'Reports to',
    value: 'Chief Operating Officer (COO)',
  },
])

const form = reactive<FormData>({
  name: '',
  email: '',
  subject: '',
  message: '',
  cv: '',
  letter: '',
  portfolio: '',
})
const isCurrentUpload = ref('')
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

const handleSubmit = () => {
  if (validateForm()) {
    alert('Form submitted successfully!')
    console.log(form)

    // Reset form fields
    Object.assign(form, {
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
}
</script>

<style scoped></style>
