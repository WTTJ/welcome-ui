import * as React from 'react'
import { Button } from '@welcome-ui/button'

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
