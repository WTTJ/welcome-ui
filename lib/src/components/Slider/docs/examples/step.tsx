import type { RangeType } from '@/components/Slider'
import { Slider } from '@/components/Slider'

const Example = () => {
  const handleChange = (value: number) => {
    alert(value)
  }

  const handleChangeRange = (value: RangeType) => {
    alert(`${value.min} to ${value.max}`)
  }

  return (
    <>
      <Slider max={100} min={0} onChange={handleChange} step={10} value={50} />
      <Slider.Range
        max={100}
        min={0}
        onChange={handleChangeRange}
        step={10}
        value={{ max: 75, min: 25 }}
      />
    </>
  )
}

export default Example
