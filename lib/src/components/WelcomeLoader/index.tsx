import React from 'react'
import { useLottie } from 'lottie-light-react'

import loader from './loader.json'

import { forwardRef } from '@/System'
import { Box, BoxProps } from '@/Box'

type ValidBrandColor = 'black' | 'white'
export type WelcomeLoaderProps = BoxProps & { color?: ValidBrandColor }

const currentColorRegex = new RegExp('1,0.803921568627,0,1', 'g')

export const WelcomeLoader = forwardRef<'div', WelcomeLoaderProps>(
  ({ color, w = 150, ...props }, ref) => {
    let animationData = loader

    if (color && (color === 'black' || color === 'white')) {
      const newColor = color === 'black' ? '0,0,0' : '1,1,1'
      const updated = JSON.stringify(loader, null, 0).replace(currentColorRegex, newColor)
      animationData = JSON.parse(updated)
    }

    const { View } = useLottie({ animationData, loop: true })

    return (
      <Box ref={ref} w={w} {...props}>
        {View}
      </Box>
    )
  }
)

WelcomeLoader.displayName = 'WelcomeLoader'
