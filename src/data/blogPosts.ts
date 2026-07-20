export interface BlogPost {
  id: string; title: string; excerpt: string; content: string; date: string; author: string; slug: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1', slug: 'tai-sao-can-quan-ly-mat-khau',
    title: 'Tại sao bạn cần một trình quản lý mật khẩu?',
    excerpt: 'Trung bình mỗi người có hơn 100 tài khoản trực tuyến. Làm thế nào để nhớ hết mật khẩu an toàn?',
    content: `## Tại sao bạn cần một trình quản lý mật khẩu?
Trung bình mỗi người dùng Internet có hơn 100 tài khoản trực tuyến. Việc sử dụng chung một mật khẩu cho nhiều tài khoản là cực kỳ nguy hiểm.

### Vấn đề với mật khẩu yếu
- **Dễ bị tấn công brute force**: Mật khẩu ngắn, đơn giản có thể bị bẻ khóa trong vài giây.
- **Tái sử dụng mật khẩu**: Nếu một dịch vụ bị rò rỉ, hacker có thể truy cập tất cả tài khoản khác của bạn.
- **Khó nhớ**: Mật khẩu mạnh thường dài và phức tạp, khó nhớ nếu không có công cụ hỗ trợ.

### Giải pháp: Trình quản lý mật khẩu
Fortress Vault giải quyết tất cả những vấn đề trên bằng cách:
- Tạo và lưu trữ mật khẩu mạnh cho mỗi tài khoản
- Mã hóa toàn bộ dữ liệu trên máy tính của bạn
- Chỉ cần nhớ một mật khẩu Master duy nhất`,
    date: '2025-07-15', author: 'Fortress Team',
  },
  {
    id: '2', slug: 'bao-mat-aes-256-gcm',
    title: 'AES-256-GCM là gì? Tại sao nó an toàn?',
    excerpt: 'Tìm hiểu về thuật toán mã hóa mạnh nhất đang được sử dụng bởi các tổ chức tài chính và chính phủ.',
    content: `## AES-256-GCM - Tiêu chuẩn mã hóa vàng

AES (Advanced Encryption Standard) là thuật toán mã hóa đối xứng được chính phủ Hoa Kỳ công nhận. Phiên bản 256-bit có độ an toàn cực cao.

### Tại sao AES-256-GCM?
- **Độ dài khóa 256-bit**: Cần 2^256 phép thử để bẻ khóa - nhiều hơn số nguyên tử trong vũ trụ.
- **GCM (Galois/Counter Mode)**: Cung cấp xác thực dữ liệu, phát hiện mọi thay đổi trái phép.
- **IV ngẫu nhiên**: Mỗi lần mã hóa sử dụng một vector khởi tạo (IV) khác nhau.

### Kết hợp với PBKDF2
Fortress Vault sử dụng PBKDF2 với 100.000 vòng lặp để dẫn xuất khóa từ Master Password, chống lại tấn công brute force ngay cả khi file database bị đánh cắp.`,
    date: '2025-07-20', author: 'Fortress Team',
  },
  {
    id: '3', slug: 'huong-dan-cai-dat',
    title: 'Hướng dẫn cài đặt Fortress Vault trên Windows',
    excerpt: '3 bước đơn giản để bắt đầu bảo vệ mật khẩu của bạn với Fortress Vault.',
    content: `## Hướng dẫn cài đặt Fortress Vault

### Bước 1: Tải xuống
Tải file cài đặt từ trang chủ fortressvault.tech hoặc từ GitHub Releases.

### Bước 2: Cài đặt
Chạy file PasswordVault_Setup_v1.0.0.exe và làm theo hướng dẫn. Bạn có thể chọn thư mục cài đặt tùy ý.

### Bước 3: Thiết lập Master Password
Khi mở ứng dụng lần đầu, bạn sẽ được yêu cầu tạo Master Password. Đây là mật khẩu duy nhất bạn cần nhớ.

**Lưu ý quan trọng**: 
- Master Password không thể khôi phục nếu bạn quên
- Hãy đặt gợi ý (hint) để giúp nhớ
- Sao lưu mật khẩu ở nơi an toàn`,
    date: '2025-07-25', author: 'Fortress Team',
  },
]
