export function use1HourCache(nuxtApp: any) {
  return (key: string) => {
    const data = nuxtApp.payload.data[key] || nuxtApp.static?.data?.[key]
    if (!data) return

    const expiration = new Date(data.fetchAt)
    expiration.setTime(expiration.getTime() + 60 * 60 * 1000)
    if (Date.now() > expiration.getTime()) return

    return data
  }
}
