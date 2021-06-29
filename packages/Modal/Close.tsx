import { ClearButton } from '@welcome-ui/clear-button'
import React from 'react'

export const Close: React.FC = props => {
  return <ClearButton position="absolute" right={10} top={10} zIndex="1" {...props} />
}
