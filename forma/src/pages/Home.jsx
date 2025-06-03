import { useState } from 'react'
import PromptForm from '../components/PromptForm'
import ModelViewer from '../components/ModelViewer'

export default function Home() {
  const [model, setModel] = useState(null)

  return (
    <div className="space-y-6 py-8">
      <PromptForm onComplete={setModel} />
      {model && (
        <div className="space-y-4">
          <ModelViewer stlUrl={model.stlUrl} previewUrl={model.previewUrl} />
          {model.category && (
            <p className="text-sm text-gray-500">Category: {model.category}</p>
          )}
          <a href={model.stlUrl} download className="underline">
            Download STL
          </a>
        </div>
      )}
    </div>
  )
}
