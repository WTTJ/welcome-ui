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

const Example = () => {
  return <Button onClick={() => toast(<Element />)}>Show Toast</Button>
}

export default Example
