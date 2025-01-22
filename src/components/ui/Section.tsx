import { ReactNode } from 'react'
import clsx from 'clsx'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section id={id} className={clsx('py-12 md:py-16 lg:py-20', className)}>
      {children}
    </section>
  )
} 