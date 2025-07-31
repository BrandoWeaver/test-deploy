<template>
  <div
    class="2xl:px-6 w-[1440px] xl-max:w-full lg-max:w-full mx-auto px-6 md-max:px-[16px] py-[24px]"
  >
    <div class="flex flex-col gap-[24px]">
      <h2
        class="text-[#000] xl:text-[22px] xl-max:text-[22px] lg-max:text-[22px] md-max:text-[18px] sm-max:text-[17px] font-lexend font-normal"
      >
        Position Overview General Accountant
      </h2>

      <p
        style="
          color: #000;

          /* SUBTILE */
          font-style: normal;
          font-weight: 350;
          line-height: 180%; /* 27px */
        "
        class="lg:text-[15px] md:text-[14px] text-[13px]"
      >
        The Administrative and Operations Manager is responsible for overseeing
        administrative, logistical, and organizational tasks within Thortok.
        Acting as a central pillar, this role ensures smooth coordination
        between departments and guarantees that internal processes are efficient
        and compliant. This position is critical to optimizing day-to-day
        operations and supporting the COO in achieving strategic objectives.
      </p>

      <h2
        style="
          color: #000;

          /* H5 */
          font-style: normal;
          font-weight: 700;
          line-height: 180%; /* 30.6px */
        "
        class="lg:text-[17px] md:text-[15px] sm:text-[14px] text-[13px]"
      >
        Key Responsibilities
      </h2>

      <div
        v-for="(item, i) in keyRespon"
        :key="i"
        class="flex flex-col gap-[6px]"
      >
        <h1
          style="
            color: #000;

            /* H4 */
            font-style: normal;
            font-weight: 400;
            line-height: 180%; /* 32.4px */
          "
          class="lg:text-[18px] md:text-[16px] text-[15px]"
        >
          {{ item.title }}
        </h1>
        <ul class="list-disc pl-10 flex flex-col gap-[6px]">
          <li
            style="
              color: #000;

              /* BODY 1 */
              font-style: normal;
              font-weight: 350;
              line-height: 180%;
            "
            class="lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px]"
            v-for="(lists, j) in item.list"
            :key="j"
          >
            {{ lists.label }}
          </li>
        </ul>
      </div>

      <h1
        style="
          color: #000;

          /* H4 */
          font-style: normal;
          font-weight: 400;
          line-height: 180%; /* 32.4px */
        "
        class="lg:text-[18px] md:text-[16px] text-[15px]"
      >
        Skills and Qualifications Required
      </h1>

      <div v-for="(item, i) in Skills" :key="i" class="flex flex-col gap-[6px]">
        <h1
          style="
            color: #000;

            /* H5 Light */
            font-style: normal;
            font-weight: 300;
            line-height: 180%;
          "
          class="lg:text-[18px] md:text-[16px] text-[15px]"
        >
          {{ item.title }}
        </h1>
        <ul class="list-disc pl-10 flex flex-col gap-[6px]">
          <li
            v-for="(lists, j) in item.list"
            :key="j"
            class="lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px]"
            style="
              color: #000;
              font-style: normal;
              font-weight: 350;
              line-height: 180%;
            "
          >
            {{ lists.label }}

            <!-- Nested list if secondLabel exists -->
            <ul v-if="lists.secondLabel" class="list-disc pl-5">
              <li
                v-for="(Secondlists, k) in lists.secondLabel"
                :key="k"
                class="lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px]"
                style="
                  color: #000;
                  font-style: normal;
                  font-weight: 350;
                  line-height: 180%;
                "
              >
                {{ Secondlists.label }}
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <h1
        style="
          color: #000;

          /* H4 */
          font-style: normal;
          font-weight: 400;
          line-height: 180%; /* 32.4px */
        "
        class="lg:text-[18px] md:text-[16px] text-[15px]"
      >
        Application Process
      </h1>

      <div v-for="(item, i) in app" :key="i" class="flex flex-col gap-[6px]">
        <h1
          style="
            color: #000;

            /* H4 */
            font-style: normal;
            font-weight: 400;
            line-height: 180%; /* 32.4px */
          "
          class="lg:text-[18px] md:text-[16px] text-[15px]"
        >
          {{ i + 1 }}. &nbsp; {{ item.title }}
        </h1>
        <ul class="list-disc pl-14 flex flex-col gap-[6px]">
          <li
            style="
              color: #000;

              /* BODY 1 */
              font-style: normal;
              font-weight: 350;
              line-height: 180%;
            "
            class="lg:text-[14px] md:text-[13px] sm:text-[11px] text-[10px]"
            v-for="(lists, j) in item.list"
            :key="j"
          >
            {{ lists.label }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const keyRespon = ref([
  {
    title: 'I. Administrative Management',
    list: [
      {
        label:
          'Oversee daily administrative operations, including document and contract management.',
      },
      {
        label:
          'Maintain a clear and secure filing system (both physical and digital).',
      },
      {
        label:
          'Manage software subscriptions and resources used by the team (e.g., Notion, Google Drive).',
      },
      {
        label: 'Prepare administrative reports for the leadership team.',
      },
    ],
  },
  {
    title: 'II. Cross-Departmental Coordination',
    list: [
      {
        label: 'Plan and organize team and interdepartmental meetings.',
      },
      {
        label:
          'Ensure cross-departmental projects meet deadlines and priorities.',
      },
      {
        label:
          'Act as the main point of contact between departments to resolve organizational challenges.',
      },
    ],
  },
  {
    title: 'III. Process Optimization',
    list: [
      {
        label:
          'Document and update SOPs (Standard Operating Procedures) to ensure optimal workflows.',
      },
      {
        label: 'Identify inefficiencies in processes and propose improvements.',
      },
      {
        label: 'Train employees on new procedures and tools.',
      },
    ],
  },
  {
    title: 'IV. Logistical Management',
    list: [
      {
        label:
          'Ensure the availability of equipment, supplies, and resources for all departments.',
      },
      {
        label:
          'Oversee relationships with suppliers and manage logistical contracts.',
      },
      {
        label:
          'Organize internal events such as training sessions and brainstorming workshops.',
      },
    ],
  },
  {
    title: 'V. Support for the COO',
    list: [
      {
        label:
          'Prepare presentations, reports, and analyses for leadership meetings.',
      },
      {
        label:
          'Assist the COO with strategic projects requiring administrative support.',
      },
      {
        label: 'Facilitate smooth communication between the COO and teams.',
      },
    ],
  },
])

const Skills = ref([
  {
    title: 'Technical Skills',
    list: [
      {
        label:
          'Proficiency in management tools such as Notion, Google Workspace (Drive, Sheets, Docs), and project management software.',
      },
      {
        label: 'Knowledge of archiving and document management practices.',
      },
      {
        label: 'Familiarity with software licensing and subscription systems.',
      },
    ],
  },
  {
    title: 'Interpersonal Skills',
    list: [
      {
        label:
          'Strong organizational skills with the ability to handle multiple tasks simultaneously.',
      },
      {
        label: 'Excellent written and verbal communication skills.',
      },
      {
        label:
          'Ability to collaborate with different departments and resolve conflicts.',
      },
    ],
  },
  {
    title: 'Experience and Education',
    list: [
      {
        label:
          'Bachelor’s degree in Management, Administration, or a related field (minimum requirement).',
      },
      {
        label:
          '3-5 years of experience in a similar role, preferably in a startup or SME environment.',
      },
      {
        label:
          'Experience in team management or process optimization is a plus.',
      },
    ],
  },
  {
    title: 'Ideal Candidate Profile',
    list: [
      {
        label: 'Self-motivated, proactive, and solution-oriented.',
      },
      {
        label: 'Able to work under pressure while meeting deadlines.',
      },
      {
        label:
          'Detail-oriented with a strategic vision for improving internal processes.',
      },
      {
        label:
          'An interest in the digital or creative industry is an advantage.',
      },
    ],
  },
  {
    title: 'Conditions and Benefits',
    list: [
      {
        label:
          'Schedule: Full-time, with flexibility depending on the company’s needs.',
      },
      {
        label: 'Benefits:',
        secondLabel: [
          {
            label: 'Access to modern tools for management and organization.',
          },
          {
            label: 'A dynamic, collaborative, and innovative work environment.',
          },
          {
            label: 'Opportunities for training and professional growth.',
          },
        ],
      },
    ],
  },
])

const app = ref([
  {
    title: 'Required Documents:',
    list: [
      {
        label:
          'Submit your CV, cover letter, and a portfolio showcasing your relevant professional experiences to [email address].',
      },
    ],
  },
  {
    title: 'Preparation for the Interview:',
    list: [
      {
        label:
          'During the interview, prepare a short presentation about what Thortok is. It is essential for us that you understand our mission, values, and positioning before starting your career with us.',
      },
    ],
  },
  {
    title: 'Recruitment Steps:',
    list: [
      {
        label:
          'Shortlisted candidates will be invited to an online or in-person interview.',
      },
      {
        label:
          'Practical exercises or case studies may be requested to assess your administrative skills and problem-solving abilities.',
      },
    ],
  },
])
</script>

<style scoped></style>
