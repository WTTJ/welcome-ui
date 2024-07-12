/* eslint-disable react/jsx-curly-newline */
import * as React from 'react'
import { toast, Toast } from '@welcome-ui/toast'
import { Button } from '@welcome-ui/button'

const Example = () => {
  return (
    <>
      <Button
        onClick={() =>
          toast(
            <Toast.Snackbar>
              <span>Lorem ipsum dolor sit amet taciti sociosqu ad</span>
            </Toast.Snackbar>
          )
        }
      >
        Default
      </Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Snackbar variant="info">
              <span>Lorem ipsum dolor sit amet taciti sociosqu ad</span>
              <Button size="xs" variant="ghost">
                Action
              </Button>
            </Toast.Snackbar>
          )
        }
      >
        Info
      </Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Snackbar variant="error">
              <span>Lorem ipsum dolor sit amet taciti sociosqu ad</span>
            </Toast.Snackbar>
          )
        }
      >
        Error
      </Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Snackbar variant="warning">
              <span>Lorem ipsum dolor sit amet taciti sociosqu ad</span>
            </Toast.Snackbar>
          )
        }
      >
        Warning
      </Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Snackbar variant="success">
              <span>Lorem ipsum dolor sit amet taciti sociosqu ad</span>
            </Toast.Snackbar>
          )
        }
      >
        Success
      </Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Snackbar icon="🤯" variant="error">
              <span>Lorem ipsum dolor sit amet taciti sociosqu ad</span>
            </Toast.Snackbar>
          )
        }
      >
        Custom icon
      </Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Snackbar icon={null} variant="info">
              <span>Lorem ipsum dolor sit amet taciti sociosqu ad</span>
              <Button size="xs" variant="ghost">
                Action
              </Button>
            </Toast.Snackbar>
          )
        }
      >
        No icon
      </Button>
    </>
  )
}

export default Example
