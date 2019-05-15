import React, { useState } from 'react'
import { bool, oneOf, string } from 'prop-types'

import { StyledFieldGroup } from '../FieldGroup/styles'
import { Radios } from './styles'

import { Label } from '../Label'

export const RadioGroup = props => {
  const { children, groupName, label, required, direction } = props

  const [checkedName, setCheckedName] = useState(props.checkedName)

  const onChange = e => {
    setCheckedName(e.target.id)
  }

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {
      checked: child.props.name === checkedName,
      direction: direction,
      fieldType: child.props.fieldType || 'radio',
      groupName: groupName
    })
  )

  return (
    <StyledFieldGroup onChange={onChange}>
      <Label as="legend" required={required}>
        {label}
      </Label>
      <Radios direction={direction}>{childrenWithProps}</Radios>
    </StyledFieldGroup>
  )
}

RadioGroup.propTypes = {
  direction: oneOf(['column', 'row']),
  /** Label of RadioGroup */
  label: string,
  groupName: string.isRequired,
  /** name of selected radio (refers to the id id={name}) */
  checkedName: string,
  required: bool
}
