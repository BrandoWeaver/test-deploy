// Import SVG icons
import adobeLightroomIcon from '@/assets/images/collections/adobe-lightroom-icon.svg'
import adobePhotoshopIcon from '@/assets/images/collections/adobe-photoshop-icon.svg'

export const useUnderBlockData = () => {
  return {
    description:
      'With lush green leaves and a bright golden-yellow rind. The pineapple stands on a smooth white surface with a clean, neutral background, allowing its detailed texture and natural color to stand out. Ideal for showcasing tropical fruits, healthy eating, or exotic ingredients in culinary content. This vibrant photo captures the essence of freshness and is perfect for websites or blogs focused on nutrition, recipes, or tropical themes.',
    attributes: [
      { label: 'Dimensions', value: '6000 x 4000' },
      { label: 'Aspect Ratio', value: '3:2' },
      { label: 'Camera', value: 'ILCE-6000' },
      { label: 'Focal', value: '50mm' },
      { label: 'Aperture', value: 'ƒ/25' },
      { label: 'ISO', value: '100' },
      { label: 'Exposure time', value: '1/4' },
      { label: 'Color space', value: 'RGB' },
      { label: 'Color profile', value: 'sRGB IEC61966-2.1' },
      { label: 'Taken At', value: 'Nov 10, 2024' },
      { label: 'Uploaded On', value: 'Nov 12, 2024' },
      { label: 'Views', value: '2.2M' },
      { label: 'Likes', value: '220' },
      { label: 'Downloads', value: '23.7K' },
      {
        label: 'Software',
        value: [
          { name: 'Adobe Lightroom', icon: adobeLightroomIcon },
          { name: 'Adobe Photoshop', icon: adobePhotoshopIcon },
        ],
      },
    ],
    tags: [
      'Pineapple',
      'Tropical fruit',
      'Healthy food',
      'Freshness',
      'Fruit texture',
      'Green leaves',
      'Yellow rind',
      'Exotic fruit',
      'Nutrition',
      'Tropical cuisine',
      'Food photography',
      'Natural ingredient',
      'Close-up fruit',
      'Plant',
    ],
  }
}
