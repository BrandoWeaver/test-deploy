<template>
  <section
    class="w-[1440px] xl-max:w-full pt-[16px] md-max:pt-[6px] lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px]"
  >
    <div class="flex flex-col md:flex-row mdx:flex-row gap-6 w-full">
      <!-- Text Section -->
      <div class="flex flex-col max-w-[760px] flex-1">
        <h2
          class="font-semibold smx:text-[18px] sm:text-[20px] sm:leading-[30px] lg:text-[30px] md:leading-8 lg:leading-9"
        >
          Thortok, All-in-One Creative Hub
        </h2>
        <p
          class="mt-2 md:mt-6 esm:leading-[25.2px] esm:text-[14px] lg:text-[17px] md:text-[15px] sm:text-[14px] text-[12px] lg:leading-[30px]"
        >
          At Thortok, we believe in empowering creators worldwide by giving them
          access to a comprehensive collection of digital resources—all
          thoughtfully curated in one accessible hub. Our mission is simple yet
          profound: to make quality creative assets available to anyone,
          anywhere, who seeks inspiration and innovation. From graphics and
          photos to sound and 3D elements, every section serves as a stepping
          stone towards creative expression and artistic growth. Here, in one
          home, find all the resources you need to bring your visions to life.
        </p>
      </div>

      <!-- Image Section -->
      <div class="flex flex-1">
        <img
          src="/img/all_product_frame.png"
          alt="Thortok Product Showcase"
          class="rounded-lg object-cover w-full max-w-[760px] h-auto"
        />
      </div>
    </div>

    <div class="mt-8">
      <div class="mb-6">
        <h2 class="text-[16px] md:text-[20px] font-bold mb-4">
          Explore Our Creative Sections
        </h2>
        <p class="mb-4 text-[15px] lg:text-[18px]">
          All the essentials to inspire and elevate your creative work.
        </p>
        <p class="text-[12px] lg:text-[15px] lg:leading-[27px]">
          Each section of Thortok is dedicated to a unique realm of digital
          artistry, ensuring a diverse array of resources that can meet the
          demands of any project or vision. Below, explore our offerings—from
          the visual storytelling of graphics and photos to the immersive audio
          and 3D elements, each crafted to spark ideas and facilitate creative
          flow.
        </p>
      </div>

      <div class="flex flex-wrap gap-6">
        <!-- Left Div -->
        <div
          class="flex gap-[5px] rounded-lg overflow-hidden lg:w-[40%] md:w-[50%] mx-auto w-full"
        >
          <div
            class="col-start-1 col-end-2 row-start-1 row-end-3 w-[-webkit-fill-available] flex-[2]"
          >
            <img
              :src="
                selectedTab?.data?.img1 || '/public/img/all_product_grid1.png'
              "
              alt=""
              class="h-full object-cover rounded-l-lg w-[-webkit-fill-available]"
            />
          </div>
          <div class="flex-[1.5]">
            <div class="h-[50%] w-[-webkit-fill-available]">
              <img
                :src="
                  selectedTab?.data?.img2 || '/public/img/all_product_grid2.png'
                "
                alt=""
                class="rounded-tr-lg h-full object-cover w-[-webkit-fill-available]"
              />
            </div>
            <div class="row-end-3 h-[50%] mt-[5px] w-[-webkit-fill-available]">
              <img
                :src="
                  selectedTab?.data?.img3 || '/public/img/all_product_grid3.png'
                "
                alt=""
                class="rounded-br-lg h-full object-cover w-[-webkit-fill-available]"
              />
            </div>
          </div>
        </div>

        <!-- Middle Div -->
        <div class="lg:w-[20%] md:w-[45%] w-full lg:max-w-[220px] xl:w-[14vw]">
          <div v-for="(tab, index) in tabs" :key="index" class="cursor-pointer">
            <!-- Tab Header -->
            <div
              @click="selectTab(tab)"
              :class="[
                'border-[#EFF1D9] border py-3 px-4 flex items-center justify-between rounded-[6px] ',
                selectedTab === tab
                  ? 'bg-[#DBF226] hover:bg-[#DBF226]'
                  : 'hover:bg-[#eff1d9]',
                { 'mt-2': index },
              ]"
            >
              <span class="flex items-center gap-2 text-nowrap mr-2">
                <component :is="tab.Icon" class="text-black" />
                <span>{{ tab.title }}</span>
              </span>
              <span
                :class="[
                  selectedTab === tab
                    ? 'block rotate-90 md:rotate-0'
                    : 'md:hidden block',
                ]"
              >
                <RightArrow class="text-black" />
              </span>
            </div>

            <!-- Accordion Content -->
            <div v-if="selectedTab === tab" class="my-4 mb-2 md:hidden p-4">
              <h3 class="text-[18px] font-semibold mb-[14px]">
                {{ selectedTab?.data.title || 'Select a tab' }}
              </h3>
              <p class="text-[14px] leading-[25.2px] text-[#005b52] mb-4">
                {{ selectedTab?.data.text || '' }}
              </p>
              <h3 class="my-6 text-[18px] leading-5 font-semibold">
                Our Categories
              </h3>
              <ul class="flex flex-wrap gap-2">
                <li
                  v-for="(category, index) in selectedTab?.data.categories ||
                  []"
                  :key="index"
                  @click="selectCategory(category)"
                  :class="[
                    'rounded-[4px] border border-[#EEE] px-3 py-[6px] text-[12px] cursor-pointer ',
                    isCategorySelected(category)
                      ? 'bg-[#DBF226] hover:bg-[#DBF226]'
                      : 'bg-[#F5F5F5] hover:bg-[#eff1d9]',
                  ]"
                >
                  {{ category }}
                </li>
              </ul>
              <div class="text-[#005B52] flex items-center mt-6 gap-[10px]">
                <p class="leading-8 font-bold cursor-pointer">See more</p>
                <RightLongArrow class="w-[18px] h-[18px] mt-1" />
              </div>
            </div>
          </div>
        </div>

        <!-- Right Div (Hidden on small screens) -->
        <div
          class="flex-1 lg:w-[40%] md:w-full w-full p-2 rounded-lg min-w-[300px] hidden md:block"
        >
          <h3 class="text-[18px] font-semibold mb-[14px]">
            {{ selectedTab?.data.title || 'Select a tab' }}
          </h3>
          <p class="text-[14px] leading-[25.2px] text-[#005b52] mb-4">
            {{ selectedTab?.data.text || '' }}
          </p>
          <h3 class="my-6 text-[18px] leading-5 font-semibold">
            Our Categories
          </h3>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="(category, index) in selectedTab?.data.categories || []"
              :key="index"
              @click="selectCategory(category)"
              :class="[
                'rounded-[4px] border border-[#EEE] px-3 py-[6px] text-[12px] cursor-pointer ',
                isCategorySelected(category)
                  ? 'bg-[#DBF226] hover:bg-[#DBF226]'
                  : 'bg-[#F5F5F5] hover:bg-[#eff1d9]',
              ]"
            >
              {{ category }}
            </li>
          </ul>

          <div class="text-[#005B52] flex items-center my-6 gap-[10px]">
            <p class="leading-8 font-bold cursor-pointer">See more</p>
            <RightLongArrow class="w-[18px] h-[18px] mt-1" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="md:py-[64px] py-[48px] lg:px-[64px] md:px-[54px] sm:px-[32px] px-[24px] bg-[#F2F2F2] rounded-[10px] mt-8 bg-[url(/img/comma.png)] bg-no-repeat bg-[right_50px_bottom_10px]"
    >
      <h3
        class="heading smx:text-[16px] sm:text-[20px] lg:text-[20px] md:leading-8 lg:leading-9 mb-2 font-bold"
      >
        Why Choose Thortok for Your Creative Journey?
      </h3>
      <p class="text-[15px] leading-[27px] md:text-[18px] md:leading-[32px]">
        Thortok is more than just a resource platform—it’s a commitment to
        creators. By gathering these diverse assets, we provide not only the
        tools for creation but also the means to celebrate culture, showcase
        talent, and support the global creative community. Thortok brings
        together the essentials that inspire, connect, and empower creative
        voices across the world.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import RightArrow from '../../icons/RightArrow.vue'
import Graphics from '../../icons/Graphics.vue'
import Picture from '../../icons/Picture.vue'
import Fonts from '../../icons/Fonts.vue'
import Videos from '../../icons/Videos.vue'
import Audio from '../../icons/Audio.vue'
import SoundFile from '../../icons/SoundFile.vue'
import Box3d from '../../icons/Box3d.vue'
import RightLongArrow from '../../icons/RightLongArrow.vue'

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

<style scoped></style>
