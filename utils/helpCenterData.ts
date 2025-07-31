// import ask from '~/public/images/help/ask.svg'
// import document from '~/public/images/help/document.svg'
// import guid from '~/public/images/help/guid.svg'
// import play from '~/public/images/help/play.svg'
// import pulse from '~/public/images/help/pulse.svg'
// import ring from '~/public/images/help/ring.svg'
import Book from '~/icons/help/book.vue'
import Question from '~/icons/help/question.vue'
import Video from '~/icons/help/video.vue'
import Term from '~/icons/help/term.vue'
import Forum from '~/icons/help/forum.vue'
import Member from '~/icons/help/member.vue'
export interface CenterLists {
  icon: any
  title: string
  description: string
  link: string
  linkText: string
  bgColor: string
}
export const ListsCenter: CenterLists[] = [
  {
    icon: Book,
    title: 'Manuals & Guides',
    description:
      'Access our guides and manuals to learn how to use Thortok effectively.',
    link: '/manuals',
    linkText: 'Learn more',
    bgColor: '',
  },
  {
    icon: Question,
    title: 'Frequently Asked Questions (FAQ)',
    description: 'Find clear and quick answers to common questions.',
    link: '/faq',
    linkText: 'Learn more',
    bgColor: '',
  },
  {
    icon: Video,
    title: 'Tutorials & Videos',
    description:
      'Watch video tutorials to master every feature of the platform.',
    link: '/manuals',
    linkText: 'Learn more',
    bgColor: '',
  },
  {
    icon: Term,
    title: 'Glossary & Terms',
    description: 'Get familiar with essential terms used on our platform.',
    link: '/faq',
    linkText: 'Learn more',
    bgColor: '',
  },
  {
    icon: Forum,
    title: 'Forum & Community',
    description: 'Join discussions and connect with fellow creators.',
    link: '/manuals',
    linkText: 'Learn more',
    bgColor: '',
  },
  {
    icon: Member,
    title: 'Member Support',
    description:
      'Need personalized help? Submit a ticket from your account dashboard.',
    link: '/faq',
    linkText: 'Learn more',
    bgColor: '',
  },
]
