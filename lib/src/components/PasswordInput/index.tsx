import { forwardRef, useState } from 'react'

import { InputText } from '@/components/InputText'

import { ToggleButton } from './ToggleButton'
import type { PasswordInputProps } from './types'

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ title, ...rest }, ref) => {
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
            data-testid={dataTestId}
            isHidden={isHidden}
            onClick={handleToggle}
            title={title}
          />
        }
        iconPlacement="right"
        ref={ref}
        type={type}
      />
    )
  }
)
