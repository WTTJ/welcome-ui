import React from 'react'
import { useLottie } from 'lottie-light-react'
import { useTheme } from 'styled-components'

import loader from './loader.json'
import { convertHexToVectorColor } from './utils'

import { forwardRef } from '@/System'
import { Box, BoxProps } from '@/Box'

const currentColorRegex = new RegExp('1,0.803921568627,0,1', 'g')

export const WelcomeLoader = forwardRef<'div', BoxProps>(({ color, w = 150, ...props }, ref) => {
  const theme = useTheme()
  let animationData = loader

  if (color) {
    const hex = theme.colors[color as keyof typeof theme.colors]
    const newColor = convertHexToVectorColor(hex)
    if (newColor) {
      const updated = JSON.stringify(loader, null, 0).replace(currentColorRegex, newColor)
      animationData = JSON.parse(updated)
    }
  }

  const { View } = useLottie({ animationData, loop: true })

  return (
    <Box ref={ref} w={w} {...props}>
      {View}
    </Box>
  )
})

WelcomeLoader.displayName = 'WelcomeLoader'
