import { forwardRef } from 'react'

import { Button as BaseButton } from '@/components/Button'

import type { FloatingActionBarButtonProps } from './types'

export const Button = forwardRef<HTMLButtonElement, FloatingActionBarButtonProps>(
  ({ children, icon, size = 'md', variant = 'secondary', ...rest }, ref) => {
    return (
      <BaseButton {...rest} ref={ref} size={size} variant={variant}>
        {icon ? (
          <>
            {icon}
            <span>{children}</span>
          </>
        ) : (
          children
        )}
      </BaseButton>
    )
  }
)

Button.displayName = 'FloatingActionBar.Button'
