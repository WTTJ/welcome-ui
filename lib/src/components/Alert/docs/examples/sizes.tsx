
import { Alert } from '@/Alert'
import { Stack } from '@/Stack'

const Example = () => {
  return (
    <Stack>
      <Alert cta={<Alert.Button>Button</Alert.Button>}>
        <Alert.Title>Default size</Alert.Title>
        Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
        ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
        ornare.
      </Alert>
      <Alert cta={<Alert.Button>Button</Alert.Button>} size="md">
        <Alert.Title>Medium size</Alert.Title>
        Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
        ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
        ornare.
      </Alert>
    </Stack>
  )
}

export default Example
