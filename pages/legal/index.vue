<template>
  <div
    class="flex flex-col items-center justify-center w-full bg-cover bg-center overflow-hidden"
  >
    <!-- <Navbar /> -->
    <Understading />
    <PolicyGuide />
    <!-- <Footer /> -->
    <!-- <Test /> -->
  </div>
  <HaveQuestions />
</template>

<script setup>
import PolicyGuide from '~/components/all-proCom/PolicyGuide.vue'
import Understading from '~/components/all-proCom/Understading.vue'
import HaveQuestions from '~/components/all-proCom/HaveQuestions.vue'
</script>

<style lang="scss" scoped></style>
