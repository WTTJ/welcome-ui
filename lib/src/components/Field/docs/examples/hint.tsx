import * as React from 'react'
import { InputText } from '@welcome-ui/input-text'
import { Field } from '@welcome-ui/field'
import { Checkbox } from '@welcome-ui/checkbox'

const Example = () => {
  return (
    <>
      <Field hint="A hint">
        <InputText placeholder="Placeholder" />
      </Field>
      <Field hint="A hint" label="Label for a checkbox">
        <Checkbox />
      </Field>
    </>
  )
}

export default Example
