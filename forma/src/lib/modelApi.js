export async function generateModel(prompt) {
  const apiKey = import.meta.env.VITE_MESHY_API_KEY
  if (apiKey) {
    try {
      const res = await fetch('https://api.meshy.ai/v1/text-to-3d', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
      })
      const data = await res.json()
      return {
        stlUrl: data.output_url,
        previewUrl: data.preview_url
      }
    } catch (err) {
      console.error(err)
    }
  }
  const placeholder = `solid placeholder\n  facet normal 0 0 0\n    outer loop\n      vertex 0 0 0\n      vertex 1 0 0\n      vertex 0 1 0\n    endloop\n  endfacet\nendsolid placeholder`
  const blob = new Blob([placeholder], { type: 'model/stl' })
  const url = URL.createObjectURL(blob)
  return {
    stlUrl: url,
    previewUrl: 'https://placehold.co/400x300?text=Preview'
  }
}
