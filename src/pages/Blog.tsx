import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blogPosts } from '../data/blogPosts'

export default function Blog() {
  return (
    <>
      <Helmet><title>Blog - Fortress Vault</title><meta name="description" content="Tin tức và bài viết về bảo mật mật khẩu từ Fortress Vault." /></Helmet>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
          <p className="text-lg text-gray-600 dark:text-text-secondary">Kiến thức bảo mật, hướng dẫn và tin tức mới nhất.</p>
        </motion.div>
        <div className="space-y-6">
          {blogPosts.map((post, i) => (
            <motion.div key={post.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Link to={`/blog/${post.slug}`} className="card p-6 block hover:border-primary/50 transition-colors">
                <p className="text-xs text-primary font-medium mb-2">{post.date}</p>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h2>
                <p className="text-gray-600 dark:text-text-secondary text-sm mb-3">{post.excerpt}</p>
                <span className="text-sm text-primary-light">Đọc tiếp →</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}
