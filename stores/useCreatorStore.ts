import { defineStore } from 'pinia'

export const useCreatorStore = defineStore('creator', {
  state: () => ({
    listCreator: [] as ICreator.Daum[],
    fetchedPages: new Set<number>(),
  }),
  actions: {
    addData(page: number, listCreator: ICreator.Daum[]) {
      if (!this.fetchedPages.has(page)) {
        this.listCreator.push(
          ...listCreator.filter(
            (item) => !this.listCreator.some((i) => i.id === item.id)
          )
        )
        this.fetchedPages.add(page)
      }
    },
    reset() {
      this.listCreator = []
      this.fetchedPages.clear()
    },
  },
})
