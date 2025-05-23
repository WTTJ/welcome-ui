import { Alert } from '@/Alert'

const Example = () => {
  return (
    <Alert cta={<Alert.Button>Button</Alert.Button>} isFullWidth>
      <Alert.Title>Welcome to the jungle</Alert.Title>
      Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
      ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a ornare.
    </Alert>
  )
}

export default Example
