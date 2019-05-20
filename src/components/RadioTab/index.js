import React from 'react'
import { bool, string } from 'prop-types'

import { Input } from './styles'

export const RadioTab = props => {
  const { checked, name, groupName } = props

  return <Input defaultChecked={checked} id={name} name={groupName} type="radio" />
}

RadioTab.propTypes = {
  checked: bool,
  groupName: string.isRequired,
  name: string
}
