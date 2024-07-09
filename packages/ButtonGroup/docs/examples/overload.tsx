import { Button } from '@welcome-ui/button'
import { ButtonGroup } from '@welcome-ui/button-group'
import * as React from 'react'

const Example = () => {
  return (
    <ButtonGroup size="sm" variant="tertiary">
      <Button>First</Button>
      <Button variant="secondary">Second</Button>
      <Button variant="tertiary">Third</Button>
      <Button variant="ghost">Last</Button>
    </ButtonGroup>
  )
}

export default Example
