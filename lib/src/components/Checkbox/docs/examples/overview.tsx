import { Checkbox } from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  const [checkbox, setCheckbox] = React.useState(false)
  const [checkboxChecked, setCheckboxChecked] = React.useState(true)
  const [checkboxIndeterminate, setCheckboxIndeterminate] = React.useState(false)

  return (
    <>
      <Checkbox checked={checkbox} name="default" onChange={() => setCheckbox(!checkbox)} />
      <Checkbox
        checked={checkboxChecked}
        name="not-checked"
        onChange={() => setCheckboxChecked(!checkboxChecked)}
      />
      <Checkbox
        checked={checkboxIndeterminate}
        indeterminate
        name="indeterminate"
        onChange={() => setCheckboxIndeterminate(!checkboxIndeterminate)}
      />
      <Checkbox disabled name="default-disabled" />
      <Checkbox checked disabled name="not-checked-disabled" />
    </>
  )
}

export default Example
