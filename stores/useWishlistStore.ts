import { defineStore } from 'pinia'

export interface Root {
  status: string
  message: string
  data: DaumWishList[]
}

export interface DaumWishList {
  id: number
  user_id: number
  content_id: number
  qty: number
  contents: ContentsWishList
}

export interface ContentsWishList {
  id: number
  name: string
  thumbnail: string
  slug: string
}

const STORAGE_KEY = 'wishlist'

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    items: new Set<string>(),
    loadingItems: new Set<string>(),
    errorItems: new Map<string, string>(),
    loadingAll: false,
    errorAll: null as string | null,
  }),

  actions: {
    initFromLocalStorage() {
      if (!process.client) return
      try {
        const stored = localStorage.getItem(STORAGE_KEY)
        this.items = stored ? new Set(JSON.parse(stored)) : new Set()
      } catch (err) {
        console.warn('Failed to load wishlist from localStorage', err)
        this.items = new Set()
      }
    },

    saveWishlistToStorage() {
      if (process.client) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...this.items]))
      }
    },

    async add(id: string) {
      const config = useRuntimeConfig()
      const router = useRouter()

      if (!getAccessToken()) {
        router.push('/auth/login')
        return
      }

      if (this.loadingItems.has(id)) return

      this.loadingItems.add(id)
      this.errorItems.delete(id)

      try {
        await $fetch(`${config.public.apiUrl}/api/web/v1/en/wishlist/${id}`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        })
        this.items.add(id)
        this.saveWishlistToStorage()
      } catch (err: any) {
        const message = err?.message || 'Add failed'
        this.errorItems.set(id, message)
        console.error('Add to wishlist failed:', message)
      } finally {
        this.loadingItems.delete(id)
      }
    },

    async remove(id: string) {
      const config = useRuntimeConfig()
      if (this.loadingItems.has(id)) return

      this.loadingItems.add(id)
      this.errorItems.delete(id)

      try {
        await $fetch(`${config.public.apiUrl}/api/web/v1/en/wishlist/${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${getAccessToken()}`,
          },
        })
        this.items.delete(id)
        this.saveWishlistToStorage()
      } catch (err: any) {
        const message = err?.message || 'Remove failed'
        this.errorItems.set(id, message)
        console.error('Remove from wishlist failed:', message)
      } finally {
        this.loadingItems.delete(id)
      }
    },

    async toggle(id: string) {
      if (this.loadingItems.has(id)) return
      this.items.has(id) ? await this.remove(id) : await this.add(id)
    },

    isWishlisted(id: string): boolean {
      return this.items.has(id)
    },

    isLoading(id: string): boolean {
      return this.loadingItems.has(id)
    },

    getError(id: string): string | null {
      return this.errorItems.get(id) || null
    },

    async fetchAll() {
      const config = useRuntimeConfig()

      if (this.loadingAll) return

      this.loadingAll = true
      this.errorAll = null

      try {
        const res = await $fetch<Root>(
          `${config.public.apiUrl}/api/web/v1/en/wishlist`,
          {
            headers: {
              Authorization: `Bearer ${getAccessToken()}`,
            },
          }
        )
        const ids = res.data.map((item) => String(item.content_id))
        this.items = new Set(ids)
        this.saveWishlistToStorage()
      } catch (err: any) {
        this.errorAll = err?.message || 'Failed to fetch wishlist'
        console.error('Fetch all wishlist failed:', this.errorAll)
      } finally {
        this.loadingAll = false
      }
    },

    clearLocal() {
      this.items.clear()
      this.loadingItems.clear()
      this.errorItems.clear()
      this.errorAll = null
      if (process.client) {
        localStorage.removeItem(STORAGE_KEY)
      }
    },
  },
})
