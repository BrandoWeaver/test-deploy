// types/turnstile.d.ts
declare global {
  interface Window {
    turnstile: any
    onTurnstileSuccess: (token: string) => void
  }
}

export {}
