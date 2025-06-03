export default function ModelViewer({ stlUrl, previewUrl }) {
  return (
    <model-viewer
      src={stlUrl}
      alt="3D preview"
      camera-controls
      exposure="1.2"
      style={{ width: '100%', height: '400px' }}
    >
      <img src={previewUrl} alt="preview" />
    </model-viewer>
  )
}
