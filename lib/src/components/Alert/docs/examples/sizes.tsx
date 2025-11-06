import { Alert } from '@/components/Alert'

const Example = () => {
  return (
    <div className="flex flex-col gap-xl">
      <Alert cta={<Alert.Button>Button</Alert.Button>}>
        <Alert.Title>Default size (md)</Alert.Title>
        Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
        ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
        ornare.
      </Alert>
      <Alert cta={<Alert.Button>Button</Alert.Button>} size="lg">
        <Alert.Title>Large size (lg)</Alert.Title>
        Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
        ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
        ornare.
      </Alert>
    </div>
  )
}

export default Example
