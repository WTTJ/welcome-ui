import * as React from 'react'

import { Label } from '@/components/Label'
import { Checkbox } from '@old/Checkbox'
import { Link } from '@old/Link'

const Example = () => {
  const [checked, setChecked] = React.useState(false)

  const handleToggle = () => setChecked(!checked)

  return (
    <div className="flex gap-sm items-center">
      <Checkbox checked={checked} id="example-1" name="labelExample" onChange={handleToggle} />
      <Label htmlFor="example-1" variant="danger">
        <div>
          <span>Danger variant with </span>
          <Link href="#">a link</Link>
          <span> and all of that jazz because of the box</span>
        </div>
      </Label>
    </div>
  )
}

export default Example
