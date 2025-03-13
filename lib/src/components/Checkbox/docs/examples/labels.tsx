import * as React from 'react'
import { Checkbox } from '@/Checkbox'
import { Field } from '@/Field'
import { Stack } from '@/Stack'

const Example = () => {
  const [checkbox, setCheckbox] = React.useState(false)
  const [checkboxChecked, setCheckboxChecked] = React.useState(true)

  return (
    <Stack>
      <Field label="default">
        <Checkbox checked={checkbox} name="default-label" onChange={() => setCheckbox(!checkbox)} />
      </Field>
      <Field label="checked">
        <Checkbox
          checked={checkboxChecked}
          name="not-checked-label"
          onChange={() => setCheckboxChecked(!checkboxChecked)}
        />
      </Field>
      <Field disabled label="disabled">
        <Checkbox name="default-disabled-label" />
      </Field>
      <Field disabled label="disabled checked">
        <Checkbox checked name="not-checked-disabled-label" />
      </Field>
    </Stack>
  )
}

export default Example
