import React from 'react'
import { Box } from '@welcome-ui/box'

const Illustration = () => {
  const themeWUI = typeof window !== 'undefined' && localStorage.getItem('themeWUI')
  const isDarkTheme = themeWUI && themeWUI.includes('dark')
  const imageSource = isDarkTheme ? '/illustration-white.png' : '/illustration.png'

  return <Box as="img" maxWidth={400} src={imageSource} width={1} />
}

export default Illustration
