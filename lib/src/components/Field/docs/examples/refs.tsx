import * as React from 'react'

import { Button } from '@/Button'
import { Field } from '@/Field'
import { InputText } from '@/InputText'

const Example = () => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleClick = () => {
    inputRef?.current?.focus()
  }

  return (
    <>
      <Field label="I'm a field with a ref on my child component">
        <InputText ref={inputRef} />
      </Field>
      <Button mt="md" onClick={handleClick}>
        Focus InputText
      </Button>
    </>
  )
}

export default Example
