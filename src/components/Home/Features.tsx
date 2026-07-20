import { motion } from 'framer-motion'
import { features } from '../../data/features'

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Tính năng nổi bật</h2>
          <p className="section-desc">Fortress Vault được xây dựng với những tính năng bảo mật hàng đầu, giúp bạn quản lý mật khẩu một cách an toàn và tiện lợi.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ y: -4 }} className="card p-6">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-text-secondary">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
