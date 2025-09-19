import { Button } from '@/components/Button'
import { toast, Toast } from '@/components/Toast'

const Example = () => {
  const onClose = () => {
    alert('Toast hidden!')
  }

  return (
    <Button
      onClick={() =>
        toast(
          <Toast.Growl>
            <Toast.Title>Lorem ipsum dolor sit amet</Toast.Title>
            Class aptent taciti sociosqu ad
          </Toast.Growl>,
          { onClose }
        )
      }
    >
      Open
    </Button>
  )
}

export default Example
