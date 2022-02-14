import React, { memo } from 'react'
import { Box } from '@welcome-ui/box'

import { useThemeContext } from '../context/theme'
import { getImage } from '../utils/getImage'

const Illustration = memo(function Illustration() {
  const theme = useThemeContext()
  const imageSource = theme === 'dark' ? '/illustration-white.png' : '/illustration.png'

  return <Box as="img" maxWidth={400} src={getImage(imageSource)} w={1} />
})

export default Illustration
