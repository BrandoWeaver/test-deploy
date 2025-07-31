<template>
  <div
    class="relative pb-5 smm:px-6 sm:rounded-xl w-[1440px] xl-max:w-full md-max:pt-[6px] lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px]"
  >
    <div class="justify-start items-start gap-12 inline-flex">
      <div class="w-full flex flex-col justify-start items-start gap-6">
        <div
          class="sm:hidden flex px-2 esm:hidden pb-[19.21px] flex-col justify-start items-start gap-4"
        >
          <div class="w-full">
            <div
              class="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex"
            >
              <h1
                class="text-[#000000] text-[15px] font-bold lg:text-2xl leading-[54px]"
              >
                Join Our Creative Team
              </h1>
              <div
                class="text-[#231f20] text-[14px] font-normal leading-[37.40px]"
              >
                Be part of a passionate team shaping the future of digital
                creativity.
              </div>
            </div>
            <div class="grow shrink basis-0"></div>
          </div>
          <div
            class="px-8 py-2 bg-[#231f20] rounded-md shadow justify-center items-center gap-1.5 inline-flex"
          >
            <button
              class="text-white cursor-pointer text-[17px] font-light font-['Noto Sans JP'] leading-[28.90px]"
            >
              Explore Careers
            </button>
          </div>
        </div>
        <div
          class="text-black text-xl smm:text-xl font-medium font-['Lexend'] leading-[54px]"
        >
          Discover current opportunities
        </div>
        <div
          class="text-black text-sm sm:text-base md:text-[14px] lg:text-[17px] md:leading-6 font-light leading-[28px] sm:leading-[30px] lg:leading-[32px]"
        >
          Thortok fosters a dynamic and inclusive working environment built on
          the pillars of innovation, collaboration, and growth. Our team thrives
          in a culture that values creativity and encourages the exchange of
          bold ideas, ensuring we stay at the forefront of the digital content
          industry. Inclusion is at the heart of our ethos, where diverse
          perspectives and backgrounds are celebrated, creating a workplace that
          reflects the global community we serve.
        </div>
        <div
          class="text-black text-sm sm:text-base md:text-[14px] lg:text-[17px] md:leading-6 font-light leading-[28px] sm:leading-[30px] lg:leading-[32px]"
        >
          We actively support personal and professional development, offering
          opportunities for team members to grow their skills and advance their
          careers through training, mentorship, and collaborative projects.
          Thortok’s environment is designed to inspire, empower, and equip
          individuals to achieve their full potential while contributing to a
          mission that drives meaningful impact in the creative industry.
        </div>
        <div class="flex-col justify-start items-start gap-3.5 flex">
          <div class="py-1 justify-start items-start gap-2.5 inline-flex">
            <div class="text-black font-bold text-lg font-normal leading-loose">
              Your next career move starts here.
            </div>
          </div>
          <div
            class="text-black text-sm sm:text-base md:text-[14px] lg:text-[17px] md:leading-6 font-light leading-[28px] sm:leading-[30px] lg:leading-[32px]"
          >
            Discover the available positions in our various departments below.
          </div>
        </div>
        <div class="justify-start items-start gap-2 inline-flex flex-wrap">
          <div
            v-for="(sub, index) in selectedCategory?.subcategories"
            :key="index"
            :class="[
              'px-3 py-1.5 rounded border border-[#eeeeee] cursor-pointer hover:bg-[#eff1d9] flex justify-center items-center gap-2.5',
              sub.selectedSub
                ? 'bg-[#dbf226] text-black'
                : 'bg-neutral-100 text-[#444444]',
            ]"
            @click="selectSubcategory(sub)"
          >
            <div class="text-center text-sm font-thin leading-[25.20px]">
              {{ sub.name }}
            </div>
          </div>
        </div>
        <div
          class="text-black text-sm sm:text-base md:text-[14px] lg:text-[17px] md:leading-6 font-light leading-[28px] sm:leading-[30px] lg:leading-[32px]"
        >
          The Administrative Department plays a crucial role within Thortok. It
          acts as a cross-functional support for all other departments, enabling
          the company to operate smoothly and efficiently. This department is
          responsible for daily operations, resource management, and internal
          coordination.
        </div>
        <!-- Category Accordion -->
        <div
          class="w-full relative flex-col justify-center items-center gap-2 flex sm:hidden pt-4"
        >
          <div
            v-for="(category, index) in categories"
            :key="category.name"
            class="w-full flex flex-col gap-3"
          >
            <div
              :class="[
                `cursor-pointer flex flex-col  text-[#333] border border-[#eff1d9]  rounded-md px-4 py-3 `,
                category.selected ? 'bg-[#dbf226]' : 'bg-white',
              ]"
              @click="toggleCategory(index, category)"
            >
              <div class="flex items-center gap-2 w-full">
                <div
                  class="w-full flex justify-between items-center text-sm md:text-lg"
                >
                  {{ category.name }}
                </div>
              </div>
            </div>

            <!-- Category Details (Accordion Answer) -->
            <div
              v-show="category.isOpen"
              class="transition-all duration-300 ease-in-out mt-4 w-full pt-4 px-4"
            >
              <!-- <div class="text-[#005b52] text-sm mb-4">
                {{ category.description }}
              </div> -->

              <!-- Subcategories (Accordion Answers) -->
              <!-- <div class="text-black text-lg font-normal leading-loose my-4">
                Our Subcategories
              </div> -->
              <div class="flex flex-col justify-start items-start gap-6">
                <div class="flex-col justify-start items-start gap-2.5 flex">
                  <!-- <div class="text-[#005b52] text-xs leading-5">
                  {{ selectedCategory.description }}
                </div> -->
                  <div class="flex-col justify-start items-start gap-1.5 flex">
                    <div class="justify-start items-center gap-1.5 inline-flex">
                      <div class="text-[#005b52] text-xs leading-5">
                        Location:
                      </div>
                      <div class="text-[#005b52] text-xs leading-5">
                        Head office in Phnom Penh
                      </div>
                    </div>
                    <div class="justify-start items-center gap-1.5 inline-flex">
                      <div class="text-[#005b52] text-xs leading-5">
                        Type of contract:
                      </div>
                      <div class="text-[#005b52] text-xs leading-5">
                        Permanent
                      </div>
                    </div>
                    <div class="justify-start items-center gap-1.5 inline-flex">
                      <div class="text-[#005b52] text-xs leading-5">
                        Location:
                      </div>
                      <div class="text-[#005b52] text-xs leading-5">
                        $12,480 gross per year with 13th month bonus
                      </div>
                    </div>
                    <div class="justify-start items-center gap-1.5 inline-flex">
                      <div class="ReportsTo text-[#005b52] text-xs leading-5">
                        Reports to:
                      </div>
                      <div
                        class="ChiefOperatingOfficerCoo text-[#005b52] text-xs leading-5"
                      >
                        Chief Operating Officer (COO)
                      </div>
                    </div>
                  </div>
                  <div
                    class="py-1 justify-start items-start gap-2.5 inline-flex"
                  >
                    <div class="text-black text-lg font-medium leading-loose">
                      Position Overview General Accountant
                    </div>
                  </div>
                  <div
                    class="py-1 justify-start items-start gap-2.5 inline-flex"
                  >
                    <p class="text-black text-xs font-normal leading-loose">
                      The Administrative and Operations Manager is responsible
                      for overseeing administrative, logistical, and
                      organizational tasks within Thortok. Acting as a central
                      pillar, this role ensures smooth coordination between
                      departments and guarantees that internal processes are
                      efficient and compliant. This position is critical to
                      optimizing day-to-day operations and supporting the COO in
                      achieving strategic objectives.
                    </p>
                  </div>

                  <!-- Dynamic Subcategories -->
                </div>

                <!-- <div class="justify-start items-end gap-2.5 inline-flex">
                  <div
                    class="text-[#005b52] text-[17px] font-bold leading-[30.60px]"
                  >
                    Learn more about this job
                  </div>
                  <div
                    class="w-6 pt-[5.70px] pb-[5.67px] justify-center items-center flex"
                  >
                    <img src="../public/icons/arrow-right.png" alt="" />
                  </div>
                </div> -->
              </div>
              <!-- <div
                v-if="
                  category.subcategories && category.subcategories.length > 0
                "
                class="flex flex-wrap gap-3 pl-2"
              >
                <div
                  v-for="sub in category.subcategories"
                  :key="sub.name"
                  class="px-4 py-2 rounded-md border border-[#eff1d9] cursor-pointer text-xs md:text-base"
                  :class="[
                    sub.selectedSub ? 'bg-[#dbf226] text-black' : 'bg-white ',
                  ]"
                  @click="toggleSubcategory(sub)"
                >
                  {{ sub.name }}
                </div>
              </div>

              <div v-else>
                <div class="text-sm text-gray-500">
                  No subcategories available
                </div>
              </div> -->

              <div class="mt-4 flex justify-start gap-2 sm:my-5 ml-2">
                <div
                  class="text-[#005b52] text-[14px] font-bold cursor-pointer"
                >
                  Learn more about this job
                </div>
                <div class="w-4 justify-center items-center flex">
                  <img src="../public/icons/arrow-right.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Dynamic Categories List -->
        <div class="justify-start items-start sm:inline-flex hidden w-full">
          <div
            class="bg-white justify-start items-start gap-6 flex sm:flex-row flex-col w-full"
          >
            <div
              class="flex flex-col justify-start items-start gap-2 md:min-w-[400px] min-w-[140px]"
            >
              <!-- Category Loop -->
              <div
                v-for="category in categories"
                :key="category.name"
                :class="[
                  'px-6 py-3 rounded-md border w-full hover:bg-[#eff1d9] cursor-pointer',
                  category.selected
                    ? 'bg-[#DBF226] border-[#eff1d9]'
                    : 'bg-white border-[#eff1d9]',
                ]"
                @click="selectCategory(category)"
              >
                <div class="flex items-center gap-2 w-full">
                  <div
                    class="w-64 flex justify-between items-center text-[#1c1c1c] text-sm leading-[25.20px]"
                  >
                    <span class="text-sm md:text-base">{{
                      category.name
                    }}</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-center items-center gap-2.5 w-full">
                <button
                  class="bg-[#EEEEEE] text-[#005B52] px-8 py-4 rounded-md"
                >
                  + View more
                </button>
              </div>
            </div>

            <!-- Category Details -->
            <div
              class="flex flex-col justify-start items-start gap-6 min-w-[200px] max-w-[1000px]"
            >
              <div class="flex-col justify-start items-start gap-2.5 flex">
                <!-- <div class="text-[#005b52] text-xs leading-5">
                  {{ selectedCategory.description }}
                </div> -->
                <div class="flex-col justify-start items-start gap-1.5 flex">
                  <div class="justify-start items-center gap-1.5 inline-flex">
                    <div class="text-[#005b52] text-xs leading-5">
                      Location:
                    </div>
                    <div class="text-[#005b52] text-xs leading-5">
                      Head office in Phnom Penh
                    </div>
                  </div>
                  <div class="justify-start items-center gap-1.5 inline-flex">
                    <div class="text-[#005b52] text-xs leading-5">
                      Type of contract:
                    </div>
                    <div class="text-[#005b52] text-xs leading-5">
                      Permanent
                    </div>
                  </div>
                  <div class="justify-start items-center gap-1.5 inline-flex">
                    <div class="text-[#005b52] text-xs leading-5">
                      Location:
                    </div>
                    <div class="text-[#005b52] text-xs leading-5">
                      $12,480 gross per year with 13th month bonus
                    </div>
                  </div>
                  <div class="justify-start items-center gap-1.5 inline-flex">
                    <div class="ReportsTo text-[#005b52] text-xs leading-5">
                      Reports to:
                    </div>
                    <div
                      class="ChiefOperatingOfficerCoo text-[#005b52] text-xs leading-5"
                    >
                      Chief Operating Officer (COO)
                    </div>
                  </div>
                </div>
                <div class="py-1 justify-start items-start gap-2.5 inline-flex">
                  <div class="text-black text-lg font-medium leading-loose">
                    Position Overview General Accountant
                  </div>
                </div>
                <div class="py-1 justify-start items-start gap-2.5 inline-flex">
                  <p class="text-black text-xs font-normal leading-loose">
                    The Administrative and Operations Manager is responsible for
                    overseeing administrative, logistical, and organizational
                    tasks within Thortok. Acting as a central pillar, this role
                    ensures smooth coordination between departments and
                    guarantees that internal processes are efficient and
                    compliant. This position is critical to optimizing
                    day-to-day operations and supporting the COO in achieving
                    strategic objectives.
                  </p>
                </div>

                <!-- Dynamic Subcategories -->
              </div>

              <div class="justify-start items-end gap-2.5 inline-flex">
                <div
                  class="text-[#005b52] text-[17px] font-bold leading-[30.60px]"
                >
                  Learn more about this job
                </div>
                <div
                  class="w-6 pt-[5.70px] pb-[5.67px] justify-center items-center flex"
                >
                  <!-- <img src="../public/icons/arrow-right.png" alt="" /> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Subcategory {
  name: string
  images: string[]
  selectedSub: boolean
}

interface Category {
  icon?: string
  name: string
  description: string
  subcategories: Subcategory[]
  selected: boolean
  isOpen?: boolean
}

const categories = ref<Category[]>([
  {
    name: 'Operations Manager',
    description:
      'A vast collection of icons in various styles, from minimal black to vibrant colors, designed to enrich your interfaces and visuals.',
    subcategories: [
      {
        name: 'All Departments',
        images: ['/img/dummyimg.png', '/img/dummyimg.png'],
        selectedSub: false,
      },
      {
        name: 'Administrative',
        images: ['/img/dummyimg.png', '/img/dummyimg.png'],
        selectedSub: false,
      },
      {
        name: 'Finance',
        images: ['/img/dummyimg.png', '/img/dummyimg.png'],
        selectedSub: false,
      },
      {
        name: 'Human Resources',
        images: ['/img/dummyimg.png', '/img/dummyimg.png'],
        selectedSub: false,
      },
      {
        name: 'Legal and Compliance',
        images: ['/img/dummyimg.png', '/img/dummyimg.png'],
        selectedSub: false,
      },
      {
        name: 'Technical and Development',
        images: ['/img/dummyimg.png', '/img/dummyimg.png'],
        selectedSub: false,
      },
      {
        name: 'Creative',
        images: ['/img/dummyimg.png', '/img/dummyimg.png'],
        selectedSub: false,
      },
      {
        name: 'Customer Relations',
        images: ['/img/dummyimg.png', '/img/dummyimg.png'],
        selectedSub: false,
      },
      {
        name: 'Marketing and Communication',
        images: ['/img/dummyimg.png', '/img/dummyimg.png'],
        selectedSub: false,
      },
      {
        name: 'Commercial',
        images: ['/img/dummyimg.png', '/img/dummyimg.png'],
        selectedSub: false,
      },
      {
        name: 'Partnerships and Business Development',
        images: ['/img/dummyimg.png', '/img/dummyimg.png'],
        selectedSub: false,
      },
    ],
    selected: true,
  },
  {
    name: 'Administrative Assistant',
    description:
      'A vast collection of icons in various styles, from minimal black to vibrant colors, designed to enrich your interfaces and visuals.',
    subcategories: [],
    selected: true,
  },
  {
    name: 'Cross-Department Coordinator',
    description:
      'A vast collection of icons in various styles, from minimal black to vibrant colors, designed to enrich your interfaces and visuals.',
    subcategories: [],
    selected: true,
  },
  {
    name: 'General Accountant',
    description:
      'A vast collection of icons in various styles, from minimal black to vibrant colors, designed to enrich your interfaces and visuals.',
    subcategories: [],
    selected: true,
  },
  {
    name: 'Financial Coordinator',
    description:
      'A vast collection of icons in various styles, from minimal black to vibrant colors, designed to enrich your interfaces and visuals.',
    subcategories: [],
    selected: true,
  },
  {
    name: 'Financial Assistant',
    description:
      'A vast collection of icons in various styles, from minimal black to vibrant colors, designed to enrich your interfaces and visuals.',
    subcategories: [],
    selected: true,
  },
  {
    name: 'HR Manager',
    description:
      'A vast collection of icons in various styles, from minimal black to vibrant colors, designed to enrich your interfaces and visuals.',
    subcategories: [],
    selected: true,
  },
  {
    name: 'HR Assistant',
    description:
      'A vast collection of icons in various styles, from minimal black to vibrant colors, designed to enrich your interfaces and visuals.',
    subcategories: [],
    selected: true,
  },
  // Other categories...
])

const selectedCategory = ref<Category | null>(null)
const selectedSubcategory = ref<Subcategory | null>(null)

const selectCategory = (category: Category) => {
  categories.value.forEach((c) => (c.selected = false))
  category.selected = true
  selectedCategory.value = category
  selectSubcategory(category.subcategories[0])
}

const selectSubcategory = (sub: Subcategory) => {
  if (selectedCategory.value) {
    selectedCategory.value.subcategories.forEach(
      (sc) => (sc.selectedSub = false)
    )
  }
  sub.selectedSub = true
  selectedSubcategory.value = { ...sub }
}

const toggleCategory = (index: number, category: Category) => {
  categories.value.forEach((cat, i) => {
    cat.selected = i === index ? !cat.selected : false
    cat.isOpen = i === index ? !cat.isOpen : false
  })
  category.selected = true
}

const toggleSubcategory = (sub: Subcategory) => {
  categories.value.forEach((category) => {
    category.subcategories.forEach((s) => (s.selectedSub = false))
  })
  sub.selectedSub = true
  selectedSubcategory.value = { ...sub }
}

onMounted(() => {
  if (categories.value.length > 0) {
    selectCategory(categories.value[0])
  }
})
</script>
