import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import ModelViewer from '../components/ModelViewer'
import Loader from '../components/Loader'
import { checkout } from '../lib/stripeClient'

export default function ModelDetail() {
  const { id } = useParams()
  const [model, setModel] = useState(null)

  useEffect(() => {
    supabase
      .from('prompt_queue')
      .select('*')
      .eq('id', id)
      .single()
      .then(({ data }) => setModel(data))
  }, [id])

  if (!model) return <Loader />

  return (
    <div className="space-y-4 py-8">
      <ModelViewer stlUrl={model.stl_url} previewUrl={model.preview_url} />
      <p className="font-medium">{model.prompt}</p>
      {model.category && (
        <p className="text-sm text-gray-500">Category: {model.category}</p>
      )}
      <a href={model.stl_url} download className="underline">Download STL</a>
      <button
        onClick={() => checkout(model.id)}
        className="px-4 py-2 bg-gray-900 text-white rounded hover:scale-105 transition-transform"
      >
        Order Print
      </button>
    </div>
  )
}
