import React, { memo } from 'react'
import { Box } from '@welcome-ui/box'

import { useThemeContext } from '../context/theme'

const Illustration404 = memo(function Illustration() {
  const theme = useThemeContext()
  const imageSource = theme === 'dark' ? '/illustration-404-white.png' : '/illustration-404.png'

  return <Box as="img" $maxW="500px" src={imageSource} $w="100%" />
})

export default Illustration404
