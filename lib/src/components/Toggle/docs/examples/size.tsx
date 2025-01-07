import { Toggle } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  const [toggle, setToggle] = React.useState(false)

  return (
    <>
      <Toggle aria-label="Toggle component" checked={toggle} onClick={() => setToggle(!toggle)} />
      <Toggle
        aria-label="Toggle component"
        checked={toggle}
        onClick={() => setToggle(!toggle)}
        size="sm"
      />
      <Toggle
        aria-label="Toggle component"
        checked={toggle}
        onClick={() => setToggle(!toggle)}
        size="md"
      />
    </>
  )
}

export default Example
