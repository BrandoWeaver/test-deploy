<template>
  <!-- <ContentDetail :detail="postDetail!" /> -->
  helo
</template>

<script setup lang="ts">
// definePageMeta({
//   colorMode: 'light',
// })
import ContentDetail from '~/components/product_page/ContentDetail.vue'
import { useApi } from '~/composables/custom-fetch-api/useApi'
import { API } from '~/constants/apiEndpoints'
const id = '147'
const config = useRuntimeConfig()
const { locale } = useI18n()
const {
  data: postDetail,
  execute,
  error,
} = useApi<POST.POST_DETAIL>(
  () =>
    API.DETAIL.CONTENT_DETAIL.replace(':type', `${config.public.type}`)
      .replace(':version', `${config.public.version}`)
      .replace(':lang', locale.value)
      .replace(':postId', id),
  {
    method: 'GET',
    onError: (err) => {
      console.log('err', err)
    },
    watch: [locale],
  }
)
</script>
