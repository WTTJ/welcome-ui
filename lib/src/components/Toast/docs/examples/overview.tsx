import * as React from 'react'
import { toast } from 'welcome-ui/Toast'
import { Box } from 'welcome-ui/Box'
import { Button } from 'welcome-ui/Button'

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
