import React, { forwardRef, useState } from 'react'
import { InputText } from '@welcome-ui/input-text'
import { string } from 'prop-types'

import { ToggleButton } from './ToggleButton'

export const PasswordInput = forwardRef(({ dataTestId, title, ...rest }, ref) => {
  const [type, setType] = useState('password')
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
})

PasswordInput.displayName = 'PasswordInput'

PasswordInput.propTypes = {
  title: string,
}
