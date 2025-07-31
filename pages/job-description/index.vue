<template>
  <div
    class="w-full xl:pt-[14px] xl-max:pt-[14px] lg-max:pt-[8px] md-max:py-[8px] sm-max:py-[8px]"
  >
    <Breadcrumbs
      :pad="true"
      :items="[
        { label: 'Home', to: '/' },
        { label: 'Career', to: '/Career' },
        { label: 'General Accountant', to: '/General Accountant' },
      ]"
    />

    <DiscoverTheJob />
    <PositionOverview />
    <FillAppForm />
    <WhyJoinUs />
    <OurValues />
    <LifeAtThortok />
    <QuickAnswer :top-title="'Quick Answers to Your Questions'" :tabs="tabs" />
    <NeedHelpCom
      top-title="Have questions or want to get in touch?"
      link="Go to Contact Page"
      des="We're here to help! Visit our contact page to ask your questions or find the information you need."
    />
    <!-- <YourTurnCreativity />
    <MonetizationOpportunities />
    <ContentSharingProgram />
    <BestPractice />
    <QuickAnswer :top-title="'Quick Answers to Your Questions'" :tabs="tabs" />
    <NeedHelpCom
      top-title="Need More Help?"
      link="Create your account now"
      :listPa="listPa"
    /> -->
  </div>
</template>

<script setup lang="ts">
import WhyJoinUs from '~/components/all-proCom/WhyJoinUs.vue'
import HaveQuestions from '~/components/all-proCom/HaveQuestions.vue'
import FAQ from '~/components/all-proCom/FAQ.vue'
import LifeAtThortok from '~/components/all-proCom/LifeAtThortok.vue'
import OurValues from '~/components/all-proCom/OurValues.vue'
import DiscoverTheJob from '~/components/JobDesCom/DiscoverTheJob.vue'
import FillAppForm from '~/components/JobDesCom/FillAppForm.vue'
import PositionOverview from '~/components/JobDesCom/PositionOverview.vue'
import MonetizationOpportunities from '~/components/monetizationCom/MonetizationOpportunities.vue'
import ContentSharingProgram from '~/components/monetizationCom/ContentSharingProgram.vue'
import BestPractice from '~/components/monetizationCom/BestPractice.vue'

import QuickAnswer from '~/components/quickAnswerCom/QuickAnswer.vue'

import Breadcrumbs from '~/components/all-proCom/Breadcrumbs.vue'
import NeedHelpCom from '~/components/all-proCom/NeedHelpCom.vue'
import { ref } from 'vue'

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
    title: 'Recruitment Process',
    questions: [
      {
        text: 'What is Thortok, and what does it offer?',
        answer:
          'Browse our list of available positions, click on the one that interests you, and follow the instructions to submit your application (CV, cover letter, and portfolio if required).',
        open: true,
      },
      {
        text: 'Can I submit a spontaneous application?',
        answer:
          'Yes, if none of the available positions match your profile, you can send us a spontaneous application via the email address provided on the Career page.',
        open: false,
      },
      {
        text: 'How long does the recruitment process take?',
        answer:
          'Typically, we respond within 7 to 10 days after receiving your application.',
        open: false,
      },
      {
        text: 'What should I prepare for the interview?',
        answer:
          'We ask candidates to prepare a brief presentation about Thortok to assess their understanding of our company. If applicable, please also share a portfolio or examples of your work.',
        open: false,
      },
    ],
  },
  {
    title: 'Work Environment',
    questions: [
      {
        text: 'Does Thortok offer remote work options?',
        answer:
          'Yes, depending on the role and the company’s needs, we offer hybrid or fully remote work options.',
        open: false,
      },
      {
        text: 'What tools do you use daily?',
        answer: 'We leverage a range of tools tailored to our needs: ',
        open: false,
        isList: [
          'Internal management and communication: Notion, Google Drive, and Telegram.',
          'Creative tools: Major creative software like Adobe Suite, Figma, and tools specific to 3D and audio creation.',
          'Development tools: Collaboration platforms for developers such as GitHub, Visual Studio Code, and other project-specific tools.',
        ],
      },
      {
        text: 'How would you describe Thortok’s work culture?',
        answer:
          'At Thortok, we value creativity, collaboration, and innovation. Our environment is inclusive, flexible, and designed to help everyone thrive.',
        open: false,
      },
    ],
  },
  {
    title: 'Opportunities and Growth',
    questions: [
      {
        text: 'Are there opportunities for career advancement at Thortok?',
        answer:
          'Yes, we encourage internal growth. Employees benefit from regular training and personalized support to advance their careers.',
        open: false,
      },
      {
        text: 'Do you offer training or mentorship programs?',
        answer:
          'Yes, we provide training to develop technical and interpersonal skills, as well as mentorship sessions to guide our talents.',
        open: false,
      },
    ],
  },
  {
    title: 'Benefits and Perks',
    questions: [
      {
        text: 'What are the benefits of working at Thortok?',
        answer:
          'We offer competitive salaries, a strong work-life balance, opportunities for professional development, and unlimited access to Thortok’s resources for your personal projects.',
        open: false,
      },
      {
        text: 'Do you organize team-building activities?',
        answer:
          'Yes, we regularly host events and activities to strengthen team cohesion and foster a friendly atmosphere.',
        open: false,
      },
    ],
  },
  {
    title: 'Miscellaneous',
    questions: [
      {
        text: 'Does Thortok accept interns or apprentices?',
        answer:
          'Yes, we welcome interns and apprentices. If you’re interested, feel free to send us your application with your CV and cover letter via the Career page.',
        open: false,
      },
      {
        text: 'Can I apply if I’m based abroad?',
        answer:
          'Absolutely! We welcome talents from around the world, and some roles are entirely remote.',
        open: false,
      },
    ],
  },
])
</script>

<style scoped></style>
