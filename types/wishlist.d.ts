declare namespace WISHLIST {
  export interface WishlistData {
    status: string
    message: string
    data: Data
  }

  export interface Data {
    user_id: string
    content_id: string
    qty: number
    id: number
  }
}
