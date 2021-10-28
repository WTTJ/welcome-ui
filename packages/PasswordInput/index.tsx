import React, { forwardRef, useState } from 'react'
import { InputText, InputTextOptions } from '@welcome-ui/input-text'
import { CreateWuiProps } from '@welcome-ui/system'

import { ToggleButton } from './ToggleButton'

export type PasswordInputProps = CreateWuiProps<typeof InputText, InputTextOptions>

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ dataTestId, title, ...rest }, ref) => {
    const [type, setType] = useState<'password' | 'text'>('password')
    const isHidden = type === 'password'

    const handleToggle = () => {
      const nextType = isHidden ? 'text' : 'password'

      setType(nextType)
    }

    return (
      <InputText
        {...rest}
        dataTestId={dataTestId}
        icon={
          <ToggleButton
            dataTestId={dataTestId}
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

PasswordInput.displayName = 'PasswordInput'
