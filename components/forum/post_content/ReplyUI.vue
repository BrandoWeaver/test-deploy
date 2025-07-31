<template>
  <div class="bg-white pl-6 py-6 border-t border-b">
    <Post_Header
      :profile_image="post.authorImage"
      :name="post.author"
      :user_type="post.user_type"
      :last_seen="post.timestamp"
      :like_count="post.likes"
      @comment="onComment"
      @favorite="onFavorite"
      @share="onShare"
      @shield="onShield"
      @like="onLike"
      type="comment"
    />

    <div class="space-y-4 w-auto mt-6">
      <p class="text-gray-700 break-words text-sm font-noto font-light">
        {{ post.text }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Post_Header from './Post_Header.vue'
const replyPostId = ref(-1)
defineProps<{
  post: Reply
}>()

const onReply = (post_id: number) => {
  // Handle reply action
  replyPostId.value = post_id
}
const onComment = () => {
  // Handle comment action
  alert('comment')
}
const cancelReply = () => {
  // Handle cancel reply action
  replyPostId.value = -1
}
const onFavorite = () => {
  // Handle favorite action
  alert('favorite')
}

const onShare = () => {
  // Handle share action
  alert('share')
}

const onShield = () => {
  // Handle shield action
  alert('shield')
}

const onLike = () => {
  // Handle shield action
  alert('Like')
}
</script>

<style scoped>
.break-words {
  word-break: break-word;
}
</style>
