export const API = {
  AUTH: {
    LOGIN: `/api/:type/:version/:lang/auth/login`,
    REGISTER: `/api/:type/:version/:lang/register`,
    TELEGRAM_CALL_BACK:
      '/api/:type/:version/:lang/auth/telegram/callbackTelegram',
    REDIRECT: '/api/web/v1/en/auth/:provider/redirect',
    FORGET_PASSWORD: '/api/:type/:version/:lang/forgotPassword',
    RESET_PASSWORD: '/api/:type/:version/:lang/resetPassword',
    VERIFY_2FA: '/api/:type/:version/:lang/auth/verify-2fa',
    ENABLE_2FA: '/api/:type/:version/:lang/enable-2fa',
    DISABLE_2FA: '/api/:type/:version/:lang/disable-2fa',
    BACKUP_CODE_LIST: '/api/:type/:version/:lang/backup-2fa',
    RE_GENERATE_BACK_UP_CODE:
      '/api/:type/:version/:lang/re-generate-backup-code-2fa',
    VERIFY_ACCOUNT: '/api/:type/:version/:lang/confirm-register-account',
    VERIFY_OTP_LOGIN: '/api/:type/:version/:lang/verifyOtpLogin',
    RESEND_LINK_EMAIL:
      '/api/:type/:version/:lang/auth/resendLinkConfirmByEmail',
    RESEND_OTP: '/api/:type/:version/:lang/resendSMSOTP',
    UPGRADE_CONTRIBUTOR:
      '/api/:type/:version/:lang/upgradeAccountToContributor',
    UPDATE_MODE: '/api/:type/:version/:lang/dark-mode',
    UPDATE_LOCALE: '/api/:type/:version/:lang/locale',
  },
  HOME: {
    LIST_HEADER: '/api/:type/:version/:lang/menu',
    LIST_SEASONAL: '/api/:type/:version/:lang/seasonals',
    SEND_EMAIL: '/api/:type/:version/:lang/subscribeNewsletter',
    LIST_COLLECTION: '/api/:type/:version/:lang/browseByCollections',
    CREATOR_LIST: '/api/:type/:version/:lang/featuredCreatorsOfTheWeek',
  },
  CONTACT: {
    CREATE_CONTACT: '/api/:type/:version/:lang/contactUs',
  },
  DETAIL: {
    CONTENT_DETAIL: '/api/:type/:version/:lang/getContent/:postId',
  },
  POST: {
    POST_DETAIL: '/api/:type/:version/:lang/getContent',
    FOLLOW: '/api/:type/:version/:lang/followCreator/:authorId',
    UN_FOLLOW: '/api/:type/:version/:lang/unFollowCreator/:authorId',
    CHECK_FOLLOW_STATUS:
      '/api/:type/:version/:lang/checkFollowCreator/:authorId',
    LIKE: '/api/:type/:version/:lang/likeContent/:contentId',
    UNLIKE: '/api/:type/:version/:lang/unLikeContent/:contentId',
    CHECK_LIKE_STATUS: '/api/:type/:version/:lang/checkLikeContent/:content_id',
    WISHLIST: '/api/:type/:version/:lang/wishlist/:contentId',
    REMOVE_WISHLIST: '/api/:type/:version/:lang/wishlist/147',
    ADD_COLLECTION: '/api/:type/:version/:lang/collections/:contentId',
    REMOVE_COLLECTION: '/api/:type/:version/:lang/collections/:contentId',
    GET_SERIES_CONTENT: '/api/:type/:version/:lang/getSeriesContent',
    GET_RELATED_IMAGE: '/api/:type/:version/:lang/getRelatedImage',
    DOWNLOAD_POST: '/api/:type/:version/:lang/download',
    DISCOVER: '/api/:type/:version/:lang/getDiscoverOurCurrentOffers',
    GET_CONTENT_BY_SLUG: '/api/:type/:version/:lang/getContent',
  },
  USER: {
    USER_WISHLIST: '/api/:type/:version/:lang/wishlist',
    USER_DETAIL: '/api/:type/:version/:lang/me',
  },
  SUBSCRIPTION: {
    LIST_PLAN: '/api/:type/:version/:lang/subscription',
    GET_LIST_CARD: '/api/:type/:version/:lang/getStripeCard',
    LIST_ADDRESS: '/api/:type/:version/:lang/me/address',
    REMOVE_ADDRESS: '/api/:type/:version/:lang/me/address/delete/:addressId',
    ADD_ADDRESS: '/api/:type/:version/:lang/me/address',
    CHECK_COUPON: '/api/:type/:version/:lang/coupon',
    SUBSCRIPTION_PLAN: '/api/:type/:version/:lang/subscription',
    CHECK_PAYMENT_STATUS: '/api/:type/:version/:lang/check_khqr_payment_status',
    DOWNLOAD_INVOICE:
      '/api/:type/:version/:lang/subscription/checkout/download',
    RENEW_BY_LINK: '/api/:type/:version/:lang/subscription/renew-by-link',
    SAVE_CARD: '/api/:type/:version/:lang/paymentMethod',
    SUBSCRRIPTION_DETAIL: '/api/:type/:version/:lang/subscription/linkDetail',
  },
}
