import React from 'react'
import { bool, string } from 'prop-types'

import { Input } from './styles'

export const RadioTab = ({ checked, name, groupName }) => (
  <Input defaultChecked={checked} id={name} name={groupName} type="radio" />
)

RadioTab.propTypes = {
  checked: bool,
  groupName: string.isRequired,
  name: string
}
