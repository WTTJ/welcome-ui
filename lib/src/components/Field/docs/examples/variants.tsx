import * as React from 'react'

import { Checkbox } from '@/Checkbox'
import { Field } from '@/Field'
import { InputText } from '@/InputText'

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
