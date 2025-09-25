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
      <Slider hint="hint" label="Label" max={100} min={0} onChange={handleChange} value={50} />
      <Slider.Range
        hint="hint"
        label="Label"
        max={100}
        min={0}
        onChange={handleChangeRange}
        value={{ max: 80, min: 20 }}
      />
    </>
  )
}

export default Example
