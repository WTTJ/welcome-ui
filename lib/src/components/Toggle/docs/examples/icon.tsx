import { HideIcon, ShowIcon, Toggle } from 'welcome-ui'
import * as React from 'react'

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
