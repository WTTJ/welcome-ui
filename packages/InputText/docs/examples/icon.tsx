import * as React from 'react'
import { InputText } from '@welcome-ui/input-text'
import { AvatarIcon } from '@welcome-ui/icons'
import { Stack } from '@welcome-ui/stack'

const Example = () => {
  return (
    <Stack spacing="xl">
      <InputText icon={<AvatarIcon />} placeholder="Welcome" />
      <InputText icon={<AvatarIcon />} iconPlacement="right" placeholder="Welcome" />
      <InputText
        icon={<AvatarIcon />}
        iconPlacement="right"
        isClearable
        placeholder="Welcome"
        size="xs"
      />
    </Stack>
  )
}

export default Example
