import { Box, Button, toast } from 'welcome-ui'
import * as React from 'react'

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

const Example = () => {
  return <Button onClick={() => toast(<Element />)}>Show Toast</Button>
}

export default Example
