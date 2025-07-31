declare namespace IDOWNLOAD {
  export interface DownloadRes {
    status: string
    message: string
    data: Data
  }

  export interface Data {
    id: number
    title: string
    link_download: string
  }
}
