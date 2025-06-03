import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import Loader from '../components/Loader'

export default function Admin() {
  const [prompts, setPrompts] = useState([])
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      supabase.from('prompt_queue').select('*').order('created_at', { ascending: false }),
      supabase.from('orders').select('*').order('created_at', { ascending: false })
    ]).then(([p, o]) => {
      setPrompts(p.data)
      setOrders(o.data)
      setLoading(false)
    })
  }, [])

  if (loading) return <Loader />

  return (
    <div className="py-8 space-y-8">
      <div>
        <h2 className="text-lg font-semibold mb-2">Prompts</h2>
        <ul className="space-y-1 text-sm">
          {prompts.map(p => (
            <li key={p.id}>{p.prompt} - {p.category}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Orders</h2>
        <ul className="space-y-1 text-sm">
          {orders.map(o => (
            <li key={o.id}>{o.email} → {o.model_id}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
