<template>
  <div
    class="flex w-full sm-max:flex-1 sm-max:gap-[8px] mx-auto gap-[24px] items-start md-max:gap-[14px] md-max:mx-0"
  >
    <div
      ref="imageContainer"
      class="w-full xl-max:w-[59vw] lg-max:w-full md-max:w-full sm-max:w-[100%] xs-max:w-full"
    >
      <transition name="fade" mode="out-in">
        <div v-if="!imageSrc || status === 'pending'" :key="imageSrc">
          <div
            class="bg-[#f6f5f3] w-full sm-max:w-[86vw] xs-max:w-[80vw] h-[605px] xl-max:h-[41.6vw] lg-max:h-[56vw] md-max:h-[63.5vw] sm-max:h-[55.6vw] rounded-lg"
            :class="{
              'animate-pulse': status === 'pending',
            }"
          ></div>
        </div>
        <NuxtImg
          v-else
          :key="imageSrc || ''"
          :src="imageSrc"
          :quality="60"
          alt="Product Image"
          class="w-full sm-max:w-[86vw] xs-max:w-[80vw] h-[605px] xl-max:h-[41.6vw] lg-max:h-[56vw] md-max:h-[63.5vw] sm-max:h-[55.6vw] rounded-lg shadow-lg object-cover"
        />
      </transition>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  imageSrc?: string
  status?: string
}
const props = defineProps<Props>()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
