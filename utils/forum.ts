import megaphone from '../public/images/forum/fi-rr-megaphone.svg'
import infoIcon from '../public/images/forum/fi-rr-info.svg'
// import homeIcon from '../public/images/forum/home-icon.svg'
import ring from '../public/images/forum/fi-rr-life-ring.svg'
import bulb from '../public/images/forum/fi-rr-bulb.svg'
import shield from '../public/images/forum/fi-rr-shield-plus.svg'
// import palette_icon from '../public/images/forum/palette.svg'
import comments from '../public/images/forum/fi-rr-comments.svg'
import comment_user from '../public/images/forum/fi-rr-comment-user.svg'
// import connected from '../public/images/forum/fi-rr-chart-connected.svg'
import dollar from '../public/images/forum/fi-rr-dollar.svg'
import book from '../public/images/forum/fi-rr-book-alt.svg'
import stethoscope from '../public/images/forum/fi-rr-stethoscope.svg'
import search from '../public/images/forum/fi-rr-search-alt.svg'
import Patrick from '/images/forum/Picture.svg'
import Matew from '/images/forum/matew.svg'
import Clada from '/images/forum/clada.svg'
// import addIcon from '../public/images/forum/add.svg'
// import pin from '../public/images/forum/pin.svg'
// import comment from '../public/images/forum/comment.svg'
import NewPostIcon from '../icons/forum_icons/NewPost.vue'
import FavIcon from '../icons/forum_icons/Fav.vue'
import MyPostIcon from '../icons/forum_icons/MyPost.vue'
import HomeIcon from '../icons/forum_icons/HomeIcon.vue'

export interface Reply {
  id: number
  author: string
  authorImage: string
  text: string
  timestamp: string
  likes: number
  user_type?: string
  create_date: string
}
export interface I_Post {
  id: number
  logo: string
  isOnline: boolean
  sub_pro: boolean
  name: string
  user_type?: string
  last_seen: string
  post_type: string
  reply_count: number
  create_date: string
  post_data: {
    title: string
    des: string
    image?: string
    list_images?: string[]
  }
  reply_data?: Reply[]
}
export const list_leaderboard = [
  { name: 'Patrick', logo: 'logo1.png', count: 100, type: 'Pro' },
  { name: 'Mathew', logo: 'logo2.png', count: 90, type: 'Free' },
  { name: 'Murat Erçelebi', logo: 'logo3.png', count: 80, type: 'Pro' },
  { name: 'Eli', logo: 'logo4.png', count: 70, type: 'Free' },
  { name: 'Petr Chlada', logo: 'logo5.png', count: 60, type: 'Pro' },
  {
    name: 'Kimberly Weidner-Kimberly Weidner',
    logo: 'logo6.png',
    count: 50,
    type: 'Free',
  },
  { name: 'Eric Dozier', logo: 'logo7.png', count: 40, type: 'Pro' },
  { name: 'Francisco Opazo', logo: 'logo8.png', count: 30, type: 'Free' },
  { name: 'Gregory', logo: 'logo9.png', count: 20, type: 'Pro' },
  { name: 'SCC', logo: 'logo10.png', count: 10, type: 'Free' },
]
export interface Subcategory {
  icon: string | typeof NewPostIcon // Or a more specific type if your icons are more complex
  title: string
  route?: string // Optional route property
}

export interface Topic {
  title?: string // Title is optional for the first item
  icon?: string
  subcategories?: Subcategory[]
}

export const list_topics: Topic[] = [
  {
    subcategories: [
      { icon: HomeIcon, title: 'Explore', route: '/announcements/explore' },
      { icon: NewPostIcon, title: 'New Post', route: '/announcements/explore' },
      { icon: MyPostIcon, title: 'My Posts', route: '/announcements/explore' },
      {
        icon: FavIcon,
        title: 'My Favorites',
      },
    ],
  },
  {
    title: 'Categories',
    icon: infoIcon,
    subcategories: [
      {
        icon: megaphone,
        title: 'Announcements',
      },
      {
        icon: ring,
        title: 'Help & Support',
      },
      {
        icon: bulb,
        title: 'Ideas & Feedback',
      },
      {
        icon: shield,
        title: 'Bug Reports',
      },
      {
        icon: ring,
        title: 'Creative Showcase',
      },
    ],
  },
  {
    title: 'Community Spaces',
    icon: infoIcon,
    subcategories: [
      {
        icon: comments,
        title: 'General Discussions',
      },
      {
        icon: megaphone,
        title: 'Collaboration Hub',
      },
      {
        icon: dollar,
        title: 'Monetization Programs',
      },
      {
        icon: comment_user,
        title: 'Creators’ Lounge',
      },
    ],
  },
  {
    title: 'Forum Rules & Support',
    icon: infoIcon,
    subcategories: [
      {
        icon: book,
        title: 'Community Guidelines',
      },
      {
        icon: stethoscope,
        title: 'Report a Problem',
      },
      {
        icon: search,
        title: 'FAQ & Tutorials',
      },
    ],
  },
]

export const post_list: I_Post[] = [
  {
    id: 1,
    logo: Patrick,
    isOnline: true,
    sub_pro: true,
    name: 'Patrick',
    user_type: 'Moderator',
    last_seen: '1 hours ago',
    post_type: 'general_discussion',
    reply_count: 0,
    post_data: {
      title: 'Search bar in space header.',
      des: 'Is there any way that this search bar can be used within the space header instead of taking the user out to a blank search page ??',
      image: '/images/forum/post_1.png',
    },
    create_date: '2023-11-15T14:30:00Z',
  },
  {
    id: 2,
    logo: Matew,
    isOnline: true,
    sub_pro: true,
    name: 'Mathew',
    last_seen: '7 hours ago',
    post_type: 'monetization_program',
    reply_count: 12,
    post_data: {
      title: 'Status field in the Discussions space',
      des: 'Hi there,I noticed tha tthe Questions space has "Resolved" and "Assigned To" fields.',
      image: '/images/forum/post_2.png',
    },
    reply_data: [
      {
        id: 1,
        author: 'Gregory',
        authorImage: '/images/forum/post_1.png',
        text: "Hi TaqTik Health, Thanks for reaching out, and I'm sorry that you're having difficulties getting this Zap to work. Although I wasn't able to test this with the \"new contact in list\" trigger due to it returning a paid plan, I was able to get the \"new contact\" trigger to work without any issues. I created a template for you here: https://zapier.com/shared/021a91dfa2852dbb07c6f01e321b593c2b1867bc Could you try this to see if it works for you? On Bettermode's side, as long as we have a name and an email address provided dynamically from the HubSpot trigger and you've chosen a role and the spaces you want the user to use, it will work.",
        timestamp: '17 hours ago',
        likes: 9,
        create_date: '2023-11-14T09:15:00Z',
      },
      {
        id: 2,
        author: 'Francisco Opazo',
        authorImage: '/images/forum/post_1.png',
        text: 'Awesome news. We are currently interested in tracking the following by collections (not just by space): membership, engagement rate, monthly return visits, contribution (just comment and post), host-to-member activity ratio, time on site, and page views. Happy to discuss further as is helpful!',
        timestamp: '17 hours ago',
        likes: 7,
        create_date: '2023-09-01T12:00:00Z',
      },
      {
        id: 3,
        author: 'Mathew',
        authorImage: '/images/forum/post_1.png',
        text: "While I agree this could be valuable down the line, it's not currently at the top of our priority list compared to some of the other areas we're focusing on to improve the product. That said, I really appreciate the feedback, and it's definitely something we'll keep in mind as we evolve the platform. Thanks for sharing your thoughts!",
        timestamp: '17 hours ago',
        likes: 1,
        create_date: '2023-09-01T13:00:00Z',
      },
      {
        id: 4,
        author: 'Patrick',
        authorImage: '/images/forum/post_1.png',
        text: "Since you interact with the product daily, your needs and experiences are incredibly valuable to us. If you have any suggestions for the new dashboard, I'd love to hear them and consider them in our design process.",
        timestamp: '17 hours ago',
        likes: 2,
        user_type: 'Moderator',
        create_date: '2023-09-01T14:00:00Z',
      },
      {
        id: 1,
        author: 'Gregory',
        authorImage: '/images/forum/post_1.png',
        text: "Hi TaqTik Health, Thanks for reaching out, and I'm sorry that you're having difficulties getting this Zap to work. Although I wasn't able to test this with the \"new contact in list\" trigger due to it returning a paid plan, I was able to get the \"new contact\" trigger to work without any issues. I created a template for you here: https://zapier.com/shared/021a91dfa2852dbb07c6f01e321b593c2b1867bc Could you try this to see if it works for you? On Bettermode's side, as long as we have a name and an email address provided dynamically from the HubSpot trigger and you've chosen a role and the spaces you want the user to use, it will work.",
        timestamp: '17 hours ago',
        likes: 9,
        create_date: '2023-09-01T11:00:00Z',
      },
      {
        id: 2,
        author: 'Francisco Opazo',
        authorImage: '/images/forum/post_1.png',
        text: 'Awesome news. We are currently interested in tracking the following by collections (not just by space): membership, engagement rate, monthly return visits, contribution (just comment and post), host-to-member activity ratio, time on site, and page views. Happy to discuss further as is helpful!',
        timestamp: '17 hours ago',
        likes: 7,
        create_date: '2023-09-01T12:00:00Z',
      },
      {
        id: 3,
        author: 'Mathew',
        authorImage: '/images/forum/post_1.png',
        text: "While I agree this could be valuable down the line, it's not currently at the top of our priority list compared to some of the other areas we're focusing on to improve the product. That said, I really appreciate the feedback, and it's definitely something we'll keep in mind as we evolve the platform. Thanks for sharing your thoughts!",
        timestamp: '17 hours ago',
        likes: 1,
        create_date: '2023-09-01T13:00:00Z',
      },
      {
        id: 4,
        author: 'Patrick',
        authorImage: '/images/forum/post_1.png',
        text: "Since you interact with the product daily, your needs and experiences are incredibly valuable to us. If you have any suggestions for the new dashboard, I'd love to hear them and consider them in our design process.",
        timestamp: '17 hours ago',
        likes: 2,
        user_type: 'Moderator',
        create_date: '2023-09-01T14:00:00Z',
      },
    ],
    create_date: '2023-09-01T09:00:00Z',
  },
  {
    id: 3,
    logo: Clada,
    isOnline: true,
    sub_pro: true,
    name: 'Petr Chlada',
    user_type: 'Moderator',
    last_seen: '2 hours ago',
    post_type: 'announcement',
    reply_count: 1,
    post_data: {
      title: 'Zapier - New Hubspot Lead - Send Bettermode - invite',
      des: 'Hi, has anyone had this issue. I have the zapier app installed on bettermode (other zaps work), but this one does not. Error issue: Name is provided as is email',
      list_images: [
        '/images/forum/image_placholder.png',
        '/images/forum/image_placholder.png',
        '/images/forum/image_placholder.png',
        '/images/forum/image_placholder.png',
      ],
    },
    reply_data: [
      {
        id: 1,
        author: 'Petr Chlada',
        authorImage: '/images/forum/post_1.png',
        text: "Hi TaqTik Health, Thanks for reaching out, and I'm sorry that you're having difficulties getting this Zap to work. Although I wasn't able to test this with the \"new contact in list\" trigger due to it returning a paid plan, I was able to get the \"new contact\" trigger to work without any issues. I created a template for you here: https://zapier.com/shared/021a91dfa2852dbb07c6f01e321b593c2b1867bc Could you try this to see if it works for you? On Bettermode's side, as long as we have a name and an email address provided dynamically from the HubSpot trigger and you've chosen a role and the spaces you want the user to use, it will work.",
        timestamp: '17 hours ago',
        likes: 5,
        user_type: 'Moderator',
        create_date: '2023-09-01T15:00:00Z',
      },
      {
        id: 2,
        author: 'Lio',
        authorImage: '/images/forum/post_1.png',
        text: "Hi TaqTik Health, Thanks for reaching out, and I'm sorry that you're having difficulties getting this Zap to work. Although I wasn't able to test this with the \"new contact in list\" trigger due to it returning a paid plan, I was able to get the \"new contact\" trigger to work without any issues. I created a template for you here: https://zapier.com/shared/021a91dfa2852dbb07c6f01e321b593c2b1867bc Could you try this to see if it works for you? On Bettermode's side, as long as we have a name and an email address provided dynamically from the HubSpot trigger and you've chosen a role and the spaces you want the user to use, it will work.",
        timestamp: '17 hours ago',
        likes: 5,
        user_type: 'Moderator',
        create_date: '2024-01-01T15:00:00Z',
      },
    ],
    create_date: '2023-09-01T08:00:00Z',
  },
]
