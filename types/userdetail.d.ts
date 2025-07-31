declare namespace IUSERDETAIL {
  export interface IDETAIL {
    status: string
    message: string
    data: Data
  }

  export interface Data {
    id: number
    name: string
    lname: any
    bio: any
    dob: any
    gender: any
    phone_number: any
    profile: string
    address: any
    status: number
    email: string
    last_login: string
    subscription_id: number
    subscription_type: any
    subscription_expire_date: any
    referal_by_uid: any
    referal_code: string
    referal_percentage: number
    stripe_id: any
    locale: string
    dark_mode: string
    verify_identity: boolean
    id_card_img: any
    profile_border: string
    account_mode: any
    enable_two_fa: boolean
    account_type: number
    count_follower: number
    count_following: number
    count_refferal: number
    roles: Role[]
  }

  export interface Role {
    id: number
    name: string
    status: number
    permissions: any[]
  }
}
