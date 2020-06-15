import React from 'react'

import { Box } from '../packages/Box/index'
import imageBlack from '../assets/illustration.png'
import imageWhite from '../assets/illustration-white.png'

const Illustration = () => {
  const themeWUI = typeof window !== 'undefined' && localStorage.getItem('themeWUI')
  const isDarkTheme = themeWUI && themeWUI.includes('dark')
  const imageSource = isDarkTheme ? imageWhite : imageBlack

  return <Box as="img" maxWidth={1} src={imageSource} />
}

export default Illustration
