<template>
  <!-- Outer White Background Wrapper -->
  <div class="bg-white py-[32px]">
    <!-- Inner Container with Max Width and Centering -->
    <div
      class="h-full flex flex-col lg:flex-row lg:items-start w-[1440px] xl-max:w-full pt-[16px] md-max:pt-[6px] lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px]"
    >
      <!-- Left Section: Image Mockup with Light Green Background -->
      <div
        class="relative w-2/3 h-full flex justify-center items-center bg-[#F3F9E3] rounded-lg overflow-hidden"
      >
        <img
          src="@/assets/images/freelance-services/Freelance.png"
          alt="Freelance Mockup"
          class="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      <!-- Right Section: Text Content -->
      <div
        class="relative w-auto lg:w-1/3 flex flex-col gap-[24px] justify-center"
      >
        <!-- Title -->
        <h2
          class="xl:text-[52px] lg:text-[40px] md:text-[30px] sm:text-[26px] text-[22px] font-bold font-lexend leading-[150%] text-black"
        >
          <img
            src="@/assets/logo/fi-rr-edit-alt.svg"
            alt="Briefcase Icon"
            class="inline-block w-auto h-auto mr-2 object-cover"
          />

          Freelance <br />
          Services <span class="text-black font-normal"> Program</span>
        </h2>
        <p
          class="lg:text-[22px] md:text-[20px] sm:text-[18px] text-[17px] font-normal text-[#000000] font-lexend"
        >
          Offer Your Services as a Freelance Expert
        </p>

        <!-- Description -->
        <p
          class="lg:text-[17px] md:text-[15px] sm:text-[14px] text-[13px] font-light font-lexend leading-[180%px] text-gray-700"
        >
          Turn your skills into a source of income by offering freelance
          services directly on our platform. Whether you're a designer,
          developer, or creative professional, connect with clients looking for
          your expertise. We'll handle the payments, ensuring a smooth
          transaction so you can focus on delivering great results. Join the
          Freelance Services Program and start earning by providing high-quality
          services.
        </p>

        <!-- Call-to-Action Button -->
        <div>
          <button
            class="text-center w-auto h-[48px] bg-black text-[#FFFFFF] lg:text-[17px] md:text-[15px] sm:text-[14px] text-[13px] font-noto font-normal leading-[20px] px-6 py-3 rounded-md flex items-center justify-center gap-2 transition-all hover:shadow-[0px_4px_16px_0px_rgba(219,242,38,0.8)]"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
            >
              <g clip-path="url(#clip0_1220_59812)">
                <path
                  d="M16.3767 7.13389L13.6354 4.36431C13.5696 4.29792 13.4912 4.24522 13.4049 4.20926C13.3186 4.1733 13.226 4.15479 13.1325 4.15479C13.039 4.15479 12.9464 4.1733 12.8601 4.20926C12.7738 4.24522 12.6954 4.29792 12.6296 4.36431C12.4977 4.49702 12.4236 4.67655 12.4236 4.86368C12.4236 5.05082 12.4977 5.23034 12.6296 5.36306L15.1513 7.90598H0.708333C0.520472 7.90598 0.340304 7.9806 0.207466 8.11344C0.0746278 8.24628 0 8.42645 0 8.61431H0C0 8.80217 0.0746278 8.98234 0.207466 9.11518C0.340304 9.24801 0.520472 9.32264 0.708333 9.32264H15.1938L12.6296 11.8797C12.5632 11.9456 12.5105 12.0239 12.4745 12.1102C12.4386 12.1966 12.4201 12.2891 12.4201 12.3826C12.4201 12.4762 12.4386 12.5687 12.4745 12.6551C12.5105 12.7414 12.5632 12.8197 12.6296 12.8856C12.6954 12.952 12.7738 13.0046 12.8601 13.0406C12.9464 13.0766 13.039 13.0951 13.1325 13.0951C13.226 13.0951 13.3186 13.0766 13.4049 13.0406C13.4912 13.0046 13.5696 12.952 13.6354 12.8856L16.3767 10.1372C16.7746 9.73879 16.9981 9.19869 16.9981 8.63556C16.9981 8.07243 16.7746 7.53233 16.3767 7.13389Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1220_59812">
                  <rect
                    width="17"
                    height="17"
                    fill="white"
                    transform="translate(0 0.114258)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        <!-- Large Number "03" -->
        <span
          class="absolute bottom-0 right-0 text-[200px] leading-[75%] font-lexend font-bold text-[#EFF1D980] opacity-50"
        >
          03
        </span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
