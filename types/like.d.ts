declare namespace ILIKE {
  export interface LikeRes {
    status: string
    message: string
    data: {
      user_id: string
      content_id: string
      status: boolean
    }
  }
}
