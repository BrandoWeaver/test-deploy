// composables/sectiondata.js
export const useSectionData = () => {
    const sectionData = {
      leftColumn: [
        { label: "Dimensions", value: "6000 x 4000" },
        { label: "Aspect Ratio", value: "3:2" },
        { label: "Camera", value: "ILCE-6000" },
        { label: "Focal", value: "50mm" },
        { label: "Aperture", value: "ƒ/25" },
      ],
      middleColumn: [
        { label: "ISO", value: "100" },
        { label: "Exposure time", value: "1/4" },
        { label: "Color space", value: "RGB" },
        { label: "Color profile", value: "sRGB IEC61966-2.1" },
        { label: "Taken At", value: "Nov 10, 2024" },
      ],
      rightColumn: [
        { label: "Uploaded On", value: "Nov 12, 2024" },
        { label: "Views", value: "2.2M" },
        { label: "Likes", value: "220" },
        { label: "Downloads", value: "23.7K" },
        { label: "Software", value: "Adobe Lightroom", icon: 'lightroom-icon.svg' }, // Example software name, you can add icon details
      ],
    };
  
    return { sectionData };
  };
  