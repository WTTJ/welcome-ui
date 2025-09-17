import { WttjIcon } from '@/components/Icon'

import { Button } from '../../index'

const Example = () => {
  return (
    <>
      <Button>
        <WttjIcon />
        <span>Button</span>
      </Button>
      <Button variant="secondary">
        <WttjIcon />
        <span>Button</span>
      </Button>
      <Button variant="tertiary">
        <WttjIcon />
        <span>Button</span>
      </Button>
      <Button disabled>
        <WttjIcon />
        <span>Button</span>
      </Button>
    </>
  )
}

export default Example
