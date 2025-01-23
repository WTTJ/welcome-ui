import * as React from 'react'

import { Checkbox } from '@/Checkbox'
import { Field } from '@/Field'
import { Stack } from '@/Stack'

const Example = () => {
  const [checkboxA, setCheckboxA] = React.useState(false)
  const [checkboxB, setCheckboxB] = React.useState(false)

  const parentChecked = checkboxA && checkboxB
  const indeterminate = checkboxA || checkboxB

  const handleClick = () => {
    if (!parentChecked) {
      setCheckboxA(true)
      setCheckboxB(true)
    } else {
      setCheckboxA(false)
      setCheckboxB(false)
    }
  }

  return (
    <Stack>
      <Field label="Parent checkbox">
        <Checkbox checked={parentChecked} indeterminate={indeterminate} onChange={handleClick} />
      </Field>
      <Field label="checkbox A" ml="md">
        <Checkbox checked={checkboxA} onChange={() => setCheckboxA(!checkboxA)} />
      </Field>
      <Field label="checkbox B" ml="md">
        <Checkbox checked={checkboxB} onChange={() => setCheckboxB(!checkboxB)} />
      </Field>
    </Stack>
  )
}

export default Example
