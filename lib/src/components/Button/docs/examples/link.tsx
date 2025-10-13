import { Button } from '@/components/Button'
import { AddIcon } from '@/components/Icon'

const Example = () => {
  return (
    <Button
      as="a"
      href="https://www.welcometothejungle.com"
      rel="noopener nofollow"
      target="_blank"
    >
      <AddIcon />
      <span>Welcome</span>
    </Button>
  )
}

export default Example
