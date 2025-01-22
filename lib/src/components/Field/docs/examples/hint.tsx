import * as React from 'react'
import { InputText } from 'welcome-ui/InputText'
import { Field } from 'welcome-ui/Field'
import { Checkbox } from 'welcome-ui/Checkbox'

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
