import { loadStripe } from '@stripe/stripe-js'
import { supabase } from './supabaseClient'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

export async function checkout(modelId) {
  const { data, error } = await supabase.rpc('create_checkout_session', { model_id: modelId })
  if (error) throw error
  const stripe = await stripePromise
  await stripe.redirectToCheckout({ sessionId: data.session_id })
}
