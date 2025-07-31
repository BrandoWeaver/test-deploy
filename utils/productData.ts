import { ref } from 'vue'

// Import product images and placeholders
import Picture1 from '@/assets/images/Picture1.jpg'
import Picture2 from '@/assets/images/Picture2.jpg'
import Picture3 from '@/assets/images/Picture3.jpg'
import Picture4 from '@/assets/images/Picture4.png'

// Categories list
export const categories = ref([
  'All',
  'Special offer',
  'Mockups',
  'Stationery',
  'Presets',
  'Themes',
])

// Consolidate creators for reusability
const creators = {
  ratana: { name: 'Ch. Ratana', pro: true, avatar: Picture1 },
  net: { name: 'K. Net', pro: false, avatar: Picture2 },
  rith: { name: 'Na. Rith', pro: true, avatar: Picture3 },
  sreyka: { name: 'L. Sreyka', pro: false, avatar: Picture4 },
  dara: { name: 'S. Dara', pro: true, avatar: Picture1 },
}

// Product list
export const products = ref([
  {
    title: 'Sala Blue',
    price: 25,
    originalPrice: 30,
    discount: true,
    creator: creators.ratana,
    image: '/images/CreatorImage1.png',
    active: true,
    wishlistSelected: false, // Individual product state
    cartSelected: false, // Add cart state
    category: 'Mockups',
  },
  {
    title: 'Organic Orange',
    price: 35,
    originalPrice: 40,
    discount: true,
    creator: creators.net,
    image: '/images/CreatorImage2.png',
    active: false,
    wishlistSelected: false,
    cartSelected: false,
    category: 'Stationery',
  },
  {
    title: 'Geo Art',
    price: 40,
    originalPrice: 45,
    discount: true,
    creator: creators.rith,
    image: '/images/CreatorImage3.png',
    active: true,
    wishlistSelected: false,
    cartSelected: false,
    category: 'Presets',
  },
  {
    title: 'Passion Crea',
    price: 25,
    originalPrice: 35,
    discount: true,
    creator: creators.sreyka,
    image: '/images/CreatorImage4.png',
    active: false,
    wishlistSelected: false,
    cartSelected: false,
    category: 'Themes',
  },
  {
    title: 'Skyline Dreams',
    price: 50,
    originalPrice: 60,
    discount: true,
    creator: creators.dara,
    image: '/images/CreatorImage5.png',
    active: true,
    wishlistSelected: false,
    cartSelected: false,
    category: 'Special offer',
  },
  {
    title: 'Deco Memo',
    price: 20,
    originalPrice: 25,
    discount: true,
    creator: creators.dara,
    image: '/images/CreatorImage6.png',
    active: true,
    wishlistSelected: false,
    cartSelected: false,
    category: 'Special offer',
  },
])
