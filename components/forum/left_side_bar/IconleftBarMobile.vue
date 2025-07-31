<template>
  <div class="overflow-x-scroll hide-scrollbar">
    <div class="flex flex-row">
      <div
        v-for="topic in list_topics"
        :key="topic.title"
        class="flex items-center pb-2 rounded-md cursor-pointer transition-colors duration-200"
      >
        <div v-if="topic.subcategories" class="flex flex-row gap-[6px]">
          <div
            v-for="(sub, index) in topic.subcategories"
            :key="sub.title"
            class="subcategory flex items-center gap-[16px] bg-white rounded-md"
          >
            <Button
              :class="{
                'bg-[#EFF1D9]': activeIndex === sub.title,
                'hover:bg-gray-200': activeIndex !== sub.title,
              }"
              @click="handleClick(sub.title)"
              class="rounded-md flex justify-start items-start px-[14px] py-2"
              @mouseover="hoverIndex = sub.title"
              @mouseleave="hoverIndex = ''"
            >
              <div class="flex items-center gap-[10px]">
                <!-- <div class="w-[30px] h-[30px]">
                  <NuxtImg
                    :src="sub.icon"
                    alt="Profile"
                    class="object-cover w-full h-full"
                  />
                </div> -->
                <div
                  class="w-[30px] h-[30px]"
                  v-if="typeof sub.icon === 'string'"
                >
                  <NuxtImg
                    :src="sub.icon || ''"
                    alt="Profile"
                    class="object-cover w-full h-full"
                  />
                </div>
                <div
                  class="w-[30px] h-[30px] flex items-center justify-center rounded-full"
                  v-else
                  :class="{
                    'bg-[#F2F2F2]': sub.title !== hoverIndex,
                    'bg-[#fff]':
                      sub.title === hoverIndex || activeIndex === sub.title,
                  }"
                >
                  <component
                    :is="sub.icon"
                    :color="
                      sub.title === hoverIndex || activeIndex === sub.title
                        ? '#005c53'
                        : '#000'
                    "
                  ></component>
                </div>
              </div>
            </Button>
          </div>
        </div>
        <VerticalLine />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '../right_side_bar/ui/Button.vue'
import VerticalLine from '../../../icons/forum_icons/VerticalLine.vue'
import { list_topics } from '../../../utils/forum'
const emit = defineEmits(['update-topic'])
const hoverIndex = ref('')
const updateValue = (topic: string) => {
  emit('update-topic', topic)
}
const activeIndex = ref('Explore')

const handleClick = (name: string) => {
  activeIndex.value = name
  console.log('Clicked on:', name)
  updateValue(name)
}
onMounted(() => {
  emit('update-topic', activeIndex.value)
})
</script>

<style scoped></style>
