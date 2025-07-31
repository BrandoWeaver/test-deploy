// stores/useDiscoverStore.ts
import { defineStore } from 'pinia'

export const useRelatedStore = defineStore('related', {
  state: () => ({
    listRelatedCard: [] as IRELATEIMAGE.Daum[],
    fetchedPages: new Set<number>(),
  }),
  actions: {
    addData(page: number, items: IRELATEIMAGE.Daum[]) {
      if (!this.fetchedPages.has(page)) {
        this.listRelatedCard.push(
          ...items.filter(
            (item) => !this.listRelatedCard.some((i) => i.id === item.id)
          )
        )
        this.fetchedPages.add(page)
      }
    },
    reset() {
      this.listRelatedCard = []
      this.fetchedPages.clear()
    },
  },
})
