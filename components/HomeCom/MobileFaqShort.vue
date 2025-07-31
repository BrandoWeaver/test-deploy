<script setup>
import { ref, computed, onMounted } from 'vue'
import Minus from '../icons/Minus.vue'
import Plus from '../icons/Plus.vue'
import RightArrow from '../icons/RightArrow.vue'
import DownArrow from '../icons/DownArrow.vue'

// Selected tab index
const selectedSidebarIndex = ref(0)

// Track open questions per tab
const openQuestions = ref({})

// Tabs and questions data
const tabs = ref([
  {
    title: 'About Thortok',
    questions: [
      {
        text: 'What is Thortok, and what does it offer?',
        answer:
          "Thortok is a digital platform that offers unique resources and content that creators won't find anywhere else. It provides a wide variety of digital assets, including graphic templates, PSD files, photos, and more, to help creators elevate their projects. Thortok also values the work of creators by offering multiple monetization programs, such as the Content Sharing Program, Content Sales Program, and Freelancer Service Program, allowing them to earn money and gain visibility.",
        open: false,
      },
      {
        text: 'What are the core values of Thortok?',
        answer:
          'Thortok was founded by designers who noticed a significant lack of digital resources in Asia, particularly in Cambodia, while working on various projects. Being based in Cambodia, we created Thortok to provide a wide range of digital assets. Our core values are rooted in creativity, collaboration, and empowerment. We are committed to giving creators access to unique, high-quality resources while offering them opportunities to monetize their work. Through our supportive community, we aim to help creators share their content, grow their visibility, and succeed in the digital marketplace.',
        open: false,
      },
      {
        text: 'Who can join Thortok as a creator?',
        answer:
          'Anyone with creative talent and digital content to share can join Thortok as a creator. Whether you are a graphic designer, illustrator, photographer, or freelancer offering digital services, Thortok is open to all. Our platform is designed to support creators of all skill levels, from beginners to professionals, giving them a space to showcase their work and earn money through our monetization programs.',
        open: false,
      },
      {
        text: 'How does Thortok help creators monetize their content?',
        answer:
          'Thortok offers multiple monetization programs to help creators earn money from their digital content. Through the Content Sharing Program, creators can earn revenue when their content is downloaded by paid members. The Sell Content Program allows creators to sell their work directly to users on the platform. Additionally, the Freelancer Services Program enables creatives to offer their services, and Thortok acts as a secure middleman between clients and freelancers. Lastly, the Affiliate Program provides another revenue stream by rewarding creators who bring new users to the platform through a promo code system.',
        open: false,
      },
      {
        text: 'How does Thortok differ from other content creation and monetization platforms?',
        answer:
          'Thortok stands out by offering digital resources that are unique and specifically tailored for creators in Asia, particularly Cambodia, where high-quality resources can be harder to find. As a platform founded by designers, we understand the needs of creatives and offer tools to help them succeed. Additionally, Thortok combines multiple monetization options, from content sharing and sales to freelance services and affiliate marketing, providing a comprehensive ecosystem for creators to earn money and showcase their work.',
        open: false,
      },
    ],
  },
  {
    title: 'Monetization Programs',
    questions: [
      {
        text: 'What monetization programs are available on Thortok?',
        answer:
          'Thortok offers four key monetization programs for creators:\n\n1. Content Sharing Program - Earn money when your content is downloaded by members on the paid plan.\n2. Sell Content Program - Sell your digital creations directly on the platform, with a 15% commission taken by Thortok on each sale.\n3. Freelancer Service Program - Offer freelance services, with Thortok acting as a secure middleman between you and your clients. A 15% commission is applied to each successful project.\n4. Affiliate Program - Earn additional income by bringing new users to Thortok through a promo code system.',
        open: false,
      },
      {
        text: 'How can I participate in the Content Sharing Program?',
        answer:
          "To participate in the Content Sharing Program, you simply need to upload your digital content to Thortok. Once your content is live, it can be downloaded by other users. If your content is downloaded by members on the paid plan, you'll earn $1 for every 100 downloads. Although downloads by free plan members won't generate direct income, they will help increase your visibility, which can lead to more downloads from paying members.",
        open: false,
      },
      {
        text: 'What are the benefits of selling my content with the Content Sales Program?',
        answer:
          'The Content Sales Program allows you to set your own prices and sell your digital creations directly to users on Thortok. You retain control over your content, and for each sale, you receive 85% of the revenue (Thortok takes a 15% commission). This program is ideal for creators looking to earn consistent income by selling exclusive, high-quality content that is in demand. You also benefit from increased exposure on the platform, which can help boost your sales over time.',
        open: false,
      },
      {
        text: 'How does the Freelancer Service Program work?',
        answer:
          'The Freelancer Service Program allows you to offer your creative services directly to clients through Thortok. Before a project begins, the client makes a payment through the platform, which Thortok securely holds. Once the project is completed and the client approves the work, Thortok releases the payment to you. Thortok takes a 15% commission on each successful transaction, with the remaining amount deposited into your wallet. This program is ideal for freelancers looking to find new clients and expand their service offerings.',
        open: false,
      },
      {
        text: 'How can I join the Affiliate Program, and what are the benefits?',
        answer:
          "When you sign up on Thortok, you automatically receive a unique promo code that you can start sharing right away to earn extra income. For every 10 new users who join the free plan using your code, you'll earn $1. If someone signs up for the monthly paid plan, you'll earn $0.50, and if they sign up for the annual plan, you'll earn $3. This program allows you to earn extra income by promoting Thortok and helping us grow the community.",
        open: false,
      },
    ],
  },
  {
    title: 'Participation and Content Creation',
    questions: [
      {
        text: 'How can I become a contributor on Thortok?',
        answer:
          'Becoming a contributor on Thortok is simple. Once you sign up for an account, you can immediately start uploading your digital content. Whether you create graphic designs, photos, PSD files, or offer freelance services, Thortok provides you with a platform to showcase and monetize your work. As soon as your content is uploaded, it can be accessed by users on the platform, and you can begin earning through various monetization programs.',
        open: false,
      },
      {
        text: 'Can I participate in multiple monetization programs at the same time?',
        answer:
          'Yes, as a contributor on Thortok, you can participate in multiple monetization programs simultaneously. You can upload content to earn money through the Content Sharing Program, sell your creations through the Sell Content Program, offer freelance services via the Freelancer Service Program, and even earn additional income through the Affiliate Program. These programs work together to maximize your earning potential and give you the flexibility to monetize your work in various ways.',
        open: false,
      },
      {
        text: 'What types of content can I share on Thortok?',
        answer:
          'On Thortok, you can share a wide range of digital content, including graphic designs, PSD files, photos, illustrations, vectors, templates, and more. Whether you specialize in creating icons, mockups, or marketing materials, Thortok provides a space for all types of digital assets. You can also offer freelance services through our Freelancer Service Program, allowing you to showcase your skills and connect with clients.',
        open: false,
      },
      {
        text: 'How can I promote my content on the platform?',
        answer:
          'Thortok offers several ways to help you promote your content. You can start by ensuring your uploads have clear titles, relevant tags, and accurate categories to make them easily discoverable by users. Additionally, Thortok provides built-in promotional tools that allow you to boost your content’s visibility on the platform, reaching a larger audience. Consistently sharing high-quality content and participating in platform activities can also increase the chances of having your work featured, which further enhances your visibility.',
        open: false,
      },
      {
        text: 'What are the criteria for getting my content featured on Thortok?',
        answer:
          'On Thortok, content is automatically featured based on an algorithm that considers factors such as the number of views, visits, downloads, and adherence to platform guidelines. To increase your chances of being featured, make sure your content has clear titles, relevant tags, and well-written descriptions. You can also add multiple languages to expand the reach of your content. The more your content is engaged with by the community, the higher the chances of it being showcased.',
        open: false,
      },
    ],
  },
  {
    title: 'Account and Settings',
    questions: [
      {
        text: 'How do I create an account on the platform?',
        answer:
          "Creating an account on Thortok is simple. Just click on the 'Sign Up' button, available on both the homepage and in the header, and fill in your details like email and password. You can also sign up using Google, Telegram, or Apple. Once registered, you’ll have access to the free plan and can explore our paid options whenever you’re ready.",
        open: false,
      },
      {
        text: 'Can I edit my account information after signing up?',
        answer:
          "Yes, you can easily update your account information at any time. Simply go to the 'Account Settings' section in your profile, where you can edit your email, password, and other personal details. Any changes you make will be saved immediately, and you can adjust your settings whenever needed.",
        open: false,
      },
      {
        text: 'How do I reset my password?',
        answer:
          "If you need to reset your password, simply click on the 'Forgot Password' link on the login page. Enter the email address associated with your account, and we will send you instructions to reset your password. Follow the steps in the email to create a new password and regain access to your account.",
        open: false,
      },
      {
        text: 'Is it possible to link my account to social media?',
        answer:
          "Yes, you can link your Thortok account to social media for easier login and account management. You can connect your account with Google, Telegram, or Apple through the 'Account Settings' section. Once linked, you can log in quickly using these platforms without needing a separate password for Thortok.",
        open: false,
      },
      {
        text: 'How do I manage my email notification preferences?',
        answer:
          "To manage your email notification preferences, go to the 'Account Settings' section of your profile and navigate to the 'Notifications' tab. Here, you can choose which types of emails you want to receive, such as updates, promotional offers, or activity alerts. You can adjust these settings at any time to match your preferences.",
        open: false,
      },
    ],
  },
  {
    title: 'Support and Reporting',
    questions: [
      {
        text: 'How can I contact customer support?',
        answer:
          'You can reach customer support through the Thortok forum, where you can browse existing answers or create a new support ticket for assistance. For Pro Plan members, priority support is available, which ensures faster response times and dedicated help for any issues you encounter.',
        open: false,
      },
      {
        text: 'How long does it take to receive a response from support?',
        answer:
          'Response times may vary depending on the volume of requests, but we aim to respond to all inquiries within 24 to 48 hours. If you’re a Pro Plan member, you’ll receive priority support, meaning your request will be addressed more quickly than standard support tickets.',
        open: false,
      },
      {
        text: 'How do I report a user violating the platform’s rules?',
        answer:
          'To report a user who is violating Thortok’s rules, such as creating multiple accounts to exploit monetization programs or infringing on copyright, you can use the report feature available on the user’s profile or content page. Our team will review the report and take appropriate action. We are committed to maintaining a fair and respectful environment for all contributors.',
        open: false,
      },
      {
        text: 'What actions does Thortok take against copyright violations?',
        answer:
          'Thortok takes copyright violations very seriously. If a user is found to be infringing on the rights of others by uploading content without proper authorization, we will investigate the claim and take appropriate actions. This may include removing the content, suspending the user’s account, or permanently banning them from the platform. Our goal is to protect the intellectual property of creators and ensure a fair environment for everyone.',
        open: false,
      },
      {
        text: 'How do I report suspicious behavior or fraud in the monetization programs?',
        answer:
          "If you notice any suspicious behavior, such as users attempting to manipulate the monetization programs by creating multiple accounts or engaging in fraudulent activities, you can report it through our platform. Simply use the 'Report' feature on the user’s profile or content page. Our team will thoroughly investigate the issue and take the necessary actions to maintain the integrity of Thortok’s monetization programs.",
        open: false,
      },
    ],
  },
])

// Initialize openQuestions state
tabs.value.forEach((tab, tabIndex) => {
  openQuestions.value[tabIndex] = {}
  tab.questions.forEach((_, questionIndex) => {
    openQuestions.value[tabIndex][questionIndex] = false
  })
})

// Function to switch tabs
const selectSidebar = (index) => {
  selectedSidebarIndex.value = index
}

// Toggle specific question's open state
const toggleAnswer = (tabIndex, questionIndex) => {
  openQuestions.value[tabIndex][questionIndex] =
    !openQuestions.value[tabIndex][questionIndex]

  // Close other questions in the same tab
  Object.keys(openQuestions.value[tabIndex]).forEach((qIndex) => {
    if (parseInt(qIndex) !== questionIndex) {
      openQuestions.value[tabIndex][qIndex] = false
    }
  })
}

// Detect screen size and determine view
const isMobile = ref(false)
const updateScreenSize = () => {
  isMobile.value = window.innerWidth < 1024
}

onMounted(() => {
  updateScreenSize()
  window.addEventListener('resize', updateScreenSize)
})
</script>
<template>
  <div
    class="w-[1440px] xl-max:w-full pt-[16px] md-max:pt-[6px] lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px]"
  >
    <h1
      class="font-[700] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[52px]"
    >
      Quick Answers<br />
      to Your Questions
    </h1>
    <div class="mt-14 lg:grid gap-10 grid-cols-12">
      <!-- Render mobile version only on small screens -->
      <div v-if="isMobile" class="mt-5 lg:hidden flex flex-col gap-3">
        <div v-for="(tab, index) in tabs" :key="index" class="rounded-[6px]">
          <!-- Tab Header -->
          <div
            class="flex justify-between items-center cursor-pointer py-2.5 px-4 text-center text-[13px] sm:text-[18px] font-[400] rounded-[6px]"
            :class="{
              'hover:bg-[#EFF1D980] border border-[#E4E4E4]':
                selectedSidebarIndex !== index,
              'bg-[#005B52] text-white': selectedSidebarIndex === index,
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
            class="mt-2 border-t px-4 pt-3 border-[#e4e4e4]"
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
                  :class="{ 'text-[#005B52]': openQuestions[index][qIndex] }"
                >
                  {{ question.text }}
                </h2>
                <span>
                  <Plus class="w-3" v-if="!openQuestions[index][qIndex]" />
                  <Minus class="w-3" v-else />
                </span>
              </div>
              <p
                v-if="openQuestions[index][qIndex]"
                class="text-[14px] sm:text-[16px] font-[300] mt-2"
              >
                {{ question.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Render desktop version only on large screens -->
      <div v-else class="lg:col-span-3 lg:flex hidden flex-col gap-3">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          class="cursor-pointer py-2.5 px-6 rounded-[6px] text-center text-[18px] font-[400]"
          :class="{
            'hover:bg-[#EFF1D980]': selectedSidebarIndex !== index,
            'bg-[#005B52] text-white': selectedSidebarIndex === index,
          }"
          @click="selectSidebar(index)"
        >
          {{ tab.title }}
        </div>
      </div>

      <!-- FAQ Content for Desktop -->
      <div v-else class="lg:col-span-9 lg:-mt-7">
        <div
          v-for="(question, qIndex) in tabs[selectedSidebarIndex].questions"
          :key="qIndex"
          class="border-b py-7 border-[#e4e4e4]"
        >
          <div
            class="flex items-center cursor-pointer justify-between gap-2"
            @click="toggleAnswer(selectedSidebarIndex, qIndex)"
          >
            <h1
              class="font-[700] text-[17px] lg:text-[20px] lg:text-[22px]"
              :class="{
                'text-[#005B52]': openQuestions[selectedSidebarIndex][qIndex],
              }"
            >
              {{ question.text }}
            </h1>
            <Plus
              class="w-4"
              v-if="!openQuestions[selectedSidebarIndex][qIndex]"
            />
            <Minus class="w-4" v-else />
          </div>
          <p
            v-show="openQuestions[selectedSidebarIndex][qIndex]"
            class="font-[300] lg:text-[15px] lg:text-[17px] pt-3 w-[98%]"
          >
            {{ question.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
