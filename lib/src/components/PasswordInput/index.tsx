import { forwardRef, useState } from 'react'

import { InputText } from '@/components/InputText'
import type { InputTextProps } from '@/components/InputText/types'

import { ToggleButton } from './ToggleButton'

export type PasswordInputProps = InputTextProps & {
  'data-testid'?: string
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ title, ...rest }, ref) => {
    const [type, setType] = useState<'password' | 'text'>('password')
    const isHidden = type === 'password'

    const handleToggle = () => {
      const nextType = isHidden ? 'text' : 'password'

      setType(nextType)
    }

    return (
      <InputText
        {...rest}
        icon={
          <ToggleButton
            data-testid={`${rest['data-testid']}-action`}
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
