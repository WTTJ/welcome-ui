import * as React from 'react'
import { InputText } from '@welcome-ui/input-text'
import { AvatarIcon } from '@welcome-ui/icons'
import { Stack } from '@welcome-ui/stack'

const Example = () => {
  return (
    <Stack spacing="xl">
      <InputText icon={<AvatarIcon />} placeholder="Welcome" size="xs" />
      <InputText icon={<AvatarIcon />} placeholder="Welcome" size="sm" />
      <InputText icon={<AvatarIcon />} placeholder="Welcome" />
      <InputText icon={<AvatarIcon />} placeholder="Welcome" size="lg" />
    </Stack>
  )
}

export default Example
