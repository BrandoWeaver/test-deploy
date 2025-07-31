<template>
  <div class="flex flex-col items-center w-full">
    <div
      ref="horizontalSliderRef"
      class="relative w-full h-12 bg-transparent px-2 cursor-grab active:cursor-grabbing"
      @mousedown="handleStartDragRuler"
      @touchstart="handleStartDragRuler"
      @mousemove="handleMoveRuler"
      @mouseleave="handleMouseLeaveRuler"
      @touchmove="handleMoveRuler"
    >
      <!-- Horizontal ruler tick marks (now clickable buttons, positioned dynamically) -->
      <button
        v-for="mark in horizontalRulerMarks"
        :key="`h-mark-${mark}`"
        @click="handleHorizontalTickClick(mark)"
        :class="[
          'absolute top-5 w-[2px] bg-black transform -translate-x-1/2 cursor-pointer hover:bg-blue-500 transition-transform duration-75',
          ,
          mark % 30 === 0 ? 'h-8' : mark % 15 === 0 ? 'h-4' : 'h-3',
        ]"
        :style="{
          left: `calc(50% + ${((((mark - props.currentDegree + 540) % 360) - 180) / 360) * 100}%)`,
          // transform: `translateX(-50%) scaleY(${getTickScale(mark)})`,
          transformOrigin: 'bottom',
          opacity: getTickOpacity(mark),
        }"
        :aria-label="`Set degree to ${mark}`"
      ></button>
    </div>

    <div class="flex items-center space-x-2 relative mt-4 mx-auto">
      <button
        class="flex justify-center disabled:opacity-50 items-center w-9 h-9 rounded-full bg-white shadow-md hover:bg-[#EFF1D9] hover:shadow-lg transition"
        aria-label="Previous Angle"
        @click="adjustDegree(-7.5)"
      >
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.19316 10.7383L6.63456 11.2969C6.38066 11.5254 5.9998 11.5254 5.77128 11.2969L0.820109 6.37109C0.591594 6.11719 0.591594 5.73633 0.820109 5.50781L5.77128 0.556641C5.9998 0.328125 6.38066 0.328125 6.63456 0.556641L7.19316 1.11523C7.42167 1.36914 7.42167 1.75 7.19316 2.00391L4.12089 4.92383H11.408C11.7635 4.92383 12.0174 5.17773 12.0174 5.5332V6.3457C12.0174 6.67578 11.7635 6.95508 11.408 6.95508H4.12089L7.19316 9.84961C7.42167 10.1035 7.44706 10.4844 7.19316 10.7383Z"
            fill="black"
          />
        </svg>
      </button>
      <div
        class="relative bg-white text-gray-800 text-lg font-bold py-2 px-6 rounded-lg shadow-md min-w-[100px] text-center before:content-[''] before:absolute before:left-1/2 before:bottom-full before:w-0 before:h-0 before:border-l-8 before:border-r-8 before:border-b-8 before:border-l-transparent before:border-r-transparent before:border-b-white before:-translate-x-1/2 before:mb-[-1px] drop-shadow-[0px_4px_10px_rgba(0,0,0,0.1)]"
      >
        <input
          v-model="inputValue"
          type="text"
          @blur="handleInputBlur"
          @keydown="handleInputKeyDown"
          class="bg-transparent text-center font-bold w-[50px] text-gray-800 text-lg focus:outline-none"
        />
      </div>

      <button
        class="flex justify-center items-center w-9 h-9 disabled:opacity-50 rounded-full bg-white shadow-md hover:bg-[#EFF1D9] hover:shadow-lg transition"
        aria-label="Next Angle"
        @click="adjustDegree(7.5)"
      >
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.80684 1.39062L6.36544 0.832031C6.61934 0.603516 7.0002 0.603516 7.22872 0.832031L12.1799 5.75781C12.4084 6.01172 12.4084 6.39258 12.1799 6.62109L7.22872 11.5723C7.0002 11.8008 6.61934 11.8008 6.36544 11.5723L5.80684 11.0137C5.57833 10.7598 5.57833 10.3789 5.80684 10.125L8.87911 7.20508H1.592C1.23653 7.20508 0.982625 6.95117 0.982625 6.5957V5.7832C0.982625 5.45312 1.23653 5.17383 1.592 5.17383H8.87911L5.80684 2.2793C5.57833 2.02539 5.55294 1.64453 5.80684 1.39062Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
/* -------------------- Props & Emits -------------------- */
const props = defineProps<{
  currentDegree: number
}>()

const emit = defineEmits<{
  (e: 'updateDegree', degree: number): void
}>()

/* -------------------- Refs & Reactive State -------------------- */
const inputValue = ref(props.currentDegree.toFixed(1))
const hoverPointX = ref<number | null>(null)
const horizontalSliderRef = ref<HTMLElement | null>(null)

const isDragging = ref(false)
const dragStartX = ref(0)
const dragStartDegree = ref(0)

/* -------------------- Sync Input with Prop -------------------- */
watch(
  () => props.currentDegree,
  (newVal) => {
    inputValue.value = newVal.toString()
  }
)

watch(inputValue, (newValue) => {
  const numValue = parseFloat(newValue)
  if (!isNaN(numValue)) {
    const wrappedValue = ((numValue % 360) + 360) % 360
    emit('updateDegree', parseFloat(wrappedValue.toFixed(1)))
  }
})

/* -------------------- Helpers -------------------- */
const generateRulerMarks = (
  min: number,
  max: number,
  step: number
): number[] => {
  const marks: number[] = []
  for (let i = min; i <= max; i += step) {
    marks.push(i)
  }
  return marks
}

const horizontalRulerMarks = generateRulerMarks(0, 355, 5)

const getTickOpacity = (mark: number): number => {
  const diff = Math.abs(mark - props.currentDegree)
  const normalized = Math.min(diff, 360 - diff)

  const max = 1,
    min = 0.1,
    fadeStart = 60,
    fadeEnd = 180
  if (normalized <= fadeStart) return max
  if (normalized >= fadeEnd) return min

  const fadeProgress = (normalized - fadeStart) / (fadeEnd - fadeStart)
  return Math.max(max - fadeProgress * (max - min), min)
}

const getTickScale = (mark: number): number => {
  let scale = 1
  if (hoverPointX.value !== null && horizontalSliderRef.value) {
    const rect = horizontalSliderRef.value.getBoundingClientRect()
    const center = rect.left + rect.width / 2

    const diff = ((mark - props.currentDegree + 540) % 360) - 180
    const tickPixel = center + (rect.width / 360) * diff
    const distance = Math.abs(tickPixel - hoverPointX.value)

    const maxDist = 80,
      maxScale = 2.5
    if (distance < maxDist) {
      const norm = distance / maxDist
      scale = 1 + (maxScale - 1)
    }
  }
  return scale
}

/* -------------------- Drag Handlers -------------------- */
const handleStartDragRuler = (e: MouseEvent | TouchEvent) => {
  isDragging.value = true

  const clientX =
    'touches' in e && e.touches.length > 0
      ? e.touches[0].clientX
      : (e as MouseEvent).clientX

  if ('touches' in e) e.preventDefault()

  dragStartX.value = clientX
  dragStartDegree.value = props.currentDegree
  hoverPointX.value = clientX
}

const handleMoveRuler = (e: MouseEvent | TouchEvent) => {
  const clientX =
    'touches' in e && e.touches.length > 0
      ? e.touches[0].clientX
      : (e as MouseEvent).clientX

  hoverPointX.value = clientX
  if (!isDragging.value || !horizontalSliderRef.value) return

  const rect = horizontalSliderRef.value.getBoundingClientRect()
  const deltaX = clientX - dragStartX.value
  const degreePerPixel = 360 / rect.width
  let newDegree = dragStartDegree.value - deltaX * degreePerPixel

  newDegree = ((newDegree % 360) + 360) % 360
  emit('updateDegree', parseFloat(newDegree.toFixed(1)))
  inputValue.value = newDegree.toFixed(1)
}

const handleEndDragRuler = () => {
  isDragging.value = false
}

const handleMouseLeaveRuler = () => {
  hoverPointX.value = null
  isDragging.value = false
}

/* -------------------- Other Interactions -------------------- */
const handleHorizontalTickClick = (targetDegree: number) => {
  const val = parseFloat(targetDegree.toFixed(1))
  emit('updateDegree', val)
  inputValue.value = val.toString()
}

const adjustDegree = (delta: number) => {
  const newDegree = (props.currentDegree + delta + 360) % 360
  const wrapped = parseFloat(newDegree.toFixed(1))
  emit('updateDegree', wrapped)
  inputValue.value = wrapped.toFixed(1)
}

const handleInputBlur = () => {
  inputValue.value = props.currentDegree.toFixed(1)
}

const handleInputKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter') (e.target as HTMLInputElement).blur()
}

/* -------------------- Lifecycle -------------------- */
onMounted(() => {
  document.addEventListener('mouseup', handleEndDragRuler)
  document.addEventListener('touchend', handleEndDragRuler)
})

onUnmounted(() => {
  document.removeEventListener('mouseup', handleEndDragRuler)
  document.removeEventListener('touchend', handleEndDragRuler)
})
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-fade-in {
  animation: fade-in 1s ease-in-out;
}
.transition-transform {
  transition:
    transform 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
}
.tick {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}
.major-tick {
  transition: height 0.3s ease;
  height: 32px;
}
.minor-tick {
  transition: height 0.3s ease;
  height: 16px;
}
</style>
