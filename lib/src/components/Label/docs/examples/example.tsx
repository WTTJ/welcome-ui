import * as React from 'react'

import { Checkbox } from '@/Checkbox'
import { Label } from '@/Label'
import { Link } from '@/Link'

const Example = () => {
  const [checked, setChecked] = React.useState(false)

  const handleToggle = () => setChecked(!checked)

  return (
    <Label variant="danger">
      <Checkbox checked={checked} name="labelExample" onChange={handleToggle} />
      <div>
        <span>Danger variant with </span>
        <Link href="#">a link</Link>
        <span> and all of that jazz because of the box</span>
      </div>
    </Label>
  )
}

export default Example
