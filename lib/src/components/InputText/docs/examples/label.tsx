import * as React from 'react'

import { Field } from '@/Field'
import { InputText } from '@/InputText'

const Example = () => {
  return (
    <Field label="Your label">
      <InputText placeholder="Welcome" />
    </Field>
  )
}

export default Example
