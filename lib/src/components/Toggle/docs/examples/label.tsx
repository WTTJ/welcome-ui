//TODO @WUI-1818 - replace old Field component when it will be updated
import * as React from 'react'

import { Toggle } from '@/components/Toggle'
import { Field } from '@old/Field'

const Example = () => {
  const [toggle, setToggle] = React.useState(false)

  return (
    <div className="flex gap-xl flex-col">
      <Field label="Toggle">
        <Toggle checked={toggle} onClick={() => setToggle(!toggle)} />
      </Field>
      <Field disabled label="Toggle">
        <Toggle checked={toggle} onClick={() => setToggle(!toggle)} />
      </Field>
    </div>
  )
}

export default Example
