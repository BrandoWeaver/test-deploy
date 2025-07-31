<template>
  <h1
    class="pt-[24px] lg:text-[17px] md:text-[15px] sm:text-[14px] text-[13px]"
    style="color: #000; font-style: normal; font-weight: 700; line-height: 180%"
  >
    Earnings Potential - Example
  </h1>
  <div
    class="flex lg:flex-row flex-col items-start gap-[32px] justify-between overflow-x-auto"
  >
    <table class="w-full rounded-[6px] overflow-x-auto">
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
            Content Type
          </th>
          <th
            class="px-6 py-4 text-left text-sm font-medium text-gray-900 border-r border-white"
          >
            Sales price excl. tax
          </th>
          <th
            class="px-6 py-4 text-left text-sm font-medium text-gray-900 border-r border-white"
          >
            Platform Fee (15%)
          </th>
          <th
            class="px-6 py-4 text-left text-sm font-medium text-gray-900 border-r border-white"
          >
            Earnings per Sale
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
            class="px-6 py-4 border border-[#EEE] lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px] border-b"
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
            class="px-6 py-4 border-r border-[#EEE] lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px] border-b"
          >
            {{ row.price }}
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
            class="px-6 py-4 border-r border-[#EEE] lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px] border-b"
          >
            {{ row.fee }}
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
            class="px-6 py-4 border-r border-[#EEE] lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px] border-b"
          >
            {{ row.earn }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  {
    type: 'Digital Illustration',
    price: '$10',
    fee: '$1.50',
    earn: '$8.50',
  },
  {
    type: 'Music Track',
    price: '$15',
    fee: '$2.25',
    earn: '$12.75',
  },
  {
    type: '3D Asset',
    price: '$25',
    fee: '$3.75',
    earn: '$21.25',
  },
  {
    type: 'Stock Photo Pack',
    price: '$5',
    fee: '$0.75',
    earn: '$4.25',
  },

  // {
  //   type: 'Pro Plan (Annual)',
  //   condition: '1 subscription using your promo code',
  //   earnings: '$3.00',
  // },
])
</script>
