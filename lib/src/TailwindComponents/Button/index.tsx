import { forwardRef } from 'react'

type ButtonProps = {
  children?: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children }, ref) => {
  return (
    <button className="bg-blue-500 bg-red-500" ref={ref}>
      {children || 'Test button tailwind'}
    </button>
  )
})

Button.displayName = 'TailwindButton'
