import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { StyledFieldGroup } from '../FieldGroup/styles'
import { Label } from '../Label'

import { Radios } from './styles'

export const RadioGroup = ({ children, groupName, label, required, checkedName, ...props }) => {
  const { flexDirection } = { ...props }
  const [checked, setChecked] = useState(checkedName)

  const onChange = e => {
    setChecked(e.target.id)
  }

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {
      checked: child.props.name === checked,
      fieldType: child.props.fieldType || 'radio',
      groupName: groupName,
      ...props
    })
  )

  return (
    <StyledFieldGroup onChange={onChange} {...props}>
      {label && (
        <Label as="legend" required={required}>
          {label}
        </Label>
      )}
      <Radios flexDirection={flexDirection}>{childrenWithProps}</Radios>
    </StyledFieldGroup>
  )
}

RadioGroup.propTypes = {
  checkedName: PropTypes.string,
  children: PropTypes.node,
  groupName: PropTypes.string.isRequired,
  /** name of selected radio (refers to the id id={name}) */
  label: PropTypes.string,
  required: PropTypes.bool
}
