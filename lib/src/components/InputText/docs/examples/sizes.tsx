import { InputText } from 'welcome-ui'
import * as React from 'react'
import { AvatarIcon } from '@welcome-ui/icons'

const Example = () => {
  return (
    <>
      <InputText icon={<AvatarIcon />} placeholder="Welcome" size="xs" />
      <InputText icon={<AvatarIcon />} placeholder="Welcome" size="sm" />
      <InputText icon={<AvatarIcon />} placeholder="Welcome" />
      <InputText icon={<AvatarIcon />} placeholder="Welcome" size="lg" />
    </>
  )
}

export default Example
