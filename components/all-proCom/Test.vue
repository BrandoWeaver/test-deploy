<template>
  <div class="flex flex-col md:flex-row gap-6 p-6">
    <!-- Sidebar Navigation -->
    <aside class="flex flex-col space-y-2">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="[
          'px-4 py-2 rounded-lg text-left font-medium',
          activeTab === index ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700'
        ]"
        @click="changeTab(index)"
      >
        {{ tab.title }}
      </button>
    </aside>

    <!-- Main Content -->
    <section class="flex-1">
      <h2 class="text-2xl font-bold text-green-800 mb-4">
        {{ tabs[activeTab].title }}
      </h2>
      <p class="text-gray-600 mb-6">
        {{ tabs[activeTab].description }}
      </p>

      <!-- Questions -->
      <div v-for="(question, index) in tabs[activeTab].questions" :key="index" class="border-b py-3">
        <button
          class="w-full flex justify-between items-center text-left font-medium text-lg text-gray-800"
          @click="toggleQuestion(index)"
        >
          {{ question.text }}
          <span
            class="transition-transform"
            :class="question.open ? 'rotate-180' : 'rotate-0'"
          >
            +
          </span>
        </button>
        <div v-if="question.open" class="mt-2 text-gray-600">
          {{ question.answer }}
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

// Data for tabs and their respective questions
const tabs = reactive([
   
  {
    title: "Monetization Programs",
    description: "Details about the various monetization programs for creators.",
    questions: [
      {
        text: "How do monetization programs work?",
        answer: "Programs are based on ad revenue, subscriptions, and more.",
        open: false,
      },
      {
        text: "What are the eligibility criteria for monetization?",
        answer: "Creators must meet specific engagement metrics to qualify.",
        open: false,
      },
    ],
  },
  {
    title: "Participation and Content Creation",
    description: "Guidelines for participating and creating content.",
    questions: [
      {
        text: "Who can join Thortok and start creating content?",
        answer: "Anyone meeting the platform's requirements can join.",
        open: false,
      },
      {
        text: "Are there any restrictions on the type of content?",
        answer: "Content must follow the community guidelines.",
        open: false,
      },
    ],
  },
  {
    title: "Account and Settings",
    description: "Manage your account and customize settings.",
    questions: [
      {
        text: "How do I manage my account and settings?",
        answer: "Go to the settings page to update your account details.",
        open: false,
      },
      {
        text: "Can I change my account email?",
        answer: "Yes, you can update your email in the account settings.",
        open: false,
      },
    ],
  },
  {
    title: "Support and Reporting",
    description: "Reach out for support or report issues.",
    questions: [
      {
        text: "How can I contact support for issues or reports?",
        answer: "You can reach out through the support page or email.",
        open: false,
      },
      {
        text: "How do I report inappropriate content?",
        answer: "Use the report button available on each content page.",
        open: false,
      },
    ],
  },
]);

// State for the active tab
let activeTab = 0;

// Function to toggle a question's visibility
function toggleQuestion(index) {
  tabs[activeTab].questions[index].open = !tabs[activeTab].questions[index].open;
}

// Function to change the active tab and reset questions
function changeTab(index) {
  // Close all questions in the current tab
  tabs[activeTab].questions.forEach((question) => {
    question.open = false;
  });

  // Switch to the new tab
  activeTab = index;
}
</script>

 