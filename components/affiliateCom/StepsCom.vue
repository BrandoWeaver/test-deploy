<script setup>
import { ref } from 'vue'

const steps = ref([
  {
    number: 'STEP 1',
    title: 'Sign Up and Get Your Promo Code',
    description:
      'Upon registering on Thortok, every user automatically receives a unique personal promo code. This code can be shared with friends, family, or your network to invite new users to join the platform.',
  },
  {
    number: 'STEP 2',
    title: 'Earn Rewards with Every Referral',
    description:
      'When someone uses your promo code to sign up on Thortok, they must verify their identity via their phone number. Once verified, your earnings are credited to your wallet. You can accumulate rewards from both Free and Pro Plan referrals.',
  },
  {
    number: 'STEP 3',
    title: 'Use or Withdraw Your Earnings',
    description:
      'Accumulated rewards can be used on the platform without a minimum limit or withdrawn once they reach a balance of at least $10. Enjoy flexibility in managing your affiliate earnings.',
  },
  {
    number: 'STEP 4',
    title: 'Verify Your Identity for Withdrawals',
    description:
      'To transfer your earnings to a bank account, you must complete an identity verification process. This includes providing a valid identification document and completing a digital selfie video verification to ensure security and authenticity.',
  },
])
</script>

<template>
  <div class="mx-auto">
    <div
      class="flex justify-between items-start relative lg:gap-[80px] md:gap-[44px] gap-[24px] md:overflow-hidden overflow-x-auto"
    >
      <!-- Line -->
      <div
        class="w-full h-[1px] bg-[#E7E9EB] absolute top-[64px] left-0 mx-4"
      ></div>
      <div
        v-for="(step, index) in steps"
        :key="step.number"
        class="flex-1 relative min-w-[120px] overflow-x-auto"
      >
        <!-- Dot -->
        <div
          class="w-[10px] h-[10px] bg-black rounded-full absolute top-[60px] left-0 transform"
        ></div>

        <!-- Step Number -->
        <div
          style="
            color: #000;
            text-align: center;

            /* BUTTON 1 */
            font-style: normal;
            font-weight: 500;
            line-height: 180%;
          "
          class="inline-block px-[12px] py-[6px] mb-14 lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px]"
          :class="{
            'bg-primary-light': index === 0,
            'bg-green-light': index > 0,
          }"
        >
          {{ step.number }}
        </div>

        <!-- Step Title -->
        <h3
          style="
            color: #000;

            /* H5 */
            font-style: normal;
            font-weight: 700;
            line-height: 180%;
          "
          class="mb-2 lg:text-[17px] md:text-[15px] sm:text-[14px] text-[13px]"
        >
          {{ step.title }}
        </h3>

        <!-- Step Description -->
        <p
          style="
            color: #000;

            /* BODY 1 */
            font-style: normal;
            font-weight: 350;
            line-height: 180%;
          "
          class="lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px]"
        >
          {{ step.description }}
        </p>
      </div>
    </div>
  </div>
</template>
