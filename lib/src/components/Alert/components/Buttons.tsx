import { forwardRef } from 'react'

import { Button } from '@/components/Button'
import type { ButtonProps } from '@/components/Button/types'

// We need this component to check its existence in <Alert> and to allow users to add Button in <Alert> content
export const AlertButton = forwardRef<HTMLButtonElement, Omit<ButtonProps, 'size'>>(
  ({ variant = 'primary', ...props }, ref) => (
    <Button className="shrink-0 w-fit" ref={ref} variant={variant} {...props} />
  )
)

AlertButton.displayName = 'Alert.Button'

export const AlertSecondaryButton = forwardRef<HTMLButtonElement, Omit<ButtonProps, 'size'>>(
  ({ variant = 'secondary', ...props }, ref) => (
    <Button className="shrink-0 w-fit" ref={ref} variant={variant} {...props} />
  )
)

AlertSecondaryButton.displayName = 'Alert.SecondaryButton'
