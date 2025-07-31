declare namespace I2FA {
  export interface I2faRes {
    status: string
    message: string
    data: {
      qr_url: string
      secret: string
    }
  }
}
