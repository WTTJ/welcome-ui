import React, { useState } from 'react'
import { string } from 'prop-types'

import StyledFieldGroup from '../FieldGroup/styles'

// molecules
import { Label } from '../../molecules/Label'

export const RadioGroup = props => {
  const { children, groupName, label } = props

  const [checkedName, setCheckedName] = useState(props.checkedName)

  const onChange = e => {
    setCheckedName(e.target.id)
  }

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { groupName: groupName, checked: child.props.name === checkedName })
  )

  return (
    <StyledFieldGroup onChange={onChange}>
      <Label as="legend">{label}</Label>
      {childrenWithProps}
    </StyledFieldGroup>
  )
}

RadioGroup.propTypes = {
  /** Label of RadioGroup */
  label: string,
  groupName: string,
  /** name of selected radio (refers to the id id={name}) */
  checkedName: string
}
