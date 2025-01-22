import * as React from 'react'
import { InputText } from '@welcome-ui/input-text'
import { Field } from '@welcome-ui/field'
import { Checkbox } from '@welcome-ui/checkbox'

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
