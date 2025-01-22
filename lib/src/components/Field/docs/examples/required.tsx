import * as React from 'react'
import { InputText } from '@welcome-ui/input-text'
import { Field } from '@welcome-ui/field'
import { Checkbox } from '@welcome-ui/checkbox'

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
