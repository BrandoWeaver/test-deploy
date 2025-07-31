declare namespace IImageSeries {
  export interface ImageData {
    status: string
    message: string
    data: ImageSeries[]
    page_no: number
    per_page: number
    total: number
    total_page: number
  }

  export interface ImageSeries {
    id: number
    title: string
    slug: string
    thumbnail: string
    thumbnail_preview: string
    file_video: any
    ai_generate: boolean
    on_sale: boolean
    price: string
    dis_price: string
    creator: Creator
    section: Section
    sub_section: SubSection
    categories: Category[]
    collections: Collection[]
  }

  export interface Creator {
    id: number
    name: string
    lname: string
    profile: string
    profile_border: string
  }

  export interface Section {
    id: number
    name: string
    slug: string
  }

  export interface SubSection {
    id: number
    name: string
    slug: string
  }

  export interface Category {
    id: number
    name: string
    slug: string
  }

  export interface Collection {
    id: number
    name: string
    slug: string
  }
}
