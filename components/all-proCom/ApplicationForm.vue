<template>
  <div class="max-w-7xl mx-auto 2xl:px-0 py-6 px-4">
    <div class="Section flex-col items-start gap-8 inline-flex w-full">
      <div class="flex-col items-start gap-8 flex w-full">
        <div class="inline-flex flex-col">
          <div
            class="grow shrink basis-0 text-black text-3xl font-medium leading-[54px]"
          >
            Fill in the application form
          </div>
          <p
            class="lg:text-[17px] text-[13px] sm:text-sm md:text-[15px] leading-[23px] sm:leading-6 md:leading-[27px] lg:leading-[30px] font-[300] pt-3"
          >
            To apply for this position, please complete the application form
            below. Provide all required information, including your CV and any
            relevant documents.
          </p>
        </div>
        <form
          @submit.prevent="handleSubmit"
          class="p-6 esm:p-10 rounded-[10px] border-[#BDBDBD] border-[1px] flex-col items-start gap-11 flex w-full"
        >
          <!-- Name & Email -->
          <div class="flex flex-col esm:flex-row items-center w-full gap-6">
            <div class="Input relative flex-col items-start inline-flex w-full">
              <label
                class="absolute left-4 top-0 Label px-2 bg-white text-[#757575]"
              >
                Your Name
              </label>
              <input
                v-model="form.name"
                type="text"
                placeholder="Enter your name"
                class="px-6 py-3.5 mt-3 rounded-md border border-[#bdbdbd] w-full"
              />
              <span
                v-if="errors.name"
                class="text-red-500 text-xs mt-2 flex gap-2 items-center"
              >
                <img src="../public/img/Calque 1.svg" alt="" />
                {{ errors.name }}
              </span>
            </div>
            <div class="Input relative flex-col items-start inline-flex w-full">
              <label
                class="absolute left-4 top-0 Label px-2 bg-white text-[#757575]"
              >
                Your Email
              </label>
              <input
                v-model="form.email"
                type="email"
                placeholder="Enter your email"
                class="px-6 py-3.5 mt-3 rounded-md border border-[#bdbdbd] w-full"
              />
              <span
                v-if="errors.email"
                class="text-red-500 text-xs mt-2 flex gap-2 items-center"
              >
                <img src="../public/img/Calque 1.svg" alt="" />
                {{ errors.email }}
              </span>
            </div>
          </div>
          <!-- Optional Fields -->
          <div class="flex flex-col esm:flex-row items-center w-full gap-6">
            <div class="Input relative flex items-center w-full">
              <label
                class="absolute left-4 top-0 Label px-2 bg-white text-[#757575]"
              >
                Your CV
              </label>
              <input type="file" id="cv" class="hidden" accept=".pdf" />
              <div
                class="flex items-center px-6 py-3.5 mt-3 rounded-md border border-[#bdbdbd] w-full"
              >
                <span id="cv" class="text-[#757575] w-full text-sm"
                  >Supported format: PDF (Max 50MB)</span
                >
                <label
                  for="cv"
                  class="ml-4 px-4 py-2 bg-[#DBF226] rounded-md hover:bg-[#EFF1D9] transition"
                >
                  Upload
                </label>
              </div>
            </div>
            <div class="Input relative flex items-center w-full">
              <label
                class="absolute left-4 top-0 Label px-2 bg-white text-[#757575]"
              >
                Your Cover Letter
              </label>
              <input type="file" id="Cover" class="hidden" accept=".pdf" />
              <div
                class="flex items-center px-6 py-3.5 mt-3 rounded-md border border-[#bdbdbd] w-full"
              >
                <span id="Cover" class="text-[#757575] w-full text-sm"
                  >your-file-here.PDF</span
                >
                <label
                  for="Cover"
                  class="ml-4 px-4 py-2 bg-[#DBF226] rounded-md hover:bg-[#EFF1D9] transition"
                >
                  Upload
                </label>
              </div>
            </div>
            <div
              class="Input relative flex items-center w-full esm:hidden smm:flex"
            >
              <label
                class="absolute left-4 top-0 Label px-2 bg-white text-[#757575]"
              >
                Porfolio / Other
              </label>
              <input type="file" id="portfolio" class="hidden" accept=".pdf" />
              <div
                class="flex items-center px-6 py-3.5 mt-3 rounded-md border border-[#bdbdbd] w-full"
              >
                <span id="fileName" class="text-[#757575] w-full text-sm"
                  >your-file-here.PDF</span
                >
                <label
                  for="portfolio"
                  id="portfolio"
                  class="ml-4 px-4 py-2 bg-[#DBF226] rounded-md hover:bg-[#EFF1D9] transition"
                >
                  Upload
                </label>
              </div>
            </div>
          </div>

          <div
            class="Input relative items-center w-full hidden esm:flex smm:hidden"
          >
            <label
              class="absolute left-4 top-0 Label px-2 bg-white text-[#757575]"
            >
              Porfolio / Other
            </label>
            <input type="file" id="portfolio-2" class="hidden" accept=".pdf" />
            <div
              class="flex items-center px-6 py-3.5 mt-3 rounded-md border border-[#bdbdbd] w-full"
            >
              <span id="fileName" class="text-[#757575] w-full text-sm"
                >your-file-here.PDF</span
              >
              <label
                for="portfolio-2"
                id="portfolio"
                class="ml-4 px-4 py-2 bg-[#DBF226] rounded-md hover:bg-[#EFF1D9] transition"
              >
                Upload
              </label>
            </div>
          </div>
          <!-- Subject -->
          <div class="Input relative flex-col items-start inline-flex w-full">
            <label
              class="absolute left-4 top-0 Label px-2 bg-white text-[#757575]"
            >
              Select a Subject
            </label>
            <input
              v-model="form.subject"
              type="text"
              placeholder="E.g., Apply for General Accountant position"
              class="px-6 py-3.5 mt-3 rounded-md border border-[#bdbdbd] w-full"
            />
            <span
              v-if="errors.subject"
              class="text-red-500 text-xs mt-2 flex gap-2 items-center"
            >
              <img src="../public/img/Calque 1.svg" alt="" />
              {{ errors.subject }}
            </span>
          </div>
          <!-- Message -->
          <div class="Input relative flex-col items-start inline-flex w-full">
            <label
              class="absolute left-4 top-0 Label px-2 bg-white text-[#757575]"
            >
              Write us your message
            </label>
            <textarea
              v-model="form.message"
              placeholder="How can you contribute to the team?"
              class="px-6 h-40 py-3.5 mt-3 rounded-md border border-[#bdbdbd] w-full"
            ></textarea>
            <span
              v-if="errors.message"
              class="text-red-500 text-xs mt-2 flex gap-2 items-center"
            >
              <img src="../public/img/Calque 1.svg" alt="" />
              {{ errors.message }}
            </span>
          </div>
          <!-- Submit -->
          <div
            class="flex flex-col esm:flex-row esm:items-center justify-between w-full"
          >
            <div class="w-full text-gray-500">[Captcha Placeholder]</div>
            <button
              type="submit"
              class="text-sm px-16 py-3 bg-[#212121] rounded-md shadow text-white"
            >
              Send
            </button>
          </div>
        </form>
        <p
          class="lg:text-[12px] text-[13px] sm:text-sm md:text-[15px] font-[300] pt-3"
        >
          Thortok, based in Cambodia, will process your data to respond to your
          inquiries, suggestions, or complaints, based on your consent provided
          by clicking the "Apply for this job" button. Your information will not
          be shared with third parties but may be transferred outside your
          jurisdiction in accordance with our Privacy Policy. To learn more
          about your rights, revoke consent, or access additional details,
          please refer to our Privacy Policy.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = ref({})

const validateForm = () => {
  errors.value = {}
  if (!form.value.name) errors.value.name = 'Name is required.'
  if (!form.value.email) errors.value.email = 'Email is required.'
  if (!form.value.subject) errors.value.subject = 'Subject is required.'
  if (!form.value.message) errors.value.message = 'Message is required.'
  if (!form.value.cv) errors.value.cv = 'Please upload your CV.'
  if (!form.value.Cover) errors.value.Cover = 'Please upload your Cover Letter.'
  return Object.keys(errors.value).length === 0
}

const handleSubmit = () => {
  if (validateForm()) {
    alert('Form submitted successfully!')
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
      cv: '',
      Cover: '',
    }
  }
}
</script>
