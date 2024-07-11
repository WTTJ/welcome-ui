import * as React from 'react'
import { RangeType, Slider } from '@welcome-ui/slider'
import { Stack } from '@welcome-ui/stack'

const Example = () => {
  const handleChange = (value: number) => {
    alert(value)
  }

  const handleChangeRange = (value: RangeType) => {
    alert(`${value.min} to ${value.max}`)
  }

  return (
    <Stack spacing="xl" w="100%">
      <Slider borderSelectorColor="sub-3" max={100} min={0} onChange={handleChange} value={50} />
      <Slider.Range
        borderSelectorColor="sub-3"
        max={100}
        min={0}
        onChange={handleChangeRange}
        value={{ min: 25, max: 75 }}
      />
    </Stack>
  )
}

export default Example
