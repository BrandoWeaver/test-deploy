<template>
  <div class="bg-[#EFF1D9] py-8 w-full">
    <div
      class="2xl:px-0 py-6 w-[1440px] xl-max:w-full pt-[48px] md-max:pt-[6px] lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px]"
    >
      <div class="relative">
        <div class="gap-2 flex md:hidden">
          <!-- <button
            @click="scrollRight"
            class="nav-button absolute bottom-[110px] z-10 right-0"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.30684 0.826172L5.86544 0.267578C6.11934 0.0390625 6.5002 0.0390625 6.72872 0.267578L11.6799 5.19336C11.9084 5.44727 11.9084 5.82812 11.6799 6.05664L6.72872 11.0078C6.5002 11.2363 6.11934 11.2363 5.86544 11.0078L5.30684 10.4492C5.07833 10.1953 5.07833 9.81445 5.30684 9.56055L8.37911 6.64062H1.092C0.736531 6.64062 0.482625 6.38672 0.482625 6.03125V5.21875C0.482625 4.88867 0.736531 4.60938 1.092 4.60938H8.37911L5.30684 1.71484C5.07833 1.46094 5.05294 1.08008 5.30684 0.826172Z"
                fill="black"
              />
            </svg>
          </button> -->
          <button
            @click="scrollRight"
            class="nav-button absolute bottom-[246px] z-10 right-0"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.30684 0.826172L5.86544 0.267578C6.11934 0.0390625 6.5002 0.0390625 6.72872 0.267578L11.6799 5.19336C11.9084 5.44727 11.9084 5.82812 11.6799 6.05664L6.72872 11.0078C6.5002 11.2363 6.11934 11.2363 5.86544 11.0078L5.30684 10.4492C5.07833 10.1953 5.07833 9.81445 5.30684 9.56055L8.37911 6.64062H1.092C0.736531 6.64062 0.482625 6.38672 0.482625 6.03125V5.21875C0.482625 4.88867 0.736531 4.60938 1.092 4.60938H8.37911L5.30684 1.71484C5.07833 1.46094 5.05294 1.08008 5.30684 0.826172Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <div class="justify-start gap-2.5 inline-flex">
          <div
            class="text-start grow shrink basis-0 leading-[54px] text-[#000] xl:text-[30px] xl-max:text-[30px] lg-max:text-[24px] md-max:text-[20px] sm-max:text-[20px] font-lexend font-medium"
          >
            {{ $t('about.title') }}
          </div>
        </div>
        <div
          class="lg:text-[17px] text-[13px] sm:text-sm md:text-[15px] leading-[23px] sm:leading-6 md:leading-[27px] lg:leading-[30px] font-[300] pt-3"
        >
          You’ll find more than just a job—you’ll discover an environment where
          your ideas come to life and your work makes a real impact. We are a
          passionate team dedicated to creativity, innovation, and supporting
          talent. By joining Thortok, you’ll contribute to a platform that
          empowers creators and redefines how digital resources are shared and
          utilized. With opportunities for personal growth, a collaborative
          culture, and meaningful projects, Thortok is the perfect place to
          build your career and leave your mark in the creative world.<br /><br />Discover
          the many benefits of joining Thortok and building a fulfilling career
          in a thriving creative community.
        </div>
        <div
          ref="carousel"
          class="rounded-[10px] flex flex-col justify-start gap-6 mt-6 overflow-x-auto no-scrollbar"
        >
          <div
            class="md:grid md:grid-cols-3 gap-[24px] md: flex md:flex-none flex-row md:w-auto w-max"
          >
            <!-- Array of Boxes -->
            <div
              v-for="(box, index) in boxes.slice(0, 3)"
              :key="index"
              class="w-[260px] md:w-full bg-white rounded-[10px] border-2 flex flex-col justify-start items-start gap-6 shrink-0 md:shrink"
            >
              <div class="p-6 flex flex-col justify-start items-start gap-3.5">
                <div class="flex flex-col justify-start items-start gap-2.5">
                  <div class="justify-center items-center gap-2.5 flex">
                    <div>
                      <p
                        class="font-noto text-[#000] font-bold xl:text-[17px] xl-max:text-[17px] lg-max:text-[15px] md-max:text-[14px] sm-max:text-[14px] xl:leading-[30.6px] xl-max:leading-[30.6px] lg-max:leading-[27px] md-max:leading-[25.2px] sm-max:leading-[25.2px]"
                      >
                        {{ box.title }}
                      </p>
                    </div>
                  </div>
                  <ul class="list-disc pl-5 space-y-[10px]">
                    <li
                      v-for="(point, idx) in box.points"
                      :key="idx"
                      class="text-black font-noto font-350 xl:text-[14px] xl-max:text-[14px] lg-max:text-[13px] md-max:text-[11px] sm-max:text-[11px] xl:leading-[25.2px] xl-max:leading-[25.2px] lg-max:leading-[23.4px] md-max:leading-[19.8px] sm-max:leading-[19.8px]"
                    >
                      {{ point }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- End of Array -->
          </div>
        </div>

        <div
          ref="carousel2"
          class="rounded-[10px] flex flex-col justify-start gap-6 mt-6 overflow-x-auto no-scrollbar"
        >
          <div
            class="md:grid md:grid-cols-3 gap-[24px] md: flex md:flex-none flex-row md:w-auto w-max"
          >
            <!-- Array of Boxes -->
            <div
              v-for="(box, index) in boxes.slice(3, 6)"
              :key="index"
              class="w-[260px] md:w-full bg-white rounded-[10px] border-2 flex flex-col justify-start items-start gap-6 shrink-0 md:shrink"
            >
              <div class="p-6 flex flex-col justify-start items-start gap-3.5">
                <div class="flex flex-col justify-start items-start gap-2.5">
                  <div class="justify-center items-center gap-2.5 flex">
                    <p
                      class="font-noto text-[#000] font-bold xl:text-[17px] xl-max:text-[17px] lg-max:text-[15px] md-max:text-[14px] sm-max:text-[14px] xl:leading-[30.6px] xl-max:leading-[30.6px] lg-max:leading-[27px] md-max:leading-[25.2px] sm-max:leading-[25.2px]"
                    >
                      {{ box.title }}
                    </p>
                  </div>
                  <ul class="list-disc pl-5 space-y-[10px]">
                    <li
                      v-for="(point, idx) in box.points"
                      :key="idx"
                      class="text-black font-noto font-350 xl:text-[14px] xl-max:text-[14px] lg-max:text-[13px] md-max:text-[11px] sm-max:text-[11px] xl:leading-[25.2px] xl-max:leading-[25.2px] lg-max:leading-[23.4px] md-max:leading-[19.8px] sm-max:leading-[19.8px]"
                    >
                      {{ point }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- End of Array -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const boxes = ref([
  {
    title: 'Inspiring Work Environment',
    points: [
      'Flexible work arrangements (remote or on-site options).',
      'Creative and collaborative culture that fosters innovation.',
      'Modern, ergonomic office spaces designed for productivity.',
    ],
  },
  {
    title: 'Professional Growth and Development',
    points: [
      'Access to continuous learning programs to enhance skills.',
      'Clear career growth opportunities and advancement paths.',
      'Mentorship and coaching to support personal and professional goals.',
    ],
  },
  {
    title: 'Financial Benefits and Rewards',
    points: [
      'Competitive salaries aligned with market standards.',
      'Performance-based bonuses for exceeding objectives.',
      'Participation in health and retirement plans.',
    ],
  },
  {
    title: 'Wellness and Work-Life Balance',
    points: [
      'Generous vacation and leave policies for better balance.',
      'Wellness initiatives focused on mental and physical health.',
      'Regular team events and activities to build strong connections.',
    ],
  },
  {
    title: 'Access to Exclusive Resources',
    points: [
      'Free unlimited downloads from Thortok for personal creative projects.',
      'Opportunities to collaborate with local and global creative talents.',
      'Invitations to exclusive workshops, conferences, and industry events.',
    ],
  },
  {
    title: 'Recognition, Impact, and Inclusion',
    points: [
      'Contributions that make a meaningful impact on the creative world.',
      'Celebrations of achievements and recognition of outstanding work.',
      'A diverse and inclusive environment that fosters a sense of belonging.',
    ],
  },
])

const carousel = ref(null)
const carousel2 = ref(null)

function scrollLeft() {
  if (carousel.value) {
    carousel.value.scrollBy({ left: 300, behavior: 'smooth' })
    carousel2.value.scrollBy({ left: 300, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: 1000, behavior: 'smooth' })
    carousel2.value.scrollBy({ left: 1000, behavior: 'smooth' })
  }
}
function syncScroll(source, target) {
  if (target.value && source.value) {
    target.value.scrollLeft = source.value.scrollLeft
  }
}

onMounted(() => {
  if (carousel.value && carousel2.value) {
    carousel.value.addEventListener('scroll', () =>
      syncScroll(carousel, carousel2)
    )
    carousel2.value.addEventListener('scroll', () =>
      syncScroll(carousel2, carousel)
    )
  }
})
</script>
<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.nav-button {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(0deg, #dbf226 0%, #dbf226 100%), #dbf226;

  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}
.nav-button:hover {
  transform: scale(1.05);
}
</style>
