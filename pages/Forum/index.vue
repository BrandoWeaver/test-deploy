<template>
  <!-- Full-Screen Container -->
  <div class="w-full pt-[14px] lg-max:pt-[8px] md-max:pt-[8px] bg-[#F5F5F5]">
    <!-- Centered Content Container -->
    <div
      class="flex flex-col w-[1440px] xl-max:w-full pt-[16px] md-max:pt-[6px] lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px] rounded-lg"
    >
      <!-- Breadcrumb Navigation -->
      <nav
        class="text-[11px] lg-max:text-[10px] md-max:text-[9px] sm-max:text-[8px] text-black/50 font-light leading-[19px] lg-max:leading-[18px] md-max:leading-[16.2px] sm-max:leading-[14.4px] flex flex-wrap items-center gap-[8px] xs-max:inline-flex"
      >
        <NuxtLink to="/" class="hover:text-black transition-colors"
          >Home</NuxtLink
        ><span>/</span>
        <NuxtLink to="/" class="hover:text-black transition-colors"
          >Help Center</NuxtLink
        ><span>/</span>
        <NuxtLink to="/" class="hover:text-black transition-colors"
          >Forum & Community</NuxtLink
        >
      </nav>
      <div class="flex flex-col gap-6">
        <div class="">
          <h1 class="md:text-[30px] sm:text-[18px] font-medium text-lexend">
            Welcome to the Forum
          </h1>
          <p
            class="md:text-[14px]/8 sm:text-[13px]/6 font-noto font-light text-[#535353]"
          >
            This space is dedicated to our community of creators, designers, and
            digital content enthusiasts. Here, you can ask questions, share
            ideas, report technical issues, or simply connect with other users.
            Explore inspiring discussions, suggest improvements for the
            platform, and collaborate with fellow members to enhance the Thortok
            experience. Join us and let your voice be heard!
          </p>
        </div>
        <div>
          <Search_Forum />
        </div>
        <div
          class="p-0 sm-max:p-4 sm-max:bg-white md:bg-transparent rounded-md w-full"
        >
          <div class="overflow-x-scroll hide-scrollbar w-full">
            <div class="hidden sm-max:block overflow-scroll hide-scrollbar">
              <IconleftBarMobile @update-topic="updateTopic" />
            </div>
          </div>
          <div
            class="xl-max:hidden lg-max:block xl:hidden overflow-hidden md:px-0 xs:px-0 md:pb-0"
          >
            <Policy />
          </div>
        </div>
      </div>
      <div class="flex justify-between">
        <div class="w-full">
          <!-- Wrapper to keep everything inside the page -->
          <div class="flex md:gap-6">
            <!-- Left Sidebar (Inside Page) -->
            <aside class="max-w-[320px] bg-transparent flex flex-col gap-5">
              <div class="xl:block xl-max:block lg:block lg-max:hidden h-full">
                <Left_Aside @update-topic="updateTopic" />
              </div>
              <div
                class="hidden pb-6 mdx-max:block mdx:block sm-max:hidden lg-max:block pr-4"
              >
                <IconleftBar @update-topic="updateTopic" />
              </div>

              <!-- <div
                class="hidden xs:hidden sm:hidden md:block lg:block xl:block"
              >
                <IconleftBar />
              </div> -->
            </aside>

            <!-- Main Content (Scrollable) -->
            <main class="flex-1 md:px-0 px-0 w-full" ref="postListContainer">
              <div class="mx-auto rounded-lg w-full">
                <div
                  class="mb-4 z-10 transition-colors duration-300 w-full"
                  :class="{ 'bg-[#F5F5F5] pb-4': isScrolling }"
                >
                  <HeaderSection :topic-name="topic_name" />
                </div>
                <div
                  v-for="value in post_list"
                  :key="value.name"
                  class="mb-[24px]"
                >
                  <PostBlock :post="value" />
                </div>
              </div>
              <div class="flex justify-center pb-16 pt-8">
                <Pagination />
              </div>
            </main>
            <aside
              class="max-w-[320px] bg-transparent flex flex-col gap-5 xl-max:hidden pb-6"
            >
              <Right_Aside />
            </aside>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Search_Forum from '~/components/forum/Search_Forum.vue'
import HeaderSection from '~/components/forum/HeaderSection.vue'
import Right_Aside from '~/components/forum/right_side_bar/Right_Aside.vue'
import Left_Aside from '~/components/forum/left_side_bar/Left_Aside.vue'
import Pagination from '~/components/forum/Pagination.vue'
import PostBlock from '~/components/forum/post_content/PostBlock.vue'
import IconleftBar from '~/components/forum/left_side_bar/IconleftBar.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import Palette from '~/icons/forum_icons/Palette.vue'
import Policy from '~/components/forum/left_side_bar/Policy.vue'
import IconleftBarMobile from '~/components/forum/left_side_bar/IconleftBarMobile.vue'
const topic_name = ref('')

const updateTopic = (newVal: string) => {
  topic_name.value = newVal
}
const isScrolling = ref(false)
const postListContainer = ref<HTMLElement | null>(null)

const handleScroll = () => {
  if (postListContainer.value) {
    isScrolling.value = postListContainer.value.scrollTop > 15
  }
}

onMounted(() => {
  if (postListContainer.value) {
    postListContainer.value.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  if (postListContainer.value) {
    postListContainer.value.removeEventListener('scroll', handleScroll)
  }
})
</script>
