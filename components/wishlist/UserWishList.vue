<template>
  <div>
    <div v-if="pending">Loading...</div>
    <div v-else>
      <div v-for="val in listWishList?.data">
        <div class="flex flex-row gap-2">
          <p>{{ val.contents.id }}</p>
          <p>{{ val.contents.name }}</p>
          <button class="bg-red-400">remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useApi } from '~/composables/custom-fetch-api/useApi'
import { API } from '~/constants/apiEndpoints'
const { locale } = useI18n()
const { data: listWishList, pending } = useApi<USER_WISHLIST.ListWishList>(
  () =>
    API.USER.USER_WISHLIST.replace(':type', 'web')
      .replace(':version', 'v1')
      .replace(':lang', locale.value),
  {
    method: 'GET',
  }
)
</script>
