import * as React from 'react'
import { InputText } from 'welcome-ui/InputText'
import { AvatarIcon } from 'welcome-ui/Icons'

const Example = () => {
  return (
    <>
      <InputText icon={<AvatarIcon />} placeholder="Welcome" />
      <InputText icon={<AvatarIcon />} iconPlacement="right" placeholder="Welcome" />
      <InputText
        icon={<AvatarIcon />}
        iconPlacement="right"
        isClearable
        placeholder="Welcome"
        size="xs"
      />
    </>
  )
}

export default Example
