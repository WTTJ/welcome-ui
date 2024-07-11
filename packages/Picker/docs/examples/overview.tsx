import * as React from 'react'
import { Picker } from '@welcome-ui/picker'
import { Shape } from '@welcome-ui/shape'
import { EditIcon, PencilIcon } from '@welcome-ui/icons'

const options = [
  {
    element: ({ selected }: { selected: boolean }) => (
      <Shape backgroundColor={selected ? 'nude-200' : 'unset'} shape="circle" w={40}>
        <EditIcon color="dark-900" />
      </Shape>
    ),
    value: 'edit',
  },
  {
    element: ({ selected }: { selected: boolean }) => (
      <Shape backgroundColor={selected ? 'nude-200' : 'unset'} shape="circle" w={40}>
        <PencilIcon color="dark-900" />
      </Shape>
    ),
    value: 'pencil',
  },
]

const Example = () => {
  const [value, setValue] = React.useState('edit')

  // TODO: fix typescript
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleChange = event => {
    setValue(event.target.value)
  }

  return <Picker name="icon" onChange={handleChange} options={options} value={value} />
}

export default Example
