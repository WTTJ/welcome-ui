import React from 'react'
import { Box } from '@welcome-ui/box'

import { HEIGHT, WIDTH } from './utils'

type PanelProps = { children?: React.ReactNode }

export const Panel: React.FC<PanelProps> = ({ children }) => {
  return (
    <Box $display="grid" $minH={`${HEIGHT}px`} $minW={`${WIDTH}px`}>
      {children}
    </Box>
  )
}
