import * as React from 'react'
import { InputText } from 'welcome-ui/InputText'
import { Field } from 'welcome-ui/Field'
import { Checkbox } from 'welcome-ui/Checkbox'

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
