import { SUBSCRIPTION_SERVICE } from '~/services/subscriptionServices'

export function useSubscription() {
  const config = useRuntimeConfig()
  const { locale } = useI18n()
  const {
    data: listCard,
    status,
    refresh: refreshCardList,
    error: errorCardList,
  } = SUBSCRIPTION_SERVICE.getListCard({
    config,
    locale: locale,
    onError(error) {
      // console.error('Failed to load seasonal:', error)
    },
  })
  const {
    data: listAddress,
    status: statusAddress,
    refresh: refreshAddress,
    error: errorAddress,
  } = SUBSCRIPTION_SERVICE.getListAddress({
    config,
    locale: locale,
    onError(error) {
      console.error('errorAddress in sub', error)
    },
  })
  const {
    data: listPlan,
    status: statusPlan,
    refresh: refreshPlan,
  } = SUBSCRIPTION_SERVICE.getListPlan({
    config,
    locale: locale,
    onError(error) {
      // console.error('Failed to load seasonal:', error)
    },
  })

  return {
    listCard,
    status,
    refreshCardList,
    listAddress,
    statusAddress,
    refreshAddress,
    listPlan,
    errorCardList,
    statusPlan,
    errorAddress,
    refreshPlan,
  }
}
