import * as React from 'react'

import { InputText } from '@/InputText'
import { Field } from '@/Field'
import { Checkbox } from '@/Checkbox'

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
