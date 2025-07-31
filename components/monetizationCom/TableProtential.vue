<template>
  <div
    class="flex md:flex-row flex-col items-start gap-[32px] justify-between pt-[14px] overflow-x-auto"
  >
    <div class="w-full md:max-w-2xl flex-1">
      <div class="overflow-x-auto md:overflow-visible">
        <table class="w-full min-w-[500px] rounded-[6px] overflow-scroll">
          <thead class="bg-[#EFF1D9]">
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
                Per 100 downloads
              </th>
              <th
                class="px-6 py-4 text-left text-sm font-medium text-gray-900 border-r border-white"
              >
                Your benefits
              </th>
              <!-- <th class="px-6 py-4 text-left text-sm font-medium text-gray-900">
            Your Earnings
          </th> -->
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
                class="px-6 py-4 min-w-[230px] border-r border-[#EEE] lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px]"
              >
                {{ row.type }}
                <span
                  v-if="index === 0"
                  class="text-black font-bold text-[14px] leading-[180%] font-noto"
                  >Pro Plan</span
                ><span
                  v-else
                  class="text-black font-bold text-[14px] leading-[180%] font-noto"
                  >Free Plan</span
                >
                Members
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
              <!-- <td
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
          </td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- table md screen -->
    <!-- <div class="sm:hidden w-full rounded-[6px] overflow-hidden">
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
            {{ item.condition }}
          </p>
        </div>
      </template>
    </div> -->

    <div class="w-full md:min-w-[300px] flex flex-col gap-[14px]">
      <h1
        style="
          color: #000;

          /* H4 */
          font-style: normal;
          font-weight: 400;
          line-height: 180%; /* 32.4px */
        "
        class="lg:text-[18px] text-[16px]"
      >
        More Than Just a Monetization Program
      </h1>

      <p
        style="
          color: #000;

          /* BODY 1 */
          font-style: normal;
          font-weight: 350;
          line-height: 180%; /* 25.2px */
        "
        class="lg:text-[14px] text-[13px]"
      >
        The
        <span
          style="
            color: #000;
            font-style: normal;
            font-weight: 700;
            line-height: 180%;
          "
          >Content Sharing Program</span
        >
        goes beyond generating revenue—it’s about being part of a creative
        community. Every download of your work contributes to preserving and
        sharing visual, audio, and artistic culture. It’s a unique opportunity
        to showcase your talents while supporting a platform dedicated to
        artistic expression and creativity.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    type: 'By our ',
    condition: '$1 is credited to your creator wallet.',
  },
  {
    type: 'By our ',
    condition:
      'Increase your popularity, in order to promote other services on our platform.',
  },
  // {
  //   type: 'Pro Plan (Annual)',
  //   condition: '1 subscription using your promo code',
  //   earnings: '$3.00',
  // },
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
