import React from 'react'

import { Input } from './styles'

export const RadioTab = props => {
  const { checked, name, groupName } = props

  return <Input defaultChecked={checked} type="radio" id={name} name={groupName} />
}
