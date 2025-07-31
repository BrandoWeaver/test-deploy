<template>
  <div class="vertical-menu bg-white rounded-[10px]">
    <div
      v-for="(topic, index) in list_topics"
      :key="topic.title"
      class="menu-item flex items-center p-2 rounded-md cursor-pointer transition-colors duration-200"
    >
      <div
        v-if="topic.subcategories"
        class="subcategories flex flex-col gap-[6px]"
      >
        <div
          v-for="(sub, ativeIndex) in topic.subcategories"
          :key="sub.title"
          class="subcategory flex items-center flex-col gap-[16px] bg-white rounded-md"
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
        <div
          class="h-[1px] w-full bg-[#E4E2E4]"
          v-if="index < list_topics.length - 1"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '../right_side_bar/ui/Button.vue'
import { list_topics } from '../../../utils/forum'
const hoverIndex = ref('')

const emit = defineEmits(['update-topic'])

const updateValue = (topic: string) => {
  emit('update-topic', topic)
}
const activeIndex = ref('Explore')
onMounted(() => {
  emit('update-topic', activeIndex.value)
})
const handleClick = (name: string) => {
  activeIndex.value = name
  updateValue(name)
}
</script>
