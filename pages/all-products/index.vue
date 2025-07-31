<template>
  <SearchHead background-image="/img/hero_image.png" />
  <div
    class="flex flex-col items-center justify-center w-full pt-[32px] bg-cover bg-center overflow-hidden"
  >
    <Breadcrumbs
      :items="[
        { label: 'Home', to: '/' },
        { label: 'All Products', to: '/products' },
      ]"
    />
    <SeasonalCollections />
    <CreativeHub />
    <AdsDiscoverFull />
    <ChoosePlan />
    <Monetize_Program />
    <Monetize_content />
    <FreelanceServices />
    <!-- <Quick_Answers /> -->
    <FAQShort />
    <Cta_SUB />
    <Sub_Re />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SeasonalCollections from '@/components/body_block/SeasonalCollections.vue'
import RightArrow from '../../icons/RightArrow.vue'
import Graphics from '../../icons/Graphics.vue'
import Picture from '../../icons/Picture.vue'
import Fonts from '../../icons/Fonts.vue'
import Videos from '../../icons/Videos.vue'
import Audio from '../../icons/Audio.vue'
import SoundFile from '../../icons/SoundFile.vue'
import Box3d from '../../icons/Box3d.vue'
import SearchHead from '~/components/header_block/SearchHead.vue'
import Breadcrumbs from '~/components/all-proCom/Breadcrumbs.vue'
import CreativeHub from '~/components/all-proCom/CreativeHub.vue'
import AdsDiscoverFull from '~/components/body_block/AdsDiscoverFull.vue'
import ChoosePlan from '~/components/all-proCom/ChoosePlan.vue'

import Monetize_Program from '~/components/body_block/Monetize_Program.vue'
import Monetize_content from '~/components/body_block/Monetize_content.vue'
import FreelanceServices from '~/components/body_block/FreelanceServices.vue'
import Quick_Answers from '~/components/body_block/Quick_Answers.vue'
import Cta_SUB from '~/components/body_block/Cta_SUB.vue'
import Sub_Re from '~/components/body_block/Sub_Re.vue'
import FAQShort from '~/components/HomeCom/FAQShort.vue'

const tabs = ref([
  {
    Icon: Graphics,
    title: 'Graphics',
    data: {
      img1: '/img/all_product_graphics1.png',
      img2: '/img/all_product_graphics2.png',
      img3: '/img/all_product_graphic3.png',
      title: 'Visual Foundations for Every Idea',
      text: 'Graphics form the backbone of any design project. Our Graphics section offers customizable icons, templates, and PSD files—crafted for both creative flexibility and quality. Here, designers can discover resources that empower them to produce high-impact visual experiences.',
      categories: ['Icons', 'PSD', 'Vector', 'Templates', 'Mockups'],
    },
  },
  {
    Icon: Picture,
    title: 'Photos',
    data: {
      img1: '/img/all_product_photos1.png',
      img2: '/img/all_product_photos2.png',
      img3: '/img/all_product_photos3.png',
      title: 'Capture Realism and Beauty',
      text: 'From striking landscapes to cultural highlights, our Photos section captures life and essence from around the world, with special emphasis on Southeast Asian culture. Thortok’s photo collection lets creators infuse realism and authenticity into their projects with ease.',
      categories: [
        'Culture & Tradition',
        'Products',
        'Food & Beverages',
        'Peoples',
        'Animals',
        'Lifestyle',
        'Nature & Place',
      ],
    },
  },
  {
    Icon: Fonts,
    title: 'Fonts',
    data: {
      img1: '/img/all_product_grid1.png',
      img2: '/img/all_product_grid2.png',
      img3: '/img/all_product_grid3.png',
      title: 'The Voice of Your Visual Message',
      text: 'Typography can make or break a design. Our Fonts section offers curated options in various styles—from Serif to Sans Serif and Script, each designed to convey the tone and character of any project, bringing words to life on the screen.',
      categories: [
        'Serif',
        'Sans-serif',
        'Script',
        'Slab Serif',
        'Display',
        'Monospaced-width',
        'Variable',
      ],
    },
  },
  {
    Icon: Videos,
    title: 'Videos',
    data: {
      img1: '/img/all_product_videos1.png',
      img2: '/img/all_product_videos2.png',
      img3: '/img/all_product_videos3.png',
      title: 'Motion Brings Impact',
      text: 'For dynamic storytelling, Thortok’s Video section provides high-quality footage that adds depth and movement to any creation. Creators can find footage that enhances the narrative, engages the audience, and makes projects memorable.',
      categories: [
        'Culture & Tradition',
        'Products',
        'Food & Beverages',
        'Peoples',
        'Animals',
        'Lifestyle',
        'Nature & Place',
      ],
    },
  },
  {
    Icon: Audio,
    title: 'Audio',
    data: {
      img1: '/img/all_product_audio1.png',
      img2: '/img/all_product_audio2.png',
      img3: '/img/all_product_audio3.png',
      title: 'Amplify the Experience',
      text: 'Sound brings emotion and immersion. Our Audio section contains a range of tracks suited for various moods and styles, from soft ambient tunes to high-energy tracks, making it easy for creators to find the perfect soundtrack.',
      categories: ['Genres', 'Moods', 'Themes'],
    },
  },
  {
    Icon: SoundFile,
    title: 'Sound Effects',
    data: {
      img1: '/img/all_product_sound1.png',
      img2: '/img/all_product_sound2.png',
      img3: '/img/all_product_sound3.png',
      title: 'Sound Effects: The Art of Detail',
      text: 'Sound effects add dimension, transforming digital media into immersive experiences. Thortok’s library includes effects that range from natural sounds to cinematic effects, allowing creators to emphasize every visual detail with audio.',
      categories: ['Products', 'Peoples', 'Animals', 'Nature & Place'],
    },
  },
  {
    Icon: Box3d,
    title: '3D Elements',
    data: {
      img1: '/img/all_product_3d1.png',
      img2: '/img/all_product_3d2.png',
      img3: '/img/all_product_3d3.png',
      title: 'A New Dimension to Creation',
      text: 'For designers venturing into the realm of 3D, our 3D Elements section offers assets that add depth and realism. From intricate models to simple, versatile shapes, these elements bring a dynamic perspective to projects, enabling innovative and engaging creations.',
      categories: [
        'Culture & Tradition',
        'Products',
        'Food & Beverages',
        'Peoples',
        'Animals',
        'Lifestyle',
        'Nature & Place',
      ],
    },
  },
])

const selectedTab = ref(tabs.value[0])
const selectedCategories = ref([])

function selectTab(tab) {
  selectedTab.value = tab
  selectedCategories.value = [] // Clear selected categories when switching tabs
}

function selectCategory(category) {
  const index = selectedCategories.value.findIndex((cat) => cat === category)
  if (index === -1) {
    // Add category if not already selected
    selectedCategories.value.push(category)
  } else {
    // Remove category if already selected
    selectedCategories.value.splice(index, 1)
  }
}

function isCategorySelected(category) {
  return selectedCategories.value.includes(category)
}
</script>
