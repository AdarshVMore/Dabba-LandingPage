import { ReactNode, ElementType } from 'react'
import clsx from 'clsx'

interface TypographyProps {
  children: ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small'
  className?: string
  as?: ElementType
}

export const Typography = ({
  children,
  variant = 'body',
  className,
  as: Component = 'p',
}: TypographyProps) => {
  return (
    <Component
      className={clsx(
        {
          'text-5xl md:text-6xl lg:text-7xl font-heading': variant === 'h1',
          'text-4xl md:text-5xl lg:text-6xl font-heading': variant === 'h2',
          'text-3xl md:text-4xl font-heading': variant === 'h3',
          'text-2xl md:text-3xl font-heading': variant === 'h4',
          'text-base md:text-lg': variant === 'body',
          'text-sm': variant === 'small',
        },
        className
      )}
    >
      {children}
    </Component>
  )
} 