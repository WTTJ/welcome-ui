import { Button } from '@components/Button'
import { ButtonGroup } from '@components/ButtonGroup'

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
