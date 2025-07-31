<template>
  <div
    class="flex flex-col items-center justify-center w-full pt-[24px] overflow-hidden"
  >
    <Breadcrumbs
      :pad="true"
      :items="[
        { label: 'Home', to: '/' },
        { label: 'Pricing', to: '/Pricing' },
      ]"
    />
    <Pricing />
    <SecurePayment />

    <QuickAnswer
      :top-title="'Find Answers to All Your Questions'"
      :tabs="tabs"
    />
    <HaveMoreQues />
  </div>
</template>

<script setup lang="ts">
import YourTurnCreativity from '~/components/monetizationCom/YourTurnCreativity.vue'
import MonetizationOpportunities from '~/components/monetizationCom/MonetizationOpportunities.vue'
import ContentSharingProgram from '~/components/monetizationCom/ContentSharingProgram.vue'
import BestPractice from '~/components/monetizationCom/BestPractice.vue'
import AffiliateProWork from '~/components/affiliateCom/AffiliateProWork.vue'
import HowCanYouEarn from '~/components/affiliateCom/HowCanYouEarn.vue'
import Dashboard from '~/components/affiliateCom/Dashboard.vue'
import QuickAnswer from '~/components/quickAnswerCom/QuickAnswer.vue'

import WhyChooseThorttukGraphic from '~/components/affiliateCom/WhyChooseThorttukGraphic.vue'
import Breadcrumbs from '~/components/all-proCom/Breadcrumbs.vue'
import Pricing from '~/components/pricingCom/Pricing.vue'
import SecurePayment from '~/components/pricingCom/SecurePayment.vue'
import HaveMoreQues from '~/components/pricingCom/HaveMoreQues.vue'

import NeedHelpCom from '~/components/all-proCom/NeedHelpCom.vue'

const listPa = ref([
  {
    para: 'If your question wasn’t answered here, contact us directly through our help center or contact page.',
  },
  {
    para: 'Sign up today and begin monetizing your creativity with Thortok. Be part of a global platform that celebrates talent and empowers creators.',
  },
])

const tabs = ref([
  {
    title: 'General',
    questions: [
      {
        text: 'What types of subscription plans are available?',
        answer:
          'Thortok offers two main subscription plans: a free plan with limited access and a Pro plan, which provides extended access to exclusive features and benefits.',
        open: true,
      },
      {
        text: 'What is the difference between the free plan and the Pro plan?',
        answer:
          'The free plan allows up to 10 downloads per day, while the Pro plan offers unlimited downloads and additional perks, including priority support and greater revenue sharing with creators.',
        open: false,
      },
      {
        text: 'Does the Pro plan allow unlimited daily downloads?',
        answer:
          'Typically, we respoYes, with the Pro plan, users can download as many resources as they like each day, with no limits.nd within 7 to 10 days after receiving your application.',
        open: false,
      },
    ],
  },
  {
    title: 'Plan Benefits',
    questions: [
      {
        text: 'What exclusive benefits does the Pro plan offer?',
        answer:
          'The Pro plan not only provides unlimited downloads but also supports our creators. Each download from a Pro user contributes to creators earnings, encouraging them to provide more quality content.',
        open: false,
      },
      {
        text: 'Are there discounts for annual subscriptions?',
        answer:
          'Yes, by subscribing annually, you receive two free months. This allows users to enjoy the Pro plan benefits at a reduced rate throughout the year..',
        open: false,
      },
      {
        text: 'Do Pro subscribers receive priority support?',
        answer:
          'Yes, Pro members receive priority support for any questions or assistance they need, ensuring an optimal user experience.',
        open: false,
      },
    ],
  },
  {
    title: 'Payment Options',
    questions: [
      {
        text: 'Which payment methods do you accept for the Pro plan?',
        answer:
          'We accept credit cards, PayPal, and other secure methods to make subscribing as convenient as possible.',
        open: false,
      },
      {
        text: 'Is it possible to pay for the Pro plan in installments?',
        answer:
          'Currently, installment payments are not available. However, we ensure safe, secure payment options for all users.',
        open: false,
      },
      {
        text: 'Are my payment details secure?',
        answer:
          'Absolutely. Thortok uses payment systems that adhere to the highest security standards, ensuring all transactions are protected.',
        open: false,
      },
    ],
  },
  {
    title: 'Subscription Management',
    questions: [
      {
        text: 'Can I change or cancel my plan at any time?',
        answer:
          'Yes, you can change or cancel your Pro subscription anytime directly from your personal account, with no extra charges. You will have access to Pro features until the end of the contract.',
        open: false,
      },
      {
        text: 'What happens if I don’t renew my subscription?',
        answer:
          'The subscription is automatically renewed at the end of the contract. If you choose not to renew your Pro subscription, your account will revert to the free plan on the contract end date, limiting access to premium features.',
        open: false,
      },
      {
        text: 'How do I upgrade from the free plan to the Pro plan?',
        answer:
          'Upgrading from the free plan to the Pro plan is easy—just click Subscribe and follow the instructions. The upgrade is immediate, and you’ll start enjoying Pro benefits right away.',
        open: false,
      },
    ],
  },
  {
    title: 'Contributions and Support',
    questions: [
      {
        text: 'Can creators monetize their content with the free plan?',
        answer:
          'Yes, all creators can monetize their content on Thortok, including those on the free plan. However, Pro members’ downloads provide creators with additional earnings.',
        open: false,
      },
      {
        text: 'How does the Pro plan help support creators and the platform?',
        answer:
          'The Pro plan not only gives users full access to resources but also significantly supports creators. Each download from a Pro account helps creators earn income for their work and sustains the platform. By joining the Pro plan, you support a creative community that values art and culture.',
        open: false,
      },
    ],
  },
])
</script>

<style scoped></style>
