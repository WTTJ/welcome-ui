import * as React from 'react'
import { Slider } from '@welcome-ui/slider'
import { Stack } from '@welcome-ui/stack'

const Example = () => {
  const handleChange = (value: number) => {
    alert(value)
  }

  return (
    <Stack spacing="xl" w="100%">
      <Slider max={100} min={0} onChange={handleChange} type="inline" value={50} />
      <Slider max={100} min={0} onChange={handleChange} type="left-field" value={50} />
      <Slider max={100} min={0} onChange={handleChange} type="right-field" value={50} />
    </Stack>
  )
}

export default Example
