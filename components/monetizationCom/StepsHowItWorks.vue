<script setup>
import { ref } from 'vue'

const steps = ref([
  {
    number: 'STEP 1',
    title: 'Content Upload',

    description:
      'Upload your creations to Thortok while ensuring they meet our quality standards. Once approved, your files become available to the entire community.',
  },
  {
    number: 'STEP 2',
    title: 'Downloads Counted',
    description:
      'Each time a user downloads one of your files, it is tracked in your creator dashboard. The more downloads you get, the more revenue you earn.',
  },
  {
    number: 'STEP 3',
    title: 'Earning System',
    list: [
      {
        bold: 'Free Downloads:',
        skin: ' Users on the free plan can download a limited number of your creations. Once they reach the download limit, they’ll need to subscribe to a paid plan, increasing your potential revenue.',
      },
      {
        bold: 'Paid Downloads: ',
        skin: 'Every download made by a Pro Plan subscriber contributes directly to your earnings based on Thortok’s payout terms.',
      },
    ],
    description: '',
  },
  {
    number: 'STEP 4',
    title: 'Earnings and Payments',
    list: [
      {
        bold: '',
        skin: 'Track your revenue in real-time using your creator dashboard.',
      },
      {
        bold: '',
        skin: 'Payments are issued once your balance reaches a minimum of $10.',
      },
      {
        bold: '',
        skin: 'A small withdrawal fee may apply, depending on your payment method.',
      },
    ],
    description: '',
  },
])
</script>

<template>
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
