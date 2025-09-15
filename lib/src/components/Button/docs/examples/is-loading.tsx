import { Button } from '@components/Button'
import * as React from 'react'

const Example = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  return (
    <>
      <Button isLoading>Button</Button>
      <Button isLoading={isLoading} onClick={() => setIsLoading(true)}>
        Click to loading
      </Button>
    </>
  )
}

export default Example
