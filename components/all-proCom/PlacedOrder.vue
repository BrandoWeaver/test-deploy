<template>
  <div
    v-if="props.loadingCheckoutData"
    class="lg:min-w-[580px] lg:max-w-[600px] pt-20 w-full"
  >
    <ThankYouSkeleton />
  </div>
  <div v-else>
    <div
      class="flex flex-col items-center lg:min-w-[580px] lg:max-w-[600px] pt-20 w-full"
    >
      <h1 class="lg:text-[30px] md:text-[24px] text-[20px] font-[500]">
        Thank You! 🙏
      </h1>
      <p
        class="lg:text-[14px] md:text-[13px] text-[11px] font-[350] pt-[32px] text-[rgba(68, 68, 68, 0.90)] font-noto"
      >
        Your order
        <span class="text-[rgba(0, 0, 0, 0.90)]"
          >#{{ props.checkoutData?.subscription_no }}</span
        >
        has been placed!
      </p>
      <p
        class="lg:text-[14px] md:text-[13px] text-[11px] font-[350] text-center pt-[24px] text-[rgba(68, 68, 68, 0.70)] font-noto flex flex-col items-center"
      >
        We sent an email to {{ props.checkoutData?.email }} with your order
        confirmation and receipt.<span>
          If the email hasn't arrived within two minutes, please check your spam
          folder to see if the email was routed there.
        </span>
      </p>
      <div class="flex items-center gap-2 pt-[24px] pb-[32px]">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <g clip-path="url(#clip0_8_46830)">
              <path
                d="M8.5 0.5C6.91775 0.5 5.37104 0.969192 4.05544 1.84824C2.73985 2.72729 1.71447 3.97672 1.10897 5.43853C0.503466 6.90034 0.34504 8.50887 0.653721 10.0607C0.962403 11.6126 1.72433 13.038 2.84315 14.1569C3.96197 15.2757 5.38743 16.0376 6.93928 16.3463C8.49113 16.655 10.0997 16.4965 11.5615 15.891C13.0233 15.2855 14.2727 14.2602 15.1518 12.9446C16.0308 11.629 16.5 10.0823 16.5 8.5C16.4977 6.37897 15.6541 4.34547 14.1543 2.84568C12.6545 1.34589 10.621 0.502294 8.5 0.5V0.5ZM8.5 15.1667C7.18146 15.1667 5.89253 14.7757 4.7962 14.0431C3.69987 13.3106 2.84539 12.2694 2.34081 11.0512C1.83622 9.83305 1.7042 8.49261 1.96144 7.1994C2.21867 5.90619 2.85361 4.71831 3.78596 3.78596C4.71831 2.85361 5.9062 2.21867 7.1994 1.96143C8.49261 1.7042 9.83305 1.83622 11.0512 2.3408C12.2694 2.84539 13.3106 3.69987 14.0431 4.7962C14.7757 5.89253 15.1667 7.18146 15.1667 8.5C15.1647 10.2675 14.4617 11.9621 13.2119 13.2119C11.9621 14.4617 10.2675 15.1647 8.5 15.1667Z"
                fill="#444444"
              />
              <path
                d="M8.49964 4.5C8.32283 4.5 8.15326 4.57024 8.02823 4.69526C7.90321 4.82029 7.83297 4.98985 7.83297 5.16667V8.04999L5.58564 9.45799C5.43535 9.55188 5.32851 9.70162 5.28863 9.87428C5.24875 10.0469 5.27909 10.2284 5.37297 10.3787C5.46686 10.5289 5.6166 10.6358 5.78926 10.6757C5.96192 10.7155 6.14335 10.6852 6.29364 10.5913L8.85364 8.99133C8.95036 8.93072 9.02991 8.8463 9.08465 8.74615C9.1394 8.64599 9.16751 8.53346 9.16631 8.41933V5.16667C9.16631 4.98985 9.09607 4.82029 8.97104 4.69526C8.84602 4.57024 8.67645 4.5 8.49964 4.5Z"
                fill="#444444"
              />
            </g>
            <defs>
              <clipPath id="clip0_8_46830">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0.5 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
        <p class="lg:text-[14px] md:text-[13px] text-[11px] font-[350]">
          Time placed: {{ props.checkoutData?.pmt_datetime || 'NA' }}
        </p>
      </div>

      <NuxtLink
        :to="'/'"
        class="text-sm px-20 py-4 bg-black text-white rounded-md transition-shadow hover:shadow-[0px_4px_16px_0px_#dbf226]"
      >
        Back to Home Page
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import ThankYouSkeleton from './ThankYouSkeleton.vue'

const props = defineProps<{
  loadingCheckoutData: boolean
  checkoutData?: ISUBSCRIPTION.DataCheckoutRes
}>()
</script>

<style scoped></style>
