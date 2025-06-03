import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeaderFooter from './components/HeaderFooter'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import ModelDetail from './pages/ModelDetail'
import Admin from './pages/Admin'

export default function App() {
  return (
    <BrowserRouter>
      <HeaderFooter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/model/:id" element={<ModelDetail />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </HeaderFooter>
    </BrowserRouter>
  )
}
