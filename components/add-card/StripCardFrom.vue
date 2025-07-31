<template>
  <form @submit.prevent="handleSubmit" class="w-[500px] mx-auto px-4">
    <div ref="cardElementRef" class="border p-4 rounded-md w-full" />
    <button type="submit" class="mt-4 bg-black text-white px-4 py-2 rounded">
      Pay Now
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  loadStripe,
  type Stripe,
  type StripeCardElement,
  type StripeElements,
} from '@stripe/stripe-js'
const stripe = ref<Stripe | null>(null)
const elements = ref<StripeElements | null>(null)
const card = ref<StripeCardElement | null>(null)
const cardElementRef = ref<HTMLDivElement | null>(null)
const config = useRuntimeConfig()
const stripePromise = loadStripe(config.public.stripePublicKey || '')
onMounted(async () => {
  stripe.value = await stripePromise

  if (!stripe.value) {
    console.error('Stripe failed to load')
    return
  }

  elements.value = stripe.value.elements()
  card.value = elements.value.create('card')
  card.value.mount(cardElementRef.value!)
})
const handleSubmit = async () => {
  if (!stripe.value || !card.value) {
    console.warn('Stripe or Card element not ready')
    return
  }

  const { error, paymentMethod } = await stripe.value.createPaymentMethod({
    type: 'card',
    card: card.value,
  })

  if (error) {
    console.error('Payment method creation failed:', error)
  } else if (paymentMethod) {
    console.log('Got payment method ID:', paymentMethod)

    // Optionally send to backend
    // await $fetch('/api/payment', {
    //   method: 'POST',
    //   body: { payment_method_id: paymentMethod.id }
    // })
  }
}
</script>
