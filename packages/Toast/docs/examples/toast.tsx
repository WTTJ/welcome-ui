/* eslint-disable react/jsx-curly-newline */
import * as React from 'react'
import { toast } from '@welcome-ui/toast'
import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'
import { ToastPosition } from 'react-hot-toast/headless'

const Element = () => (
  <Box
    backgroundColor="neutral-10"
    borderColor="nude-300"
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
