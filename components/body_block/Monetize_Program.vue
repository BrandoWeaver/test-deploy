<template>
  <div class="marquee-container w-screen">
    <div class="marquee-content">
      <span
        v-for="(text, index) in texts"
        :key="index"
        class="flex items-center"
      >
        {{ text }}
        <!-- SVG Separator -->
        <img
          v-if="index < texts.length - 1"
          src="@/assets/logo/fi-rr-minus.svg"
          alt="separator"
          class="separator-icon"
        />
      </span>
    </div>
  </div>
</template>

<script setup>
const texts = [
  'Monetize your creativity: share, sell, or freelance',
  'Earn from your talent: share, sell, or offer services',
  'Unlock earnings: share, sell, or freelance your skills',
  'Empower your creativity: share, sell, or freelance today',
  'Monetize your passion: reach a wider audience',
]
</script>

<style scoped>
.marquee-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  padding: var(--Font-Size-Details, 11px) 47px;
  background-color: #dbf226;
  color: black;
  font-weight: 600;
  overflow: hidden;
  gap: 24px;
  align-self: stretch;
}

.marquee-content {
  display: inline-flex;
  gap: 1rem; /* Controls the space between each phrase */
  white-space: nowrap;
  animation: scroll 75s linear infinite;
}

.separator-icon {
  width: 16px; /* Adjust the width as needed */
  height: 16px;
  margin-left: 24px; /* Space to the left of the SVG */
  margin-right: 24px; /* Space to the right of the SVG */
}

@keyframes scroll {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
