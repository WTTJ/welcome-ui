import { Button } from '../../index'

const Example = () => {
  return (
    <>
      <Button data-testid="variant-primary">primary</Button>
      <Button data-testid="variant-secondary" variant="secondary">
        secondary
      </Button>
      <Button data-testid="variant-tertiary" variant="tertiary">
        tertiary
      </Button>
      <Button data-testid="variant-ghost" variant="ghost">
        ghost
      </Button>
    </>
  )
}

export default Example
