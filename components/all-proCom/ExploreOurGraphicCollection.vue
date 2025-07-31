<template>
  <div
    class="text-[#1C1C1C] w-[1440px] xl-max:w-full pt-[16px] md-max:pt-[6px] mb-10 md-max:w-full mx-auto gap-6 px-6 md-max:px-[16px] font-noto"
  >
    <div class="flex gap-4">
        <div class="w-[60%]">
            <h1 class="font-[700] heading text-[22px] sm:text-[26px]">
                {{ $t('explor.explore_our_graphic_collections') }}
            </h1>
            <p class="text-[15px] my-3 font-light">
                At Thortok, we believe that the right visuals have the power to transform your projects. Our Graphics section is crafted to offer creators a wide range of resources, from sleek icons to customizable templates. We aim to inspire your creativity while helping you build unique and authentic designs.
            </p>

            <h1 class="text-[18px] font-medium">Our Graphic Categories</h1>
            <p class="text-[15px] my-3 font-light">
            Each category in the Graphics section is designed to meet the specific needs of creators and designers. Get a preview of what’s possible and find the inspiration you need for your projects.
            </p>

            <div class="pt-6 md:grid gap-10 grid-cols-12">

                <!-- Sidebar (Desktop Version) -->
                <div class="md:col-span-3 md:flex hidden flex-col gap-3">
                    <div v-for="(tab, index) in sections" :key="index"
                    class="cursor-pointer py-2.5 px-6 rounded-[6px] text-left text-[17px] font-[300]"
                    :class="{
                        'hover:bg-[#EFF1D980] hover:font-[400] border':
                        selectedSidebarIndex !== index,
                        'bg-[#DBF226] text-black font-[400]':
                        selectedSidebarIndex === index,
                    }"
                    @click="selectSidebar(index)"
                    >
                    <div class="flex items-center gap-2 text-sm">
                        <img :src="tab.icon" alt="" class="h-4 w-4" />
                        {{ tab.title }}
                    </div>
                    </div>
                </div>

                <!-- SUB CATEGORIES -->
                <!-- FAQ Content (Desktop Version) -->
                <div class="md:col-span-9">
                    <p class="text-[#005B52] text-sm mb-3 font-light">
                        {{ sectionDescription }}
                    </p>
                    <h1 class="text-[18px] font-medium mb-3">Our Subcategories</h1>
                  
                    <div class="flex flex-wrap gap-3">
                    <NuxtLink
                        v-for="(subCategory, idx) in sections[selectedSidebarIndex]?.sub_categories"
                        :key="idx"
                        :to="subCategory.link"
                        class="border cursor-pointer text-sm px-4 py-2 rounded-md text-[#444] hover:bg-[#EFF1D980]"
                        :class="[
                        subCategory.open ? 'text-[#444]' : '',
                        idx === 0 ? 'bg-[#DBF226]' : 'bg-[#F5F5F5]'
                        ]"
                    >
                        {{ subCategory.name }}
                    </NuxtLink>
                    </div>

                    <div class="py-6">
                        <NuxtLink :to="sectionSeeMore" class="text-[#005B52] font-semibold flex gap-3 items-center">
                            See more <img src="/icons/arrow-right.svg" alt="" class="mt-2" />
                        </NuxtLink>
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="w-[40%]">
            <img :src="imageContent" alt="" />
        </div>
    </div>

  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const selectedSidebarIndex = ref(0) // Default tab
const imageContent = ref("");
const sectionDescription = ref("");
const sectionSeeMore = ref("");
const sections = ref([
  {
    icon: '/icons/Vector.svg',
    title: 'Icons',
    image: '/images/graphics/explore-our-graphic-collections.png',
    description: 'A vast collection of icons in various styles, from minimal black to vibrant colors, designed to enrich your interfaces and visuals.',
    see_more: '/all-products/graphics/icons',
    sub_categories: [
        {
            id: 1,
            name: 'Black Outline',
            link: '',
        },
        {
            id: 2,
            name: 'Black Fill',
            link: '',
        },
        {
            id: 3,
            name: 'Gradient',
            link: '',
        },
        {
            id: 4,
            name: 'Hand Drawn',
            link: '',
        },
        {
            id: 5,
            name: 'Linear Color',
            link: '',
        },
        {
            id: 6,
            name: 'Color Fill',
            link: '',
        }

    ]
  },
  {
    icon: '/icons/fi-rr-file-psd.svg',
    title: 'PSD',
    image: '/images/graphics/psd.png',
    description: 'Graphic elements in PSD format, ideal for retouching or customization, allowing creators to adapt these resources to their own vision.',
    see_more: '/all-products/graphics/psd',
    sub_categories: [
        {
            id: 1,
            name: 'Stationary',
            link: '',
        },
        {
            id: 2,
            name: 'Flyers & Posters',
            link: '',
        },
        {
            id: 3,
            name: 'Web & Social Media',
            link: '',
        },
        {
            id: 4,
            name: 'Photo & Text Effects',
            link: '',
        }

    ]
  },
 {
    icon: '/icons/fi-rr-vector-alt.svg',
    title: 'Vectors',
    image: '/images/graphics/explore-our-graphic-collections.png',
    description: '',
    see_more: '/all-products/graphics/vector',
    sub_categories: [
        {
            id: 1,
            name: 'Illustrations',
            link: ''
        },
        {
            id: 2,
            name: 'Textures',
            link: ''
        },
        {
            id: 3,
            name: 'Cartoons',
            link: ''
        },
        {
            id: 4,
            name: 'Drawings',
            link: ''
        },
        {
            id: 5,
            name: 'Silhouettes',
            link: ''
        },
        {
            id: 6,
            name: 'Backgrounds',
            link: ''
        },
        {
            id: 7,
            name: 'Parterns',
            link: ''
        },
        {
            id: 8,
            name: 'Clip Art',
            link: ''
        },
{
            id: 9,
            name: 'Symbols & Signs',
            link: ''
        }

    ]
  },
  {
    icon: '/icons/fi-rr-layout-fluid.svg',
    title: 'Templates',
    image: '/images/graphics/explore-our-graphic-collections.png',
    description: '',
    see_more: '/all-products/graphics/template',
    sub_categories: [
        {
            id: 1,
            name: 'Social Media',
            link: ''
        },
        {
            id: 2,
            name: 'Marketing',
            link: ''
        },
        {
            id: 3,
            name: 'Presentation',
            link: ''
        },
        {
            id: 4,
            name: 'Resume and Portfolio',
            link: ''
        },
        {
            id: 5,
            name: 'E-Commerce',
            link: ''
        },
        {
            id: 6,
            name: 'UX/UI Desgin',
            link: ''
        },
        {
            id: 7,
            name: 'Business and Branding',
            link: ''
        }

    ]
  },
  {
    icon: '/icons/fi-rr-resize.svg',
    title: 'Mockups',
    image: '/images/graphics/explore-our-graphic-collections.png',
    description: '',
    see_more: '/all-products/graphics/mockup',
    sub_categories: [
        {
            id: 1,
            name: 'Apparel',
            link: ''
        },
        {
            id: 2,
            name: 'Device',
            link: ''
        }

    ]
  },

])

onMounted(() => {
  imageContent.value = sections.value[0].image;
  sectionDescription.value = sections.value[0].description;
  sectionSeeMore.value = sections.value[0].see_more;
})

const selectSidebar = (index) => {
  selectedSidebarIndex.value = index;
  imageContent.value = sections.value[index].image;
  sectionDescription.value = sections.value[index].description;
  sectionSeeMore.value = sections.value[index].see_more;
}

</script>
