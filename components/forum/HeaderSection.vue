<template>
  <div
    class="flex sm-495:flex-col justify-between items-center xs:gap-[10px] sm-495:items-start rounded-lg"
  >
    <div
      class="md:text-2xl xs:text-[18px] font-medium font-noto text-[#060606]"
    >
      {{ topicName }}
    </div>
    <div>
      <div
        class="bg-white p-1 rounded-lg flex flex-row justify-between w-full gap-2 items-center"
      >
        <div class="relative flex flex-wrap gap-4">
          <div class="relative flex">
            <button
              v-for="(tab, index) in tabs"
              :key="tab"
              ref="titleRefs"
              class="z-10 md:text-[14px] sm-max:text-[11px] sm:text-[11px] flex gap-[8px] px-[15px] py-[10px] font-noto font-light hover:text-gray-900"
              :class="{
                'text-[#000]': selectedLookingFor === tab,
                'text-[#535353]': selectedLookingFor !== tab,
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
            class="absolute top-0 h-full rounded-[4px] bg-gradient-to-t from-[#EFF1D9] to-[#EFF1D9] transition-all duration-300"
            :style="animationStyle"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
const tabs = ['Top', 'Latest', 'Recent activity']
const activeTab = ref('Top')

watch(activeTab, (newTab) => {
  console.log('Active tab changed to:', newTab)
  if (newTab === 'Top') {
    // fetch all time data
  } else if (newTab === 'Latest') {
    // fetch monthly data
  } else if (newTab === 'Recent activity') {
    // fetch weekly data
  }
})
const props = defineProps({
  topicName: String,
})
const animationStyle = ref({})
const titleRefs = ref<HTMLDivElement[]>([])
const selectedLookingFor = ref<(typeof tabs)[number]>(tabs[0])
const selectedIndex = ref<number>(0)

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
