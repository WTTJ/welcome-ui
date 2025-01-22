import * as React from 'react'
import { Alert } from 'welcome-ui/Alert'

const Example = () => {
  const [hideAlert, setHideAlert] = React.useState(false)

  return hideAlert ? (
    <span>It’s hidden!</span>
  ) : (
    <Alert handleClose={() => setHideAlert(true)}>
      <Alert.Title>Welcome to the jungle</Alert.Title>
      Nunc laoreet egestas nulla, et dapibus sem malesuada in. Suspendisse eleifend accumsan
      ultrices. Phasellus iaculis nisi sed dui ornare commodo. Nullam dapibus varius nibh a ornare.
    </Alert>
  )
}

export default Example
