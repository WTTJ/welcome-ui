import { Button } from '@components/Button'

const Example = () => {
  return (
    <>
      <Button variant="primary-danger">Primary</Button>
      <Button size="sm" variant="tertiary-danger">
        Tertiary
      </Button>
      <Button size="lg" variant="ghost-danger">
        Ghost
      </Button>
    </>
  )
}

export default Example
