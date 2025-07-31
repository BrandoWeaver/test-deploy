declare namespace ISUBSCRIPTION {
  export interface ListSubscription {
    status: string
    message: string
    data: DataSubscriptionList[]
  }

  export interface DataSubscriptionList {
    id: number
    name: string
    price: string
    currency: string
  }

  export interface ICARD {
    status: string
    message: string
    data: CartDetail[]
  }

  export interface CartDetail {
    id: string
    brand: string
    last4: string
    exp_month: number
    exp_year: number
    is_default: boolean
  }

  //address
  export interface IAddress {
    status: string
    message: string
    data: Address[]
  }

  export interface Address {
    id: number
    user_id: number
    name: string
    address: string
    phone_number: string
    email: string
    country: string
    is_default: boolean
    address_type: string
  }
  //check coupon
  export interface ICHECKCOUPON {
    status: string
    message: string
    data: DataCoupon
  }

  export interface DataCoupon {
    id: number
    amount: number
    amount_type: string
  }
  //subscription
  export interface ISubscriptionPlan {
    status: string
    data: DataSubscriptionRes
  }

  export interface DataSubscriptionRes {
    id: number
    payment_method_id: number
    khqr_qr: string
    khqr_name: string
    khqr_md5: string
    payment_status: boolean
    invoice_no: string
    subscription_id: number
    subscription_type: string
    add_device: number
    amount_device: number
    coupon_code: string
    coupon_amount: number
    tax: number
    tax_amount: number
    total_amount: number
    currency: string
  }
  //check status
  export interface PaymentStatusRes {
    responseCode: number
    responseMessage: string
    errorCode: any
    data: DataPaymentStatus
  }
  export interface DataPaymentStatus {
    hash: string
    fromAccountId: string
    toAccountId: string
    currency: string
    amount: number
    description: string
    createdDateMs: number
    acknowledgedDateMs: number
  }
  //checkout data
  export interface Checkout {
    status: string
    message: string
    data: DataCheckoutRes
  }

  export interface DataCheckoutRes {
    id: number
    user_id: number
    subscription_id: number
    subscription_no: string
    subscription_recpt_no: string
    subscription_type: string
    subscription_unit_price: number
    add_device: number
    amount_device: string
    coupon_code: string
    coupon_type: string
    coupon_amount: number
    pmt_status: boolean
    sub_amount: number
    total_amount: number
    pmt_datetime: string
    subscription_title: string
    is_sub_yearly: boolean
    link_inv_download: string
    link_recpt_download: string
    email: string
  }

  // subscription detail
  export interface SubscriptionDetail {
    status: string
    message: string
    data: DataDetail
  }

  export interface DataDetail {
    id: number
    user_id: number
    subscription_no: string
    subscription_recpt_no: string
    subscription_id: number
    subscription_type: string
    subscription_qty: number
    subscription_unit_price: string
    coupon_code: any
    coupon_type: any
    coupon_amount: string
    add_device: number
    amount_device_per_unit: string
    amount_device: string
    currency: string
    tax: number
    tax_amount: string
    sub_amount: string
    total_amount: string
    auto_renewal: boolean
    sub_expired_date: string
    pmt_id: number
    pmt_ref_no: any
    pmt_status: boolean
    pmt_datetime: any
    pmt_note: any
    pmt_ref_img: any
    void_subscription: boolean
    remarks: any
    address_id: number
    created_at: string
    updated_at: string
    renew_link: string
    exp_link: string
    is_new_subscription: string
    short_code: string
    users: Users
  }

  export interface Users {
    id: number
    name: string
    lname: string
    email: string
    phone_number: string
    locale: string
    cards: CartDetail[]
    invoice_address: InvoiceAddress[]
  }

  export interface InvoiceAddress {
    id: number
    user_id: number
    name: string
    address: string
    phone_number: string
    email: string
    country: string
    is_default: boolean
    address_type: string
  }
}
