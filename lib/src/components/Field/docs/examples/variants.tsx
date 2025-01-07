import { Checkbox, Field, InputText } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  return (
    <>
      <Field error="An error" label="Label">
        <InputText placeholder="Placeholder" />
      </Field>
      <Field error="An error" label="Label for a checkbox">
        <Checkbox />
      </Field>
    </>
  )
}

export default Example
