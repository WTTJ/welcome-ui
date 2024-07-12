import * as React from 'react'
import { toast } from '@welcome-ui/toast'
import { Box } from '@welcome-ui/box'
import { Button } from '@welcome-ui/button'

const Element = () => (
  <Box
    backgroundColor="light-900"
    borderColor="nude-300"
    borderRadius="sm"
    borderStyle="solid"
    borderWidth="1px"
    color="dark-900"
    padding="sm"
  >
    Lorem ipsum dolor sit amet
  </Box>
)

const Example = () => {
  return <Button onClick={() => toast(<Element />)}>Show Toast</Button>
}

export default Example
