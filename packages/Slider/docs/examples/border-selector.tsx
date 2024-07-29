import * as React from 'react'
import { RangeType, Slider } from '@welcome-ui/slider'

const Example = () => {
  const handleChange = (value: number) => {
    alert(value)
  }

  const handleChangeRange = (value: RangeType) => {
    alert(`${value.min} to ${value.max}`)
  }

  return (
    <>
      <Slider
        borderSelectorColor="brand-orange"
        max={100}
        min={0}
        onChange={handleChange}
        value={50}
      />
      <Slider.Range
        borderSelectorColor="brand-orange"
        max={100}
        min={0}
        onChange={handleChangeRange}
        value={{ min: 25, max: 75 }}
      />
    </>
  )
}

export default Example
