import React from 'react'
import PropTypes from 'prop-types'

import { Input } from './styles'

export const RadioTab = ({ checked, name, groupName }) => (
  <Input defaultChecked={checked} id={name} name={groupName} type="radio" />
)

RadioTab.propTypes = {
  checked: PropTypes.bool,
  groupName: PropTypes.string.isRequired,
  name: PropTypes.string
}
