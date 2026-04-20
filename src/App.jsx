import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import PI from './pages/PI'
import Research from './pages/Research'
import Archive from './pages/Archive'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pi" element={<PI />} />
            <Route path="/research" element={<Research />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
