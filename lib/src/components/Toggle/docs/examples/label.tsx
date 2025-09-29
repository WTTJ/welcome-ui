import * as React from 'react'

import { Field } from '@/components/Field'
import { Toggle } from '@/components/Toggle'

const Example = () => {
  const [toggle, setToggle] = React.useState(false)

  return (
    <div className="flex gap-xl flex-col">
      <Field inline label="Toggle">
        <Toggle checked={toggle} onClick={() => setToggle(!toggle)} />
      </Field>
      <Field disabled inline label="Toggle">
        <Toggle checked={toggle} onClick={() => setToggle(!toggle)} />
      </Field>
    </div>
  )
}

export default Example
