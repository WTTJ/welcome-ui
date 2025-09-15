import { useLottie } from 'lottie-light-react'

import type { BoxProps } from '@old/Box'
import { Box } from '@old/Box'
import { forwardRef } from '@old/System'

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
