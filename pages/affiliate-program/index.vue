<template>
  <div
    class="flex flex-col items-center justify-center w-full pt-[24px] overflow-hidden"
  >
    <Breadcrumbs
      :pad="true"
      :items="[
        { label: 'Home', to: '/' },
        { label: 'Affiliate program', to: '/Affiliate program' },
      ]"
    />
    <div class="pt-[24px]">
      <TurnYourReferals />
    </div>
    <AffiliateProWork />
    <HowCanYouEarn />
    <WhyChooseThorttukGraphic />
    <Dashboard />
    <!-- <div class="py-[64px]"> -->
    <QuickAnswer :top-title="'Quick Answers to Your Questions'" :tabs="tabs" />
    <!-- </div> -->

    <NeedHelpCom
      top-title="Have More Questions?"
      link="Create your account now"
      :listPa="listPa"
    />
  </div>
</template>

<script setup lang="ts">
import TurnYourReferals from '~/components/affiliateCom/TurnYourReferals.vue'
import AffiliateProWork from '~/components/affiliateCom/AffiliateProWork.vue'
import HowCanYouEarn from '~/components/affiliateCom/HowCanYouEarn.vue'
import Dashboard from '~/components/affiliateCom/Dashboard.vue'
import QuickAnswer from '~/components/quickAnswerCom/QuickAnswer.vue'

import WhyChooseThorttukGraphic from '~/components/affiliateCom/WhyChooseThorttukGraphic.vue'
import Breadcrumbs from '~/components/all-proCom/Breadcrumbs.vue'
import NeedHelpCom from '~/components/all-proCom/NeedHelpCom.vue'

const listPa = ref([
  {
    para: 'If you couldn’t find the answer you were looking for, feel free to reach out to us through our Contact Page. Our team is ready to assist and answer all your questions. Join our community that values your dedication and rewards your efforts.',
  },
  {
    para: 'Sign up for the Thortok Affiliate Program today and start earning while sharing your passion for creativity!',
  },
])
const tabs = ref([
  {
    title: 'About the Affiliate Program',
    questions: [
      {
        text: 'What is the Thortok Affiliate Program?',
        answer:
          'The program allows you to earn commissions by sharing your personal promo code. Every registration or subscription made using your code generates earnings for you.',
        open: true,
      },
      {
        text: 'How do I join the program?',
        answer:
          'By signing up on Thortok, you automatically join the affiliate program and receive a personal affiliate code.',
        open: false,
      },
      {
        text: 'Do I need to be a creator or subscriber to participate?',
        answer: 'No, the program is open to all registered Thortok users.',
        open: false,
      },
      {
        text: 'Can I participate if I’m based outside Cambodia?',
        answer:
          'Yes, the program is global and welcomes affiliates from any country.',
        open: false,
      },
      {
        text: 'Does it cost anything to join the program?',
        answer:
          'No, participation is completely free. There are no registration or participation fees.',
        open: false,
      },
    ],
  },
  {
    title: 'Earnings and Rewards',
    questions: [
      {
        text: 'How are earnings calculated?',
        isList: [
          '$1 for every 10 registrations using your affiliate code under the free plan.',
          '$0.50 for every monthly Pro Plan subscription.',
          '$3 for every annual Pro Plan subscription.',
        ],
        open: false,
      },
      {
        text: 'When are earnings credited to my wallet?',
        answer:
          'Your earnings are credited once the referred user confirms their phone number.',
        open: false,
      },
      {
        text: 'Is there a cap on how much I can earn?',
        answer: 'No, there’s no limit to the amount you can earn.',
        open: false,
      },
      {
        text: 'Can I use my earnings to make purchases on Thortok?',
        answer:
          'Yes, you can use your earnings for purchases on the platform without any minimum requirement.',
        open: false,
      },
    ],
  },
  {
    title: 'Verification and Withdrawals',
    questions: [
      {
        text: 'What do I need to do to withdraw my earnings?',
        answer:
          'You need to accumulate at least $10 in your wallet, then submit a withdrawal request via your affiliate dashboard.',
        open: false,
      },
      {
        text: 'What documents are required for withdrawals?',
        answer:
          'You must provide a valid ID and complete a video selfie verification for identity confirmation.',
        open: false,
      },
      {
        text: 'How long does it take to process withdrawals?',
        answer:
          'Withdrawals are usually processed within 5-7 business days after verification.',
        open: false,
      },
      {
        text: 'Can I withdraw my earnings via PayPal?',
        answer:
          'Currently, withdrawals are made via bank transfer. Additional options may be introduced in the future.',
        open: false,
      },
      {
        text: 'What happens if I cannot verify my identity?',
        answer:
          'You won’t be able to withdraw your earnings until your identity is successfully verified.',
        open: false,
      },
    ],
  },
  {
    title: 'Promoting Your Affiliate Code',
    questions: [
      {
        text: 'Where can I share my affiliate code?',
        answer:
          'You can share it on social media, blogs, emails, or any other communication platforms.',
        open: false,
      },
      {
        text: 'Can I use my affiliate code in paid advertisements?',
        answer:
          'Yes, but all promotional content must comply with Thortok’s guidelines.',
        open: false,
      },
      {
        text: 'Can I share my code with friends and family?',
        answer: 'Absolutely! You can share your code with anyone.',
        open: false,
      },
      {
        text: 'Does my affiliate code have an expiration date?',
        answer:
          'No, your affiliate code remains valid as long as your account is active.',
        open: false,
      },
      {
        text: 'How can I maximize my referrals?',
        answer:
          'By creating engaging content to promote Thortok and highlighting the platform’s benefits.',
        open: false,
      },
    ],
  },
  {
    title: 'Account Security and Fraud',
    questions: [
      {
        text: 'What happens if a referred user provides a fake phone number?',
        answer:
          'Earnings will not be credited until the phone number is verified.',
        open: false,
      },
      {
        text: 'Can I create multiple accounts to boost my earnings?',
        answer:
          'No, this is considered fraudulent activity and may result in account suspension.',
        open: false,
      },
      {
        text: 'How does Thortok detect fraudulent activities?',
        answer:
          'Thortok uses advanced monitoring systems to detect suspicious behavior, such as fake accounts or manipulation.',
        open: false,
      },
      {
        text: 'What should I do if I notice suspicious activity on my account?',
        answer:
          'Use the “Report Issue” feature in your dashboard or contact our support team immediately via the contact page.',
        open: false,
      },
      {
        text: 'Can fraudulent earnings be recovered after suspension?',
        answer:
          'No, earnings obtained through fraudulent means are permanently seized.',
        open: false,
      },
    ],
  },
])
</script>

<style scoped></style>
