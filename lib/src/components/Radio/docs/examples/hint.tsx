import { RadioProvider } from '@ariakit/react'

import { Radio } from '@/components/Radio'

const Example = () => {
  return (
    <RadioProvider>
      <Radio hint="this is a hint" label="Default label" value="default" />
    </RadioProvider>
  )
}

export default Example
