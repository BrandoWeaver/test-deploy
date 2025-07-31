<template>
  <div class="bg-white text-gray-900 w-full flex-wrap">
    <!-- Description Section -->
    <div class="mb-6 sm-max:pr-0">
      <h2
        class="text-black font-lexend text-[20px] lg-max:text-[18px] lg-max:leading-[32.4px] md-max:text-[17px] md-max:leading-[30.6px] sm-max:text-[16px] sm-max:leading-[28.8px] font-bold leading-[36px] mb-2"
      >
        Description
      </h2>
      <p
        class="self-stretch text-black font-noto text-[15px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[13px] md-max:leading-[23.4px] sm-max:text-[12px] sm-max:leading-[21.6px] font-[350] leading-[27px]"
      >
        {{ description }}
      </p>
    </div>

    <!-- Attributes Section -->
    <div></div>
    <ImageAttributes
      :metadata="props.metadata"
      :uploaded_on="props.upload_on"
      :views="props.views"
      :downloads="props.downloads"
      :like="props.like"
      :used_software="props.used_software"
      :section_id="section_id"
    />
    <!-- Tags Section -->
    <div>
      <h3
        class="text-[#000000] font-noto text-[18px] font-normal leading-[1.8] mb-2 lg-max:text-[16px] lg-max:leading-[28.8px] md-max:text-[15px] md-max:leading-[27px]"
      >
        Item Tags
      </h3>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="(tag, index) in tags"
          :key="index"
          class="flex items-center justify-center gap-[10px] px-[12px] py-[6px] text-[15px] font-[100] leading-[1.8] text-[var(--Gray-300,#444)] text-center font-noto bg-[#F5F5F5] border border-[var(--White-200,#EEE)] rounded-[4px] lg-max:text-[14px] lg-max:leading-[25.2px] md-max:text-[12px] md-max:leading-[21.6px] sm-max:text-[11px] sm-max:leading-[19.8px]"
        >
          {{ tag.name }}
        </span>
        <span
          class="flex items-center justify-center gap-[10px] px-[12px] py-[6px] text-[15px] font-[100] leading-[1.8] text-[var(--Gray-300,#444)] text-center font-noto rounded-[4px] md-max:text-[12px] md-max:leading-[21.6px] sm-max:text-[11px] sm-max:leading-[19.8px]"
          >+ View more</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ImageAttributes from '@/components/product_page/ImageAttributes.vue'

interface Props {
  description?: string | undefined
  metadata?: POST.METADATA
  upload_on?: string
  views?: number
  downloads?: number
  like?: number
  used_software?: POST.Software
  tags?: POST.Tags[]
  section_id?: number
}
const props = defineProps<Props>()
</script>
