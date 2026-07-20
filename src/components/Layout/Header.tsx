import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../contexts/ThemeContext'

const navLinks = [
  { label: 'Tính năng', href: '/#features' },
  { label: 'Tải xuống', href: '/download' },
  { label: 'Tài liệu', href: '/docs' },
  { label: 'Blog', href: '/blog' },
]

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const handleNav = (href: string) => {
    setMobileOpen(false)
    if (href.startsWith('/#')) {
      const id = href.slice(2)
      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.location.href = href
      }
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-background/80 backdrop-blur-xl border-b border-gray-200 dark:border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-gray-900 dark:text-white">Fortress</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              link.href.startsWith('/#') ? (
                <button key={link.label} onClick={() => handleNav(link.href)} className="text-sm text-gray-600 dark:text-text-secondary hover:text-primary dark:hover:text-primary-light transition-colors">{link.label}</button>
              ) : (
                <Link key={link.label} to={link.href} onClick={() => setMobileOpen(false)} className="text-sm text-gray-600 dark:text-text-secondary hover:text-primary dark:hover:text-primary-light transition-colors">{link.label}</Link>
              )
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className="p-2 rounded-lg text-gray-500 dark:text-text-secondary hover:bg-gray-100 dark:hover:bg-background-tertiary transition-colors">
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
            <Link to="/download" className="hidden sm:inline-flex btn-primary text-sm px-4 py-2">
              Tải xuống
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-lg text-gray-500 dark:text-text-secondary hover:bg-gray-100 dark:hover:bg-background-tertiary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="md:hidden overflow-hidden border-t border-gray-200 dark:border-border">
            <div className="px-4 py-3 space-y-2">
              {navLinks.map(link => (
                link.href.startsWith('/#') ? (
                  <button key={link.label} onClick={() => handleNav(link.href)} className="block w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 dark:text-text-secondary hover:bg-gray-100 dark:hover:bg-background-tertiary">{link.label}</button>
                ) : (
                  <Link key={link.label} to={link.href} onClick={() => setMobileOpen(false)} className="block px-3 py-2 rounded-lg text-sm text-gray-600 dark:text-text-secondary hover:bg-gray-100 dark:hover:bg-background-tertiary">{link.label}</Link>
                )
              ))}
              <Link to="/download" onClick={() => setMobileOpen(false)} className="block btn-primary text-sm text-center mt-2">Tải xuống</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
