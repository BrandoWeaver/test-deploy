import { API } from '~/constants/apiEndpoints'
import type { RuntimeConfig } from '@nuxt/schema'
import { useApi } from '~/composables/custom-fetch-api/useApi'
export const SUBSCRIPTION_SERVICE = {
  getListPlan: ({
    config,
    locale,
    onSuccess,
    onError,
  }: {
    config: RuntimeConfig
    locale: Ref<string>
    onSuccess?: (data: ISUBSCRIPTION.ListSubscription) => void
    onError?: (error: any) => void
  }) => {
    return useApi<ISUBSCRIPTION.ListSubscription>(
      () =>
        API.SUBSCRIPTION.LIST_PLAN.replace(':type', config.public.type)
          .replace(':version', config.public.version)
          .replace(':lang', locale.value),
      {
        server: false,
        immediate: true,
        watch: [locale],
        onSuccess,
        onError,
      }
    )
  },
  getListCard: ({
    config,
    locale,
    onSuccess,
    onError,
  }: {
    config: RuntimeConfig
    locale: Ref<string>
    onSuccess?: (data: ISUBSCRIPTION.ICARD) => void
    onError?: (error: any) => void
  }) => {
    return useApi<ISUBSCRIPTION.ICARD>(
      () =>
        API.SUBSCRIPTION.GET_LIST_CARD.replace(':type', config.public.type)
          .replace(':version', config.public.version)
          .replace(':lang', locale.value),
      {
        method: 'POST',
        server: false,
        immediate: true,
        watch: [locale],
        onSuccess,
        onError,
      }
    )
  },
  getListAddress: ({
    config,
    locale,
    onSuccess,
    onError,
  }: {
    config: RuntimeConfig
    locale: Ref<string>
    onSuccess?: (data: ISUBSCRIPTION.IAddress) => void
    onError?: (error: { message: string; status: string }) => void
  }) => {
    return useApi<ISUBSCRIPTION.IAddress>(
      () =>
        API.SUBSCRIPTION.LIST_ADDRESS.replace(':type', config.public.type)
          .replace(':version', config.public.version)
          .replace(':lang', locale.value),
      {
        server: false,
        immediate: true,
        watch: [locale],
        onSuccess,
        onError,
      }
    )
  },
  checkCouponCode: ({
    config,
    locale,
    onSuccess,
    couponReq,
    onError,
  }: {
    config: RuntimeConfig
    locale: Ref<string>
    onSuccess?: (data: ISUBSCRIPTION.ICHECKCOUPON) => void
    couponReq: {
      coupon_code: string
    }
    onError?: (error: any) => void
  }) => {
    return useApi<ISUBSCRIPTION.ICHECKCOUPON>(
      () =>
        API.SUBSCRIPTION.CHECK_COUPON.replace(':type', config.public.type)
          .replace(':version', config.public.version)
          .replace(':lang', locale.value),
      {
        method: 'POST',
        body: couponReq,
        server: false,
        immediate: false,
        watch: [locale],
        onSuccess,
        onError,
      }
    )
  },
  subScriptionPlan: ({
    config,
    locale,
    onSuccess,
    body,
    onError,
  }: {
    config: RuntimeConfig
    locale: Ref<string>
    onSuccess?: (data: ISUBSCRIPTION.ISubscriptionPlan) => void
    body: {
      subscription_id: number
      payment_method_id: number
      add_device: number
      auto_renewal: string
      coupon_code: string
    }
    onError?: (error: any) => void
  }) => {
    return useApi<ISUBSCRIPTION.ISubscriptionPlan>(
      () =>
        API.SUBSCRIPTION.SUBSCRIPTION_PLAN.replace(':type', config.public.type)
          .replace(':version', config.public.version)
          .replace(':lang', locale.value),
      {
        method: 'POST',
        body: body,
        server: true,
        immediate: false,
        watch: [locale],
        onSuccess,
        onError,
      }
    )
  },
  checkPaymentStatus: ({
    config,
    locale,
    onSuccess,
    invoice_id,
    onError,
  }: {
    config: RuntimeConfig
    locale: Ref<string>
    onSuccess?: (data: ISUBSCRIPTION.PaymentStatusRes) => void

    invoice_id: Ref<number>

    onError?: (error: any) => void
  }) => {
    return useApi<ISUBSCRIPTION.PaymentStatusRes>(
      () =>
        API.SUBSCRIPTION.CHECK_PAYMENT_STATUS.replace(
          ':type',
          config.public.type
        )
          .replace(':version', config.public.version)
          .replace(':lang', locale.value),
      {
        method: 'POST',
        body: { invoice_id: invoice_id },
        server: false,
        immediate: false,
        watch: [locale],
        onSuccess,
        onError,
      }
    )
  },
  removeAddress: ({
    config,
    locale,
    onSuccess,
    body,
    onError,
  }: {
    config: RuntimeConfig
    locale: Ref<string>
    onSuccess?: (data: any) => void
    body: {
      addressId: number
    }
    onError?: (error: any) => void
  }) => {
    return useApi(
      () =>
        API.SUBSCRIPTION.REMOVE_ADDRESS.replace(':type', config.public.type)
          .replace(':version', config.public.version)
          .replace(':lang', locale.value)
          .replace(':addressId', `${body.addressId}`),
      {
        method: 'POST',
        server: false,
        immediate: false,
        watch: [locale, body],
        onSuccess,
        onError,
      }
    )
  },
  addAddress: ({
    config,
    locale,
    onSuccess,
    onError,
    body,
  }: {
    config: RuntimeConfig
    locale: Ref<string>
    onSuccess?: (data: any) => void
    onError?: (error: any) => void
    body: {
      name: string
      address_type: string
      address: string
      phone_number: string
      email: string
      country: string
      is_default: boolean
      id?: string
    }
  }) => {
    const formData = new FormData()
    Object.entries(body).forEach(([key, value]) => {
      formData.append(key, String(value))
    })
    return useApi(
      () =>
        API.SUBSCRIPTION.ADD_ADDRESS.replace(':type', config.public.type)
          .replace(':version', config.public.version)
          .replace(':lang', locale.value),
      {
        method: 'POST',
        body: formData,
        server: false,
        immediate: false,
        watch: [locale],
        onSuccess,
        onError,
      }
    )
  },
  dowloadInvoice: ({
    config,
    locale,
    onSuccess,
    onError,
    body,
  }: {
    config: RuntimeConfig
    locale: Ref<string>
    onSuccess?: (data: ISUBSCRIPTION.Checkout) => void
    onError?: (error: any) => void
    body: {
      invoice_id: string
    }
  }) => {
    const formData = new FormData()
    formData.append('invoice_id', body.invoice_id)
    return useApi<ISUBSCRIPTION.Checkout>(
      () =>
        API.SUBSCRIPTION.DOWNLOAD_INVOICE.replace(':type', config.public.type)
          .replace(':version', config.public.version)
          .replace(':lang', locale.value),
      {
        method: 'POST',
        body: formData,
        server: false,
        key: () => `checkout-${body.invoice_id}`,
        immediate: body.invoice_id !== '',
        watch: [locale, body.invoice_id],
        onSuccess,
        onError,
      }
    )
  },
  renewPlan: async ({
    config,
    locale,
    onSuccess,
    onError,
    body,
  }: {
    config: RuntimeConfig
    locale: Ref<string>
    onSuccess?: (data: ISUBSCRIPTION.Checkout) => void
    onError?: (error: any) => void
    body: {
      renew_link: string
      pmt_id: string
      pm_stripe_id: string
      address_id: string
      coupon_code: string
    }
  }) => {
    console.log('data renew', body)
    const formData = new FormData()
    formData.append('renew_link', body.renew_link)
    formData.append('pmt_id', body.pmt_id)
    formData.append('pm_stripe_id', body.pm_stripe_id)
    formData.append('address_id', body.address_id)
    formData.append('coupon_code', body.coupon_code)
    console.log('formData', formData)
    const res = await $fetch(
      API.SUBSCRIPTION.RENEW_BY_LINK.replace(':type', config.public.type)
        .replace(':version', config.public.version)
        .replace(':lang', locale.value),
      {
        method: 'POST',
        body: formData,
      }
    )
    return res
  },
  subscriptionDetail: ({
    config,
    locale,
    onSuccess,
    onError,
    data,
  }: {
    config: RuntimeConfig
    locale: Ref<string>
    onSuccess?: (data: ISUBSCRIPTION.SubscriptionDetail) => void
    onError?: (error: any) => void
    data: {
      short_link: string
    }
  }) => {
    const formData = new FormData()
    formData.append('short_link', data.short_link)
    console.log('formData', formData)
    return useApi<ISUBSCRIPTION.SubscriptionDetail>(
      () =>
        API.SUBSCRIPTION.SUBSCRRIPTION_DETAIL.replace(
          ':type',
          config.public.type
        )
          .replace(':version', config.public.version)
          .replace(':lang', locale.value),
      {
        method: 'POST',
        body: formData,
        immediate: true,
        server: false,
        watch: [locale, data.short_link],
      }
    )
  },
}
