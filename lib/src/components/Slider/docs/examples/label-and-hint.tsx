import * as React from 'react'
import { RangeType, Slider } from 'welcome-ui/Slider'

const Example = () => {
  const handleChange = (value: number) => {
    alert(value)
  }

  const handleChangeRange = (value: RangeType) => {
    alert(`${value.min} to ${value.max}`)
  }

  return (
    <>
      <Slider hint="hint" label="Label" max={100} min={0} onChange={handleChange} value={50} />
      <Slider.Range
        hint="hint"
        label="Label"
        max={100}
        min={0}
        onChange={handleChangeRange}
        value={{ min: 20, max: 80 }}
      />
    </>
  )
}

export default Example
