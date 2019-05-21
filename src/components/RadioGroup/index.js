import React, { useState } from 'react'
import { bool, node, oneOf, string } from 'prop-types'

import { StyledFieldGroup } from '../FieldGroup/styles'
import { Label } from '../Label'

import { Radios } from './styles'

export const RadioGroup = ({ children, groupName, label, required, direction, checkedName }) => {
  const [checked, setChecked] = useState(checkedName)

  const onChange = e => {
    setChecked(e.target.id)
  }

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {
      checked: child.props.name === checked,
      direction: direction,
      fieldType: child.props.fieldType || 'radio',
      groupName: groupName
    })
  )

  return (
    <StyledFieldGroup onChange={onChange}>
      {label && (
        <Label as="legend" required={required}>
          {label}
        </Label>
      )}
      <Radios direction={direction}>{childrenWithProps}</Radios>
    </StyledFieldGroup>
  )
}

RadioGroup.propTypes = {
  checkedName: string,
  children: node,
  /** Label of RadioGroup */
  direction: oneOf(['column', 'row']),
  groupName: string.isRequired,
  /** name of selected radio (refers to the id id={name}) */
  label: string,
  required: bool
}
