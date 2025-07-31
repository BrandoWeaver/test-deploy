export const useBehaviorTracker = () => {
  const userAgent = process.client ? navigator.userAgent : ''
  const platform = userAgent.includes('Mobile') ? 'Mobile' : 'Desktop'

  const sendEvent = async (
    event_type: number,
    data: Partial<{
      section_id: number
      content_id?: number
      sub_section_id?: number
      category_id?: number
      collection_id?: number
      slug?: string
      duration?: number
      from?: string
      to?: string
      ref?: string
    }>
  ) => {
    try {
      const res = await $fetch(
        'https://api.thortok.com/api/web/v1/en/analyticTracking',
        {
          method: 'POST',
          body: {
            event_type,
            plateform: platform,
            ...data,
          },
        }
      )
    } catch (error) {
      console.error('Tracking failed:', error)
    }
  }

  return { sendEvent }
}
