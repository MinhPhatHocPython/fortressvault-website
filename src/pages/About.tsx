import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <>
      <Helmet><title>Giới thiệu - Fortress Vault</title></Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Về Fortress Vault</h1>
          <div className="space-y-6 text-gray-600 dark:text-text-secondary leading-relaxed">
            <p>Fortress Vault được sinh ra từ một nhu cầu rất thực tế: có quá nhiều tài khoản trực tuyến và không thể nhớ hết mật khẩu. Các giải pháp hiện có hoặc quá đắt, hoặc yêu cầu kết nối Internet, hoặc không thực sự minh bạch về bảo mật.</p>
            <p>Chúng tôi tin rằng bảo mật không nên là đặc quyền. Mọi người đều xứng đáng có một công cụ quản lý mật khẩu an toàn, mạnh mẽ và hoàn toàn miễn phí.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">Cam kết của chúng tôi</h2>
            <ul className="space-y-3">
              {[
                { icon: '🔓', title: 'Mã nguồn mở', desc: 'Toàn bộ mã nguồn được công khai trên GitHub để cộng đồng kiểm tra và đóng góp.' },
                { icon: '🔒', title: 'Bảo mật là ưu tiên', desc: 'Dữ liệu của bạn được mã hóa bằng thuật toán mạnh nhất hiện nay. Chúng tôi không thể truy cập dữ liệu của bạn.' },
                { icon: '💰', title: 'Miễn phí mãi mãi', desc: 'Không quảng cáo, không phiên bản Pro, không thu thập dữ liệu. Fortress Vault sẽ luôn miễn phí.' },
                { icon: '🌍', title: 'Offline', desc: 'Dữ liệu của bạn ở trên máy tính của bạn. Không có máy chủ, không đồng bộ đám mây, không lo bị rò rỉ.' },
              ].map(item => (
                <li key={item.title} className="flex gap-3 card p-4"><span className="text-xl flex-shrink-0">{item.icon}</span><div><strong className="text-gray-900 dark:text-white">{item.title}:</strong> {item.desc}</div></li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  )
}
