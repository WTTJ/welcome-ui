import { ClearButton } from '@welcome-ui/clear-button'
import React from 'react'

export function Close(props) {
  return <ClearButton position="absolute" right={10} size="xs" top={10} zIndex="1" {...props} />
}
