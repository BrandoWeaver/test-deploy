<template>
  <div class="xl:hidden xl-max:inline-block bg-[#EFF1DA] p-6 mb-6">
    <Greeting />
  </div>
  <List_Topics @update-topic="updateValue" />
  <div class="py-6"><Policy /></div>
</template>
<script lang="ts" setup>
import List_Topics from '~/components/forum/left_side_bar/List_Topics.vue'
import Button from '~/components/forum/right_side_bar/ui/Button.vue'
import HomeIcon from '../../../icons/forum_icons/HomeIcon.vue'
import Policy from '~/components/forum/left_side_bar/Policy.vue'
import Greeting from '~/components/forum/right_side_bar/Greeting.vue'
const emit = defineEmits(['update-topic'])

const updateValue = (topic: string) => {
  emit('update-topic', topic)
}
</script>
