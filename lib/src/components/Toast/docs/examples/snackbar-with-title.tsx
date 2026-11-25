import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { toast, Toast } from '@/components/Toast'

const Example = () => {
  return (
    <Button
      onClick={() =>
        toast(
          <Toast.Snackbar
            cta={<Toast.SnackbarAction>Action</Toast.SnackbarAction>}
            variant="success"
          >
            <Toast.Title>Lorem ipsum dolor sit amet</Toast.Title>
            <Text>Taciti sociosqu ad litora torquent</Text>
          </Toast.Snackbar>
        )
      }
    >
      Snackbar with title
    </Button>
  )
}

export default Example
