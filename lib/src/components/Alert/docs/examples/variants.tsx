import { Alert } from '@/components/Alert'

const Example = () => {
  return (
    <div className="flex flex-col gap-xl">
      <Alert>
        <Alert.Title>Default variant</Alert.Title>
        Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
        ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
        ornare.
      </Alert>
      <Alert variant="danger">
        <Alert.Title>Danger variant</Alert.Title>
        Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
        ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
        ornare.
      </Alert>
      <Alert variant="warning">
        <Alert.Title>Warning variant</Alert.Title>
        Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
        ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
        ornare.
      </Alert>
      <Alert variant="success">
        <Alert.Title>Success variant</Alert.Title>
        Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
        ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
        ornare.
      </Alert>
      <Alert variant="info">
        <Alert.Title>Info variant</Alert.Title>
        Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
        ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
        ornare.
      </Alert>
      <Alert variant="ai">
        <Alert.Title>AI variant</Alert.Title>
        Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
        ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a
        ornare.
      </Alert>
    </div>
  )
}

export default Example
