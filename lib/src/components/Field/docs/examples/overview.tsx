import * as React from 'react'
import { InputText } from '@welcome-ui/input-text'
import { Field } from '@welcome-ui/field'

const Example = () => {
  return (
    <Field hint="A hint" label="Label">
      <InputText placeholder="Placeholder" />
    </Field>
  )
}

export default Example
