import { toast, Toast } from '@/Toast'
import { Button } from '@/Button'

const Example = () => {
  return (
    <>
      <Button
        onClick={() =>
          toast(<Toast.Snackbar hasCloseButton={false}>Lorem ipsum dolor sit amet</Toast.Snackbar>)
        }
      >
        Snackbar
      </Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Growl hasCloseButton={false}>
              <Toast.Title>Lorem ipsum dolor sit amet</Toast.Title>
              Class aptent taciti sociosqu ad
            </Toast.Growl>
          )
        }
      >
        Growl
      </Button>
    </>
  )
}

export default Example
