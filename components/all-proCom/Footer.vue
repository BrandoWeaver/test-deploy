<template>
  <div class="">
    <div class="py-[11px] bg-[#DBF226]">
      <marquee behavior="scroll" class="" direction="left">
        <div
          class="font-[700] text-[12px] sm:text-[14px] md:text-[17px] inline-flex gap-8 items-center whitespace-nowrap"
        >
          Illustrators
          <div class="sm:w-6 w-4 h-[2px] shrink-0 bg-[#374957]"></div>
          Web Designers
          <div class="sm:w-6 w-4 h-[2px] shrink-0 bg-[#374957]"></div>
          Freelance Creatives
          <div class="sm:w-6 w-4 h-[2px] shrink-0 bg-[#374957]"></div>
          Interior Designers
          <div class="sm:w-6 w-4 h-[2px] shrink-0 bg-[#374957]"></div>
          Social Media Content Creators
          <div class="sm:w-6 w-4 h-[2px] shrink-0 bg-[#374957]"></div>
        </div>
      </marquee>
    </div>
    <footer class="bg-[#0D0D0D]">
      <div
        class="2xl:max-w-7xl 2xl:px-0 pt-16 pl-4 px-4 2xl:px-0 2xl:pl-4 md:px-6 mx-auto"
      >
        <div class="text-white border-b border-[#4b4b4b] font-sans">
          <div class="grid lg:grid-cols-12 gap-6">
            <div class="lg:col-span-5 h-full flex flex-col justify-center">
              <h1
                class="text-5xl heading 2xl:text-5xl font-bold text-white mb-4"
              >
                Unlock a World of<br />
                Creative Resources!
              </h1>
              <p class="text-gray-300 xl:text-[22px] font-[400] mb-6">
                Sign up for free today and start exploring exclusive digital
                assets tailored for creators like you.
              </p>
              <p class="text-gray-300 xl:text-[17px] font-[300] mb-6">
                Thortok offers thousands of unique digital resources at your
                fingertips. Whether you're looking for high-quality designs,
                templates, or creative inspiration, our platform has it all.
              </p>
              <p class="text-gray-300 xl:text-[17px] font-[300] mb-6">
                By joining, you'll gain access to daily downloads, exclusive
                content, and the tools you need to elevate your projects. Don't
                miss out—join a growing community of creators today!
              </p>
              <a href="#" class="text-[#DBF226] flex gap-3 font-semibold">
                Join Now and Start Creating
                <span class="mt-1">
                  <RightLongArrow />
                </span>
              </a>
            </div>
            <div class="sm:px-4 lg:col-span-7">
              <form
                class="bg-white text-black mx-auto w-full 2xl:w-full p-4 md:p-7 xl:p-10 rounded-t-[10px]"
              >
                <p class="text-sm font-[350]">START WITH THE FREE PLAN</p>
                <div
                  class="flex sm:flex-row flex-col sm:items-center xl:flex-nowrap flex-wrap md:flex-nowrap lg:flex-wrap mt-2 justify-between gap-2"
                >
                  <h1 class="font-[400] whitespace-nowrap w-fit text-[22px]">
                    Create an account with
                  </h1>
                  <div
                    class="grid w-full items-center justify-between grid-cols-3 gap-1.5"
                  >
                    <button
                      class="py-1.5 w-full shrink-0 rounded-[6px] px-6 bg-[#EFF1D9] flex gap-1.5 items-center justify-center"
                    >
                      <span class="shrink-0"><Google /></span>
                      <p class="font-[350] text-[12px]">Google</p>
                    </button>
                    <button
                      class="py-1.5 w-full border shrink-0 border-[#EFF1D9] rounded-[6px] px-6 flex gap-1.5 items-center justify-center"
                    >
                      <span class="shrink-0"> <Telegram /> </span>

                      <p class="font-[350] text-[12px]">Telegram</p>
                    </button>
                    <button
                      class="py-1.5 w-full border shrink-0 border-[#EFF1D9] rounded-[6px] px-6 flex gap-1.5 items-center justify-center"
                    >
                      <span class="shrink-0"><Apple /></span>

                      <p class="font-[350] text-[12px]">Apple</p>
                    </button>
                  </div>
                </div>
                <div class="relative py-10">
                  <div class="w-full bg-[#E0E0E0] h-[2px]"></div>
                  <div
                    class="px-[34px] absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 bg-white w-fit font-[700] text-[14px]"
                  >
                    Or
                  </div>
                </div>
                <div class="grid sm:grid-cols-2 gap-5">
                  <div class="">
                    <div class="relative">
                      <input
                        type="text"
                        id="username"
                        class="peer border border-[#BDBDBD] py-[14px] px-4 rounded-[6px] w-full placeholder-transparent focus:border-[#757575] outline-none"
                        placeholder="Username"
                        autocomplete="username"
                      />
                      <label
                        for="username"
                        class="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-[#757575] font-[350] text-[13px] px-2 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[#BDBDBD] peer-focus:top-0 peer-focus:translate-y-[-50%] peer-focus:text-[#757575]"
                      >
                        Username
                      </label>
                    </div>
                    <!-- <div class="flex mt-3 items-center gap-2">
                      <Warning />
                          <h1 class="text-sm text-[#C12920]">Special characters are not accepted</h1>
                  </div> -->
                  </div>

                  <div class="">
                    <div class="relative">
                      <input
                        type="email"
                        id="Email"
                        class="peer border border-[#BDBDBD] py-[14px] px-4 rounded-[6px] w-full placeholder-transparent focus:border-[#757575] outline-none"
                        placeholder="Email"
                      />
                      <label
                        for="Email"
                        class="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-[#757575] font-[350] text-[13px] px-2 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[#BDBDBD] peer-focus:top-0 peer-focus:translate-y-[-50%] peer-focus:text-[#757575]"
                      >
                        Email
                      </label>
                    </div>
                    <!-- <div class="flex mt-3 items-center gap-2">
                      <Warning />
                          <h1 class="text-sm text-[#C12920]">Please enter a valid email address</h1>
                  </div> -->
                  </div>
                </div>
                <div class="my-5">
                  <div class="relative">
                    <input
                      :type="showPassword ? 'text' : 'password'"
                      id="password"
                      class="peer border border-[#BDBDBD] py-[14px] px-4 rounded-[6px] w-full placeholder-transparent focus:border-[#757575] outline-none"
                      placeholder="password"
                    />
                    <label
                      for="password"
                      class="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-[#757575] font-[350] text-[13px] px-2 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[#BDBDBD] peer-focus:top-0 peer-focus:translate-y-[-50%] peer-focus:text-[#757575]"
                    >
                      Password (min. 8 char)
                    </label>
                    <div
                      class="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer"
                      @click="togglePasswordVisibility"
                    >
                      <Eye v-if="!showPassword" />
                      <UnEye v-else />
                    </div>
                  </div>
                  <!-- <div class="flex mt-3 items-center gap-2">
                  <Warning />
                      <h1 class="text-sm text-[#C12920]">Please enter a password with at least 8 characters</h1>
              </div> -->
                </div>
                <NuxtImg
                  src="/img/formCloudfare.png"
                  alt="Form Cloudflare"
                  width="auto"
                  height="56"
                  class="w-full h-14 object-contain"
                  format="webp"
                />

                <button
                  class="py-[14px] w-full text-center justify-center leading-none my-5 text-white px-8 rounded-[4px] text-[17px] font-[400] flex items-center gap-2 hover:shadow-[0px_4px_16px_0px_#DBF226] bg-black"
                >
                  GET STARTED
                </button>

                <div class="mt-10">
                  <p class="text-[#757575] font-[350] text-sm">
                    By joining, you agree to the
                    <a href="#" class="underline">Terms</a> and
                    <a href="#" class="underline">Privacy Policy</a>.
                  </p>
                  <h3 class="text-sm mt-3 text-[#212121] font-[350]">
                    Already have an account?
                    <a href="#" class="hover:underline">LOGIN HERE</a>
                  </h3>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="text-gray-400 mt-10">
          <div class="max-w-7xl mx-auto py-10">
            <div class="md:grid grid-cols-2 gap-10 xl:gap-0 md:justify-between">
              <div class="mb-8 md:mb-0">
                <h2 class="text-white text-[30px] font-bold mb-4">thortok</h2>
                <div class="flex items-center gap-3 mb-6">
                  <Instagram />
                  <TikTok />
                  <Facebook />
                  <Youtube />
                  <LinkedIn />
                  <Pinterest />
                </div>
                <p class="text-white">
                  Be the first to discover our updates, subscribe now!
                </p>
                <form class="mt-4">
                  <div class="flex relative w-[85%]">
                    <input
                      type="text"
                      placeholder="Your Email"
                      class="py-2.5 pl-10 pr-10 rounded-[6px] bg-[#383838] w-full"
                    />
                    <div class="absolute -translate-y-1/2 top-1/2 left-3">
                      <Email />
                    </div>
                    <div class="absolute top-1/2 -translate-y-1/2 right-1.5">
                      <button
                        class="py-2 px-[14px] rounded-[4px] bg-[#DBF226] text-sm font-medium text-black"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
                <p class="text-sm mt-2">
                  Unsubscribe at any time.
                  <a href="#" class="text-gray-300 underline">Privacy Policy</a>
                </p>
              </div>

              <div
                class="grid grid-cols-2 font-[300] text-white text-sm sm:grid-cols-4 md:grid-cols-2 gap-x-6 gap-y-10 xl:grid-cols-4"
              >
                <div>
                  <h3 class="text-white font-bold mb-6">Information</h3>
                  <ul class="space-y-3">
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >About Us</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >Our Products</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >Our Pricing & Plans</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >Careers</a
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-white font-bold mb-6">Discover</h3>
                  <ul class="space-y-3">
                    <li>
                      <a
                        href="#"
                        class="hover:underline whitespace-nowrap underline-offset-4 hover:text-gray-200"
                        >Calendar of Festivities</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >Popular Searches</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >Become a Contributor</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >Affiliate Program</a
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-white font-bold mb-6">Support</h3>
                  <ul class="space-y-3">
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >Contact</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >Our Forum</a
                      >
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-white font-bold mb-6">Legal</h3>
                  <ul class="space-y-3">
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >Terms & Conditions</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >Privacy Policy</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="hover:underline underline-offset-4 hover:text-gray-200"
                        >License</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-black relative text-white px-4 py-8 md:py-4 lg:px-6">
        <div
          class="2xl:max-w-7xl px-4 md:px-6 mx-auto flex md:flex-row flex-col-reverse items-center justify-between gap-3"
        >
          <p class="text-[11px] sm:text-left font-[300] text-center">
            © 2024 Thortok Trademarks and brands are the property of their
            respective owners.
          </p>
          <div
            class="bg-[#DBF226] -rotate-90 absolute top-0 left-[50%] lg:left-0 lg:translate-x-0 -translate-x-1/2 lg:top-0 lg:translate-y-0 -translate-y-[50%] lg:relative shadow-[0px_4px_16px_0px_#0000001A] cursor-pointer size-10 rounded-full flex items-center justify-center"
          >
            <Arrow />
          </div>
          <div
            class="flex whitespace-nowrap md:text-sm text-[8px] md:flex-nowrap font-light items-center text-[#EDEDED] gap-4"
          >
            <a
              href="#"
              class="hover:border-[#EDEDED] border-transparent border-b"
              >Privacy</a
            >
            <a
              href="#"
              class="hover:border-[#EDEDED] border-transparent border-b"
              >Terms of Use</a
            >
            <a
              href="#"
              class="hover:border-[#EDEDED] border-transparent border-b"
              >Cookie</a
            >
            <button
              class="border flex items-center gap-2 border-[#787878] bg-[#383838] rounded-[6px] p-2 text-white"
            >
              English
              <div class="overflow-hidden rounded-full w-fit h-fit">
                <Flag />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script lang="ts" setup>
const showPassword = ref(false) // Initial state of password visibility
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value // Toggle between true and false
}
</script>
