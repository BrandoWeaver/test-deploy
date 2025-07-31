declare namespace BROWSERCOLLECTION {
  export interface Root {
    status: string
    message: string
    data: Data
  }

  export interface Data {
    graphics: Graphics
    photos: Photos
    videos: Videos
    audio: Audio
    'sound-effects': SoundEffects
    '3d-elements': N3dElements
  }

  export interface Graphics {
    items: Item[]
    section: Section2
    sub_sections: SubSection2[]
  }

  export interface Item {
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
    account_mode: string
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

  export interface Section2 {
    id: number
    name: string
  }

  export interface SubSection2 {
    id: number
    name: string
  }

  export interface Photos {
    items: Item2[]
    section: Section4
    sub_sections: SubSection4[]
  }

  export interface Item2 {
    id: number
    title: string
    slug?: string
    thumbnail: string
    thumbnail_preview: string
    creator: Creator2
    section: Section3
    sub_section?: SubSection3
    categories: Category2[]
    collections: Collection2[]
    tags: Tag2[]
  }

  export interface Creator2 {
    id: number
    name: string
    lname: string
    profile: string
    profile_border: string
    account_mode?: string
  }

  export interface Section3 {
    id: number
    name: string
    slug: string
  }

  export interface SubSection3 {
    id: number
    name: string
    slug: string
  }

  export interface Category2 {
    id: number
    name: string
    slug: string
  }

  export interface Collection2 {
    id: number
    name: string
    slug: string
  }

  export interface Tag2 {
    id: number
    name: string
  }

  export interface Section4 {
    id: number
    name: string
  }

  export interface SubSection4 {
    id: number
    name: string
  }

  export interface Videos {
    items: any[]
    section: Section5
    sub_sections: any[]
  }

  export interface Section5 {
    id: number
    name: string
  }

  export interface Audio {
    items: any[]
    section: Section6
    sub_sections: any[]
  }

  export interface Section6 {
    id: number
    name: string
  }

  export interface SoundEffects {
    items: any[]
    section: Section7
    sub_sections: any[]
  }

  export interface Section7 {
    id: number
    name: string
  }

  export interface N3dElements {
    items: Item3[]
    section: Section9
    sub_sections: SubSection6[]
  }

  export interface Item3 {
    id: number
    title: string
    slug: string
    thumbnail: string
    thumbnail_preview: string
    creator: Creator3
    section: Section8
    sub_section: SubSection5
    categories: Category3[]
    collections: Collection3[]
    tags: Tag3[]
  }

  export interface Creator3 {
    id: number
    name: string
    lname: string
    profile: string
    profile_border: string
    account_mode?: string
  }

  export interface Section8 {
    id: number
    name: string
    slug: string
  }

  export interface SubSection5 {
    id: number
    name: string
    slug: string
  }

  export interface Category3 {
    id: number
    name: string
    slug: string
  }

  export interface Collection3 {
    id: number
    name: string
    slug: string
  }

  export interface Tag3 {
    id: number
    name: string
  }

  export interface Section9 {
    id: number
    name: string
  }

  export interface SubSection6 {
    id: number
    name: string
  }
}
