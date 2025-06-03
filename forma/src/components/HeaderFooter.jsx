import logo from '../assets/forma-logo.svg'
import { Link } from 'react-router-dom'

export default function HeaderFooter({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 flex items-center gap-2">
        <img src={logo} alt="FORMA" className="h-8" />
        <h1 className="text-xl font-bold tracking-tight">FORMA</h1>
        <nav className="ml-auto space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/gallery" className="hover:underline">Gallery</Link>
          <Link to="/admin" className="hover:underline">Admin</Link>
        </nav>
      </header>
      <main className="flex-1 container mx-auto px-4">{children}</main>
      <footer className="p-4 text-center text-sm text-gray-500">
        <img src={logo} alt="FORMA" className="h-4 inline" />
        <span className="ml-2">Thought to Matter</span>
      </footer>
    </div>
  )
}
