import { useState } from 'react'
import { generateModel } from '../lib/modelApi'
import { supabase } from '../lib/supabaseClient'
import Loader from './Loader'

export default function PromptForm({ onComplete }) {
  const [prompt, setPrompt] = useState('')
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const { stlUrl, previewUrl } = await generateModel(prompt)
    await supabase.from('prompt_queue').insert({
      prompt,
      category,
      stl_url: stlUrl,
      preview_url: previewUrl,
    })
    setLoading(false)
    onComplete({ stlUrl, previewUrl, prompt, category })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        className="w-full p-2 border rounded"
        rows="3"
        placeholder="Describe your object..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        required
      />
      <select className="w-full p-2 border rounded" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Uncategorized</option>
        <option value="Art">Art</option>
        <option value="Utility">Utility</option>
        <option value="Other">Other</option>
      </select>
      <button
        type="submit"
        className="px-4 py-2 bg-gray-900 text-white rounded hover:scale-105 transition-transform"
        disabled={loading}
      >
        Materialize Form
      </button>
      {loading && <Loader />}
    </form>
  )
}
