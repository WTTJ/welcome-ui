/* eslint-disable react/jsx-curly-newline */
import * as React from 'react'
import { toast, Toast } from '@welcome-ui/toast'
import { Button } from '@welcome-ui/button'
import { Box } from '@welcome-ui/box'

const Example = () => {
  return (
    <>
      <Button
        onClick={() =>
          toast(
            <Toast.Growl>
              <Toast.Title>Lorem ipsum dolor sit amet</Toast.Title>
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos
              <Box mt="sm">
                <Button onClick={() => alert('action')} size="sm" variant="secondary">
                  Action
                </Button>
              </Box>
            </Toast.Growl>
          )
        }
      >
        Default
      </Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Growl variant="info">
              <Toast.Title>Lorem ipsum dolor sit amet</Toast.Title>
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos
              <Box mt="sm">
                <Button onClick={() => alert('action')} size="sm" variant="secondary">
                  Action
                </Button>
              </Box>
            </Toast.Growl>
          )
        }
      >
        Info
      </Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Growl variant="danger">
              <Toast.Title>Lorem ipsum dolor sit amet</Toast.Title>
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos
            </Toast.Growl>
          )
        }
      >
        Danger
      </Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Growl variant="warning">
              <Toast.Title>Lorem ipsum dolor sit amet</Toast.Title>
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos
            </Toast.Growl>
          )
        }
      >
        Warning
      </Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Growl variant="success">
              <Toast.Title>Lorem ipsum dolor sit amet</Toast.Title>
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos
            </Toast.Growl>
          )
        }
      >
        Success
      </Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Growl icon="🎉" variant="success">
              <Toast.Title>Lorem ipsum dolor sit amet</Toast.Title>
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos
            </Toast.Growl>
          )
        }
      >
        Custom icon
      </Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Growl icon={null} variant="warning">
              <Toast.Title>Lorem ipsum dolor sit amet</Toast.Title>
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos
            </Toast.Growl>
          )
        }
      >
        No icon
      </Button>
    </>
  )
}

export default Example
