<template>
  <div
    class="flex w-full h-[62px] xl-max:w-full flex-row sm-max:flex-row sm-max:gap-4 items-center justify-between px-[16px] py-[14px] md-max:flex-1 rounded-[6px] bg-[#F2F2F2] xs-max:flex-wrap xs-max:h-auto"
  >
    <!-- User Info -->
    <div class="flex items-center gap-4 sm-max:w-full">
      <!-- Profile Image and Badge -->
      <div class="relative flex items-center justify-center">
        <!-- Profile Image -->
        <NuxtImg
          :src="props.creator?.profile || ''"
          :alt="props.creator?.name"
          :class="`w-12 h-12 md-max:w-[32px] md-max:h-[32px] rounded-full border-2 border-[${props.creator?.profile_border}] shadow-md`"
        />
        <!-- Pro Badge -->
        <span
          v-if="true"
          class="absolute -top-0 -right-2 w-[20px] h-[20px] md-max:-top-0 md-max:w-[15px] md-max:h-[15px] bg-[#DBF226] text-black text-[6px] font-normal leading-[16px] rounded-full flex items-center justify-center border-2 border-[#EEEEEE]"
        >
          {{ props.creator?.account_mode }}
        </span>
        <div
          class="absolute bottom-[-6px] top-8 right-[-4px] md-max:top-6 md-max:right-[0.1px] w-[12px] h-[12px] md-max:w-[8px] md-max:h-[8px] rounded-full bg-[#78BF39] border-[1px] border-white"
        ></div>
      </div>

      <!-- User Name -->
      <div class="flex flex-col">
        <NuxtLink
          to=""
          class="text-[#000] font-noto font-[350px] text-[14px] md-max:text-[11px] md-max:leading-[19.8px] sm-max:text-[10px] sm-max:leading-[18px] hover:text-black border-b border-transparent hover:border-black transition-all duration-300 leading-[25.2px] py-[4px] px-[3px]"
        >
          {{ props.creator?.name.toUpperCase() }}
        </NuxtLink>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="flex items-center sm-max:w-full sm-max:justify-start gap-3">
      <!-- Portfolio Button -->
      <button
        :class="{
          'bg-[#DBF226] text-black border-[#DBF226]': isPortfolioSelected,
          'bg-white text-black border-[#EEEEEE] hover:bg-[#EFF1D9] hover:border-[#EFF1D9]':
            !isPortfolioSelected,
        }"
        class="flex px-[14px] py-[4px] justify-center items-center xs-max:w-full rounded-[6px] text-center font-[350] text-[13px] sm-max:text-[9px] sm-max:leading-[16.2px] leading-[23.4px] font-noto md-max:text-[10px] md-max:leading-[18px] transition"
        @click="togglePortfolioSelected"
        v-if="userStore.userData?.account_mode !== null"
      >
        Portfolio
      </button>

      <!-- Unfollow Button -->
      <button
        :class="{
          'bg-[#DBF226] text-black border-[#DBF226]': internalFollowStatus,
          'bg-white text-black border-[#EEEEEE] hover:bg-[#EFF1D9] hover:border-[#EFF1D9]':
            !internalFollowStatus,
        }"
        class="flex px-[14px] py-[4px] justify-center items-center rounded-[6px] xs-max:w-full text-center font-[350] text-[13px] leading-[23.4px] sm-max:text-[9px] sm-max:leading-[16.2px] font-noto md-max:text-[10px] md-max:leading-[18px] transition min-w-[80px]"
        @click="toggleUnfollowSelected"
      >
        <span>
          {{ internalFollowStatus ? 'Unfollow' : 'Follow' }}
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFollowStatus } from '~/composables/detail/useFollow'
interface Props {
  creator?: POST.CREATOR
  content_id?: string
  IsFollow?: boolean
}
const props = defineProps<Props>()
const {
  follow,
  unfollow,
  isFollowed,
  removeFollowFromStorage,
  saveFollowToStorage,
} = useFollowStatus(`${props.creator?.id}`)
const auth = useAuthStore()
const userStore = useUserStore()
const router = useRouter()
const internalFollowStatus = ref(props.IsFollow)
// Watch for changes in the parent's IsFollow prop
watch(
  () => props.IsFollow,
  (newVal) => {
    internalFollowStatus.value = newVal
  }
)
const isPortfolioSelected = ref(false)
onMounted(() => {
  if (props.creator?.id) {
    internalFollowStatus.value = isFollowed(`${props.creator.id}`)
  }
})

const toggleUnfollowSelected = async () => {
  const id = props.creator?.id
  if (!id) return
  if (!auth.authenticated) {
    router.push('/auth/login')
    return
  }
  if (!internalFollowStatus.value) {
    internalFollowStatus.value = true
    saveFollowToStorage(`${props.creator.id}`)
    await follow()
  } else {
    internalFollowStatus.value = false
    removeFollowFromStorage(`${props.creator.id}`)
    await unfollow()
  }
}

const togglePortfolioSelected = () => {
  isPortfolioSelected.value = !isPortfolioSelected.value
}
const emit = defineEmits(['portfolio-click', 'unfollow-click'])
</script>
