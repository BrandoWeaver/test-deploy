<template>
  <div
    class="bg-grey-grey-95 p-1 rounded-lg flex flex-row justify-between w-full gap-2 items-center"
  >
    <div class="relative rounded-lg w-full">
      <div class="relative flex flex-row justify-between">
        <button
          v-for="(tab, index) in tabs"
          :key="tab"
          ref="titleRefs"
          class="z-10 text-[14px] px-[15px] py-[10px]"
          :class="{
            'text-[#060606]': selectedLookingFor === tab,
            'text-[#535353] hover:rounded-[4px] hover:text-gray-900':
              selectedLookingFor !== tab,
          }"
          @click="
            () => {
              selectLookingFor(tab, index)
              activeTab = tab
            }
          "
        >
          {{ tab }}
        </button>
      </div>
      <div
        class="absolute top-0 h-full bg-[#fff] rounded-[4px] transition-all duration-300"
        :style="animationStyle"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tabs = ['All time', 'Month', 'Week']
const activeTab = ref('Month')
const animationStyle = ref({})
const titleRefs = ref<HTMLDivElement[]>([])
const selectedLookingFor = ref<(typeof tabs)[number]>(tabs[0])
const selectedIndex = ref<number>(0)
watch(activeTab, (newTab) => {
  console.log('Active tab changed to:', newTab)
  if (newTab === 'All time') {
    // fetch all time data
  } else if (newTab === 'Month') {
    // fetch monthly data
  } else if (newTab === 'Week') {
    // fetch weekly data
  }
})
const selectLookingFor = (item: string, index: number) => {
  selectedLookingFor.value = tabs[index]
  selectedIndex.value = index
  updateBackgroundPosition()
}
const updateBackgroundPosition = () => {
  nextTick(() => {
    const currentRef = titleRefs.value[selectedIndex.value]
    if (currentRef) {
      const { offsetLeft, offsetWidth, offsetTop } = currentRef
      animationStyle.value = {
        transform: `translate(${offsetLeft}px, ${offsetTop}px)`,
        width: `${offsetWidth}px`,
      }
    }
  })
}
onMounted(() => {
  updateBackgroundPosition()
})
</script>
