<template>
  <div class="bg-[#F2F2F2] py-[32px] w-full">
    <div
      class="2xl:px-6 w-[1440px] xl-max:w-full lg-max:w-full mx-auto px-6 md-max:px-[16px] flex flex-col gap-[14px] py-[32px]"
    >
      <div class="flex flex-col gap-[10px]">
        <div class="flex flex-col gap-[14px]">
          <h2
            style="
              color: #000;

              /* H5 */
              font-style: normal;
              font-weight: 700;
              line-height: 180%; /* 30.6px */
            "
            class="text-[17px]"
          >
            Best Practices for Success
          </h2>
          <div
            v-for="(item, i) in dashboards"
            :key="i"
            class="flex flex-row items-center"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M6.00001 12.4199V4.97328C5.99924 4.84086 6.03792 4.71122 6.11112 4.60087C6.18432 4.49052 6.28873 4.40448 6.41102 4.3537C6.53332 4.30292 6.66797 4.28971 6.7978 4.31576C6.92763 4.34181 7.04677 4.40593 7.14001 4.49994L10.86 8.22661C10.9842 8.35152 11.0539 8.52049 11.0539 8.69661C11.0539 8.87274 10.9842 9.0417 10.86 9.16661L7.14001 12.8933C7.04677 12.9873 6.92763 13.0514 6.7978 13.0775C6.66797 13.1035 6.53332 13.0903 6.41102 13.0395C6.28873 12.9887 6.18432 12.9027 6.11112 12.7924C6.03792 12.682 5.99924 12.5524 6.00001 12.4199Z"
                  fill="#374957"
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
              class="lg:text-[14px] md:text-[13px] text-[11px]"
            >
              <span
                style="
                  color: #000;

                  /* H5 */
                  font-style: normal;
                  font-weight: 700;
                  line-height: 180%; /* 30.6px */
                "
                >{{ item.bold }}</span
              >
              {{ item.label }}
            </p>
          </div>
        </div>

        <div
          class="bg-[#EFF1D9] px-[32px] py-[24px] rounded-[10px] border border-[#005B52] mt-[32px] flex flex-col gap-[10px]"
        >
          <div class="flex flex-row gap-[14px] items-center">
            <div class="bg-primary-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_8_107218)">
                  <path
                    d="M12 15.0007C11.7348 15.0007 11.4804 14.8954 11.2929 14.7078C11.1054 14.5203 11 14.2659 11 14.0007V6.00073C11 5.73551 11.1054 5.48116 11.2929 5.29362C11.4804 5.10608 11.7348 5.00073 12 5.00073C12.2652 5.00073 12.5196 5.10608 12.7071 5.29362C12.8946 5.48116 13 5.73551 13 6.00073V14.0007C13 14.2659 12.8946 14.5203 12.7071 14.7078C12.5196 14.8954 12.2652 15.0007 12 15.0007ZM12.793 23.7607C14.953 22.8927 22 19.4797 22 12.0437V6.87273C22.0011 5.82174 21.6706 4.7972 21.0554 3.94504C20.4403 3.09288 19.5719 2.45657 18.574 2.12673L12.315 0.0517262C12.1107 -0.0172421 11.8893 -0.0172421 11.685 0.0517262L5.426 2.12673C4.42811 2.45657 3.55975 3.09288 2.9446 3.94504C2.32946 4.7972 1.99889 5.82174 2 6.87273V12.0437C2 18.6057 9.005 22.6197 11.153 23.6937C11.4247 23.8234 11.7084 23.9262 12 24.0007C12.2712 23.9453 12.5366 23.8649 12.793 23.7607ZM17.944 4.02473C18.5425 4.22314 19.0633 4.6051 19.4324 5.11636C19.8015 5.62762 20.0001 6.24217 20 6.87273V12.0437C20 18.2267 13.913 21.1547 12.047 21.9047C10.159 20.9607 4 17.4597 4 12.0437V6.87273C3.99992 6.24217 4.19852 5.62762 4.56761 5.11636C4.93669 4.6051 5.45748 4.22314 6.056 4.02473L12 2.05473L17.944 4.02473ZM12 17.0007C11.8022 17.0007 11.6089 17.0594 11.4444 17.1693C11.28 17.2791 11.1518 17.4353 11.0761 17.618C11.0004 17.8008 10.9806 18.0018 11.0192 18.1958C11.0578 18.3898 11.153 18.568 11.2929 18.7078C11.4327 18.8477 11.6109 18.9429 11.8049 18.9815C11.9989 19.0201 12.2 19.0003 12.3827 18.9246C12.5654 18.8489 12.7216 18.7207 12.8315 18.5563C12.9414 18.3918 13 18.1985 13 18.0007C13 17.7355 12.8946 17.4812 12.7071 17.2936C12.5196 17.1061 12.2652 17.0007 12 17.0007Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_8_107218">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <h2
              style="
                color: #000;

                /* H3 */
                font-style: normal;
                font-weight: 700;
                line-height: 180%; /* 36px */
              "
              class="md:text-[20px] text-[17px]"
            >
              Compliance and Copyright
            </h2>
          </div>

          <ul class="list-disc pl-5">
            <li
              style="
                color: #000;
                font-style: normal;
                font-weight: 350;
                line-height: 180%; /* 27px */
              "
              class="lg:text-[15px] md:text-[14px] text-[13px]"
            >
              Ensure that all submitted content complies with intellectual
              property laws.
            </li>
            <li
              style="
                color: #000;
                font-style: normal;
                font-weight: 350;
                line-height: 180%; /* 27px */
              "
              class="lg:text-[15px] md:text-[14px] text-[13px]"
            >
              Avoid copyright violations by uploading only original work or
              properly licensed assets.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const dashboards = ref([
  {
    label:
      'Upload only high-quality, original content to increase sales potential.',
    bold: 'Quality First:',
  },
  {
    label:
      'Use accurate and popular keywords to improve visibility in search results.',
    bold: 'Relevant Keywords and Tags:',
  },
  {
    label:
      'Research market trends and set competitive yet fair prices for your work.',
    bold: 'Competitive Pricing:',
  },
  {
    label: 'Keep uploading fresh content to build a comprehensive portfolio.',
    bold: 'Consistent Uploads:',
  },
  {
    label:
      'Participate in community events, respond to reviews, and update your portfolio regularly.',
    bold: 'Engage with the Community:',
  },
])
</script>

<style scoped></style>
