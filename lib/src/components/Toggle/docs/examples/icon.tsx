import * as React from 'react'
import { Toggle } from 'welcome-ui/Toggle'
import { HideIcon, ShowIcon } from 'welcome-ui/Icons'

const Example = () => {
  const [toggle, setToggle] = React.useState(false)

  return (
    <Toggle
      aria-label="Toggle component"
      checked={toggle}
      checkedIcon={<HideIcon />}
      onClick={() => setToggle(!toggle)}
      size="md"
      uncheckedIcon={<ShowIcon />}
    />
  )
}

export default Example
