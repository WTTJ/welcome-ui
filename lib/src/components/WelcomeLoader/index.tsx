import React from 'react'
import { useLottie } from 'lottie-light-react'

import { forwardRef } from '../System'
import { Box, BoxProps } from '../Box'

import loader from './loader.json'

export const WelcomeLoader = forwardRef<'div', BoxProps>(({ w = 150, ...props }, ref) => {
  const options = {
    animationData: loader,
    loop: true,
  }

  const { View } = useLottie(options)

  return (
    <Box ref={ref} w={w} {...props}>
      {View}
    </Box>
  )
})

WelcomeLoader.displayName = 'WelcomeLoader'
