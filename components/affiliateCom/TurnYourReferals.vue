<template>
  <div
    class="2xl:px-6 w-[1440px] xl-max:w-full lg-max:w-full mx-auto px-6 md-max:px-[16px] flex lg:flex-row lgx:flex-row flex-col gap-[48px] items-start h-auto"
  >
    <div class="flex flex-col gap-[24px] xl:w-1/2 lgx:w-full lg:w-full w-full">
      <div class="px-[24px] py-[10px] bg-primary-light w-fit">
        <p
          class="font-[700] text-center lg:text-[17px] md:text-[15px] sm:text-[14px] text-[13px]"
        >
          Join the Thortok Affiliate Program
        </p>
      </div>

      <div class="flex flex-row gap-[32px] w-full h-full">
        <!-- Left Content -->
        <div
          class="flex flex-col gap-[24px] lg:w-1/2 xl:w-full mdx:w-full w-full lg:text-[30px] md:text-[24px] sm:text-[20px] text-[18px] h-full"
        >
          <p
            class="font-[500] font-lexend"
            style="
              color: #000;
              font-style: normal;
              font-weight: 500;
              line-height: 180%;
            "
          >
            Turn your referrals into earnings while supporting the creative
            community.
          </p>

          <p
            class="lg:text-[17px] md:text-[15px] sm:text-[14px] text-[13px]"
            style="
              color: #000;
              font-style: normal;
              font-weight: 300;
              line-height: 180%;
            "
          >
            At Thortok, we believe in the power of sharing and collaboration.
            The Affiliate Program is a unique opportunity to earn income by
            helping others discover our platform. Whether you're a creator, a
            blogger, or simply passionate about design, you can participate by
            sharing your promo code and get rewarded for your efforts. This
            program is not just a source of income—it’s a way to amplify our
            mission: to inspire and support creativity.
          </p>
        </div>

        <div class="h-auto w-1/2 xl:hidden lg:flex mdx:hidden hidden">
          <img
            class="h-full w-full"
            src="/img/Frame 1171276939 1440.png"
            alt=""
          />
        </div>
      </div>

      <div class="flex flex-col gap-[14px]">
        <h1
          style="
            color: #000;
            font-size: var(--Font-Size-H4, 18px);
            font-style: normal;
            font-weight: 400;
            line-height: 180%;
          "
        >
          Why become an affiliate?
        </h1>
        <div
          class="grid xl:grid-cols-1 lg:grid-cols-2 mdx:grid-cols-1 gap-[14px]"
        >
          <div
            v-for="(item, index) in whyBecome"
            class="flex flex-row gap-[14px] items-center"
            :key="index"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.64232 12.912L4.49547 19.5986L10.5005 16.4416L16.5054 19.5986L15.3586 12.912L20.2167 8.17647L13.5029 7.2009L10.5005 1.11719L7.49796 7.2009L0.78418 8.17647L5.64232 12.912ZM13.5678 12.3301L14.2919 16.5519L10.5005 14.5587L6.70902 16.5519L7.43312 12.3301L4.36578 9.34021L8.60473 8.72425L10.5005 4.88311L12.3962 8.72425L16.6351 9.34021L13.5678 12.3301Z"
                fill="black"
              />
            </svg>
            <p
              class="lg:text-[17px] md:text-[15px] sm:text-[14px] text-[13px]"
              style="
                color: #000;
                font-style: normal;
                font-weight: 700;
                line-height: 180%;
              "
            >
              {{ item.label }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="h-full lg:w-full lgx:w-1/2 w-full xl:w-1/2 xl:flex lg:hidden md:flex hidden"
    >
      <img class="h-full object-cover" src="/img/Frame 1171276939.png" alt="" />
    </div>
    <!-- new -->
    <div class="h-full w-full xl:hidden lg:hidden md:hidden flex">
      <img
        class="h-full object-cover"
        src="/img/Frame 1171276939 xl.png"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Star from '../../assets/logo/Star.svg'
const whyBecome = ref([
  {
    label: 'Competitive commission rates on every subscription.',
  },
  {
    label: 'Real-time tracking of your referrals and earnings.',
  },
  {
    label: 'Support and promotional materials to maximize your success.',
  },
  {
    label: 'Be part of a community dedicated to empowering creators.',
  },
])
</script>

<style scoped>
.right-image-container {
  height: 100%;
}
</style>
