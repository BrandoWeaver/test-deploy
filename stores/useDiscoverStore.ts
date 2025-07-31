// stores/discover.ts
export const useDiscoverStore = defineStore('discover', () => {
  const listItems = ref<Discover.ListItem[]>([])
  const listMenu = ref<Discover.ListMenu[]>([])

  const resetDiscover = () => {
    listItems.value = []
    listMenu.value = []
  }

  return {
    listItems,
    listMenu,
    resetDiscover,
  }
})
