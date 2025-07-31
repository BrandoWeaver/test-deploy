declare namespace POST {
  interface POST_DETAIL {
    status: string
    message: string
    data: {
      id: number
      title: string
      description: string
      thumbnail: string
      file_download: string | null
      file_video: string | null
      dominant_color: string
      ai_generate: boolean
      icon_type: string
      orientation: string
      artistic: string
      number_of_people: number | null
      gender: string
      on_sale: boolean
      price: string
      dis_price: string
      with_people: boolean
      is_metadata: boolean
      is_angle: boolean
      uploaded_on: string
      angle_list: {
        [angle: string]: {
          id: number
          path: string
        }[]
      }
      tags: {
        id: number
        name: string
      }[]
      seasonal_lists: {
        id: number
        name: string
      }[]
      category_lists: {
        id: number
        name: string
      }[]
      collection_lists: {
        id: number
        name: string
      }[]
      ageTypes: {
        id: number
        name: string
      }[]
      regionLists: {
        id: number
        name: string
      }[]
      slug: string
      views: number
      likes: number
      downloads: number
      sections: {
        id: number
        name: string
        slug: string
      }
      sub_sections: {
        id: number
        name: string
        slug: string
      }
      creator: {
        id: number
        name: string
        lname: string
        profile: string
        profile_border: string
      }
      used_software: {
        id: number
        logo: string
      }
      metadata: {
        id: number
        graphic_id: number
        dimensions: string
        iso: string
        aspect_ratio: string
        exposure_time: string
        camera: string
        color_space: string
        focal: string
        color_profile: string
        aperture: string
        taken_at: string
      }
    }
  }
}
