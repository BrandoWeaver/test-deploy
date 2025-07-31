<template>
  <div class="flex flex-col gap-[14px]">
    <div>
      <h5 class="font-bold text-[#060606]">Hello! 👋</h5>
    </div>
    <div>
      <p class="text-[#535353] text-[14px]">Welcome to Thortok Community</p>
    </div>
    <div>
      <p class="text-[#535353] text-[14px]">
        Connect, share, and engage with community and build relationships.
      </p>
    </div>
    <div>
      <p class="text-[#535353] text-[14px]">
        Please log in if you are already a member or sign up for an account.
      </p>
    </div>
    <Button
      class="bg-[#000] text-[#FFF] h-14 min-w-40 text-[14px] flex items-center justify-center hover:shadow-[0px_4px_16px_0px_#DBF226]"
      >Join the community</Button
    >
    <Button
      class="border text-[#000] border-[#00000080] h-14 min-w-40 bg-[#fff] text-[14px] flex items-center justify-center hover:shadow-[0px_4px_16px_0px_#DBF226]"
      >Already a member?</Button
    >
  </div>
</template>
<script setup lang="ts">
import Button from './ui/Button.vue'
</script>
