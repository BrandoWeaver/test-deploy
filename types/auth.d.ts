declare namespace IAUTH {
  export interface LogRes {
    status: string
    message: string
    data: {
      enable_2fa: boolean
      token: string
      temp_token: string
    }
  }
}
