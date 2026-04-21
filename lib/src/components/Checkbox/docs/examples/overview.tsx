import { useState } from 'react'

import { Checkbox } from '@/components/Checkbox'

const Example = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = (value: boolean) => {
    setChecked(value)
    alert(`Checkbox is now ${value ? 'checked' : 'unchecked'}`)
  }

  return (
    <ul className="flex flex-col gap-md mx-auto">
      <li className="flex gap-sm items-center">
        <Checkbox checked={checked} name="default" onChange={handleChange} />
        <span>Checkbox: controlled state</span>
      </li>
      <li className="flex gap-sm items-center">
        <Checkbox checked={false} name="not-checked" />
        <p>Checkbox: false</p>
      </li>
      <li className="flex gap-sm items-center">
        <Checkbox indeterminate name="indeterminate" />
        <p>Checkbox: indeterminate</p>
      </li>
      <li className="flex gap-sm items-center">
        <Checkbox disabled name="default-disabled" />
        <p>Checkbox: disabled</p>
      </li>
      <li className="flex gap-sm items-center">
        <Checkbox checked disabled name="not-checked-disabled" />
        <p>Checkbox: checked & disabled</p>
      </li>
    </ul>
  )
}

export default Example
