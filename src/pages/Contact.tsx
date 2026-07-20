import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Button } from '../components/UI/Button'

export default function Contact() {
  return (
    <>
      <Helmet><title>Liên hệ - Fortress Vault</title></Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Liên hệ</h1>
          <p className="text-lg text-gray-600 dark:text-text-secondary mb-12">Bạn có câu hỏi hoặc góp ý? Hãy liên hệ với chúng tôi.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: '🐙', title: 'GitHub', desc: 'Báo lỗi hoặc đề xuất tính năng', link: 'https://github.com/anomalyco/fortress-vault/issues', label: 'Open Issue' },
              { icon: '💬', title: 'Discord', desc: 'Tham gia cộng đồng người dùng', link: 'https://discord.gg/fortressvault', label: 'Join Discord' },
              { icon: '📧', title: 'Email', desc: 'Gửi email trực tiếp cho chúng tôi', link: 'mailto:hello@fortressvault.tech', label: 'Gửi email' },
              { icon: '🐦', title: 'Twitter', desc: 'Theo dõi tin tức mới nhất', link: 'https://twitter.com/fortressvault', label: 'Follow' },
            ].map(item => (
              <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer" className="card p-6 flex gap-4 hover:border-primary/50 transition-colors">
                <span className="text-2xl">{item.icon}</span>
                <div><h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3><p className="text-sm text-gray-600 dark:text-text-secondary mb-2">{item.desc}</p><span className="text-sm text-primary-light">{item.label} →</span></div>
              </a>
            ))}
          </div>
          <div className="card p-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Gửi tin nhắn</h2>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Tên của bạn" className="w-full bg-gray-50 dark:bg-background-tertiary border border-gray-200 dark:border-border rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                <input type="email" placeholder="Email của bạn" className="w-full bg-gray-50 dark:bg-background-tertiary border border-gray-200 dark:border-border rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>
              <textarea rows={4} placeholder="Nội dung tin nhắn" className="w-full bg-gray-50 dark:bg-background-tertiary border border-gray-200 dark:border-border rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none" />
              <Button variant="primary" onClick={() => alert('Tính năng gửi tin nhắn đang phát triển. Vui lòng email trực tiếp!')}>Gửi tin nhắn</Button>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  )
}
