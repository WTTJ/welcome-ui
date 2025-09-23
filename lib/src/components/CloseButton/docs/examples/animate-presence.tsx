import { useState } from 'react'

import { Button } from '@/components/Button'
import { CloseButton } from '@/components/CloseButton'

const Example = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <Button onClick={() => setIsVisible(!isVisible)} variant="primary">
        Toggle
      </Button>
      {isVisible ? <CloseButton animatePresence /> : null}
    </>
  )
}

export default Example
