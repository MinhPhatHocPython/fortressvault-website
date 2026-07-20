import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faq } from '../../data/faq'

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Câu hỏi thường gặp</h2>
          <p className="section-desc">Giải đáp những thắc mắc phổ biến về Fortress Vault.</p>
        </div>
        <div className="space-y-3">
          {faq.map((item, i) => (
            <div key={i} className="card overflow-hidden">
              <button onClick={() => setOpenId(openId === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-medium text-gray-900 dark:text-white pr-4">{item.q}</span>
                <motion.svg animate={{ rotate: openId === i ? 180 : 0 }} className="w-5 h-5 flex-shrink-0 text-gray-500 dark:text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {openId === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-gray-600 dark:text-text-secondary leading-relaxed">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
