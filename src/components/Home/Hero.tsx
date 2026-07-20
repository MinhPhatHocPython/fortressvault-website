import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../UI/Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent dark:from-primary/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent-light text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Miễn phí & Mã nguồn mở
            </div>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Bảo vệ mật khẩu của bạn.{' '}
            <span className="text-primary">Offline.</span>{' '}
            <span className="text-accent">Mã hóa mạnh.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-text-secondary max-w-2xl mx-auto">
            Trình quản lý mật khẩu cá nhân chạy trên máy tính của bạn. Mã hóa AES-256-GCM. Không cần Internet. Hoàn toàn miễn phí.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/download"><Button variant="primary" className="text-lg px-8 py-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Tải xuống miễn phí
            </Button></Link>
            <a href="/#features"><Button variant="secondary" className="text-lg px-8 py-4">Xem tính năng</Button></a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="mt-12 relative">
            <div className="card p-2 sm:p-4 shadow-2xl">
              <img src="/screenshots/dashboard-dark.png" alt="Fortress Vault Dashboard" className="rounded-xl w-full" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
              <div className="hidden dark:block">
                <div className="rounded-xl bg-background-secondary border border-border p-8 text-center text-text-secondary">
                  <svg className="w-16 h-16 mx-auto mb-4 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  <p className="text-sm">Screenshot dashboard sẽ hiển thị ở đây</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
