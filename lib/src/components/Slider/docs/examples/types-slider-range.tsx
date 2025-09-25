import type { RangeType } from '@/components/Slider'
import { Slider } from '@/components/Slider'

const Example = () => {
  const handleChangeRange = (value: RangeType) => {
    alert(`${value.min} to ${value.max}`)
  }

  return (
    <>
      <Slider.Range
        max={100}
        min={0}
        onChange={handleChangeRange}
        type="inline"
        value={{ max: 90, min: 10 }}
      />
      <Slider.Range
        max={100}
        min={0}
        onChange={handleChangeRange}
        type="fields"
        value={{ max: 75, min: 25 }}
      />
    </>
  )
}

export default Example
