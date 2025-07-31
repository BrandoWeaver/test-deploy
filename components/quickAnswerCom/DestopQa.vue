<template>
  <div
    class="w-[1440px] xl-max:w-full lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px]"
  >
    <h1
      style="
        color: #000;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 78px */
      "
      class="xl:text-[30px] xl-max:text-[30px] lg-max:text-[24px] md-max:text-[20px] sm-max:text-[18px] font-lexend"
    >
      {{ topTitle }}
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
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar (Desktop Version) -->
      <div class="lg:col-span-2 md:col-span-3 md:flex hidden flex-col gap-3">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          class="cursor-pointer py-2.5 px-6 rounded-[6px] text-left text-[18px] font-[300] min-w-[132px]"
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
      <div class="lg:col-span-10 md:col-span-9 md:-mt-7">
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
              class="font-[700] text-[17px] md:text-[20px] md:text-[22px]"
              :class="{ 'text-[#005B52]': question.open }"
            >
              {{ question.text }}
            </h1>
            <Plus v-if="!question.open" />
            <Minus v-else />
          </div>
          <p
            v-show="question.open"
            class="font-[300] lg:text-[15px] lg:text-[17px] pt-3 w-[98%]"
          >
            {{ question.answer }}
          </p>
          <div v-show="question.open" v-if="question?.isList?.length !== 0">
            <ul v-for="val in question?.isList" class="list-disc list-inside">
              <li
                class="font-noto font-light text-[#000] xl:text-[17px] xl-max:text-[17px] lg-max:text-[15px] md-max:text-[14px] sm-max:text-[13px]"
              >
                {{ val }}
              </li>
            </ul>
          </div>

          <div v-show="question.open" v-if="question?.answerHtml?.length !== 0">
            <div v-for="val in question?.answerHtml">
              <p class="font-[300] lg:text-[17px] pt-3 w-[98%]">
                {{ val.title }}
              </p>
              <ul
                v-for="vals in val.desArr"
                class="list-disc list-inside pl-2 pt-4 flex flex-col gap-4"
              >
                <li class="font-noto font-bold text-[#000] text-[14px]">
                  {{ vals.des }}
                  <span class="font-light">{{ vals.subDes }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Minus from '../../icons/Minus.vue'
import Plus from '../../icons/Plus.vue'
import RightArrow from '../../icons/RightArrow.vue'
import DownArrow from '../../icons/DownArrow.vue'

const props = defineProps({
  topTitle: String,
  tabs: Array,
})

const selectedSidebarIndex = ref(0) // Default tab

const selectSidebar = (index) => {
  selectedSidebarIndex.value = index
}

// Ensure only one question is open at a time
const toggleAnswer = (tabIndex, questionIndex) => {
  props.tabs[tabIndex].questions.forEach((q, i) => {
    q.open = i === questionIndex ? !q.open : false
  })
}
</script>
