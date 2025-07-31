<template>
  <div
    class="flex xl:flex-row xl-max:flex-row xl-max1:flex-col flex-col items-start gap-[32px] justify-between pt-[14px]"
  >
    <table
      class="xl:w-1/2 xl-max:w-1/2 xl-max1:w-full w-full rounded-[6px] overflow-hidden sm-max:hidden"
    >
      <thead class="bg-[#F2F2F2]">
        <tr>
          <th
            style="
              color: #000;
              font-style: normal;
              font-weight: 350;
              line-height: 180%;
            "
            class="px-6 py-4 border-r border-white lg:text-[15px] md:text-[14px] sm:text-[13px]"
          >
            Type of Registration
          </th>
          <th
            class="px-6 py-4 text-left text-sm font-medium text-gray-900 border-r border-white"
          >
            Condition
          </th>
          <th class="px-6 py-4 text-left text-sm font-medium text-gray-900">
            Your Earnings
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 bg-[#FFF]">
        <tr
          v-for="(row, index) in tableData"
          :key="index"
          class="hover:bg-gray-50 transition-colors duration-150"
        >
          <td
            style="
              color: #000;

              /* BODY 1 */
              font-size: var(--Font-Size-Body-1, 14px);
              font-style: normal;
              font-weight: 350;
              line-height: 180%;
            "
            class="px-6 py-4 border-r border-[#EEE] lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px]"
          >
            {{ row.type }}
          </td>
          <td
            style="
              color: #000;

              /* BODY 1 */
              font-size: var(--Font-Size-Body-1, 14px);
              font-style: normal;
              font-weight: 350;
              line-height: 180%;
            "
            class="px-6 py-4 border-r border-[#EEE] lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px]"
          >
            {{ row.condition }}
          </td>
          <td
            style="
              color: #000;

              /* BODY 1 */
              font-size: var(--Font-Size-Body-1, 14px);
              font-style: normal;
              font-weight: 350;
              line-height: 180%;
            "
            class="px-6 py-4 border-r border-[#EEE] lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px]"
          >
            {{ row.earnings }}
          </td>
        </tr>
      </tbody>
    </table>
    <!-- table md screen -->
    <div class="sm:hidden w-full rounded-[6px] overflow-hidden">
      <template v-for="(item, index) in tableData" :key="index">
        <div class="bg-[#F2F2F2] p-4">
          <h2
            style="
              color: #000;

              /* SUBTILE */
              font-size: var(--Font-Size-Subtile, 12px);
              font-style: normal;
              font-weight: 350;
              line-height: 180%;
            "
          >
            {{ item.type }}
          </h2>
        </div>
        <div class="bg-[#FFF] p-4">
          <p
            style="
              color: #000;

              /* BODY 1 */
              font-size: var(--Font-Size-Body-1, 10px);
              font-style: normal;
              font-weight: 350;
              line-height: 180%; /* 18px */
            "
          >
            {{ item.condition }} = {{ item.earnings }}
          </p>
        </div>
      </template>
    </div>

    <div
      class="xl:w-1/2 xl-max:w-1/2 xl-max1:w-full w-full flex flex-col gap-[14px]"
    >
      <h1
        style="
          color: #000;

          /* H4 */
          font-size: var(--Font-Size-H4, 18px);
          font-style: normal;
          font-weight: 400;
          line-height: 180%;
        "
      >
        Example
      </h1>

      <div
        v-for="(item, i) in example"
        class="flex flex-row gap-[10px] sm:items-center items-start"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <path
            d="M14 9.5009C13.9964 9.10632 13.8374 8.72908 13.5575 8.4509L10.34 5.22591C10.1995 5.08622 10.0094 5.00781 9.81125 5.00781C9.61311 5.00781 9.42302 5.08622 9.2825 5.22591C9.2122 5.29563 9.15641 5.37858 9.11833 5.46997C9.08026 5.56137 9.06065 5.6594 9.06065 5.75841C9.06065 5.85742 9.08026 5.95544 9.11833 6.04684C9.15641 6.13823 9.2122 6.22118 9.2825 6.29091L11.75 8.7509H4.25C4.05109 8.7509 3.86032 8.82992 3.71967 8.97057C3.57902 9.11123 3.5 9.30199 3.5 9.5009C3.5 9.69981 3.57902 9.89058 3.71967 10.0312C3.86032 10.1719 4.05109 10.2509 4.25 10.2509H11.75L9.2825 12.7184C9.14127 12.8586 9.06154 13.0492 9.06083 13.2482C9.06013 13.4473 9.13852 13.6384 9.27875 13.7796C9.41898 13.9209 9.60958 14.0006 9.8086 14.0013C10.0076 14.002 10.1988 13.9236 10.34 13.7834L13.5575 10.5584C13.8392 10.2784 13.9983 9.89808 14 9.5009Z"
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
            line-height: 180%;
          "
        >
          {{ item.label }}
        </p>
      </div>

      <p
        style="
          color: #000;

          /* SUBTILE */
          font-size: var(--Font-Size-Subtile, 15px);
          font-style: normal;
          font-weight: 350;
          line-height: 180%;
        "
      >
        Total:
        <span
          style="
            color: #000;

            /* H5 */
            font-size: var(--Font-Size-H5, 17px);
            font-style: normal;
            font-weight: 700;
            line-height: 180%;
          "
          >$10.50</span
        >
        for 27 referrals.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    type: 'Free Plan',
    condition: '10 registrations using your promo code',
    earnings: '$1',
  },
  {
    type: 'Pro Plan (Monthly)',
    condition: '1 subscription using your promo code',
    earnings: '$0.50',
  },
  {
    type: 'Pro Plan (Annual)',
    condition: '1 subscription using your promo code',
    earnings: '$3.00',
  },
])

const example = ref([
  {
    label: 'If you refer 20 users who sign up for the Free Plan, you earn $2.',
  },
  {
    label:
      'If 5 of them subscribe to the Pro Plan monthly, you add $2.50 to your earnings.',
  },
  {
    label:
      'If 2 of those users choose the Pro Plan annual, you earn an additional $6.',
  },
])
</script>
