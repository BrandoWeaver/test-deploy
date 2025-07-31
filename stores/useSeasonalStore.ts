export const useSeasonalStore = defineStore('seasonal', () => {
  const seasonalList = ref<ISEASONAL.Daum[]>([])

  const resetDiscover = () => {
    seasonalList.value = []
  }

  return {
    seasonalList,

    resetDiscover,
  }
})
