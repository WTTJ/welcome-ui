import * as React from 'react'

import { InputText } from '@/InputText'
import { Field } from '@/Field'
import { Checkbox } from '@/Checkbox'

const Example = () => {
  return (
    <>
      <Field label="Label">
        <InputText placeholder="Placeholder" />
      </Field>
      <Field label="Label for a checkbox">
        <Checkbox />
      </Field>
    </>
  )
}

export default Example
