export interface Feature {
  icon: string; title: string; desc: string
}

export const features: Feature[] = [
  { icon: '🔐', title: 'Mã hóa AES-256-GCM', desc: 'Mọi dữ liệu được mã hóa bằng thuật toán AES-256-GCM với PBKDF2, đảm bảo an toàn tuyệt đối.' },
  { icon: '📂', title: 'Offline 100%', desc: 'Dữ liệu được lưu trữ hoàn toàn trên máy tính của bạn. Không cần Internet, không lo bị rò rỉ.' },
  { icon: '🎨', title: 'Giao diện Dark/Light', desc: 'Hỗ trợ cả hai chế độ sáng và tối với animation mượt mà, tùy chỉnh theo sở thích.' },
  { icon: '🔑', title: 'Tạo mật khẩu mạnh', desc: 'Tích hợp sẵn trình tạo mật khẩu ngẫu nhiên với tùy chỉnh độ dài, ký tự đặc biệt.' },
  { icon: '💾', title: 'Tự động Backup', desc: 'Tự động sao lưu cơ sở dữ liệu mỗi khi thay đổi, giữ 5 bản backup gần nhất.' },
  { icon: '🚀', title: 'Tìm kiếm nhanh', desc: 'Tìm kiếm tài khoản theo thời gian thực với debounce, hiển thị kết quả tức thì.' },
  { icon: '🔒', title: 'Bảo mật đa lớp', desc: 'Master Password + mã hóa AES-256-GCM + tự động khóa sau 5 phút không hoạt động.' },
  { icon: '🆓', title: 'Miễn phí mãi mãi', desc: 'Hoàn toàn miễn phí, không quảng cáo, không thu thập dữ liệu. Mã nguồn mở trên GitHub.' },
]
