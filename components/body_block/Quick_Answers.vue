<template>
  <!-- Outer Wrapper with White Background -->
  <div class="bg-white py-[44px]">
    <!-- Inner Container with Max Width of 1440px -->
    <div class="w-full max-w-[1440px] mx-auto px-6 flex flex-col">
      <!-- Sidebar (Title and Navigation) -->
      <h2
        class="xl:text-[52px] lg:text-[40px] md:text-[30px] sm:text-[26px] text-[22px] font-bold mb-8"
      >
        Quick Answers<br />to Your Questions
      </h2>
      <div class="flex md:flex-row flex-col-reverse md:gap-16 gap-4">
        <div class="w-full lg:w-[180px]">
          <!-- Sidebar Navigation -->
          <nav class="space-y-4">
            <button
              class="md:block hidden w-full text-left py-3 px-4 font-semibold bg-[#005B52] text-white rounded-md xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[15px]"
            >
              About Thortok
            </button>
            <button
              class="md:block flex flex-row justify-between items-center w-full text-left py-3 px-4 font-semibold bg-[#EDEAE1] text-black rounded-md xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[15px]"
            >
              Monetization Programs
              <svg
                class="md:hidden flex"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M10.2675 6.82808L7.20751 3.76808C7.0826 3.64391 6.91364 3.57422 6.73751 3.57422C6.56139 3.57422 6.39242 3.64391 6.26751 3.76808C6.20503 3.83006 6.15543 3.90379 6.12158 3.98503C6.08774 4.06627 6.07031 4.15341 6.07031 4.24141C6.07031 4.32942 6.08774 4.41656 6.12158 4.4978C6.15543 4.57904 6.20503 4.65277 6.26751 4.71475L9.33418 7.76808C9.39666 7.83006 9.44626 7.90379 9.48011 7.98503C9.51395 8.06627 9.53138 8.15341 9.53138 8.24141C9.53138 8.32942 9.51395 8.41656 9.48011 8.4978C9.44626 8.57904 9.39666 8.65277 9.33418 8.71475L6.26751 11.7681C6.14198 11.8927 6.0711 12.0621 6.07047 12.2391C6.06985 12.416 6.13953 12.5859 6.26418 12.7114C6.38883 12.837 6.55825 12.9078 6.73515 12.9085C6.91206 12.9091 7.08198 12.8394 7.20751 12.7147L10.2675 9.65475C10.642 9.27975 10.8524 8.77142 10.8524 8.24141C10.8524 7.71141 10.642 7.20308 10.2675 6.82808Z"
                  fill="black"
                />
              </svg>
            </button>
            <button
              class="md:block flex flex-row justify-between items-center w-full text-left py-3 px-4 font-semibold text-gray-600 xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[15px]"
            >
              Participation and Content Creation
              <svg
                class="md:hidden flex"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M10.2675 6.82808L7.20751 3.76808C7.0826 3.64391 6.91364 3.57422 6.73751 3.57422C6.56139 3.57422 6.39242 3.64391 6.26751 3.76808C6.20503 3.83006 6.15543 3.90379 6.12158 3.98503C6.08774 4.06627 6.07031 4.15341 6.07031 4.24141C6.07031 4.32942 6.08774 4.41656 6.12158 4.4978C6.15543 4.57904 6.20503 4.65277 6.26751 4.71475L9.33418 7.76808C9.39666 7.83006 9.44626 7.90379 9.48011 7.98503C9.51395 8.06627 9.53138 8.15341 9.53138 8.24141C9.53138 8.32942 9.51395 8.41656 9.48011 8.4978C9.44626 8.57904 9.39666 8.65277 9.33418 8.71475L6.26751 11.7681C6.14198 11.8927 6.0711 12.0621 6.07047 12.2391C6.06985 12.416 6.13953 12.5859 6.26418 12.7114C6.38883 12.837 6.55825 12.9078 6.73515 12.9085C6.91206 12.9091 7.08198 12.8394 7.20751 12.7147L10.2675 9.65475C10.642 9.27975 10.8524 8.77142 10.8524 8.24141C10.8524 7.71141 10.642 7.20308 10.2675 6.82808Z"
                  fill="black"
                />
              </svg>
            </button>
            <button
              class="md:block flex flex-row justify-between items-center w-full text-left py-3 px-4 font-semibold text-gray-600 xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[15px]"
            >
              Account and Settings
              <svg
                class="md:hidden flex"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M10.2675 6.82808L7.20751 3.76808C7.0826 3.64391 6.91364 3.57422 6.73751 3.57422C6.56139 3.57422 6.39242 3.64391 6.26751 3.76808C6.20503 3.83006 6.15543 3.90379 6.12158 3.98503C6.08774 4.06627 6.07031 4.15341 6.07031 4.24141C6.07031 4.32942 6.08774 4.41656 6.12158 4.4978C6.15543 4.57904 6.20503 4.65277 6.26751 4.71475L9.33418 7.76808C9.39666 7.83006 9.44626 7.90379 9.48011 7.98503C9.51395 8.06627 9.53138 8.15341 9.53138 8.24141C9.53138 8.32942 9.51395 8.41656 9.48011 8.4978C9.44626 8.57904 9.39666 8.65277 9.33418 8.71475L6.26751 11.7681C6.14198 11.8927 6.0711 12.0621 6.07047 12.2391C6.06985 12.416 6.13953 12.5859 6.26418 12.7114C6.38883 12.837 6.55825 12.9078 6.73515 12.9085C6.91206 12.9091 7.08198 12.8394 7.20751 12.7147L10.2675 9.65475C10.642 9.27975 10.8524 8.77142 10.8524 8.24141C10.8524 7.71141 10.642 7.20308 10.2675 6.82808Z"
                  fill="black"
                />
              </svg>
            </button>
            <button
              class="md:block flex flex-row justify-between items-center w-full text-left py-3 px-4 font-semibold text-gray-600 xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[15px]"
            >
              Support and Reporting
              <svg
                class="md:hidden flex"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M10.2675 6.82808L7.20751 3.76808C7.0826 3.64391 6.91364 3.57422 6.73751 3.57422C6.56139 3.57422 6.39242 3.64391 6.26751 3.76808C6.20503 3.83006 6.15543 3.90379 6.12158 3.98503C6.08774 4.06627 6.07031 4.15341 6.07031 4.24141C6.07031 4.32942 6.08774 4.41656 6.12158 4.4978C6.15543 4.57904 6.20503 4.65277 6.26751 4.71475L9.33418 7.76808C9.39666 7.83006 9.44626 7.90379 9.48011 7.98503C9.51395 8.06627 9.53138 8.15341 9.53138 8.24141C9.53138 8.32942 9.51395 8.41656 9.48011 8.4978C9.44626 8.57904 9.39666 8.65277 9.33418 8.71475L6.26751 11.7681C6.14198 11.8927 6.0711 12.0621 6.07047 12.2391C6.06985 12.416 6.13953 12.5859 6.26418 12.7114C6.38883 12.837 6.55825 12.9078 6.73515 12.9085C6.91206 12.9091 7.08198 12.8394 7.20751 12.7147L10.2675 9.65475C10.642 9.27975 10.8524 8.77142 10.8524 8.24141C10.8524 7.71141 10.642 7.20308 10.2675 6.82808Z"
                  fill="black"
                />
              </svg>
            </button>
          </nav>
        </div>

        <!-- FAQ Section -->

        <div class="w-full lg:w-3/4">
          <div class="space-y-6">
            <!-- FAQ Item - Expanded -->
            <button
              class="md:hidden flex flex-row mb-4 justify-between items-center w-full text-left py-3 px-4 font-semibold bg-[#005B52] text-white rounded-md xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[15px]"
            >
              About Thortok
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M9.41411 10.4609L12.4741 7.40087C12.5983 7.27596 12.668 7.10699 12.668 6.93087C12.668 6.75475 12.5983 6.58578 12.4741 6.46087C12.4121 6.39839 12.3384 6.34879 12.2572 6.31494C12.1759 6.2811 12.0888 6.26367 12.0008 6.26367C11.9128 6.26367 11.8256 6.2811 11.7444 6.31494C11.6631 6.34879 11.5894 6.39839 11.5274 6.46087L8.47411 9.52754C8.41213 9.59002 8.3384 9.63962 8.25716 9.67347C8.17592 9.70731 8.08878 9.72474 8.00077 9.72474C7.91277 9.72474 7.82563 9.70731 7.74439 9.67347C7.66315 9.63962 7.58941 9.59002 7.52744 9.52754L4.4741 6.46087C4.34945 6.33533 4.18004 6.26446 4.00313 6.26383C3.82622 6.26321 3.65631 6.33289 3.53077 6.45754C3.40524 6.58219 3.33436 6.7516 3.33373 6.92851C3.33311 7.10542 3.40279 7.27534 3.52744 7.40087L6.58744 10.4609C6.96244 10.8354 7.47077 11.0458 8.00077 11.0458C8.53077 11.0458 9.03911 10.8354 9.41411 10.4609Z"
                  fill="white"
                />
              </svg>
            </button>
            <div class="border-b pb-4">
              <h3
                class="xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[18px] text-[17px] font-semibold text-[#005B52] flex justify-between items-center cursor-pointer"
              >
                What is Thortok, and what does it offer?
                <span class="text-2xl">−</span>
              </h3>
              <p
                class="mt-4 text-gray-700 xl:text-[17px] lg:text-[17px] md:text-[15px] sm:text-[14px] text-[13px]"
              >
                Thortok is a digital platform that offers unique resources and
                content that creators won't find anywhere else. It provides a
                wide variety of digital assets, including graphic templates, PSD
                files, photos, and more, to help creators elevate their
                projects. Thortok also values the work of creators by offering
                multiple monetization programs, such as the Content Sharing
                Program, Content Sales Program, and Freelancer Service Program,
                allowing them to earn money and gain visibility.
              </p>
            </div>

            <!-- FAQ Item - Collapsed -->
            <div class="border-b py-4">
              <h3
                class="xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[18px] text-[17px] font-semibold text-black flex justify-between items-center cursor-pointer"
              >
                What are the core values of Thortok?
                <span class="text-2xl">+</span>
              </h3>
            </div>

            <div class="border-b py-4">
              <h3
                class="xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[18px] text-[17px] font-semibold text-black flex justify-between items-center cursor-pointer"
              >
                Who can join Thortok as a creator?
                <span class="text-2xl">+</span>
              </h3>
            </div>

            <div class="border-b py-4">
              <h3
                class="xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[18px] text-[17px] font-semibold text-black flex justify-between items-center cursor-pointer"
              >
                How does Thortok help creators monetize their content?
                <span class="text-2xl">+</span>
              </h3>
            </div>

            <div class="border-b py-4">
              <h3
                class="xl:text-[22px] lg:text-[22px] md:text-[20px] sm:text-[18px] text-[17px] font-semibold text-black flex justify-between items-center cursor-pointer"
              >
                How does Thortok differ from other content creation and
                monetization platforms?
                <span class="text-2xl">+</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
