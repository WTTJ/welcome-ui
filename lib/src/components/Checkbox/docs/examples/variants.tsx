import * as React from 'react'

import { Checkbox } from '@/components/Checkbox'

const Example = () => {
  const [checkbox, setCheckbox] = React.useState(false)

  return (
    <div className="items-center flex gap-sm">
      <Checkbox
        checked={checkbox}
        name="default-variant"
        onChange={() => setCheckbox(!checkbox)}
        variant="danger"
      />
      <Checkbox
        checked={checkbox}
        name="default-variant"
        onChange={() => setCheckbox(!checkbox)}
        variant="warning"
      />
      <Checkbox
        checked={checkbox}
        name="default-variant"
        onChange={() => setCheckbox(!checkbox)}
        variant="success"
      />
    </div>
  )
}

export default Example
