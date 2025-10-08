import { forwardRef, useState } from 'react'

import { InputText } from '@/components/InputText'

import { ToggleButton } from './ToggleButton'
import type { PasswordInputProps } from './types'

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ toggleAriaLabel, ...rest }, ref) => {
    const [type, setType] = useState<'password' | 'text'>('password')
    const isHidden = type === 'password'

    const handleToggle = () => {
      const nextType = isHidden ? 'text' : 'password'

      setType(nextType)
    }

    const dataTestId = rest['data-testid'] ? `${rest['data-testid']}-action` : undefined

    return (
      <InputText
        {...rest}
        icon={
          <ToggleButton
            aria-label={toggleAriaLabel ?? (isHidden ? 'Show password' : 'Hide password')}
            data-testid={dataTestId}
            isHidden={isHidden}
            onClick={handleToggle}
          />
        }
        iconPlacement="right"
        ref={ref}
        type={type}
      />
    )
  }
)
