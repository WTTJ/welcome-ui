import * as React from 'react'
import { InputText } from 'welcome-ui/InputText'
import { AvatarIcon } from 'welcome-ui/Icons'

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
