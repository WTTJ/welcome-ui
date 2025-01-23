import * as React from 'react'

import { Toggle } from '@/Toggle'
import { Field } from '@/Field'
import { Stack } from '@/Stack'

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
