import { useLottie } from 'lottie-light-react'

import loader from './loader.json'

import { forwardRef } from '@/System'
import { Box, BoxProps } from '@/Box'

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
