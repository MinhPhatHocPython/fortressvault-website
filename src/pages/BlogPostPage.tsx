import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { blogPosts } from '../data/blogPosts'

function Markdown({ content }: { content: string }) {
  const lines = content.split('\n')
  const html = lines.map(line => {
    if (line.startsWith('## ')) return `<h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">${line.slice(3)}</h2>`
    if (line.startsWith('### ')) return `<h3 class="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">${line.slice(4)}</h3>`
    if (line.startsWith('- **')) {
      const m = line.match(/- \*\*(.+?)\*\*：(.+)/)
      if (m) return `<li class="ml-4 text-gray-600 dark:text-text-secondary"><strong>${m[1]}:</strong> ${m[2]}</li>`
    }
    if (line.startsWith('- ')) return `<li class="ml-4 text-gray-600 dark:text-text-secondary">${line.slice(2)}</li>`
    if (line.trim() === '') return ''
    return `<p class="text-gray-600 dark:text-text-secondary leading-relaxed mb-3">${line}</p>`
  }).join('')
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Bài viết không tìm thấy</h1>
        <Link to="/blog" className="text-primary hover:text-primary-light mt-4 inline-block">← Quay lại Blog</Link>
      </div>
    )
  }

  return (
    <>
      <Helmet><title>{post.title} - Fortress Vault</title></Helmet>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/blog" className="text-sm text-primary hover:text-primary-light mb-6 inline-block">← Quay lại Blog</Link>
          <p className="text-xs text-primary font-medium mb-2">{post.date} • {post.author}</p>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{post.title}</h1>
          <div className="prose dark:prose-invert max-w-none">
            <Markdown content={post.content} />
          </div>
        </motion.div>
      </div>
    </>
  )
}
