<template>
  <ul
    class="grid grid-cols-2 xs-max:grid-cols-1 xs1:grid-cols-1 md-611:grid-cols-2 sm:grid-cols-3 sm:gap-4 md:gap-6 sm-max:gap-[10px] lg:py-6 lg-max:py-6 md-max:py-4 sm-max:py-4"
  >
    <li
      v-for="(item, index) in listItems"
      :key="item.title"
      class="border-[2px] hover:bg-[#F8F8EC] hover:border-[2px] hover:border-[#005B52] rounded-[10px] flex flex-col gap-[14px] lg:p-8 lg-max:p-8 md-max:p-6 sm-max:p-4 xs1:p-4"
      @click="handleSelect(index)"
      @mouseover="hoverIndex = index"
      @mouseleave="hoverIndex = null"
    >
      <div class="flex flex-col items-start">
        <component
          :is="item.icon"
          :bgColor="index === hoverIndex ? '#DBF226' : ''"
        ></component>
      </div>

      <div class="flex flex-col gap-[10px]">
        <h3
          class="lg:text-[20px] lg-max:text-[18px] md-max:text-[17px] sm-max:text-[16px] font-bold font-lexend line-clamp-3"
        >
          {{ item.title }}
        </h3>
        <p
          class="text-[#000] font-noto font-light lg:text-[14px] lg-max:text-[13px] mdx:text-[11px] sm-max:text-[10px]"
        >
          {{ item.description }}
        </p>
      </div>
      <div>
        <NuxtLink
          class="text-[#000] text-[17px] font-noto hover:underline block"
        >
          <div
            class="flex flex-row items-center gap-[10px] lg:text-[17px] lg-max:text-[15px] md-max:text-[14px] sm-max:text-[13px]"
            :class="{ 'text-[#005B52]': index === hoverIndex }"
          >
            {{ item.linkText }}
            <Forward :color="index === hoverIndex ? '#005B52' : '#000'" />
          </div>
        </NuxtLink>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import Forward from '~/icons/help/forward.vue'
const hoverIndex = ref<number | null>(null)
const selectItem = ref(0)
const handleSelect = (index: number) => {
  selectItem.value = index
}

defineProps<{ listItems: CenterLists[] }>()
</script>
