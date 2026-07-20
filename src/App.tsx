import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import Home from './pages/Home'
import DownloadPage from './pages/Download'
import Blog from './pages/Blog'
import BlogPostPage from './pages/BlogPostPage'
import Docs from './pages/Docs'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
