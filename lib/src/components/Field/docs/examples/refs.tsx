import * as React from 'react'
import { InputText } from 'welcome-ui/InputText'
import { Field } from 'welcome-ui/Field'
import { Button } from 'welcome-ui/Button'

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
