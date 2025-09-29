import * as React from 'react'

import { Field } from '@/components/Field'
import { Toggle } from '@/components/Toggle'

const Example = () => {
  const [toggle, setToggle] = React.useState(false)

  return (
    <div className="flex gap-xl flex-col">
      <Field error="an error" hint="a hint" inline label="Toggle">
        <Toggle checked={toggle} onClick={() => setToggle(!toggle)} />
      </Field>
      <Field hint="a hint" inline label="Toggle" success="an success">
        <Toggle checked={toggle} onClick={() => setToggle(!toggle)} />
      </Field>
      <Field hint="a hint" inline label="Toggle" warning="an warning">
        <Toggle checked={toggle} onClick={() => setToggle(!toggle)} />
      </Field>
      <Field error="an error" hint="a hint" inline label="Toggle">
        <Toggle checked={toggle} onClick={() => setToggle(!toggle)} />
      </Field>
    </div>
  )
}

export default Example
