import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-border bg-gray-50 dark:bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="font-bold text-gray-900 dark:text-white">Fortress Vault</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-text-secondary">Bảo vệ mật khẩu của bạn. Offline. Mã hóa mạnh. Hoàn toàn miễn phí.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Sản phẩm</h3>
            <div className="space-y-2 text-sm">
              <Link to="/download" className="block text-gray-500 dark:text-text-secondary hover:text-primary dark:hover:text-primary-light">Tải xuống</Link>
              <Link to="/docs" className="block text-gray-500 dark:text-text-secondary hover:text-primary dark:hover:text-primary-light">Tài liệu</Link>
              <Link to="/#features" className="block text-gray-500 dark:text-text-secondary hover:text-primary dark:hover:text-primary-light">Tính năng</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Công ty</h3>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block text-gray-500 dark:text-text-secondary hover:text-primary dark:hover:text-primary-light">Giới thiệu</Link>
              <Link to="/blog" className="block text-gray-500 dark:text-text-secondary hover:text-primary dark:hover:text-primary-light">Blog</Link>
              <Link to="/contact" className="block text-gray-500 dark:text-text-secondary hover:text-primary dark:hover:text-primary-light">Liên hệ</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Kết nối</h3>
            <div className="space-y-2 text-sm">
              <a href="https://github.com/anomalyco/fortress-vault" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 dark:text-text-secondary hover:text-primary dark:hover:text-primary-light">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                GitHub
              </a>
              <a href="https://discord.gg/fortressvault" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 dark:text-text-secondary hover:text-primary dark:hover:text-primary-light">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
                Discord
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-border text-center text-sm text-gray-500 dark:text-text-secondary">
          &copy; {new Date().getFullYear()} Fortress Vault Team. Mã nguồn mở.
        </div>
      </div>
    </footer>
  )
}
