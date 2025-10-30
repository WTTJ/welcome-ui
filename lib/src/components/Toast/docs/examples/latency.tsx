import { Button } from '@/components/Button'
import { toast, Toast } from '@/components/Toast'

const Example = () => {
  return (
    <>
      <Button onClick={() => toast(<Toast.Snackbar>Lorem ipsum dolor sit amet</Toast.Snackbar>)}>
        Snackbar with progress bar (default)
      </Button>
      <Button
        onClick={() =>
          toast(<Toast.Snackbar hideProgressBar>Lorem ipsum dolor sit amet</Toast.Snackbar>)
        }
      >
        Snackbar without progress bar
      </Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Growl>
              <Toast.Title>Lorem ipsum dolor sit amet</Toast.Title>
              Class aptent taciti sociosqu ad
            </Toast.Growl>
          )
        }
      >
        Growl without progress bar (default)
      </Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Growl showProgressBar>
              <Toast.Title>Lorem ipsum dolor sit amet</Toast.Title>
              Class aptent taciti sociosqu ad
            </Toast.Growl>
          )
        }
      >
        Growl with progress bar
      </Button>
    </>
  )
}

export default Example
