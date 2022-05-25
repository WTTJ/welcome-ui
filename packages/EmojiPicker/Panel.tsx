import React from 'react'
import { Box } from '@welcome-ui/box'

import { HEIGHT, WIDTH } from './utils'

type PanelProps = { children?: React.ReactNode }

export const Panel: React.FC<PanelProps> = ({ children }) => {
  return (
    <Box display="grid" minHeight={HEIGHT} minWidth={WIDTH}>
      {children}
    </Box>
  )
}
