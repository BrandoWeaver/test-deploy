<template>
  <div
    class="w-full pt-[14px] xl:pt-[14px] xl-max:pt-[14px] lg-max:pt-[8px] md-max:py-[8px] sm-max:py-[8px] overflow-hidden"
  >
    <!-- <Breadcrumbs
      :pad="true"
      :items="[
        { label: 'Home', to: '/' },
        { label: 'Monetization program', to: '/monetization program' },
      ]"
    /> -->
    <nav
      class="w-[1440px] xl-max:w-full lg-max:w-full mx-auto md:py-4 xs:py-2 text-[11px] lg-max:text-[10px] md-max:text-[9px] sm-max:text-[8px] text-black/50 font-light leading-[19px] lg-max:leading-[18px] md-max:leading-[16.2px] sm-max:leading-[14.4px] flex flex-wrap item-start gap-[8px] xl:px-[24px] xl-max:px-[24px] lg-max:px-[24px] md-max:px-[16px] sm-max:px-[16px]"
    >
      <NuxtLink to="/" class="hover:text-black transition-colors">Home</NuxtLink
      ><span>/</span>
      <NuxtLink to="/monetization" class="hover:text-black transition-colors"
        >Monetization program</NuxtLink
      >
    </nav>
    <YourTurnCreativity />
    <MonetizationOpportunities />
    <ContentSharingProgram />
    <BestPractice />
    <QuickAnswer :top-title="'Quick Answers to Your Questions'" :tabs="tabs" />
    <NeedHelpCom
      top-title="Need More Help?"
      link="Create your account now"
      :listPa="listPa"
    />

    <!-- <AffiliateProWork />
    <HowCanYouEarn />
    <WhyChooseThorttukGraphic />
    <Dashboard />
    <QuickAnswer :top-title="'Quick Answers to Your Questions'" :tabs="tabs" />

    <NeedHelpCom
      top-title="Have more questions?"
      des="If you have a question that wasn’t answered in our FAQ, don’t hesitate to reach out to us. We’re here to help! Simply fill out the form below, and our support team will get back to you as soon as possible."
      link="Ask us your question"
    /> -->
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
    title: 'General Information',
    questions: [
      {
        text: 'What is the Thortok Monetization Program?',
        answer:
          'The Thortok Monetization Program allows creators to earn money by sharing, selling, and/or promoting their digital content through various monetization models, including the Content Sharing Program and Sell Content Program.',
        open: true,
      },
      {
        text: 'Who can join the Monetization Program?',
        answer:
          'Anyone with a verified Thortok account can participate, whether they are digital artists, photographers, musicians, or 3D designers.',
        open: false,
      },
      {
        text: 'Is there a registration fee?',
        answer:
          'No, joining Thortok and participating in its monetization programs is completely free.',
        open: false,
      },
      {
        text: 'Can I participate in more than one program simultaneously?',
        answer:
          'Yes, creators can participate in multiple programs at the same time to maximize their earnings.',
        open: false,
      },
      {
        text: 'How do I start monetizing my content?',
        answer:
          "Sign up for a free account, verify your profile, and submit your content following Thortok's quality guidelines.",
        open: false,
      },
    ],
  },
  {
    title: 'Content Sharing Program',
    questions: [
      {
        text: 'How does the Content Sharing Program work?',
        answer:
          'You earn revenue based on the number of downloads from members with paid subscription plans.',
        open: false,
      },
      {
        text: 'Can I track my downloads and earnings?',
        answer:
          'Yes, Thortok provides a dashboard where you can monitor downloads, views, and earnings in real time.',
        open: false,
      },
      {
        text: 'What types of content can I share?',
        answer:
          'Any original content that complies with Thortok’s licensing terms, including photos, illustrations, 3D models, and more.',
        open: false,
      },
      {
        text: 'Do free downloads generate income?',
        answer:
          'No, downloads from users with free accounts do not generate revenue. Only downloads from paying members count.',
        open: false,
      },
      {
        text: 'What’s the minimum payout amount?',
        answer:
          'You can withdraw your earnings once your wallet balance reaches $10.',
        open: false,
      },
    ],
  },
  {
    title: 'Sell Content Program',
    questions: [
      {
        text: 'How does the Sell Content Program work?',
        answer:
          'Creators sell their content directly on Thortok, earning 85% of the sale price, while the platform keeps a 15% commission.',
        open: false,
      },
      {
        text: 'How do I price my content?',
        answer:
          'You set your prices based on your content’s value and market demand.',
        open: false,
      },
      {
        text: 'Can I sell the same content on other platforms?',
        answer:
          'Yes, as long as your content rights allow it and it complies with Thortok’s terms of service.',
        open: false,
      },
      {
        text: 'What types of licenses can I set?',
        answer:
          'You can offer different licenses such as personal, commercial, or extended licenses, depending on your pricing strategy.',
        open: false,
      },
      {
        text: 'When do I get paid?',
        answer:
          'You can withdraw your earnings once they reach the minimum amount of $10 at any time.',
        open: false,
      },
    ],
  },
  {
    title: 'Payments and Earnings',
    questions: [
      {
        text: 'How can I receive my earnings?',
        answer:
          'You need to accumulate at least $10 in your wallet, then submit a withdrawal request via your affiliate dashboard. Currently, withdrawals are made via bank transfer. Additional options may be introduced in the future.',
        open: false,
      },
      {
        text: 'Are there any withdrawal fees?',
        answer:
          'Yes, withdrawal fees depend on your selected payment method and bank policies.',
        open: false,
      },
      {
        text: 'When are payments processed?',
        answer:
          'Payments are usually processed within 5-7 business days after verification.',
        open: false,
      },
      {
        text: 'What if I encounter payment issues?',
        answer:
          'Contact Thortok’s support team through the help center or contact page.',
        open: false,
      },
      {
        text: 'Can I reinvest my earnings on Thortok?',
        answer:
          'Yes, you can use your wallet balance to purchase resources on the platform without any minimum limit.',
        open: false,
      },
    ],
  },
  {
    title: 'Rights and Ownership',
    questions: [
      {
        text: 'Who owns the rights to the content I upload?',
        answer:
          'You retain full ownership of your content while licensing it for downloads or purchases according to the terms you set.',
        open: false,
      },
      {
        text: 'What happens if someone uses my content without permission?',
        answer:
          'You can report copyright violations to our legal team via the report feature available on the user’s profile or content page.',
        open: false,
      },
      {
        text: 'Can I remove my content from Thortok?',
        answer:
          'Yes, you can remove your content at any time unless it is currently licensed or sold.',
        open: false,
      },
      {
        text: 'Are exclusive licenses available?',
        answer:
          'Yes, you can offer exclusive licenses at custom prices by contacting the Thortok team.',
        open: false,
      },
      {
        text: 'What if I want to change my pricing or licenses?',
        answer:
          'You can adjust pricing and licenses through your creator dashboard at any time.',
        open: false,
      },
    ],
  },
  {
    title: 'Compliance and Security',
    questions: [
      {
        text: 'How do I verify my identity?',
        answer:
          'Identity verification involves uploading a government-issued ID and completing a digital verification selfie.',
        open: false,
      },
      {
        text: 'What security measures are in place for my account?',
        answer:
          'Use strong passwords, enable two-factor authentication, and regularly review your account activity.',
        open: false,
      },
      {
        text: 'What if my account is compromised?',
        answer:
          "Contact Thortok's support team immediately for assistance in securing your account.",
        open: false,
      },
      {
        text: 'Can I be banned from the program?',
        answer:
          'Yes, engaging in fraudulent behavior or violating platform terms can result in suspension or permanent account termination.',
        open: false,
      },
      {
        text: 'How do I report suspicious activity on my account?',
        answer:
          'Use the “Report Issue” feature in your dashboard or contact our support team immediately via the contact page.',
        open: false,
      },
    ],
  },
])
</script>

<style scoped></style>
