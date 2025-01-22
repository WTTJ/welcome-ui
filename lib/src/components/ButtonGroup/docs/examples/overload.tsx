import { Button } from 'welcome-ui/Button'
import { ButtonGroup } from 'welcome-ui/ButtonGroup'
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
