import * as React from 'react'
import { InputText } from 'welcome-ui/InputText'
import { Field } from 'welcome-ui/Field'
import { Checkbox } from 'welcome-ui/Checkbox'

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
