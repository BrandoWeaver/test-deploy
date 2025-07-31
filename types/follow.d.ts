declare namespace IFOLLOW {
  export interface RootFollow {
    status: string
    message: string
    data: Data
  }

  export interface Data {
    follower_id: string
    following_id: string
    status: boolean
  }
  export interface followRes {
    status: string
    message: string
    data: any | null
  }
}
