import * as React from 'react'

import { Checkbox } from '@/components/Checkbox'

const Example = () => {
  const [checkbox, setCheckbox] = React.useState(false)

  return (
    <ul className="flex flex-col gap-md mx-auto">
      <li className="flex gap-sm items-center">
        <Checkbox
          checked={checkbox}
          name="danger-variant"
          onChange={() => setCheckbox(!checkbox)}
          variant="danger"
        />
        <span>Checkbox: danger variant</span>
      </li>

      <li className="flex gap-sm items-center">
        <Checkbox
          checked={checkbox}
          name="warning-variant"
          onChange={() => setCheckbox(!checkbox)}
          variant="warning"
        />
        <span>Checkbox: warning variant</span>
      </li>

      <li className="flex gap-sm items-center">
        <Checkbox
          checked={checkbox}
          name="success-variant"
          onChange={() => setCheckbox(!checkbox)}
          variant="success"
        />
        <span>Checkbox: success variant</span>
      </li>
    </ul>
  )
}

export default Example
