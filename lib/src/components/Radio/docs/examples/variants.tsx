import { RadioProvider } from '@ariakit/react'

import { Radio } from '@/components/Radio'

const Example = () => {
  return (
    <RadioProvider defaultValue="default">
      <Radio hint="this is a hint" label="Default" value="default" />
      <Radio hint="this is a hint" label="Danger" value="danger" variant="danger" />
      <Radio hint="this is a hint" label="Warning" value="warning" variant="warning" />
    </RadioProvider>
  )
}

export default Example
