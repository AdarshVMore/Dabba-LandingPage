import { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'default' | 'white'
  size?: 'small' | 'medium' | 'large'
  shadow?: 'small' | 'big'
  className?: string
}

const Button = ({
  children,
  variant = 'default',
  size = 'medium',
  shadow = 'small',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        'inline-flex items-center font-anton justify-center rounded-lg border border-black uppercase transition-all duration-200 active:translate-y-1 active:shadow-none',
        {
          'bg-[#FBE043] hover:bg-white text-black': variant === 'default',
          'bg-white hover:bg-[#FBE043]': variant === 'white',
          'px-4 py-1 text-xs': size === 'small',
          'px-6 py-2 text-sm': size === 'medium',
          'px-8 py-2 text-base': size === 'large',
          'shadow-smallShadow': shadow === 'small',
          'shadow-bigShadow': shadow === 'big',
          
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button 