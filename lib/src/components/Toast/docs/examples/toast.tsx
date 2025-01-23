/* eslint-disable react/jsx-curly-newline */
import * as React from 'react'
import { ToastPosition } from 'react-hot-toast/headless'

import { toast } from '@/Toast'
import { Box } from '@/Box'
import { Button } from '@/Button'

const Element = () => (
  <Box
    backgroundColor="neutral-10"
    borderColor="beige-30"
    borderRadius="lg"
    borderStyle="solid"
    borderWidth="1px"
    color="neutral-90"
    padding="sm"
  >
    Lorem ipsum dolor sit amet
  </Box>
)

const positions = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
]

const Example = () => {
  return (
    <>
      {positions.map(position => (
        <Button
          key={position}
          onClick={() =>
            toast(<Element />, { position: position as ToastPosition, duration: 6000 })
          }
        >
          {position}
        </Button>
      ))}
    </>
  )
}

export default Example
