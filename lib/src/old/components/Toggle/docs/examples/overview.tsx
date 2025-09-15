import * as React from 'react'

import { Toggle } from '@old/Toggle'

const Example = () => {
  const [toggle, setToggle] = React.useState(false)
  const [toggleChecked, setToggleChecked] = React.useState(true)

  return (
    <>
      <Toggle aria-label="Toggle component" checked={toggle} onClick={() => setToggle(!toggle)} />
      <Toggle
        aria-label="Toggle checked"
        checked={toggleChecked}
        onClick={() => setToggleChecked(!toggleChecked)}
      />
      <Toggle aria-label="Toggle disabled" disabled />
      <Toggle aria-label="Toggle checked and disabled" checked disabled />
    </>
  )
}

export default Example
