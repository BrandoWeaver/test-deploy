// pfooter.js
import engsvg from '@/assets/logo/eng.svg'

export const pfooterData = {
  copyright:
    '© 2024 Thortok. Trademarks and brands are the property of their respective owners.',
  links: [
    { text: 'Privacy', url: '#' },
    { text: 'Terms of Use', url: '#' },
    { text: 'Cookie', url: '#' },
  ],
  language: {
    current: 'English',
    icon: engsvg, // Use the imported SVG here
    list: [
      {
        name: 'English',
        code: 'en',
        logo: 'https://flagcdn.com/w40/gb.png',
      },
      {
        name: 'Khmer',
        code: 'km',
        logo: 'https://flagcdn.com/w40/kh.png',
      },
      {
        name: 'Chinese',
        code: 'zh',
        logo: 'https://flagcdn.com/w40/cn.png',
      },
    ],
  },
}
