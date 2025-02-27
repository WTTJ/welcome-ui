import * as React from 'react'

import { toast, Toast } from '@/Toast'
import { Button } from '@/Button'

const Example = () => {
  const onClose = () => {
    alert('Toast hidden!')
  }

  return (
    <Button
      onClick={
        () =>
          toast(
            <Toast.Growl>
              <Toast.Title>Lorem ipsum dolor sit amet</Toast.Title>
              Class aptent taciti sociosqu ad
            </Toast.Growl>,
            { onClose }
          )
        // eslint-disable-next-line react/jsx-curly-newline
      }
    >
      Open
    </Button>
  )
}

export default Example
