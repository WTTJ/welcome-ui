import { useState } from 'react'

import { Field } from '@/components/Field'
import { InputText } from '@/components/InputText'

const Example = () => {
  const [value, setValue] = useState('')

  return (
    <div className="flex flex-col gap-lg">
      <Field
        label="Label"
        maxLength={{
          count: value.length,
          max: 20,
        }}
      >
        <InputText onChange={event => setValue(event.target.value)} placeholder="Placeholder" />
      </Field>
    </div>
  )
}

export default Example
