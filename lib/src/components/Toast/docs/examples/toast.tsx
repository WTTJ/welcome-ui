import * as React from 'react'
import type { ToastPosition } from 'react-hot-toast/headless'

import { Box } from '@/Box'
import { Button } from '@/Button'
import { toast } from '@/Toast'

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
            toast(<Element />, { duration: 6000, position: position as ToastPosition })
          }
        >
          {position}
        </Button>
      ))}
    </>
  )
}

export default Example
