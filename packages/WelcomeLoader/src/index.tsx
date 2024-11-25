import React from 'react'
import { forwardRef } from '@welcome-ui/system'
import { Box, BoxProps } from '@welcome-ui/box'
import { useLottie } from 'lottie-light-react'

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
