<script setup>
import { ref } from 'vue'

const steps = ref([
  {
    number: 'STEP 1',
    title: 'Create and Upload Content',
    list: [
      {
        bold: '',
        skin: 'Register as a contributor and upload high-quality, original digital content.',
      },
      {
        bold: '',
        skin: 'Register as a contributor and upload high-quality, original digital content.',
      },
    ],
    description: '',
  },
  {
    number: 'STEP 2',
    title: 'Set Pricing and Licensing Terms',
    list: [
      {
        bold: '',
        skin: 'Choose pricing that reflects the value of your work.',
      },
      {
        bold: '',
        skin: 'Define licensing options (e.g., standard, extended) for various usage scenarios.',
      },
    ],
    description: '',
  },
  {
    number: 'STEP 3',
    title: 'Get Approved and Go Live',
    list: [
      {
        bold: '',
        skin: 'After a quality review by the Thortok team, your content will be published on the platform.',
      },
      {
        bold: '',
        skin: 'Buyers can browse, purchase, and download your products instantly.',
      },
    ],
    description: '',
  },
  {
    number: 'STEP 4',
    title: 'Earn and Get Paid',
    list: [
      {
        bold: '',
        skin: 'Earn 85% of each sale after platform commissions.',
      },
      {
        bold: '',
        skin: 'Payments are made monthly once your earnings reach the minimum withdrawal threshold of $10.',
      },
    ],
    description: '',
  },
])
</script>

<template>
  <div class="flex flex-col gap-[14px]">
    <h1
      style="
        color: #000;
        font-style: normal;
        font-weight: 700;
        line-height: 180%;
      "
      class="text-[20px]"
    >
      How It Works?
    </h1>
  </div>
  <div class="relative">
    <div
      class="w-full h-[1px] bg-black absolute top-[64px] left-0 right-0"
    ></div>

    <div
      class="flex justify-between items-start lg:gap-[80px] md:gap-[44px] gap-[24px] md:overflow-hidden overflow-x-auto"
    >
      <div
        v-for="(step, index) in steps"
        :key="step.number"
        class="flex-1 relative min-w-[140px]"
      >
        <div
          class="w-[10px] h-[10px] bg-black rounded-full absolute top-[60px] left-0 transform"
        ></div>
        <div
          style="
            color: #000;
            text-align: center;
            font-style: normal;
            font-weight: 500;
            line-height: 180%;
          "
          class="inline-block border border-[#eee] rounded-[4px] px-[12px] py-[6px] mb-14 lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px]"
          :class="{
            'bg-primary-light': index === 0,
            'bg-[#fff]': index > 0,
          }"
        >
          {{ step.number }}
        </div>
        <h3
          style="
            color: #000;
            font-style: normal;
            font-weight: 700;
            line-height: 180%;
          "
          class="mb-2 lg:text-[17px] md:text-[15px] sm:text-[14px] text-[13px]"
        >
          {{ step.title }}
        </h3>
        <p
          v-if="step.description !== ''"
          style="
            color: #000;
            font-style: normal;
            font-weight: 350;
            line-height: 180%;
          "
          class="lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px]"
        >
          {{ step.description }}
        </p>

        <ul v-else class="flex flex-col gap-[24px] list-disc list-outside pl-5">
          <li
            v-for="(item, i) in step.list"
            :key="i"
            class="lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px]"
          >
            <strong>{{ item.bold }}</strong> {{ item.skin }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
