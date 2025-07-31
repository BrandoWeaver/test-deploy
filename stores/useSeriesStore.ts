// stores/useDiscoverStore.ts
import { defineStore } from 'pinia'

export const useSeriesStore = defineStore('series', {
  state: () => ({
    listCardSeries: [] as IImageSeries.Daum[],
    fetchedPages: new Set<number>(),
  }),
  actions: {
    addData(page: number, items: IImageSeries.Daum[]) {
      if (!this.fetchedPages.has(page)) {
        this.listCardSeries.push(
          ...items.filter(
            (item) => !this.listCardSeries.some((i) => i.id === item.id)
          )
        )
        this.fetchedPages.add(page)
      }
    },
    reset() {
      this.listCardSeries = []

      this.fetchedPages.clear()
    },
  },
})
