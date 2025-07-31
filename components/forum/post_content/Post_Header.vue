<template>
  <div
    class="flex md:flex-row md:items-center sm:flex-col sm-max:flex-col justify-between w-full sm:gap-[14px] sm-max:gap-[14px]"
  >
    <!-- Left Section: User Info -->
    <div class="flex items-center gap-3">
      <Profile :image="profile_image" :type="'Pro'" />
      <!-- User Details -->
      <div class="flex flex-col">
        <div class="flex items-center gap-2 flex-wrap">
          <p class="md:text-sm xs:text-[11px] text-[#060606]">
            {{ name }}
          </p>
          <div
            class="flex items-center gap-1 bg-[#DBF226] px-2 py-1 rounded-full"
            v-if="user_type !== undefined"
          >
            <span class="text-[6px]">{{ user_type }}</span>
          </div>
          <Badge />
        </div>
        <div>
          <span class="text-[rgba(120,120,120,0.60)] text-[10px]">{{
            last_seen
          }}</span>
        </div>
      </div>
    </div>

    <div class="md:hidden flex items-center" v-if="type === 'comment'">
      <p class="text-[13px]">{{ like_count }} Like</p>
    </div>

    <!-- Right Section: Actions -->
    <div class="flex items-center gap-2">
      <button
        v-if="type === 'post'"
        @click="handleComment"
        class="p-2 hover:bg-gray-100 rounded-full bg-[#F2F2F2] bg-gradient-to-t from-[rgba(255,204,204,0.3)] to-[rgba(255,204,204,0.3)]"
      >
        <Comment />
      </button>
      <!-- Reply Counter -->

      <div class="flex items-center" v-if="type === 'post'">
        <p class="text-[13px] text-[#000]">{{ reply_count }} Reply</p>
      </div>
      <div
        class="sm:hidden sm-max:hidden md:flex items-center"
        v-if="type === 'comment'"
      >
        <p class="text-[13px]">{{ like_count }} Like</p>
      </div>
      <!-- Share Button -->

      <button
        @click="handleFavorite"
        class="p-2 hover:bg-gray-100 rounded-md border border-[#EEE] bg-white"
      >
        <Fav />
      </button>
      <button
        @click="handleLike"
        v-if="type === 'comment'"
        class="p-2 hover:bg-gray-100 rounded-md border border-[#005B52] bg-gradient-to-t from-[#EFF1D9] to-[#EFF1D9]"
      >
        <LikIcon />
      </button>
      <!-- Info Button -->
      <button
        @click="handleShare"
        class="p-2 hover:bg-gray-100 rounded-md border border-[#EEE] bg-white"
      >
        <Share />
      </button>
      <button
        @click="handleShield"
        class="p-2 hover:bg-gray-100 rounded-md border border-[#EEE] bg-white"
      >
        <Shiel />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Badge from '~/icons/forum_icons/Badge.vue'
import Comment from '~/icons/forum_icons/Comment.vue'
import Fav from '~/icons/forum_icons/Fav.vue'
import Share from '~/icons/forum_icons/Share.vue'
import Shiel from '~/icons/forum_icons/Shiel.vue'
import Profile from '@/components/forum/right_side_bar/ui/Profile.vue'
import LikIcon from '~/icons/forum_icons/LikIcon.vue'
import Button from '../right_side_bar/ui/Button.vue'
// import Button from '../right_side_bar/ui/Button.vue'

defineProps<{
  profile_image: string
  name: string
  user_type?: string
  last_seen: string
  reply_count?: number
  like_count?: number
  type: 'post' | 'comment'
}>()
const emit = defineEmits(['comment', 'favorite', 'share', 'shield', 'like'])

const handleComment = () => {
  emit('comment')
}

const handleFavorite = () => {
  emit('favorite')
}
const handleLike = () => {
  emit('like')
}

const handleShare = () => {
  emit('share')
}

const handleShield = () => {
  emit('shield')
}
</script>
