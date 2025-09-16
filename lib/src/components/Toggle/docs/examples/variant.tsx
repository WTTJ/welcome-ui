import * as React from 'react'

import { Toggle } from '@/components/Toggle'
import { Field } from '@old/Field'
import { Stack } from '@old/Stack'

const Example = () => {
  const [toggle, setToggle] = React.useState(false)

  return (
    <Stack gap="xl">
      <Field error="an error" hint="a hint" label="Toggle">
        <Toggle checked={toggle} onClick={() => setToggle(!toggle)} />
      </Field>
      <Field hint="a hint" label="Toggle" success="an success">
        <Toggle checked={toggle} onClick={() => setToggle(!toggle)} />
      </Field>
      <Field hint="a hint" label="Toggle" warning="an warning">
        <Toggle checked={toggle} onClick={() => setToggle(!toggle)} />
      </Field>
      <Field error="an error" hint="a hint" label="Toggle">
        <Toggle checked={toggle} onClick={() => setToggle(!toggle)} />
      </Field>
    </Stack>
  )
}

export default Example
