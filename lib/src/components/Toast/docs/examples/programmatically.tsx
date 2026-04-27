import { useRef } from 'react'

import { Button } from '@/components/Button'
import { dismiss, remove, toast, Toast } from '@/components/Toast'

const Example = () => {
  const toastIdsRef = useRef<string[]>([])

  const handleClick = () => {
    const id = toast(
      <Toast.Snackbar cta={<Toast.SnackbarAction>Action</Toast.SnackbarAction>} variant="info">
        Lorem ipsum dolor sit amet taciti sociosqu ad
      </Toast.Snackbar>
    )
    toastIdsRef.current.push(id)
  }

  const dismissLast = () => {
    const lastId = toastIdsRef.current.pop()
    if (lastId) {
      dismiss(lastId)
    }
  }

  const removeLast = () => {
    const lastId = toastIdsRef.current.pop()
    if (lastId) {
      remove(lastId)
    }
  }

  return (
    <>
      <Button onClick={handleClick}>Open</Button>
      <Button
        onClick={() => {
          dismiss()
          toastIdsRef.current = []
        }}
      >
        Dismiss all
      </Button>
      <Button onClick={dismissLast}>Dismiss last</Button>

      <Button
        onClick={() => {
          remove()
          toastIdsRef.current = []
        }}
      >
        Remove all
      </Button>
      <Button onClick={removeLast}>Remove last</Button>
    </>
  )
}

export default Example
