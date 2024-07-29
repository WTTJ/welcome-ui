import * as React from 'react'
import { Picker } from '@welcome-ui/picker'
import { Shape } from '@welcome-ui/shape'

const options = [
  {
    element: ({ selected }: { selected: boolean }) => (
      <Shape backgroundColor={selected ? 'nude-30' : 'unset'} shape="circle" w={30}>
        <Shape backgroundColor="danger-20" borderRadius={2} h={15} w={15} />
      </Shape>
    ),
    value: '1',
  },
  {
    element: ({ selected }: { selected: boolean }) => (
      <Shape backgroundColor={selected ? 'nude-30' : 'unset'} shape="circle" w={30}>
        <Shape backgroundColor="success-50" borderRadius={2} h={15} w={15} />
      </Shape>
    ),
    value: '2',
  },
  {
    element: ({ selected }: { selected: boolean }) => (
      <Shape backgroundColor={selected ? 'nude-30' : 'unset'} shape="circle" w={30}>
        <Shape backgroundColor="warning-20" borderRadius={2} h={15} w={15} />
      </Shape>
    ),
    value: '3',
  },
]

const Example = () => {
  const [value, setValue] = React.useState('1')

  // TODO: fix typescript
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleChange = event => {
    setValue(event.target.value)
  }

  return <Picker name="icon" onChange={handleChange} options={options} value={value} />
}

export default Example
