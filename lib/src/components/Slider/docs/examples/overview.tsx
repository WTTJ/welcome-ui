import * as React from 'react'

import type { RangeType } from '@/Slider'
import { Slider } from '@/Slider'

const Example = () => {
  const handleChange = (value: number) => {
    alert(value)
  }

  const handleChangeRange = (value: RangeType) => {
    alert(`${value.min} to ${value.max}`)
  }

  return (
    <>
      <Slider max={100} min={0} onChange={handleChange} value={50} />
      <Slider.Range max={100} min={0} onChange={handleChangeRange} value={{ max: 75, min: 25 }} />
    </>
  )
}

export default Example
