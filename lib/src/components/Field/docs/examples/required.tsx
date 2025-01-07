import { Checkbox, Field, InputText } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  return (
    <>
      <Field label="Label" required>
        <InputText placeholder="Placeholder" />
      </Field>
      <Field label="Label for a checkbox" required>
        <Checkbox />
      </Field>
    </>
  )
}

export default Example
