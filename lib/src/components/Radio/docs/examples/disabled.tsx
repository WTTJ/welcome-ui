import { RadioProvider } from '@ariakit/react'

import { Radio } from '@/components/Radio'

const Example = () => {
  return (
    <RadioProvider defaultValue="one">
      <Radio checked label="Checked" value="one" />
      <Radio checked disabled label="Disabled checked" value="two" />
      <Radio disabled label="Disabled" value="three" />
    </RadioProvider>
  )
}

export default Example
