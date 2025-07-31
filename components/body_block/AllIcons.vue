<template>
  <div
    class="w-[1440px] xl-max:w-full pt-[16px] md-max:pt-[6px] lg-max:w-full mx-auto gap-6 px-6 md-max:px-[16px]"
  >
    <div
      class="flex gap-3 items-center text-center text-black/50 text-[11px] font-light leading-tight"
    >
      Home <span>/</span> All Products <span>/</span> Graphics <span>/</span>
      <span class="text-black cursor-pointer"> Icons</span>
    </div>
    <h1 class="text-black text-3xl font-medium lexend leading-[54px] mt-6">
      Explore the World of Icons for Your Creative Projects
    </h1>
    <p class="text-black text-[17px] leading-[30.60px] mt-4">
      A universe of icons to bring your ideas to life, with a variety of styles
      to suit all your needs.
    </p>
    <p class="text-black text-[15px] mt-2 leading-[27px]">
      Thortok offers a versatile and stylish selection of icons to enhance your
      visual projects. Discover unique styles, crafted to fit a range of themes
      and moods—whether you’re looking for modern, classic, or creative icons.
      Dive into our collection and find the inspiration to give your designs the
      distinctive look they deserve.
    </p>
    <div class="mt-6 bg-[#eff1d9] rounded-[10px] p-6 relative">
      <div class="gap-2 flex md:hidden absolute inset-0 sm:top-[30%] top-[22%]">
        <button class="nav-button absolute z-10 left-0" @click="scrollLeft">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.69316 11.1738L6.13456 11.7324C5.88066 11.9609 5.4998 11.9609 5.27128 11.7324L0.320109 6.80664C0.0915937 6.55273 0.0915937 6.17188 0.320109 5.94336L5.27128 0.992188C5.4998 0.763672 5.88066 0.763672 6.13456 0.992188L6.69316 1.55078C6.92167 1.80469 6.92167 2.18555 6.69316 2.43945L3.62089 5.35938H10.908C11.2635 5.35938 11.5174 5.61328 11.5174 5.96875V6.78125C11.5174 7.11133 11.2635 7.39062 10.908 7.39062H3.62089L6.69316 10.2852C6.92167 10.5391 6.94706 10.9199 6.69316 11.1738Z"
              fill="black"
            />
          </svg>
        </button>
        <button class="nav-button absolute z-10 right-0" @click="scrollRight">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.30684 0.826172L5.86544 0.267578C6.11934 0.0390625 6.5002 0.0390625 6.72872 0.267578L11.6799 5.19336C11.9084 5.44727 11.9084 5.82812 11.6799 6.05664L6.72872 11.0078C6.5002 11.2363 6.11934 11.2363 5.86544 11.0078L5.30684 10.4492C5.07833 10.1953 5.07833 9.81445 5.30684 9.56055L8.37911 6.64062H1.092C0.736531 6.64062 0.482625 6.38672 0.482625 6.03125V5.21875C0.482625 4.88867 0.736531 4.60938 1.092 4.60938H8.37911L5.30684 1.71484C5.07833 1.46094 5.05294 1.08008 5.30684 0.826172Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <h3 class="text-black text-xl font-bold lexend leading-9">
        Our Icon Styles
      </h3>
      <!--  -->

      <!--  -->
      <div
        class="mt-3 md:grid lg:grid-cols-6 xl-max:grid-cols-3 md:grid-cols-3 hidden gap-3"
      >
        <div
          v-for="item in itemsStyle"
          :key="item.id"
          class="w-full bg-white rounded-[10px] border border-transparent hover:border-[#005b52] px-[14px] py-[14px] transition-all"
        >
          <h4
            class="text-black text-[17px] font-bold noto-regular leading-[30.60px]"
          >
            {{ item.name }}
          </h4>
          <img :src="item.image" :alt="item.name" class="w-full" />
        </div>
      </div>
      <!-- repnsive -->
      <div
        ref="carousel"
        class="mt-3 flex flex-row gap-3 overflow-x-auto md:hidden no-scrollbar"
      >
        <div
          v-for="item in itemsStyle"
          :key="item.id"
          class="w-[162px] flex-shrink-0 bg-white rounded-[10px] border hover:border-[#005b52] px-[14px] py-[14px]"
        >
          <h4
            class="text-black text-[17px] font-bold noto-regular leading-[30.60px]"
          >
            {{ item.name }}
          </h4>
          <img :src="item.image" :alt="item.name" class="w-full" />
        </div>
      </div>

      <div class="mt-5">
        <h4 class="text-[#005b52] text-lg font-medium leading-loose">
          Simplicity in elegance
        </h4>
        <p class="text-black text-[15px] my-3 leading-[27px]">
          Black Outline icons feature thin, clean lines, ideal for modern
          interfaces or minimalist designs. Perfect for representing elements in
          a clear, distraction-free way, these black-and-white icons are
          designed to integrate seamlessly into any project.
        </p>
        <a
          class="text-[#005b52] text-[17px] font-bold leading-[30.60px] flex gap-2 items-center"
        >
          Learn more
          <svg
            width="25"
            height="14"
            viewBox="0 0 25 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.62 4.9099L19.75 0.9999C19.657 0.906171 19.5464 0.831777 19.4246 0.781008C19.3027 0.73024 19.172 0.704102 19.04 0.704102C18.908 0.704102 18.7773 0.73024 18.6554 0.781008C18.5336 0.831777 18.423 0.906171 18.33 0.9999V0.9999C18.1437 1.18726 18.0392 1.44071 18.0392 1.7049C18.0392 1.96909 18.1437 2.22254 18.33 2.4099L21.89 5.9999H1.5C1.23478 5.9999 0.98043 6.10526 0.792893 6.29279C0.605357 6.48033 0.5 6.73468 0.5 6.9999H0.5C0.5 7.26512 0.605357 7.51947 0.792893 7.70701C0.98043 7.89454 1.23478 7.9999 1.5 7.9999H21.95L18.33 11.6099C18.2363 11.7029 18.1619 11.8135 18.1111 11.9353C18.0603 12.0572 18.0342 12.1879 18.0342 12.3199C18.0342 12.4519 18.0603 12.5826 18.1111 12.7045C18.1619 12.8263 18.2363 12.9369 18.33 13.0299C18.423 13.1236 18.5336 13.198 18.6554 13.2488C18.7773 13.2996 18.908 13.3257 19.04 13.3257C19.172 13.3257 19.3027 13.2996 19.4246 13.2488C19.5464 13.198 19.657 13.1236 19.75 13.0299L23.62 9.1499C24.1818 8.5874 24.4974 7.8249 24.4974 7.0299C24.4974 6.2349 24.1818 5.4724 23.62 4.9099V4.9099Z"
              fill="#005B52"
            />
          </svg>
        </a>
      </div>
    </div>
    <!--  -->
    <h2 class="text-black text-xl font-bold lexend leading-9 mt-16">
      Discover our latest additions
    </h2>
    <div class="flex gap-5 mt-6 pb-2 md:flex-nowrap flex-wrap">
      <button
        v-for="btn in buttons"
        :key="btn.label"
        @click="setActive(btn.label)"
        class="text-center text-[15px] leading-[27px] noto-thin transition-all hover:text-[#005b52] hover:border-b border-[#005b52]"
        :class="[
          btn.label === activeButton
            ? 'text-[#005b52] border-b border-[#005b52]'
            : 'text-[#000000]',
        ]"
      >
        {{ btn.label }}
      </button>
    </div>
    <!--  -->
    <div
      class="grid grid-cols-1 xs-max:grid-cols-1 md-611:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg-max-1:grid-cols-3 xl-max1:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3 mt-7"
    >
      <div
        v-for="item in items"
        :key="item.id"
        @click="selectItem(item.id)"
        class="w-full bg-white border border-transparent hover:border-[#005B52] cursor-pointer rounded-[10px] p-1 transition-all"
      >
        <img
          :src="item.image"
          :alt="item.name"
          class="rounded-t-[10px] w-full"
        />
        <div class="flex gap-2 items-center justify-between mt-3 px-4 pb-2">
          <p class="text-black text-[13px] font-medium noto-regular">
            {{ item.name }}
          </p>
          <p class="text-black text-[13px] font-medium noto-regular">
            {{ item.icons }} Icons
          </p>
        </div>
      </div>

      <div
        class="w-full bg-[#F2F2F2] border rounded-[10px] p-1 flex justify-center items-center md:h-full h-[200px]"
      >
        <a
          class="text-[#005b52] text-[17px] font-bold leading-[30.60px] flex gap-2 items-center noto-regular cursor-pointer"
        >
          See more
          <svg
            width="25"
            height="14"
            viewBox="0 0 25 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.62 4.9099L19.75 0.9999C19.657 0.906171 19.5464 0.831777 19.4246 0.781008C19.3027 0.73024 19.172 0.704102 19.04 0.704102C18.908 0.704102 18.7773 0.73024 18.6554 0.781008C18.5336 0.831777 18.423 0.906171 18.33 0.9999V0.9999C18.1437 1.18726 18.0392 1.44071 18.0392 1.7049C18.0392 1.96909 18.1437 2.22254 18.33 2.4099L21.89 5.9999H1.5C1.23478 5.9999 0.98043 6.10526 0.792893 6.29279C0.605357 6.48033 0.5 6.73468 0.5 6.9999H0.5C0.5 7.26512 0.605357 7.51947 0.792893 7.70701C0.98043 7.89454 1.23478 7.9999 1.5 7.9999H21.95L18.33 11.6099C18.2363 11.7029 18.1619 11.8135 18.1111 11.9353C18.0603 12.0572 18.0342 12.1879 18.0342 12.3199C18.0342 12.4519 18.0603 12.5826 18.1111 12.7045C18.1619 12.8263 18.2363 12.9369 18.33 13.0299C18.423 13.1236 18.5336 13.198 18.6554 13.2488C18.7773 13.2996 18.908 13.3257 19.04 13.3257C19.172 13.3257 19.3027 13.2996 19.4246 13.2488C19.5464 13.198 19.657 13.1236 19.75 13.0299L23.62 9.1499C24.1818 8.5874 24.4974 7.8249 24.4974 7.0299C24.4974 6.2349 24.1818 5.4724 23.62 4.9099V4.9099Z"
              fill="#005B52"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const itemsStyle = ref([
  {
    id: 1,
    name: 'Black Outline',
    image: 'https://tuk-cdn.s3.amazonaws.com/can-uploader/o__1.png',
  },
  {
    id: 2,
    name: 'Black Fill',
    image: 'https://tuk-cdn.s3.amazonaws.com/can-uploader/o__2.png',
  },
  {
    id: 3,
    name: 'Gradient',
    image: 'https://tuk-cdn.s3.amazonaws.com/can-uploader/o__3.png',
  },
  {
    id: 4,
    name: 'Hand Drawn',
    image: 'https://tuk-cdn.s3.amazonaws.com/can-uploader/o__4.png',
  },
  {
    id: 5,
    name: 'Lineal Color',
    image: 'https://tuk-cdn.s3.amazonaws.com/can-uploader/o__5.png',
  },
  {
    id: 6,
    name: 'Color Fill',
    image: 'https://tuk-cdn.s3.amazonaws.com/can-uploader/o__6.png',
  },
])

const items = ref([
  { id: 1, name: 'Name', icons: 32, image: '/img/2.png' },
  { id: 2, name: 'Name', icons: 32, image: '/img/1.png' },
  { id: 3, name: 'Name', icons: 32, image: '/img/3.png' },
  { id: 4, name: 'Name', icons: 32, image: '/img/4.png' },
  { id: 5, name: 'Name', icons: 32, image: '/img/5.png' },
  { id: 6, name: 'Name', icons: 32, image: '/img/6.png' },
  { id: 7, name: 'Name', icons: 32, image: '/img/7.png' },
  { id: 8, name: 'Name', icons: 32, image: '/img/8.png' },
  { id: 9, name: 'Name', icons: 32, image: '/img/9.png' },
  { id: 10, name: 'Name', icons: 32, image: '/img/10.png' },
  { id: 11, name: 'Name', icons: 32, image: '/img/11.png' },
])

const selectedItem = ref(null)

const selectItem = (id) => {
  selectedItem.value = id
}

const buttons = [
  { label: 'All' },
  { label: 'Black Outline' },
  { label: 'Black Fill' },
  { label: 'Gradient' },
  { label: 'Hand Drawn' },
  { label: 'Lineal Color' },
  { label: 'Color Fill' },
]

const activeButton = ref('Black Outline') // Default active button

const setActive = (label) => {
  activeButton.value = label
}
const slides = ref([
  { title: 'Black Outline', image: 'assets/imgs/o1.png' },
  { title: 'Black Fill', image: '/assets/imgs/o2.png' },
  { title: 'Gradient', image: '/assets/imgs/o3.png' },
  { title: 'Hand Drawn', image: '/assets/imgs/o4.png' },
  { title: 'Lineal Color', image: '/assets/imgs/o5.png' },
  { title: 'Color Fill', image: '/assets/imgs/o6.png' },
])
const carousel = ref(null)

function scrollLeft() {
  if (carousel.value) {
    carousel.value.scrollBy({ left: -300, behavior: 'smooth' })
  }
}

function scrollRight() {
  if (carousel.value) {
    carousel.value.scrollBy({ left: 300, behavior: 'smooth' })
  }
}

onMounted(() => {
  new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 2,
    spaceBetween: 15,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
    },
  })
})
</script>

<style scoped>
.swiper {
  width: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
}
</style>
<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.nav-button {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}
.nav-button:hover {
  transform: scale(1.05);
}
</style>
