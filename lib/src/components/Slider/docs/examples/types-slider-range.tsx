
import { RangeType, Slider } from '@/Slider'

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
        value={{ min: 10, max: 90 }}
      />
      <Slider.Range
        max={100}
        min={0}
        onChange={handleChangeRange}
        type="fields"
        value={{ min: 25, max: 75 }}
      />
    </>
  )
}

export default Example
