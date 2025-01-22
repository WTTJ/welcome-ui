import * as React from 'react'
import { InputText } from '@welcome-ui/input-text'
import { Field } from '@welcome-ui/field'
import { Checkbox } from '@welcome-ui/checkbox'

const Example = () => {
  return (
    <>
      <Field disabled label="Label">
        <InputText placeholder="Placeholder" />
      </Field>
      <Field disabled label="Label for a checkbox">
        <Checkbox />
      </Field>
    </>
  )
}

export default Example
