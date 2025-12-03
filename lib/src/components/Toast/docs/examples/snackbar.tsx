import { Button } from '@/components/Button'
import { toast, Toast } from '@/components/Toast'

const Example = () => {
  return (
    <>
      <Button
        onClick={() =>
          toast(
            <Toast.Snackbar
              cta={<Toast.SnackbarAction>Action</Toast.SnackbarAction>}
              variant="info"
            >
              Lorem ipsum dolor sit amet taciti sociosqu ad
            </Toast.Snackbar>
          )
        }
      >
        Info
      </Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Snackbar
              cta={<Toast.SnackbarAction>Action</Toast.SnackbarAction>}
              variant="error"
            >
              Lorem ipsum dolor sit amet taciti sociosqu ad
            </Toast.Snackbar>
          )
        }
      >
        Danger
      </Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Snackbar
              cta={<Toast.SnackbarAction>Action</Toast.SnackbarAction>}
              variant="warning"
            >
              Lorem ipsum dolor sit amet taciti sociosqu ad
            </Toast.Snackbar>
          )
        }
      >
        Warning
      </Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Snackbar
              cta={<Toast.SnackbarAction>Action</Toast.SnackbarAction>}
              variant="success"
            >
              Lorem ipsum dolor sit amet taciti sociosqu ad
            </Toast.Snackbar>
          )
        }
      >
        Success
      </Button>
    </>
  )
}

export default Example
