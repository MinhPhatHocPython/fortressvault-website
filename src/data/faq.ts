export interface FAQItem { q: string; a: string }

export const faq: FAQItem[] = [
  { q: 'Fortress Vault có miễn phí không?', a: 'Có. Fortress Vault hoàn toàn miễn phí mãi mãi. Không có quảng cáo, không có phiên bản Pro, không thu thập dữ liệu.' },
  { q: 'Dữ liệu của tôi được lưu ở đâu?', a: 'Toàn bộ dữ liệu được lưu trữ trên máy tính của bạn dưới dạng file SQLite đã được mã hóa. Chúng tôi không có máy chủ để lưu trữ dữ liệu của bạn.' },
  { q: 'Tôi có thể đồng bộ giữa các máy tính không?', a: 'Phiên bản hiện tại chưa hỗ trợ đồng bộ. Bạn có thể copy file database (.db) sang máy khác để sử dụng. Tính năng đồng bộ đang được phát triển.' },
  { q: 'Làm sao để khôi phục nếu quên mật khẩu?', a: 'Rất tiếc, không có cách nào để khôi phục mật khẩu Master. Đây là tính năng bảo mật cốt lõi. Bạn nên đặt gợi ý (hint) để nhớ và sao lưu mật khẩu ở nơi an toàn.' },
  { q: 'Fortress Vault có mã nguồn mở không?', a: 'Có. Toàn bộ mã nguồn được công khai trên GitHub. Bạn có thể kiểm tra, đóng góp hoặc tự build phiên bản riêng.' },
  { q: 'Ứng dụng hỗ trợ những nền tảng nào?', a: 'Hiện tại hỗ trợ Windows. Phiên bản macOS và Linux đang được phát triển và sẽ ra mắt trong thời gian tới.' },
  { q: 'Dữ liệu của tôi có an toàn không?', a: 'Dữ liệu được mã hóa bằng AES-256-GCM với khóa 256-bit dẫn xuất từ Master Password qua PBKDF2 với 100.000 vòng lặp. Đây là tiêu chuẩn mã hóa được sử dụng bởi các tổ chức tài chính và chính phủ.' },
]
