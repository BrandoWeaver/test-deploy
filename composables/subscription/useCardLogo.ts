// composables/useCardLogo.ts
export const useCardLogo = (brand: string): string => {
  const brandMap: Record<string, string> = {
    visa: '/card/visa.svg',
    mastercard: '/card/mastercard.svg',
    amex: '/card/amex.svg',
    discover: '/card/discover.svg',
    jcb: '/card/jcb.svg',
  }

  return brandMap[brand.toLowerCase()] || '/card/default-card.svg'
}
