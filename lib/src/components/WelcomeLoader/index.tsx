import { useLottie } from 'lottie-light-react'
import React from 'react'

import type { BoxProps } from '@/Box'
import { Box } from '@/Box'
import { forwardRef } from '@/System'

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
