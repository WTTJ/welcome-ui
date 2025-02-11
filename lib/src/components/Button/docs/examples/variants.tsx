import * as React from 'react'

import { Button } from '@/Button'

const Example = () => {
  return (
    <>
      <Button id="coucou" size={{ lg: 'lg', xl: 'xs' }}>
        Primary
      </Button>
      <Button size="xs" variant="secondary">
        Secondary
      </Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="ghost">Ghost</Button>
    </>
  )
}

export default Example
