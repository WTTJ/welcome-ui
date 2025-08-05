import { forwardRef } from 'react'

type ButtonProps = {
  children?: React.ReactNode
  className?: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className }, ref) => {
  return (
    <button className={className} ref={ref}>
      {children || 'Test button tailwind'}
    </button>
  )
})

Button.displayName = 'TailwindButton'
