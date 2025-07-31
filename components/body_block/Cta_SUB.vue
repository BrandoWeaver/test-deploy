<template>
  <!-- Full-screen width marquee with fixed background color -->
  <div class="marquee-wrapper bg-[#DBF226] text-black py-4">
    <div class="marquee-content flex items-center gap-8 whitespace-nowrap">
      <span
        v-for="(item, index) in items"
        :key="index"
        class="flex items-center"
      >
        {{ item }}
        <!-- Separator between items, using a dash character or SVG if available -->
        <img
          v-if="index < items.length - 1"
          src="@/assets/logo/fi-rr-minus.svg"
          alt="separator"
          class="separator-icon mx-4"
        />
      </span>
      <!-- Duplicate content to ensure continuous scrolling -->
      <span
        v-for="(item, index) in items"
        :key="'duplicate-' + index"
        class="flex items-center"
      >
        {{ item }}
        <img
          v-if="index < items.length - 1"
          src="@/assets/logo/fi-rr-minus.svg"
          alt="separator"
          class="separator-icon mx-4"
        />
      </span>
    </div>
  </div>
</template>

<script setup>
const items = [
  'Photographers',
  'Illustrators',
  'Web Designers',
  'Freelance Creatives',
  'Interior Designers',
  'Social Media Content Creators',
  'Entrepreneurs',
  'Marketers',
]
</script>

<style scoped>
.marquee-wrapper {
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  width: 100vw; /* Full viewport width */
}

.marquee-content {
  display: inline-flex;
  animation: scroll 20s linear infinite; /* Adjust speed here */
}

.separator-icon {
  width: 16px; /* Adjust the size of the separator icon if necessary */
  height: 16px;
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
