<template>
  <div
    class="w-[1440px] xl-max:w-full pt-[16px] md-max:pt-[6px] md-max:w-full mx-auto gap-6 px-6 md-max:px-[16px]"
  >
    <h1 class="font-[700] heading text-[22px] sm:text-[26px]">
      Discover Thortok's policy guide
    </h1>
    <div class="mt-14 md:grid gap-10 grid-cols-12">
      <!-- Sidebar and Questions (Mobile Version) -->
      <div class="mt-5 md:hidden flex flex-col gap-3">
        <div v-for="(tab, index) in tabs" :key="index" class="rounded-[6px]">
          <!-- Tab Header -->
          <div
            class="flex justify-between items-center cursor-pointer py-2.5 px-4 text-left text-[13px] sm:text-[18px] font-[300] rounded-[6px]"
            :class="{
              'hover:bg-[#EFF1D980] hover:font-[400]':
                selectedSidebarIndex !== index,
              'bg-[#005B52] text-white font-[400]':
                selectedSidebarIndex === index,
            }"
            @click="selectSidebar(index)"
          >
            <span>{{ tab.title }}</span>
            <span>
              <RightArrow v-if="selectedSidebarIndex !== index" />
              <DownArrow v-else />
            </span>
          </div>

          <!-- Questions for the Active Tab -->
          <div
            v-if="selectedSidebarIndex === index"
            class="mt-2 border-t pt-3 border-[#e4e4e4]"
          >
            <div
              v-for="(question, qIndex) in tab.questions"
              :key="qIndex"
              class="py-3"
            >
              <div
                class="flex items-center justify-between cursor-pointer"
                @click="toggleAnswer(index, qIndex)"
              >
                <h2
                  class="text-[16px] sm:text-[18px] font-[600]"
                  :class="{ 'text-[#005B52]': question.open }"
                >
                  {{ question.text }}
                </h2>
                <span>
                  <Plus v-if="!question.open" />
                  <Minus v-else />
                </span>
              </div>
              <p
                v-if="question.open"
                class="text-[14px] sm:text-[16px] font-[300] mt-2"
              >
                {{ question.answer }}
              </p>
              <ul></ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar (Desktop Version) -->
      <div class="md:col-span-3 md:flex hidden flex-col gap-3">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          class="cursor-pointer py-2.5 px-6 rounded-[6px] text-left text-[17px] font-[300]"
          :class="{
            'hover:bg-[#EFF1D980] hover:font-[400]':
              selectedSidebarIndex !== index,
            'bg-[#005B52] text-white font-[400]':
              selectedSidebarIndex === index,
          }"
          @click="selectSidebar(index)"
        >
          {{ tab.title }}
        </div>
      </div>

      <!-- FAQ Content (Desktop Version) -->
      <div class="md:col-span-9">
        <div
          v-for="(question, qIndex) in tabs[selectedSidebarIndex].questions"
          :key="qIndex"
          class="pb-4"
        >
          <div class="flex items-center cursor-pointer justify-between gap-2">
            <h1
              class="font-[700] text-[17px] lg:text-[20px]"
              :class="{ 'text-[#000000]': question.open }"
            >
              {{ question.text }}
            </h1>
          </div>
          <p
            v-show="question.open"
            class="font-[300] lg:text-[14px] pt-3 w-[98%]"
          >
            {{ question.answer }}
          </p>
          <ul class="pl-6">
            <li
              v-for="(subtext, subIndex) in question.subtexts"
              :key="subIndex"
              class="lg:text-[14px] pt-3 w-[98%] list-disc"
            >
              <strong>{{ subtext.subText }}</strong> {{ subtext.subAnswer }}
              <br />
              <ul class="pl-6">
                <li
                  v-for="(nested, nestedIndex) in subtext.nestedSubtexts"
                  :key="nestedIndex"
                  class="lg:text-[14px] pt-3 w-[98%] list-disc"
                >
                  <strong>{{ nested.subText }}</strong> {{ nested.subAnswer }}
                  <br />
                </li>
              </ul>
            </li>
          </ul>
          <p
            v-show="question.open"
            class="font-[300] lg:text-[14px] pt-3 w-[98%]"
          >
            {{ question.answer2 }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Minus from '../icons/Minus.vue'
import Plus from '../icons/Plus.vue'
import RightArrow from '../icons/RightArrow.vue'
import DownArrow from '../icons/DownArrow.vue'

const selectedSidebarIndex = ref(0) // Default tab

const tabs = ref([
  {
    title: 'License',
    questions: [
      {
        text: '1. Individual License for Each Download',
        answer:
          "Each time you download an item from Thortok, it is covered by a unique license tied to that download. This license is valid only for one specific final project. If you wish to use the same item in another project, you must re-download it to generate a new license. This ensures compliance with our rules and protects creators' rights.",
        open: true,
      },
      {
        text: '2. For Final Projects Only',
        answer:
          'Items downloaded from Thortok must be used in completed projects, such as printed posters, edited videos, or functioning apps. You cannot share, redistribute, or resell an item in its original or modified form unless it is embedded within a final product.',
        open: true,
      },
      {
        text: '3. Single-User License',
        answer:
          'Each license is strictly personal and non-transferable. If a team or company intends to use the items, each user must have their own Thortok account and download the required items individually.',
        open: true,
      },
      {
        text: '4. Prohibition of Direct Resale or Redistribution',
        answer:
          'Items from Thortok must never be resold or shared in their raw or modified form, even for free. This includes template files (PSD, AI, SVG, etc.) or other formats. These rules protect creators’ work and maintain the value of the platform.',
        open: true,
      },
      {
        text: '5. Unlimited Duration of Use',
        answer:
          'Once an item is incorporated into a final project, you have the right to use it indefinitely for that project without any time restrictions. You don’t need to renew your subscription to maintain authorization for completed projects.',
        open: true,
      },
      {
        text: '6. Prohibition on Use in Registered Trademarks or Logos',
        answer:
          'Once an item is incorporated into a final project, you have the right to use it indefinitely for that project without any time restrictions. You don’t need to renew your subscription to maintain authorization for completed projects.',
        open: true,
      },
      {
        text: '7. Copyright Compliance',
        answer:
          'All items available on Thortok are protected by copyright held by their creators. Any use outside the terms of the license constitutes copyright infringement and may lead to legal consequences.',
        open: true,
      },
      {
        text: '8. Commercial Use Allowed',
        answer:
          'You are free to use items for commercial projects, such as advertisements, marketing materials, or products intended for sale, as long as the item is incorporated into a final product (e.g., a banner ad or a video).',
        open: true,
      },
      {
        text: '9. Prohibition on Harmful Content',
        answer:
          'You may not use items downloaded from Thortok in projects or campaigns that promote hateful, discriminatory, illegal, or harmful content toward individuals or organizations.',
        open: true,
      },
      {
        text: '10. License and Membership',
        answer: '',
        subtexts: [
          {
            subText: 'Active Membership:',
            subAnswer:
              'You can download items, generate licenses, and use them in new projects.',
          },
          {
            subText: 'Expired Membership:',
            subAnswer:
              'You can continue using items already embedded in finalized projects, but you cannot use past downloads in new projects or download additional items.',
          },
        ],
        open: true,
      },
    ],
  },
  {
    title: 'Privacy Policy',
    questions: [
      {
        text: '1. Introduction',
        answer:
          'Thortok values the privacy of its users and is committed to protecting the information collected through our platform. This Privacy Policy explains what data we collect, how we use it, and your rights regarding your information.',
        open: true,
      },
      {
        text: '2. Data We Collect',
        answer:
          'We may collect the following types of information when you interact with our platform: ',
        open: true,

        subtexts: [
          {
            subText: 'Account Information:',
            subAnswer:
              ' Name, email address, password, and any other information you provide when creating an account.',
          },
          {
            subText: 'Payment Details:',
            subAnswer:
              'Information necessary to process transactions (e.g., billing address, card details), securely handled by third-party payment processors.',
          },
          {
            subText: 'Usage Data:',
            subAnswer:
              'Information about your interactions with our platform, including pages visited, items downloaded, and time spent on the site.',
          },
          {
            subText: 'Device Information:',
            subAnswer:
              'Technical details such as IP address, browser type, and operating system to improve user experience.',
          },
          {
            subText: 'Cookies and Tracking Data:',
            subAnswer:
              'Information collected via cookies and similar tracking technologies for analytics and personalization.',
          },
        ],
        open: true,
      },
      {
        text: '3. How We Use Your Data',
        answer: 'Thortok uses collected data to:',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Provide and maintain the platform, ensuring optimal performance.',
          },
          {
            subText: '',
            subAnswer:
              'Process transactions, including generating licenses for downloaded items.',
          },
          {
            subText: '',
            subAnswer:
              'Personalize user experience, including recommending content and improving navigation.',
          },
          {
            subText: '',
            subAnswer:
              'Communicate updates, promotions, and important account-related notifications.',
          },
          {
            subText: '',
            subAnswer:
              'Ensure compliance with legal and regulatory obligations.',
          },
        ],
        open: true,
      },
      {
        text: '4. Sharing of Data',
        answer:
          'We do not sell or share your personal information with third parties, except in the following cases:',
        subtexts: [
          {
            subText: 'Service Providers:',
            subAnswer:
              'Trusted third parties who assist with payment processing, analytics, and customer support.',
          },
          {
            subText: 'Legal Compliance:',
            subAnswer:
              'When required to comply with applicable laws, regulations, or legal processes.',
          },
          {
            subText: 'Business Transfers:',
            subAnswer:
              'In the event of a merger, acquisition, or sale of assets, user data may be transferred.',
          },
        ],
        open: true,
      },

      {
        text: '5. Data Retention',
        answer:
          'Your data is retained only as long as necessary to fulfill the purposes outlined in this Privacy Policy. For example:',
        subtexts: [
          {
            subText: '',
            subAnswer: 'Transaction data is kept for legal and tax purposes.',
          },
          {
            subText: '',
            subAnswer:
              'Account information is stored until you delete your account or request its removal.',
          },
        ],
        open: true,
      },

      {
        text: '6. Your Rights',
        answer: 'As a user, you have the following rights regarding your data:',
        subtexts: [
          {
            subText: 'Access:',
            subAnswer:
              'You can request a copy of the personal data we hold about you.',
          },
          {
            subText: 'Correction:',
            subAnswer: 'You can update or correct inaccuracies in your data.',
          },
          {
            subText: 'Deletion:',
            subAnswer:
              'You can request the removal of your data, subject to legal and contractual obligations.',
          },
          {
            subText: 'Objection:',
            subAnswer:
              'You can opt out of certain data uses, such as marketing communications.',
          },
          {
            subText: 'Data Portability:',
            subAnswer:
              'You can request a copy of your data in a structured, machine-readable format.',
          },
        ],

        answer2:
          'To exercise these rights, contact our support team via our Contact Us page.',
        open: true,
      },
      {
        text: '7. Security Measures',
        answer:
          'Thortok employs advanced security measures to protect user data, including:',
        subtexts: [
          {
            subText: '',
            subAnswer: 'Data encryption for sensitive information.',
          },
          {
            subText: '',
            subAnswer: 'Secure payment gateways handled by trusted providers.',
          },
          {
            subText: ' ',
            subAnswer:
              'Regular security audits and monitoring to prevent unauthorized access.',
          },
        ],
        open: true,
      },

      {
        text: '8. International Data Transfers',
        answer:
          'Since Thortok operates globally, your data may be transferred to and processed in countries outside of your jurisdiction, including Cambodia, where our servers are based. These transfers comply with applicable laws to ensure adequate protection.',
        open: true,
      },
      {
        text: '9. Updates to the Privacy Policy',
        answer:
          'Thortok reserves the right to update this Privacy Policy at any time. Users will be notified of significant changes through email or platform announcements.',
        open: true,
      },
      {
        text: '10. Contact Us',
        answer:
          'If you have any questions about this Privacy Policy, or how your data is handled, please reach out to us via our Contact Us page.',
        open: true,
      },
    ],
  },

  {
    title: 'Condition of Use',
    questions: [
      {
        text: '1. Introduction',
        answer:
          'Welcome to Thortok! By accessing or using our platform, you agree to comply with these Conditions of Use. These terms govern your rights and responsibilities as a user of Thortok’s services, including access to digital resources, content uploads, and participation in monetization programs.',
        open: true,
      },
      {
        text: '2. Acceptance of Terms',
        answer: 'By using Thortok, you confirm that:',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'You are at least 18 years old or have obtained parental/guardian consent if under 18.',
          },
          {
            subText: '',
            subAnswer:
              'You have read, understood, and agreed to these Conditions of Use.',
          },
          {
            subText: ' ',
            subAnswer:
              'You will abide by all applicable laws and regulations while using our platform.',
          },
        ],
        open: true,
      },
      {
        text: '3. User Responsibilities',
        answer: 'When using Thortok, you agree to:',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Provide accurate and up-to-date information during account registration.',
          },
          {
            subText: '',
            subAnswer:
              'Maintain the confidentiality of your login credentials.',
          },
          {
            subText: ' ',
            subAnswer:
              'Use the platform solely for lawful purposes, avoiding any activities that could harm Thortok or its users.',
          },
          {
            subText: ' ',
            subAnswer:
              'Refrain from unauthorized sharing, distribution, or resale of downloaded resources.',
          },
        ],
        open: true,
      },
      {
        text: '4. Prohibited Activities',
        answer: 'The following activities are strictly prohibited:',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Uploading content that infringes on intellectual property rights or violates any laws.',
          },
          {
            subText: '',
            subAnswer:
              'Creating multiple accounts to bypass usage limits or monetization rules.',
          },
          {
            subText: ' ',
            subAnswer:
              'Using automated tools (e.g., bots or scrapers) to access or download content.',
          },
          {
            subText: ' ',
            subAnswer:
              'Engaging in actions that disrupt platform functionality, including spreading viruses or hacking.',
          },
        ],
        open: true,
      },
      {
        text: '5. Content Usage',
        answer:
          'All content on Thortok is subject to specific license terms. By downloading or purchasing content, you agree to:',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Use the content only as permitted under the applicable license.',
          },
          {
            subText: '',
            subAnswer:
              'Avoid redistributing, sub-licensing, or reselling content without explicit permission.',
          },
          {
            subText: ' ',
            subAnswer:
              'Attribute the creator where required by the license terms.',
          },
        ],
        answer2:
          'For detailed licensing information, refer to our License Terms page.',
        open: true,
      },
      {
        text: '6. User-Generated Content',
        answer: 'If you upload content to Thortok:',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'You retain ownership of your content but grant Thortok a non-exclusive, worldwide license to display, distribute, and promote it.',
          },
          {
            subText: '',
            subAnswer:
              'You warrant that your content complies with all applicable laws and does not infringe on the rights of others.',
          },
          {
            subText: ' ',
            subAnswer:
              'Thortok reserves the right to remove or modify user content that violates these terms or our guidelines.',
          },
        ],
        open: true,
      },
      {
        text: '7. Monetization Programs',
        answer:
          'Thortok offers monetization opportunities for contributors, subject to additional terms:',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Revenue-sharing rates and payment schedules are outlined in the relevant program agreements.',
          },
          {
            subText: '',
            subAnswer:
              'Thortok reserves the right to adjust program terms with prior notice to participants.',
          },
          {
            subText: ' ',
            subAnswer:
              'Fraudulent activities, such as self-purchasing or artificially inflating views, will result in termination of program access.',
          },
        ],
        open: true,
      },
      {
        text: '8. Payment and Subscription',
        answer:
          'You are free to use items for commercial projects, such as advertisements, marketing materials, or products intended for sale, as long as the item is incorporated into a final product (e.g., a banner ad or a video).',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Payments for subscriptions or content purchases must be made through accepted methods listed on our platform.',
          },
          {
            subText: '',
            subAnswer:
              'Subscription fees are non-refundable except as required by law.',
          },
          {
            subText: ' ',
            subAnswer:
              'Thortok reserves the right to update pricing or payment terms with prior notice to users.',
          },
        ],
        open: true,
      },
      {
        text: '9. Limitation of Liability',
        answer:
          'Thortok is provided on an "as is" basis. We do not guarantee uninterrupted service or error-free content. To the maximum extent permitted by law:',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Thortok is not liable for indirect, incidental, or consequential damages arising from platform use.',
          },
          {
            subText: '',
            subAnswer:
              'Users are responsible for ensuring that downloaded content is suitable for their intended use.',
          },
        ],
        open: true,
      },
      {
        text: '10. Termination of Access',
        answer:
          'Thortok reserves the right to suspend or terminate user accounts for violations of these terms, including:',
        subtexts: [
          {
            subText: '',
            subAnswer: 'Non-compliance with licensing rules.',
          },
          {
            subText: '',
            subAnswer: 'Unauthorized sharing or redistribution of content.',
          },
          {
            subText: '',
            subAnswer:
              'Engagement in prohibited activities, such as fraud or hacking.',
          },
        ],
        open: true,
      },
      {
        text: '11. Updates to Terms',
        answer:
          'Thortok may update these Conditions of Use at any time. Users will be notified of significant changes through email or platform announcements. Continued use of the platform after updates constitutes acceptance of the revised terms.',

        open: true,
      },
      {
        text: '12. Governing Law',
        answer:
          'These terms are governed by the laws of Cambodia, where Thortok is headquartered. Disputes arising from the use of Thortok will be subject to the exclusive jurisdiction of Cambodian courts.',

        open: true,
      },
      {
        text: '13. Contact Us',
        answer:
          'If you have questions or concerns about these Conditions of Use, please reach out to us via our Contact Us page.',

        open: true,
      },
    ],
  },
  {
    title: 'Terms of Service',
    questions: [
      {
        text: '1. Acceptance of Terms',
        answer:
          'By accessing or using Thortok, you agree to comply with these Terms of Service. If you do not agree, you must not use our platform.',
        open: true,
      },
      {
        text: '2. User Responsibilities',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Provide accurate information during registration and maintain the confidentiality of your account credentials.',
          },
          {
            subText: '',
            subAnswer:
              'Use Thortok solely for lawful purposes. Prohibited activities include, but are not limited to:',
          },
          {
            subText: '',
            subAnswer:
              'Engagement in prohibited activities, such as fraud or hacking.',
            nestedSubtexts: [
              {
                subText: '',
                subAnswer:
                  'Sharing, reselling, or redistributing downloaded content without proper licensing.',
              },
              {
                subText: '',
                subAnswer:
                  'Attempting to hack, modify, or disrupt Thortok’s services.',
              },
            ],
          },
        ],
        open: true,
      },
      {
        text: '3. Content Ownership and Licensing',
        answer:
          'Each license is strictly personal and non-transferable. If a team or company intends to use the items, each user must have their own Thortok account and download the required items individually.',
        subtexts: [
          {
            subText: 'User-Generated Content:',
            subAnswer:
              'By uploading content, you grant Thortok a non-exclusive, worldwide license to display, distribute, and promote your work.',
          },
          {
            subText: 'Downloaded Content: ',
            subAnswer:
              'Use of any content from Thortok is subject to our license terms. Unauthorized use or redistribution is prohibited.',
          },
        ],
        open: true,
      },
      {
        text: '4. Payment and Subscriptions',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Subscription plans grant access to premium features and content.',
          },
          {
            subText: '',
            subAnswer:
              'Payments are non-refundable unless stated otherwise in our Refund Policy.',
          },
          {
            subText: '',
            subAnswer:
              'Users are responsible for ensuring sufficient funds for recurring subscription payments.',
          },
        ],
        open: true,
      },
      {
        text: '5. Intellectual Property Rights',
        answer:
          'All materials on Thortok, including but not limited to, graphics, text, and designs, are the intellectual property of Thortok unless otherwise stated. Unauthorized use or duplication is strictly prohibited.',
        open: true,
      },
      {
        text: '6. Termination of Account',
        answer:
          'Thortok reserves the right to suspend or terminate your account for violations of these terms. Examples include:',
        subtexts: [
          {
            subText: '',
            subAnswer: 'Breach of licensing agreements.',
          },
          {
            subText: '',
            subAnswer: 'Fraudulent activities or multiple account misuse.',
          },
        ],
        open: true,
      },
      {
        text: '7. Disclaimers and Limitation of Liability',

        subtexts: [
          {
            subText: '',
            subAnswer:
              'Thortok is provided on an "as is" basis. While we strive for accuracy, we cannot guarantee uninterrupted or error-free services.',
          },
          {
            subText: '',
            subAnswer:
              'Thortok will not be liable for indirect damages, including data loss, service downtime, or unauthorized account access.',
          },
        ],
        open: true,
      },
      {
        text: '8. Changes to Terms',

        answer:
          'We may update these Terms of Service periodically. Users are encouraged to review them regularly, as continued use of Thortok constitutes acceptance of the updated terms.',
        open: true,
      },
      {
        text: '9. Governing Law',

        answer:
          'These terms are governed by the laws of Cambodia. Any disputes shall be resolved through arbitration in accordance with local regulations.',
        open: true,
      },
    ],
  },
  {
    title: 'Refund Policy',
    questions: [
      {
        text: '1. General Refund Terms',
        answer:
          'Thortok strives to ensure a satisfactory experience for all users. However, refund requests are subject to the following conditions:',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Refunds are only applicable for subscription payments or accidental purchases of paid resources.',
          },
          {
            subText: '',
            subAnswer:
              'No refunds will be issued for digital products that have been downloaded or used.',
          },
        ],
        open: true,
      },
      {
        text: '2. Eligibility for Refunds',
        answer: 'Refunds may be granted under the following circumstances:',
        subtexts: [
          {
            subText: 'Technical Issues:',
            subAnswer:
              'If you were unable to download or access a purchased item due to a platform error, and the issue could not be resolved by our support team.',
          },
          {
            subText: 'Duplicate Payments:',
            subAnswer:
              'If you were charged multiple times for the same transaction.',
          },
          {
            subText: 'Unauthorized Charges: ',
            subAnswer:
              'If a payment was made fraudulently without your consent. Proof may be required.',
          },
        ],
        open: true,
      },
      {
        text: '3 .Refund Request Process',
        answer: 'To request a refund:',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Contact us via the Contact Us page and select "Billing & Refunds" as the topic.',
          },
          {
            subText: '',
            subAnswer:
              'Provide your payment receipt, order details, and a clear explanation of the issue.',
          },

          {
            subText: '',
            subAnswer:
              'Attach any supporting evidence (e.g., screenshots or transaction IDs).',
          },
        ],
        open: true,
      },
      {
        text: '4 .Processing Time',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Approved refunds will be processed within 7-10 business days.',
          },
          {
            subText: '',
            subAnswer:
              'Refunds will be issued to the original payment method. Thortok is not responsible for delays caused by financial institutions.',
          },
        ],
        open: true,
      },
      {
        text: '5. Non-Refundable Cases',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Refunds will not be granted for dissatisfaction with the content`s aesthetic or design unless it significantly deviates from the description.',
          },
          {
            subText: '',
            subAnswer:
              'Refunds are not available for partially used subscription periods.',
          },
          {
            subText: '',
            subAnswer:
              'Payments made for promotional or discounted plans are non-refundable.',
          },
        ],
        open: true,
      },
      {
        text: '6. Contact for Refunds',
        answer:
          'For any questions or disputes regarding refunds, reach out to us via our Contact Us page or email our support team.',
        open: true,
      },
    ],
  },
  {
    title: 'Cookie Policy',
    questions: [
      {
        text: '1. What Are Cookies?',
        answer:
          'Cookies are small text files stored on your device when you visit a website. They help us provide a better user experience by remembering your preferences, tracking website usage, and ensuring secure logins.',
        open: true,
      },
      {
        text: '2. Types of Cookies We Use',
        answer:
          'Response times may vary depending on the volume of requests, but we aim to respond to all inquiries within 24 to 48 hours. If you’re a Pro Plan member, you’ll receive priority support, meaning your request will be addressed more quickly than standard support tickets.',
        subtexts: [
          {
            subText: 'Essential Cookies:',
            subAnswer:
              'Necessary for the functioning of the website, such as logging in or accessing secure areas.',
          },
          {
            subText: 'Performance Cookies: ',
            subAnswer:
              'Collect data about how users interact with our platform to improve functionality.',
          },
          {
            subText: 'Personalization Cookies:',
            subAnswer:
              'Store user preferences to customize the experience (e.g., language selection).',
          },
          {
            subText: 'Advertising Cookies: ',
            subAnswer:
              'Help display relevant ads based on your browsing behavior.',
          },
        ],
        open: true,
      },
      {
        text: '3. How We Use Cookies',
        answer: 'Thortok uses cookies to:',
        subtexts: [
          {
            subText: '',
            subAnswer: 'Authenticate users and maintain secure logins.',
          },

          {
            subText: '',
            subAnswer: 'Track website performance and improve usability.',
          },
          {
            subText: '',
            subAnswer: 'Deliver personalized content and recommendations.',
          },
          {
            subText: '',
            subAnswer: 'Analyze traffic patterns and user engagement.',
          },
        ],
        open: true,
      },
      {
        text: '4. Managing Cookies',
        answer:
          'You can manage or delete cookies through your browser settings. Note that disabling essential cookies may impact your ability to use certain features of Thortok.',
        open: true,
      },
      {
        text: '5. Third-Party Cookies',
        answer:
          'We may allow third-party services (e.g., analytics or advertising providers) to place cookies on our site. These parties are responsible for their cookie policies.',
        open: true,
      },
      {
        text: '6. Updates to Cookie Policy',
        answer:
          'Thortok may update this Cookie Policy periodically. We encourage users to review it regularly to stay informed about how we use cookies.',
        open: true,
      },
      {
        text: '7. Contact Us',
        answer:
          'For questions about our use of cookies, please visit our Contact Us page or email our privacy team.',
        open: true,
      },
    ],
  },
  {
    title: 'Earnings and Affiliate Program Policy',
    questions: [
      {
        text: '1. Eligibility for Earnings',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'All registered users can participate in Thortok’s monetization programs.',
          },
          {
            subText: '',
            subAnswer:
              'Users must comply with Thortok`s licensing terms and guidelines to earn commissions.',
          },
        ],
        open: true,
      },
      {
        text: '2. Earnings from Downloads',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Downloads from free plan members do not generate earnings for creators.',
          },
          {
            subText: '',
            subAnswer:
              'Downloads from paid plan members contribute to creators` earnings at the predefined rate ($1 per 100 downloads).',
          },
        ],
        open: true,
      },
      {
        text: '3. Affiliate Program',
        subtexts: [
          {
            subText: '',
            subAnswer: 'Affiliates earn commissions for referring new users.',
          },
          {
            subText: ' ',
            subAnswer:
              'Commission rates and eligibility criteria are outlined in your user dashboard.',
          },
        ],
        open: true,
      },
      {
        text: '4. Payment of Earnings',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'A minimum balance of $10 is required to withdraw earnings.',
          },
          {
            subText: ' ',
            subAnswer:
              'Bank fees may apply depending on the chosen payment method and the applicable banking policies.',
          },
          {
            subText: ' ',
            subAnswer:
              'Payments are sent to the user’s demand and usually processed within 5-7 business days after verification.',
          },
        ],
        open: true,
      },
      {
        text: '5. Fraudulent Activities',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Earnings obtained through fraudulent methods (e.g., creating fake accounts or manipulating downloads) will be seized.',
          },
          {
            subText: ' ',
            subAnswer:
              'Thortok reserves the right to suspend or terminate accounts involved in fraudulent activities.',
          },
        ],

        open: true,
      },
      {
        text: '6. Updates to Earnings Policies',
        answerL:
          'Thortok may revise the Earnings and Affiliate Program policies at any time. Users will be notified of significant changes via email or dashboard notifications.',

        open: true,
      },
    ],
  },
  {
    title: 'Accessibility Policy',
    questions: [
      {
        text: 'Introduction',
        answer:
          'At Thortok, we are committed to ensuring that our platform is accessible to all users, including those with disabilities. We strive to provide an inclusive experience that allows everyone to explore and use our creative resources seamlessly.',
        open: true,
      },
      {
        text: 'Policy Details:',
        open: true,
      },
      {
        text: '1 .Compliance with Accessibility Standards',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Thortok follows internationally recognized accessibility guidelines, including the Web Content Accessibility Guidelines (WCAG) 2.1, to make our website usable for everyone.',
          },
        ],
        open: true,
      },
      {
        text: '2. Assistive Technology Support',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Our platform is designed to work with screen readers, keyboard navigation, and other assistive technologies.',
          },
        ],
        open: true,
      },
      {
        text: '3. Feedback Mechanism',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'If you encounter any accessibility barriers while using our platform, please contact us. Your feedback helps us improve.',
          },
        ],
        open: true,
      },
      {
        text: 'Contact for Accessibility Issues:',
        answer:
          'If you experience any difficulties or have suggestions for improving accessibility, reach out to us at Contact Us.',
        open: true,
      },
    ],
  },
  {
    title: 'Community Guidelines',
    questions: [
      {
        text: 'Welcome to Thortok`s Creative Community!',
        answer:
          'Our platform thrives because of the respect and creativity shared among its members. To maintain a safe, collaborative, and inspiring environment, we’ve established the following guidelines. By participating in Thortok, you agree to uphold these standards.',
        open: true,
      },
      {
        text: '1. Respectful Communication',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Treat all community members with kindness and respect, regardless of their background, opinions, or beliefs.',
          },
          {
            subText: '',
            subAnswer:
              'Avoid using hate speech, discriminatory language, or personal attacks.',
          },
          {
            subText: '',
            subAnswer:
              'Refrain from posting inappropriate or offensive content, including explicit materials, violent imagery, or harassing messages.',
          },
        ],
        open: true,
      },
      {
        text: '2. No Spamming or Self-Promotion',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Do not post spam, repetitive messages, or irrelevant links in forums or comment sections.',
          },
          {
            subText: '',
            subAnswer:
              'Self-promotion (e.g., sharing personal services or external links) is only allowed in designated areas approved by Thortok.',
          },
        ],
        open: true,
      },
      {
        text: '3. Constructive Feedback',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'When providing feedback on content, keep it constructive and professional.',
          },
          {
            subText: '',
            subAnswer:
              'Avoid negative or unhelpful comments that may discourage contributors.',
          },
        ],
        open: true,
      },
      {
        text: '4. Proper Attribution',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Give credit to creators where applicable, particularly when sharing or discussing their work.',
          },
          {
            subText: '',
            subAnswer: 'Do not claim someone else’s work as your own.',
          },
        ],
        open: true,
      },
      {
        text: '5. Reporting Issues',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'If you encounter inappropriate behavior, content, or technical issues, report it to our support team via the designated reporting tools or contact page.',
          },
          {
            subText: '',
            subAnswer:
              'Thortok reserves the right to investigate and take necessary action, including account suspension or removal of content.',
          },
        ],
        open: true,
      },
      {
        text: '6. Compliance with Legal and Ethical Standards',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Ensure that all content shared on Thortok complies with our Terms of Use, copyright policies, and applicable laws.',
          },
          {
            subText: '',
            subAnswer:
              'Do not upload or share illegal, stolen, or pirated content.',
          },
        ],
        open: true,
      },
      {
        text: '7. Protect Personal Information',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Avoid sharing sensitive or personal information publicly in forums, comments, or other visible areas.',
          },
          {
            subText: '',
            subAnswer:
              'Respect the privacy of others by not disclosing their personal information without consent.',
          },
        ],
        open: true,
      },
      {
        text: '8. Celebrate Diversity and Creativity',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Embrace the diversity of styles, cultures, and perspectives within the Thortok community.',
          },
          {
            subText: '',
            subAnswer:
              'Collaborate and connect with other members to build an inclusive, creative space.',
          },
        ],
        open: true,
      },
      {
        text: 'Consequences for Violations',
        answer:
          'Thortok takes violations of these guidelines seriously. Actions may include:',
        subtexts: [
          {
            subText: '',
            subAnswer: 'Content removal.',
          },
          {
            subText: '',
            subAnswer: 'Temporary or permanent account suspension.',
          },
          {
            subText: '',
            subAnswer:
              'Referral to appropriate authorities in cases of illegal activity.',
          },
        ],
        open: true,
      },
      {
        text: 'Updates to Guidelines',
        subtexts: [
          {
            subText: '',
            subAnswer:
              'Thortok may update these guidelines periodically to reflect community needs and platform policies. Check back regularly to stay informed.',
          },
        ],
        open: true,
      },
      {
        text: 'We’re Here to Help',
        answer:
          'If you have questions about these guidelines or need assistance, contact us via our support page. Together, let’s continue building a vibrant and inspiring community at Thortok!',
        open: true,
      },
    ],
  },
])

const selectSidebar = (index) => {
  selectedSidebarIndex.value = index
}

const toggleAnswer = (tabIndex, questionIndex) => {
  tabs.value[tabIndex].questions.forEach((question, qIndex) => {
    question.open = qIndex === questionIndex ? !question.open : false
  })
}
</script>
