import * as React from 'react'

import { Toggle } from '@/components/Toggle'
import { Field } from '@old/Field'

const Example = () => {
  const [toggle, setToggle] = React.useState(false)

  return (
    <div className="flex gap-xl flex-col">
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
    </div>
  )
}

export default Example
