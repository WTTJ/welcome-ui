import { Field, InputText } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  return (
    <>
      <Field hint="Your hint" label="Your label">
        <InputText placeholder="Welcome" />
      </Field>
      <Field hint="Your hint" label="Your label" warning="Warning">
        <InputText placeholder="Welcome" />
      </Field>
      <Field error="Error" hint="Your hint" label="Your label">
        <InputText placeholder="Welcome" />
      </Field>
      <Field hint="Your hint" label="Your label" success="Success">
        <InputText placeholder="Welcome" />
      </Field>
    </>
  )
}

export default Example
