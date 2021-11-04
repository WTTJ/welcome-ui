import { CloseButton } from '@welcome-ui/close-button'
import React from 'react'

export function Close(props) {
  return <CloseButton position="absolute" right={20} top={20} zIndex="1" {...props} />
}
