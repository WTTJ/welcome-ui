import { toast, Toast } from '@/Toast'
import { Button } from '@/Button'

const Example = () => {
  return (
    <>
      <Button
        onClick={() =>
          toast(
            <Toast.Snackbar cta={<Toast.SnackbarAction>Action</Toast.SnackbarAction>}>
              Lorem ipsum dolor sit amet taciti sociosqu ad
            </Toast.Snackbar>
          )
        }
      >
        Default
      </Button>
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
              variant="danger"
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
      <Button
        onClick={() =>
          toast(
            <Toast.Snackbar
              cta={<Toast.SnackbarAction>Action</Toast.SnackbarAction>}
              icon={null}
              variant="info"
            >
              Lorem ipsum dolor sit amet taciti sociosqu ad
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
