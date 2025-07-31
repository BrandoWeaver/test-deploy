declare namespace ILISTBACKUP {
  export interface LIST {
    status: string
    message: string
    data: Data
  }

  export interface Data {
    backup_codes: string[]
  }
  export interface GenerateCode {
    status: string
    message: string
    data: string[]
  }
}
