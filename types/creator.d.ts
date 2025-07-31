declare namespace ICreator {
  export interface IList {
    status: string
    message: string
    data: CreatorOfTheWeek[]
    page_no: number
    per_page: number
    total: number
    total_page: number
  }

  export interface CreatorOfTheWeek {
    id: number
    title: string
    slug: string
    thumbnail: string
    thumbnail_preview: string
    creator: Creator
    section: Section
    sub_section: SubSection
    categories: Category[]
    collections: Collection[]
    tags: Tag[]
  }

  export interface Creator {
    id: number
    name: string
    lname: string
    profile: string
    profile_border: string
    account_mode?: string
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

  export interface Tag {
    id: number
    name: string
  }
}
