<script setup lang="ts">
import { ref, watchEffect, onMounted } from 'vue'
import Minus from '../../icons/Minus.vue'
import Plus from '../../icons/Plus.vue'
import RightArrow from '../../icons/RightArrow.vue'
import DownArrow from '../../icons/DownArrow.vue'

interface Question {
  text: string
  answer?: string
  open: boolean
  isList?: string[]
  answerHtml?: {
    title: string
    desArr: {
      des: string
      subDes: string
    }[]
  }[]
}

interface Tab {
  title: string
  questions: Question[]
}

const props = defineProps<{
  topTitle: string
  tabs: Tab[]
}>()

// Selected tab index
const selectedSidebarIndex = ref<number>(0)

// Track open questions per tab
const openQuestions = ref<Record<number, Record<number, boolean>>>({})

// Initialize openQuestions when `props.tabs` changes
watchEffect(() => {
  openQuestions.value = {}
  props.tabs.forEach((tab, tabIndex) => {
    openQuestions.value[tabIndex] = {}
    tab.questions.forEach((_, questionIndex) => {
      openQuestions.value[tabIndex][questionIndex] = false
    })
  })
})

// Function to switch tabs
const selectSidebar = (index: number) => {
  selectedSidebarIndex.value = index
}

// Toggle specific question's open state
const toggleAnswer = (tabIndex: number, questionIndex: number) => {
  openQuestions.value[tabIndex][questionIndex] =
    !openQuestions.value[tabIndex][questionIndex]

  // Close other questions in the same tab
  Object.keys(openQuestions.value[tabIndex]).forEach((qIndex) => {
    if (parseInt(qIndex) !== questionIndex) {
      openQuestions.value[tabIndex][Number(qIndex)] = false
    }
  })
}

// Detect screen size and determine view
const isMobile = ref<boolean>(false)

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
    class="w-[1440px] xl-max:w-full lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px]"
  >
    <h1
      style="
        color: #000;

        /* H1 */
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 54px */
      "
      class="text-[22px] sm:text-[26px] md:text-[24px] lg:text-[30px]"
    >
      {{ topTitle }}
    </h1>
    <div class="md:mt-14 lg:grid gap-10 grid-cols-12">
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
          <div v-if="selectedSidebarIndex === index" class="mt-2">
            <div v-for="(question, qIndex) in tab.questions" :key="qIndex">
              <div class="px-4 py-3">
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
                <div
                  v-show="openQuestions[selectedSidebarIndex][qIndex]"
                  v-if="question?.isList?.length !== 0"
                >
                  <ul
                    v-for="val in question?.isList"
                    class="list-disc list-inside"
                  >
                    <li
                      class="font-noto font-light text-[#000] xl:text-[17px] xl-max:text-[17px] lg-max:text-[15px] md-max:text-[14px] sm-max:text-[13px]"
                    >
                      {{ val }}
                    </li>
                  </ul>
                </div>

                <div
                  v-show="openQuestions[selectedSidebarIndex][qIndex]"
                  v-if="question?.answerHtml?.length !== 0"
                >
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

              <!-- Full-Width Separator -->
              <div
                v-if="qIndex !== tab.questions.length - 1"
                class="border-b border-[#e4e4e4] w-full"
              ></div>
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
          <div
            v-show="openQuestions[selectedSidebarIndex][qIndex]"
            v-if="question?.isList?.length !== 0"
          >
            <ul v-for="val in question?.isList" class="list-disc list-inside">
              <li
                class="font-noto font-light text-[#000] xl:text-[17px] xl-max:text-[17px] lg-max:text-[15px] md-max:text-[14px] sm-max:text-[13px]"
              >
                {{ val }}
              </li>
            </ul>
          </div>

          <!-- <div v-if="question.isList">list</div> -->
        </div>
      </div>
    </div>
  </div>
</template>
