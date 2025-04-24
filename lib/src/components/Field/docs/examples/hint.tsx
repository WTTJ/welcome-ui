import * as React from 'react'

import { Checkbox } from '@/Checkbox'
import { Field } from '@/Field'
import { InputText } from '@/InputText'

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
