declare namespace ISEASONAL {
  export interface ILISTSEASON {
    status: string
    message: string
    data: Daum[]
    page_no: number
    per_page: number
    total: number
    total_page: number
  }

  export interface Daum {
    id: number
    name: string
    seasonal_date: string
    image: string
  }
}
