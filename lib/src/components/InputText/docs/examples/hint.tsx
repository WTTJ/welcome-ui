import * as React from 'react'

import { InputText } from '@/InputText'
import { Field } from '@/Field'

const Example = () => {
  return (
    <Field hint="Your hint">
      <InputText placeholder="Welcome" />
    </Field>
  )
}

export default Example
