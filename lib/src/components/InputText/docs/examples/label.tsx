import * as React from 'react'
import { InputText } from 'welcome-ui/InputText'
import { Field } from 'welcome-ui/Field'

const Example = () => {
  return (
    <Field label="Your label">
      <InputText placeholder="Welcome" />
    </Field>
  )
}

export default Example
