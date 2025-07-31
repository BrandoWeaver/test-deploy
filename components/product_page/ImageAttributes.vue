<template>
  <div class="mb-8 w-full">
    <!-- Section Title -->
    <h3
      class="font-normal font-noto text-[18px] lg-max:text-[16px] md-max:text-[15px] text-black mb-4 leading-[32.4px] lg-max:leading-[28.8px] md-max:leading-[27px]"
    >
      Attributes
    </h3>

    <!-- Attributes Container -->
    <div
      class="flex flex-wrap justify-start gap-x-[120px] md-max:gap-x-[40px] whitespace-nowrap"
    >
      <!-- Column 1: Basic Image Info -->
      <div class="flex flex-col w-[182px] gap-[10px]" v-if="section_id === 1">
        <div class="flex gap-x-3.5">
          <span
            class="font-normal font-noto text-black/50 text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >Dimensions:</span
          >
          <span
            class="font-normal font-noto text-[#000000] text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >{{ props.metadata?.dimensions || 'NA' }}</span
          >
        </div>
        <div class="flex gap-x-3.5">
          <span
            class="font-normal font-noto text-black/50 text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >Aspect Ratio:</span
          >
          <span
            class="font-normal font-noto text-black text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >{{ props.metadata?.aspect_ratio || 'NA' }}</span
          >
        </div>
        <div class="flex gap-x-3.5">
          <span
            class="font-normal font-noto text-black/50 text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >Camera:</span
          >
          <span
            class="font-normal font-noto text-black text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >{{ props.metadata?.camera || 'NA' }}</span
          >
        </div>
        <div class="flex gap-x-3.5">
          <span
            class="font-normal font-noto text-black/50 text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >Focal:</span
          >
          <span
            class="font-normal font-noto text-black text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >{{ props.metadata?.focal || 'NA' }}</span
          >
        </div>
        <div class="flex gap-x-3.5">
          <span
            class="font-normal font-noto text-black/50 text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >Aperture:</span
          >
          <span
            class="font-normal font-noto text-black text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >{{ props.metadata?.aperture || 'NA' }}</span
          >
        </div>
      </div>

      <!-- Column 2: Technical Details -->
      <div class="flex flex-col w-[234px] gap-[10px]" v-if="section_id === 1">
        <div class="flex gap-x-3.5">
          <span
            class="font-normal font-noto text-black/50 text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >ISO:</span
          >
          <span
            class="font-normal font-noto text-black text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >{{ props.metadata?.iso || 'NA' }}</span
          >
        </div>
        <div class="flex gap-x-3.5">
          <span
            class="font-normal font-noto text-black/50 text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >Exposure Time:</span
          >
          <span
            class="font-normal font-noto text-black text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >{{ props.metadata?.exposure_time || 'NA' }}</span
          >
        </div>
        <div class="flex gap-x-3.5">
          <span
            class="font-normal font-noto text-black/50 text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >Color Space:</span
          >
          <span
            class="font-normal font-noto text-black text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >{{ props.metadata?.color_space || 'NA' }}</span
          >
        </div>
        <div class="flex gap-x-3.5">
          <span
            class="font-normal font-noto text-black/50 text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >Color Profile:</span
          >
          <span
            class="font-normal font-noto text-black text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >{{ props.metadata?.color_profile || 'NA' }}</span
          >
        </div>
        <div class="flex gap-x-3.5">
          <span
            class="font-normal font-noto text-black/50 text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >Taken At:</span
          >
          <span
            class="font-normal font-noto text-black text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >{{ props.metadata?.taken_at || 'NA' }}</span
          >
        </div>
      </div>

      <!-- Column 3: Upload & Popularity -->
      <div class="flex flex-col w-[198px] gap-[10px]">
        <div class="flex gap-x-3.5">
          <span
            class="font-normal font-noto text-black/50 text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >Uploaded On:</span
          >
          <span
            class="font-normal font-noto text-black text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >{{ props.uploaded_on || 'NA' }}</span
          >
        </div>
        <div class="flex gap-x-3.5">
          <span
            class="font-normal font-noto text-black/50 text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >Views:</span
          >
          <span
            class="font-normal font-noto text-black text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >{{ props.views || 0 }}</span
          >
        </div>
        <div class="flex gap-x-3.5">
          <span
            class="font-normal font-noto text-black/50 text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >Likes:</span
          >
          <span
            class="font-normal font-noto text-black text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >{{ props.like || 0 }}</span
          >
        </div>
        <div class="flex gap-x-3.5">
          <span
            class="font-normal font-noto text-black/50 text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >Downloads:</span
          >
          <span
            class="font-normal font-noto text-black text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >{{ props.downloads || 0 }}</span
          >
        </div>
        <div class="flex gap-x-3.5 items-center">
          <span
            class="font-normal font-noto text-black/50 text-[15px] leading-[27px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px]"
            >Software:</span
          >
          <span class="flex items-center gap-2">
            <NuxtImg
              :src="props.used_software?.logo || ''"
              alt="Photoshop"
              class="w-5 h-5"
            />
            <!-- <img :src="adobeLightroomIcon" alt="Lightroom" class="w-5 h-5" /> -->
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import adobeLightroomIcon from '@/assets/images/collections/adobe-lightroom-icon.svg'
import adobePhotoshopIcon from '@/assets/images/collections/adobe-photoshop-icon.svg'
const props = defineProps<{
  metadata?: POST.METADATA
  uploaded_on?: string
  views?: number
  downloads?: number
  like?: number
  used_software?: POST.Software
  section_id?: number
}>()
</script>

<style scoped>
/* Add custom styles if needed */
</style>
