import { Checkbox, Field, InputText } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  return (
    <>
      <Field label="Label">
        <InputText placeholder="Placeholder" />
      </Field>
      <Field label="Label for a checkbox">
        <Checkbox />
      </Field>
    </>
  )
}

export default Example
