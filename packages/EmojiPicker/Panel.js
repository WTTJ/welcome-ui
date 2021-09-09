import React from 'react'
import { node } from 'prop-types'
import { Box } from '@welcome-ui/box'

import { HEIGHT, WIDTH } from './utils'

export function Panel({ children }) {
  return (
    <Box display="grid" minHeight={HEIGHT} minWidth={WIDTH}>
      {children}
    </Box>
  )
}

Panel.propTypes = {
  children: node.isRequired,
}
