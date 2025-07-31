<template>
  <div
    class="2xl:max-w-7xl 2xl:px-0 min-h-[507px] h-full grid lg:grid-cols-12 gap-10 mx-auto px-6 py-16"
  >
    <div class="lg:col-span-7 h-full overflow-hidden rounded-[10px]">
      <NuxtImg
        src="/img/FreelanceProgram.png"
        alt="Freelance Program"
        class="w-full h-full object-cover"
        format="webp"
      />
    </div>
    <div class="lg:col-span-5 relative h-full">
      <div
        class="absolute z-0 right-0 bottom-0 leading-[150px] text-[200px] font-extrabold text-[#EFF1D980]"
      >
        03
      </div>
      <div class="flex heading items-center gap-2">
        <Freelance class="sm:w-auto w-6" />
        <h1
          class="font-[700] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[52px]"
        >
          Freelance<br />
        </h1>
      </div>
      <h1
        class="font-[700] relative text-[22px] leading-none lg:flex-nowrap sm:text-[26px] md:text-[30px] lg:text-[52px]"
      >
        Services <span class="font-[400] relative">Program</span>
      </h1>
      <h3
        class="md:text-[22px] relative text-[17px] sm:text-[20px] font-[400] py-4"
      >
        Offer Your Services as a Freelance Expert
      </h3>
      <p
        class="font-[300] xl:pr-8 relative text-[13px] sm:text-[15px] md:text-[17px]"
      >
        Turn your skills into a source of income by offering freelance services
        directly on our platform. Whether you’re a designer, developer, or
        creative professional, connect with clients looking for your expertise.
        We’ll handle the payments, ensuring a smooth transaction so you can
        focus on delivering great results. Join the Freelance Services Program
        and start earning by providing high-quality services.
      </p>
      <button
        class="py-[14px] relative leading-none mt-8 text-white px-8 rounded-[4px] text-[17px] font-[400] flex items-center gap-2 hover:shadow-[0px_4px_16px_0px_#DBF226] bg-black"
      >
        Learn more
        <RightLongArrow />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
