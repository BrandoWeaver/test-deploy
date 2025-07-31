declare namespace USER_WISHLIST {
  export interface ListWishList {
    status: string
    message: string
    data: Daum[]
  }

  export interface Daum {
    id: number
    user_id: number
    content_id: number
    qty: number
    contents: Contents
  }

  export interface Contents {
    id: number
    name: string
    thumbnail: string
    slug: string
  }
}
