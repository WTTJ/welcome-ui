import { CloseButton, CloseButtonProps } from '@welcome-ui/close-button'
import React from 'react'

export const Close: React.FC<CloseButtonProps> = props => {
  return (
    <CloseButton
      position={{ xs: 'fixed', md: 'absolute' }}
      right={8}
      top={8}
      zIndex="1"
      {...props}
    />
  )
}
