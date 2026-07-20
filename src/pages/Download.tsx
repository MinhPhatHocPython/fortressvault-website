import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Button } from '../components/UI/Button'

export default function DownloadPage() {
  return (
    <>
      <Helmet><title>Tải xuống - Fortress Vault</title><meta name="description" content="Tải xuống Fortress Vault cho Windows miễn phí." /></Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Tải xuống Fortress Vault</h1>
          <p className="text-lg text-gray-600 dark:text-text-secondary">Phiên bản mới nhất <strong>v1.0.0</strong> • Miễn phí • Mã nguồn mở</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="card p-8 text-center mb-8">
          <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Windows 10/11</h2>
          <p className="text-gray-600 dark:text-text-secondary mb-6">Trình cài đặt • ~77MB</p>
          <Button variant="primary" className="text-lg px-8 py-4" href="https://github.com/MinhPhatHocPython/fortress-vault/releases/download/v1.0.1/PasswordVault_Setup.exe" download>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Tải xuống v1.0.1
          </Button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Hướng dẫn cài đặt</h3>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Tải file cài đặt', desc: 'Nhấn nút tải xuống ở trên để lấy file PasswordVault_Setup_v1.0.1.exe.' },
              { step: '2', title: 'Chạy trình cài đặt', desc: 'Mở file vừa tải và làm theo hướng dẫn. Bạn có thể chọn thư mục cài đặt tùy ý.' },
              { step: '3', title: 'Tạo Master Password', desc: 'Lần đầu chạy ứng dụng, tạo Master Password để bảo vệ kho mật khẩu của bạn.' },
            ].map(item => (
              <div key={item.step} className="flex gap-4 card p-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">{item.step}</div>
                <div><h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4><p className="text-sm text-gray-600 dark:text-text-secondary mt-1">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  )
}
