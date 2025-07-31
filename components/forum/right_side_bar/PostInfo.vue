<template>
  <div class="flex flex-col gap-[20px]">
    <div class="flex flex-col gap-[10px]">
      <div>
        <h5 class="font-bold text-[#000] font-noto">Hello!</h5>
      </div>
      <div>
        <p class="text-[#000] text-[14px] font-noto">Username</p>

        <p class="text-[rgba(120,120,120,0.60)] text-[10px]">
          chhim.ratana@thortok.com
        </p>
      </div>
    </div>
    <div class="flex gap-[6px] flex-col">
      <Button
        v-for="(button, index) in buttons"
        :key="index"
        class="rounded-md border border-[#F5F5F5] flex justify-start items-start px-[14px] py-2 transition-all duration-300"
        :class="{
          'bg-[#EFF1D9]': selectedButton === button.label,
          'bg-[#F2F2F2]': selectedButton !== button.label,
          'hover:bg-[#EFF1D9]/50': true,
        }"
        @click="selectButton(button.label)"
        @mouseover="hoverIndex = index"
        @mouseleave="hoverIndex = null"
      >
        <div class="flex items-center gap-[10px]">
          <div class="p-[9px] bg-white rounded-md">
            <component
              :is="button.icon"
              :color="
                selectedButton === button.label || index === hoverIndex
                  ? '#005c53'
                  : '#000'
              "
            />
          </div>
          <div>
            <p class="text-[#262527] text-[14px]">{{ button.label }}</p>
          </div>
        </div>
      </Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import NewPostIcon from '../../../icons/forum_icons/NewPost.vue'
import FavIcon from '../../../icons/forum_icons/Fav.vue'
import MyPostIcon from '../../../icons/forum_icons/MyPost.vue'

import Button from '~/components/forum/right_side_bar/ui/Button.vue'
import { ref } from 'vue'
const hoverIndex = ref<number | null>(null)
const buttons = ref([
  { label: 'New Post', icon: markRaw(NewPostIcon) },
  { label: 'My Posts', icon: markRaw(MyPostIcon) },
  { label: 'My Favorites', icon: markRaw(FavIcon) },
])

const selectedButton = ref(buttons.value[0].label)

const selectButton = (label: string) => {
  selectedButton.value = label
}
</script>
