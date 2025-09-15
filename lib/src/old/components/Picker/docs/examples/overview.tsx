import * as React from 'react'

import { EditIcon, PencilIcon } from '@old/Icons'
import { Picker } from '@old/Picker'
import { Shape } from '@old/Shape'

const options = [
  {
    element: ({ selected }: { selected: boolean }) => (
      <Shape backgroundColor={selected ? 'beige-30' : 'unset'} shape="circle" w={40}>
        <EditIcon color="neutral-90" />
      </Shape>
    ),
    value: 'edit',
  },
  {
    element: ({ selected }: { selected: boolean }) => (
      <Shape backgroundColor={selected ? 'beige-30' : 'unset'} shape="circle" w={40}>
        <PencilIcon color="neutral-90" />
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
