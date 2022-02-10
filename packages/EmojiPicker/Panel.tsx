import React from 'react'
import { Box } from '@welcome-ui/box'

import { HEIGHT, WIDTH } from './utils'

export const Panel: React.FC = ({ children }) => {
  return (
    <Box display="grid" minHeight={HEIGHT} minWidth={WIDTH}>
      {children}
    </Box>
  )
}
