import { RadioProvider } from '@ariakit/react'

import { Radio } from '@/components/Radio'

const Example = () => {
  return (
    <RadioProvider defaultValue="one">
      <Radio label="One" value="one" />
      <Radio label="Two" value="two" />
    </RadioProvider>
  )
}

export default Example
