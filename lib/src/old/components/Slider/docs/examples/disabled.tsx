import type { RangeType } from '@old/Slider'
import { Slider } from '@old/Slider'

const Example = () => {
  const handleChange = (value: number) => {
    alert(value)
  }

  const handleChangeRange = (value: RangeType) => {
    alert(`${value.min} to ${value.max}`)
  }

  return (
    <>
      <Slider disabled max={100} min={0} onChange={handleChange} value={50} />
      <Slider.Range
        disabled
        max={100}
        min={0}
        onChange={handleChangeRange}
        value={{ max: 75, min: 25 }}
      />
    </>
  )
}

export default Example
