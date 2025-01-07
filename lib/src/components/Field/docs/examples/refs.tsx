import { Button, Field, InputText } from 'welcome-ui'
import * as React from 'react'

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
