<template>
  <div
    class="flex justify-between bg-white rounded-[4px] mb-4 overflow-hidden p-1"
  >
    <button
      @click="updatePlanId(2, 'monthly')"
      class="w-full disabled:opacity-50 cursor-pointer px-5 py-2.5 flex justify-center items-center transition-all duration-200 rounded-[4px]"
      :class="
        selected === 'monthly'
          ? 'bg-[#EFF1D9] text-black font-medium'
          : 'bg-white text-gray-500'
      "
      id="2"
      :disabled="isRenew"
    >
      Monthly
    </button>
    <button
      @click="updatePlanId(3, 'yearly')"
      class="w-full cursor-pointer disabled:opacity-50 px-5 py-2.5 flex justify-center items-center gap-2 transition-all duration-200 rounded-[4px]"
      :class="
        selected === 'yearly'
          ? 'bg-[#EFF1D9] text-black font-medium'
          : 'bg-white text-gray-500'
      "
      id="3"
      :disabled="isRenew"
    >
      <div>Yearly</div>
      <div
        class="bg-[#DBF226] rounded-full w-6 h-6 flex items-center justify-center text-black font-semibold text-sm"
      >
        %
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  listPlan?: ISUBSCRIPTION.ListSubscription
  getDefaultPlan: 'monthly' | 'yearly'
  isRenew?: boolean
}>()

const selected = ref<'monthly' | 'yearly'>(props.getDefaultPlan)
const emit = defineEmits(['updateId'])
const updatePlanId = (id: number, type: 'monthly' | 'yearly') => {
  selected.value = type
  emit('updateId', id)
}
watch(
  () => props.getDefaultPlan,
  (newVal) => {
    selected.value = newVal
  }
)
</script>
