import React, { useState } from 'react'
import { arrayOf, node, string } from 'prop-types'
import includes from 'lodash.includes'

import { Label } from '../Label'

import { StyledFieldGroup } from './styles'

export const FieldGroup = ({ checkedName = [], children, label }) => {
  const [checked, setChecked] = useState(checkedName)

  const onChange = e => {
    const target = e.target.id
    let updatedArray = includes(checked, target)
      ? checked.filter(item => item !== target)
      : [...checked, target]
    setChecked(updatedArray)
  }

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {
      checked: includes(checked, child.props.name)
    })
  )

  return (
    <StyledFieldGroup onChange={onChange}>
      <Label as="legend">{label}</Label>
      {childrenWithProps}
    </StyledFieldGroup>
  )
}

FieldGroup.propTypes = {
  checkedName: arrayOf(string),
  children: node,
  /** Label of FieldGroup */
  label: string
}
