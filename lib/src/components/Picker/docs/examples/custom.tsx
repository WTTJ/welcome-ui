import * as React from 'react'
import { Picker } from '@/Picker'
import { Shape } from '@/Shape'

const options = [
  {
    element: ({ selected }: { selected: boolean }) => (
      <Shape backgroundColor={selected ? 'beige-30' : 'unset'} shape="circle" w={30}>
        <Shape backgroundColor="red-30" borderRadius={2} h={15} w={15} />
      </Shape>
    ),
    value: '1',
  },
  {
    element: ({ selected }: { selected: boolean }) => (
      <Shape backgroundColor={selected ? 'beige-30' : 'unset'} shape="circle" w={30}>
        <Shape backgroundColor="green-70" borderRadius={2} h={15} w={15} />
      </Shape>
    ),
    value: '2',
  },
  {
    element: ({ selected }: { selected: boolean }) => (
      <Shape backgroundColor={selected ? 'beige-30' : 'unset'} shape="circle" w={30}>
        <Shape backgroundColor="orange-30" borderRadius={2} h={15} w={15} />
      </Shape>
    ),
    value: '3',
  },
]

const Example = () => {
  const [value, setValue] = React.useState('1')

  const handleChange = event => {
    setValue(event.target.value)
  }

  return <Picker name="icon" onChange={handleChange} options={options} value={value} />
}

export default Example
