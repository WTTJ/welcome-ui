import * as React from 'react'

import { Checkbox } from '@/components/Checkbox'
import { Label } from '@/components/Label'
import { Link } from '@/components/Link'

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
