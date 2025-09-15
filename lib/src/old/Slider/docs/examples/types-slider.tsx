import { Slider } from '@/Slider'

const Example = () => {
  const handleChange = (value: number) => {
    alert(value)
  }

  return (
    <>
      <Slider max={100} min={0} onChange={handleChange} type="inline" value={50} />
      <Slider max={100} min={0} onChange={handleChange} type="left-field" value={50} />
      <Slider max={100} min={0} onChange={handleChange} type="right-field" value={50} />
    </>
  )
}

export default Example
