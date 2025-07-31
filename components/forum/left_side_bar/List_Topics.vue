<template>
  <div class="space-y-6">
    <div v-for="topic in filteredTopics" :key="topic.title" class="">
      <div class="">
        <div
          class="flex items-center gap-[10px] pb-[20px]"
          v-if="topic.title !== undefined"
        >
          <div>
            <h5 class="category-title text-[17px] font-bold text-[#060606]">
              {{ topic.title }}
            </h5>
          </div>
          <div class="w-[16px] h-[16px]">
            <NuxtImg
              :src="topic.icon || ''"
              alt="Profile"
              class="object-cover w-full h-full"
            />
          </div>
        </div>

        <div
          v-if="topic.subcategories"
          class="subcategories flex flex-col gap-[6px]"
        >
          <div
            v-for="(sub, index) in topic.subcategories"
            :key="sub.title"
            class="subcategory flex items-center flex-col gap-[16px] bg-white rounded-md"
          >
            <Button
              @click="toggleActive(sub.title)"
              class="rounded-md border border-[#F5F5F5] flex justify-start items-center px-[14px] py-2 h-[50px] text-[14px] font-noto font-normal hover:bg-[#EFF1D9]/50"
              :class="{ 'bg-[#EFF1D9]': isActive(sub.title) }"
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
                      sub.title === hoverIndex || isActive(sub.title),
                  }"
                >
                  <component
                    :is="sub.icon"
                    :color="
                      sub.title === hoverIndex || isActive(sub.title)
                        ? '#005c53'
                        : '#000'
                    "
                  ></component>
                </div>
                <div>
                  <p class="text-[#262527] text-[14px]">{{ sub.title }}</p>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { list_topics } from '../../../utils/forum'
import Button from '~/components/forum/right_side_bar/ui/Button.vue'
import { ref, computed, onMounted } from 'vue'
import { useWindowSize } from '~/utils/useWindowSize'

const { width: windowWidth } = useWindowSize()
const emit = defineEmits(['update-topic'])

const activeSubcategory = ref('Explore')
const hoverIndex = ref('')

const isActive = (sub: string) => activeSubcategory.value === sub

onMounted(() => {
  emit('update-topic', activeSubcategory.value)
})

// Reactive flag to check if mounted (client-side)
const isClient = ref(false)

onMounted(() => {
  isClient.value = true
})

const filteredTopics = computed(() => {
  return list_topics.map((topic) => {
    if (!topic.subcategories) return topic

    const filteredSubcategories = isClient.value
      ? topic.subcategories.filter((subcategory) => {
          if (windowWidth.value >= 1440) {
            return !['New Post', 'My Posts', 'My Favorites'].includes(
              subcategory.title
            )
          }
          return true
        })
      : topic.subcategories

    return { ...topic, subcategories: filteredSubcategories }
  })
})

const toggleActive = (sub: string) => {
  activeSubcategory.value = sub
  emit('update-topic', sub)
}
</script>
