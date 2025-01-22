import { ReactNode } from 'react'
import clsx from 'clsx'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx('container mx-auto px-4 md:px-6', className)}>
      {children}
    </div>
  )
} 