import * as React from 'react'

import { Button } from '@/Button'
import { toast, Toast } from '@/Toast'

const Example = () => {
  const onClose = () => {
    alert('Toast hidden!')
  }

  return (
    <Button
      onClick={() =>
        toast(
          <Toast.Growl>
            <Toast.Title>Lorem ipsum dolor sit amet</Toast.Title>
            Class aptent taciti sociosqu ad
          </Toast.Growl>,
          { onClose }
        )
      }
    >
      Open
    </Button>
  )
}

export default Example
