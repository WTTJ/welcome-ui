import * as React from 'react'

import { Checkbox } from '@/Checkbox'
import { Field } from '@/Field'
import { InputText } from '@/InputText'

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
