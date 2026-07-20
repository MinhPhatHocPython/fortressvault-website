import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const docSections = [
  { id: 'gioi-thieu', title: 'Giới thiệu', content: `Fortress Vault là trình quản lý mật khẩu cá nhân, chạy hoàn toàn offline trên máy tính của bạn. Ứng dụng sử dụng mã hóa AES-256-GCM để bảo vệ dữ liệu, kết hợp PBKDF2 với 100.000 vòng lặp để chống tấn công brute force.` },
  { id: 'cai-dat', title: 'Cài đặt', content: `Yêu cầu: Windows 10/11, 100MB dung lượng ổ cứng.\n\n1. Tải file cài đặt từ fortressvault.tech/download\n2. Chạy file PasswordVault_Setup_v1.0.0.exe\n3. Làm theo hướng dẫn của trình cài đặt\n4. Chạy ứng dụng từ Desktop hoặc Start Menu` },
  { id: 'tao-mat-khau', title: 'Tạo Master Password', content: `Khi chạy ứng dụng lần đầu, bạn sẽ được yêu cầu tạo Master Password. Đây là mật khẩu duy nhất bạn cần nhớ.\n\nYêu cầu:\n- Tối thiểu 8 ký tự\n- Nên bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt\n- Không thể khôi phục nếu quên\n\nBạn cũng có thể đặt gợi ý (hint) để giúp nhớ mật khẩu.` },
  { id: 'them-tai-khoan', title: 'Thêm tài khoản mới', content: `1. Click nút "Add New" trên thanh sidebar\n2. Nhập Title, Username, Password\n3. Click "Generate" để tạo mật khẩu mạnh tự động\n4. Thêm URL và Note nếu cần\n5. Click "Save" để lưu\n\nTất cả dữ liệu được mã hóa trước khi lưu vào database.` },
  { id: 'tim-kiem', title: 'Tìm kiếm tài khoản', content: `Sử dụng thanh tìm kiếm ở header để tìm kiếm tài khoản theo Title hoặc Username. Kết quả được lọc theo thời gian thực với debounce 300ms.\n\nMẹo: Tìm kiếm chỉ hoạt động trên phần trước dấu @ của email.` },
  { id: 'bao-mat', title: 'Bảo mật', content: `- Mã hóa AES-256-GCM cho tất cả dữ liệu\n- PBKDF2 với 100.000 vòng lặp\n- Master Key chỉ lưu trong RAM, không ghi xuống ổ cứng\n- Tự động khóa sau 5 phút không hoạt động\n- Clipboard tự động xóa sau 15 giây\n- Backup tự động mỗi khi có thay đổi` },
  { id: 'sao-luu', title: 'Sao lưu dữ liệu', content: `Fortress Vault tự động sao lưu database mỗi khi bạn thêm, sửa hoặc xóa tài khoản. Các bản backup được lưu trong thư mục backups/ và chỉ giữ 5 bản mới nhất.\n\nĐể sao lưu thủ công, bạn có thể copy file vault.db từ thư mục dữ liệu của ứng dụng.` },
]

export default function Docs() {
  const [activeId, setActiveId] = useState(docSections[0].id)

  return (
    <>
      <Helmet><title>Tài liệu - Fortress Vault</title><meta name="description" content="Hướng dẫn sử dụng Fortress Vault." /></Helmet>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Tài liệu hướng dẫn</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <nav className="md:w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-1">
              {docSections.map(s => (
                <button key={s.id} onClick={() => setActiveId(s.id)} className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${activeId === s.id ? 'bg-primary/10 text-primary font-medium' : 'text-gray-600 dark:text-text-secondary hover:bg-gray-100 dark:hover:bg-background-tertiary'}`}>{s.title}</button>
              ))}
            </div>
          </nav>
          <motion.div key={activeId} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="flex-1 card p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{docSections.find(s => s.id === activeId)?.title}</h2>
            {docSections.find(s => s.id === activeId)?.content.split('\n\n').map((p, i) => (
              p.startsWith('- ') ? <ul key={i} className="list-disc list-inside text-gray-600 dark:text-text-secondary space-y-1 mb-3">{p.split('\n').map((li, j) => <li key={j}>{li.replace(/^- /, '')}</li>)}</ul>
              : p.startsWith('Yêu cầu:') || p.startsWith('Mẹo:') ? <p key={i} className="text-gray-600 dark:text-text-secondary mb-3 whitespace-pre-line">{p}</p>
              : <p key={i} className="text-gray-600 dark:text-text-secondary mb-3 whitespace-pre-line">{p}</p>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}
