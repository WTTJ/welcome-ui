import * as React from 'react'

import { Field } from '@old/Field'
import { Textarea } from '@old/Textarea'

const Example = () => {
  const [value, setValue] = React.useState('')

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
  }

  return (
    <Field hint="Description must be <200 words" label="Description" required>
      <Textarea name="textarea2" onChange={handleChange} value={value} />
    </Field>
  )
}

export default Example
