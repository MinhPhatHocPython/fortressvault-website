import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode; variant?: 'primary' | 'secondary' | 'accent'
  href?: string; onClick?: () => void; className?: string; download?: string
}

export function Button({ children, variant = 'primary', href, onClick, className = '', download }: ButtonProps) {
  const cls = `${variant === 'primary' ? 'btn-primary' : variant === 'accent' ? 'btn-accent' : 'btn-secondary'} ${className} inline-flex items-center gap-2`
  const MotionTag = href ? motion.a : motion.button
  const props = href ? { href, download } : { onClick }

  return (
    <MotionTag whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className={cls} {...props}>
      {children}
    </MotionTag>
  )
}
