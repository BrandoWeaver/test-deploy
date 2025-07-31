<template>
  <h1
    style="
      color: #000;

      /* H1 */
      font-style: normal;
      font-weight: 500;
      line-height: 180%; /* 54px */
    "
    class="2xl:px-6 w-[1440px] xl-max:w-full lg-max:w-full mx-auto px-6 md-max:px-[16px] lg:text-[30px] md:text-[24px] sm:text-[20px] text-[18px] flex-row gap-[24px] pt-[44px] lg:flex xl:hidden hidden font-lexend"
  >
    Why Choose Thortok’s Affiliate Program?
  </h1>
  <div
    class="2xl:px-6 w-[1440px] xl-max:w-full lg-max:w-full mx-auto px-6 md-max:px-[16px] flex md:flex-row flex-col gap-[24px] pt-[44px] lg:items-end items-start"
  >
    <div class="md:w-1/2 w-full flex flex-col gap-[24px]">
      <h1
        style="
          color: #000;

          /* H1 */

          font-style: normal;
          font-weight: 500;
          line-height: 180%; /* 54px */
        "
        class="xl:flex lg:hidden flex lg:text-[30px] md:text-[24px] sm:text-[20px] text-[18px]"
      >
        Why Choose Thortok’s Affiliate Program?
      </h1>
      <p
        style="
          color: #000;

          /* H5 Light */
          font-style: normal;
          font-weight: 300;
          line-height: 180%; /* 30.6px */
        "
        class="lg:text-[17px] md:text-[15px] sm:text-[14px] text-[13px]"
      >
        Joining the Thortok Affiliate Program is more than just a way to earn
        income. It’s about contributing to an innovative platform that supports
        creativity, showcases local and global talent, and celebrates the
        cultural richness of Asia.
      </p>

      <div class="flex-col gap-[14px] lg:flex hidden">
        <p
          style="
            color: #000;

            /* H4 */
            font-style: normal;
            font-weight: 400;
            line-height: 180%; /* 32.4px */
          "
          class="lg:text-[18px] md:text-[16px] text-[15px]"
        >
          Key Benefits:
        </p>

        <div
          v-for="(item, i) in benefits"
          :key="i"
          class="flex flex-row items-center gap-[10px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              d="M8.49968 3.83398C7.5767 3.83398 6.67445 4.10768 5.90702 4.62046C5.13959 5.13324 4.54145 5.86207 4.18824 6.71479C3.83503 7.56752 3.74261 8.50583 3.92268 9.41107C4.10274 10.3163 4.5472 11.1478 5.19985 11.8005C5.85249 12.4531 6.68401 12.8976 7.58926 13.0777C8.4945 13.2577 9.43281 13.1653 10.2855 12.8121C11.1383 12.4589 11.8671 11.8607 12.3799 11.0933C12.8926 10.3259 13.1663 9.42363 13.1663 8.50065C13.1663 7.26297 12.6747 6.07599 11.7995 5.20082C10.9243 4.32565 9.73735 3.83398 8.49968 3.83398ZM8.49968 11.834C7.84041 11.834 7.19594 11.6385 6.64778 11.2722C6.09961 10.9059 5.67237 10.3853 5.42008 9.77626C5.16779 9.16718 5.10178 8.49695 5.23039 7.85035C5.35901 7.20375 5.67648 6.6098 6.14265 6.14363C6.60883 5.67745 7.20277 5.35998 7.84938 5.23137C8.49598 5.10275 9.1662 5.16876 9.77529 5.42105C10.3844 5.67334 10.905 6.10059 11.2712 6.64875C11.6375 7.19691 11.833 7.84138 11.833 8.50065C11.833 9.38471 11.4818 10.2326 10.8567 10.8577C10.2316 11.4828 9.38373 11.834 8.49968 11.834Z"
              fill="black"
            />
          </svg>

          <p
            style="
              color: #000;

              /* BODY 1 */
              font-size: var(--Font-Size-Body-1, 14px);
              font-style: normal;
              font-weight: 350;
              line-height: 180%; /* 25.2px */
            "
          >
            <span
              style="
                color: #000;
                font-size: var(--Font-Size-Body-1, 14px);
                font-style: normal;
                font-weight: 700;
                line-height: 180%; /* 25.2px */
              "
              class="pr-[10px]"
              >{{ item.label }}</span
            >
            {{ item.value }}
          </p>
        </div>
      </div>
    </div>

    <div class="md:w-1/2 w-full h-full flex items-center">
      <img
        class="w-full h-full object-cover"
        src="/img/Frame 1171276939thortuk.png"
        alt="Thortok Affiliate Program"
      />
    </div>
  </div>

  <div
    class="2xl:px-6 w-[1440px] xl-max:w-full lg-max:w-full mx-auto px-6 md-max:px-[16px] flex-col gap-[14px] flex lg:hidden md:pt-0 pt-[24px]"
  >
    <p
      style="
        color: #000;

        /* H4 */
        font-style: normal;
        font-weight: 400;
        line-height: 180%; /* 32.4px */
      "
      class="lg:text-[18px] md:text-[16px] text-[15px] pt-[24px]"
    >
      Key Benefits:
    </p>

    <div
      v-for="(item, i) in benefits"
      :key="i"
      class="flex flex-row items-start justify-start gap-[10px]"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            d="M8.49968 3.83398C7.5767 3.83398 6.67445 4.10768 5.90702 4.62046C5.13959 5.13324 4.54145 5.86207 4.18824 6.71479C3.83503 7.56752 3.74261 8.50583 3.92268 9.41107C4.10274 10.3163 4.5472 11.1478 5.19985 11.8005C5.85249 12.4531 6.68401 12.8976 7.58926 13.0777C8.4945 13.2577 9.43281 13.1653 10.2855 12.8121C11.1383 12.4589 11.8671 11.8607 12.3799 11.0933C12.8926 10.3259 13.1663 9.42363 13.1663 8.50065C13.1663 7.26297 12.6747 6.07599 11.7995 5.20082C10.9243 4.32565 9.73735 3.83398 8.49968 3.83398ZM8.49968 11.834C7.84041 11.834 7.19594 11.6385 6.64778 11.2722C6.09961 10.9059 5.67237 10.3853 5.42008 9.77626C5.16779 9.16718 5.10178 8.49695 5.23039 7.85035C5.35901 7.20375 5.67648 6.6098 6.14265 6.14363C6.60883 5.67745 7.20277 5.35998 7.84938 5.23137C8.49598 5.10275 9.1662 5.16876 9.77529 5.42105C10.3844 5.67334 10.905 6.10059 11.2712 6.64875C11.6375 7.19691 11.833 7.84138 11.833 8.50065C11.833 9.38471 11.4818 10.2326 10.8567 10.8577C10.2316 11.4828 9.38373 11.834 8.49968 11.834Z"
            fill="black"
          />
        </svg>
      </div>

      <p
        style="
          color: #000;

          /* BODY 1 */
          font-style: normal;
          font-weight: 350;
          line-height: 180%; /* 25.2px */
        "
        class="lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px]"
      >
        <span
          style="
            color: #000;
            font-style: normal;
            font-weight: 700;
            line-height: 180%; /* 25.2px */
          "
          class="pr-[10px]"
          >{{ item.label }}</span
        >
        {{ item.value }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const benefits = ref([
  {
    label: 'Fair and Transparent Earnings:',
    value: 'Attractive and straightforward commission rates.',
  },
  {
    label: 'Community Impact:',
    value: 'Every referral helps grow a global creative community.',
  },
  {
    label: 'Powerful Tools:',
    value: 'Intuitive tools to track your performance.',
  },
  {
    label: 'Support Creativity:',
    value:
      'Help creators discover unique resources and expand their potential.',
  },
  {
    label: 'No Limits:',
    value: 'The more you share, the more you earn.',
  },
])
</script>

<style scoped></style>
