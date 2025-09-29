import * as React from 'react'

import { Button } from '@/components/Button'
import { Field } from '@/components/Field'
import { InputText } from '@/components/InputText'

const Example = () => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleClick = () => {
    inputRef?.current?.focus()
  }

  return (
    <div className="flex flex-col gap-lg">
      <Field label="I'm a field with a ref on my child component">
        <InputText ref={inputRef} />
      </Field>
      <Button onClick={handleClick}>Focus InputText</Button>
    </div>
  )
}

export default Example
