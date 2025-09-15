import * as React from 'react'

import { Field } from '@old/Field'
import { Stack } from '@old/Stack'
import { Toggle } from '@old/Toggle'

const Example = () => {
  const [toggle, setToggle] = React.useState(false)

  return (
    <Stack gap="xl">
      <Field label="Toggle">
        <Toggle checked={toggle} onClick={() => setToggle(!toggle)} />
      </Field>
      <Field disabled label="Toggle">
        <Toggle checked={toggle} onClick={() => setToggle(!toggle)} />
      </Field>
    </Stack>
  )
}

export default Example
