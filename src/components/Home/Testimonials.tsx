import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Người dùng ẩn danh', role: 'Developer', text: 'Tôi đã dùng nhiều password manager nhưng Fortress Vault là cái đầu tiên tôi thực sự tin tưởng. Mã nguồn mở, offline, mã hóa mạnh - tất cả những gì tôi cần.' },
  { name: 'Người dùng ẩn danh', role: 'Freelancer', text: 'Giao diện đẹp, dễ sử dụng. Tính năng tạo mật khẩu mạnh rất tiện. Tôi đã chuyển toàn bộ tài khoản sang Fortress Vault.' },
  { name: 'Người dùng ẩn danh', role: 'IT Manager', text: 'Bảo mật là ưu tiên hàng đầu của chúng tôi. Fortress Vault với mã hóa AES-256-GCM đáp ứng được tiêu chuẩn khắt khe nhất.' },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-background-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Người dùng nói gì?</h2>
          <p className="section-desc">Hàng trăm người dùng đã tin tưởng Fortress Vault để bảo vệ mật khẩu của họ.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card p-6">
              <svg className="w-8 h-8 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" /></svg>
              <p className="text-gray-600 dark:text-text-secondary text-sm mb-4">{t.text}</p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{t.name}</p>
                <p className="text-xs text-gray-500 dark:text-text-secondary">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
