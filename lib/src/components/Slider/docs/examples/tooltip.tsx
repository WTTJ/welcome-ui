
import { RangeType, Slider } from '@/Slider'

const Example = () => {
  const handleChange = (value: number) => {
    alert(value)
  }

  const handleChangeRange = (value: RangeType) => {
    alert(`${value.min} to ${value.max}`)
  }

  return (
    <>
      <Slider max={100} min={0} onChange={handleChange} tooltip value={50} />
      <Slider.Range
        max={100}
        min={0}
        onChange={handleChangeRange}
        tooltip
        value={{ min: 25, max: 75 }}
      />
    </>
  )
}

export default Example
