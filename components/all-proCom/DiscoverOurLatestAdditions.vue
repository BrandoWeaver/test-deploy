<template>
  <div class="text-[#1C1C1C] w-[1440px] xl-max:w-full pt-[16px] md-max:pt-[6px] mb-10 mx-auto gap-6 px-6 md-max:px-[16px] font-noto">
    <h1 class="font-[700] heading text-[22px] sm:text-[20px]">
      {{ props.titleHeader }}
    </h1>

    <!-- Tab Menu -->
    <div class="menu flex flex-wrap gap-3 my-4">
      <ul class="flex gap-3" role="tablist">
        <li
          v-for="tab in props.menuList"
          :key="tab.id"
          class="-mb-px mr-1"
        >
          <button
            class="tab inline-block py-2 text-sm"
            :class="{
              'border-[#005B52] border-b text-[#005B52]': activeTab === tab.id.toString(),
              'text-[#444444]': activeTab !== tab.id.toString()
            }"
            @click="setActiveTab(tab.id.toString())"
          >
            {{ tab.name }}
          </button>
        </li>
      </ul>
    </div>

    <!-- Tab Content -->
    <div class="mt-6">
      <div
        v-for="tab in props.menuList"
        :key="tab.id"
        v-show="activeTab === tab.id.toString()"
        class="tab-content"
      >
        <div v-if="getTabContent(tab.id).length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            v-for="item in getTabContent(tab.id)"
            :key="item.id"
            class="border rounded-md shadow-sm hover:shadow-md transition h-[224px]"
          >
            <NuxtLink :to="item.link">
                <img
                :src="item.thumbnail"
                alt="thumbnail"
                class="w-full object-cover rounded mb-2 cursor-pointer"
                />
            </NuxtLink>
            <!-- <h3 class="text-sm font-semibold text-[#1C1C1C]">{{ item.title }}</h3> -->
          </div>
        </div>
        <div v-else class="text-gray-500 text-sm py-4 text-center">
          Empty
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    titleHeader: string;
    menuList: { id: number; name: string }[];
    tabContent: { id: number; menu_id: number; title: string; thumbnail: string, link: string }[];
  }>(),
  {
    titleHeader: 'Sample Title',
  }
);

// State: active tab ID
const activeTab = ref(props.menuList.length > 0 ? props.menuList[0].id.toString() : '');

// Filter function: return only items matching the selected menu_id
const getTabContent = (menuId: number) => {
  return props.tabContent.filter(item => item.menu_id === menuId);
};

// Set active tab
const setActiveTab = (tabId: string) => {
  activeTab.value = tabId;
};
</script>

<style scoped>
.font-noto {
  font-family: 'Noto Sans', sans-serif;
}
</style>
