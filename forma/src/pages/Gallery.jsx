import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'

export default function Gallery() {
  const [models, setModels] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    supabase
      .from('prompt_queue')
      .select('*')
      .eq('is_public', true)
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        setModels(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <Loader />

  const filtered = models.filter(
    (m) =>
      m.prompt.toLowerCase().includes(query.toLowerCase()) &&
      (!category || m.category === category)
  )

  return (
    <div className="py-8 space-y-4">
      <div className="flex gap-2">
        <input
          className="flex-1 p-2 border rounded"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All</option>
          <option value="Art">Art</option>
          <option value="Utility">Utility</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((m) => (
          <Link
            to={`/model/${m.id}`}
            key={m.id}
            className="border p-2 hover:shadow"
          >
            <img src={m.preview_url} alt="preview" className="mb-2" />
            <p className="text-sm line-clamp-2">{m.prompt}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
