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
      <Slider max={100} min={0} onChange={handleChange} value={50} values={[0, 50, 100]} />
      <Slider max={100} min={0} onChange={handleChange} value={25} values={[0, 25, 50, 75, 100]} />
      <Slider.Range
        max={100}
        min={0}
        onChange={handleChangeRange}
        value={{ max: 60, min: 40 }}
        values={[0, 50, 100]}
      />
      <Slider.Range
        max={100}
        min={0}
        onChange={handleChangeRange}
        value={{ max: 80, min: 20 }}
        values={[0, 10, 20, 30, 40, 50, 60, 80, 70, 90, 100]}
      />
    </>
  )
}

export default Example
