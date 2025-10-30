import { Button } from '@/components/Button'
import { toast, Toast } from '@/components/Toast'

const Example = () => {
  return (
    <>
      <Button
        onClick={() =>
          toast(
            <Toast.Growl
              cta={<Toast.GrowlAction onClick={() => alert('action')}>Action</Toast.GrowlAction>}
              variant="info"
            >
              <Toast.Title>Lorem ipsum dolor sit amet</Toast.Title>
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos
            </Toast.Growl>
          )
        }
      >
        Info
      </Button>
      <Button
        onClick={() =>
          toast(
            <Toast.Growl variant="error">
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
    </>
  )
}

export default Example
