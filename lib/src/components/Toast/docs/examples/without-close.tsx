import { Button } from '@/components/Button'
import { toast, Toast } from '@/components/Toast'

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
              <Toast.Subtitle>Class aptent taciti sociosqu ad</Toast.Subtitle>
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
