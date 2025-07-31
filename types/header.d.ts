declare namespace HEADER {
  export interface ListHeader {
    status: string
    message: string
    data: HeaderData[]
  }

  export interface HeaderData {
    id: number
    name: string
    link: string
  }
}
