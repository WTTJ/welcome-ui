import * as React from 'react'
import { RangeType, Slider } from '@welcome-ui/slider'
import { Stack } from '@welcome-ui/stack'

const Example = () => {
  const handleChangeRange = (value: RangeType) => {
    alert(`${value.min} to ${value.max}`)
  }

  return (
    <Stack spacing="xl" w="100%">
      <Slider.Range
        max={100}
        min={0}
        onChange={handleChangeRange}
        type="inline"
        value={{ min: 10, max: 90 }}
      />
      <Slider.Range
        max={100}
        min={0}
        onChange={handleChangeRange}
        type="fields"
        value={{ min: 25, max: 75 }}
      />
    </Stack>
  )
}

export default Example
