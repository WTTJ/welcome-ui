import { CloseButton, CloseButtonProps } from '@welcome-ui/close-button'
import React from 'react'

export const Close: React.FC<CloseButtonProps> = props => {
  return (
    <CloseButton
      position={{ xs: 'fixed', md: 'absolute' }}
      right={20}
      top={20}
      zIndex="1"
      {...props}
    />
  )
}
