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
      <Slider max={100} min={0} onChange={handleChange} step={10} value={50} />
      <Slider.Range
        max={100}
        min={0}
        onChange={handleChangeRange}
        step={10}
        value={{ min: 25, max: 75 }}
      />
    </Stack>
  )
}

export default Example
