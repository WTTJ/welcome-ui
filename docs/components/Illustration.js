import React from 'react'
import { Box } from '@welcome-ui/box'

import { useThemeContext } from '../context/theme'

const Illustration = () => {
  const theme = useThemeContext()
  const imageSource = theme === 'dark' ? '/illustration-white.png' : '/illustration.png'

  return <Box as="img" maxWidth={400} src={imageSource} width={1} />
}

export default Illustration
