import * as React from 'react'
import { useBreakpoint } from '@xstyled/styled-components'

import { Button } from '@/Button'

const Example = () => {
  const screen = useBreakpoint()
  console.debug('debbie ', { screen })
  return (
    <>
      <Button id="coucou" size={{ sm: 'lg', md: 'md', lg: 'sm' }}>
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
