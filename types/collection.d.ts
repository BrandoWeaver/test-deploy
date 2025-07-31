declare namespace COLLECTION {
  export interface IcollectionRes {
    status: string
    message: string
    data: Data
  }

  export interface Data {
    user_id: string
    content_id: string
    qty: number
    id: number
  }
}
