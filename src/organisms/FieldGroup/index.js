import React, { PureComponent } from 'react'
import { string } from 'prop-types'

import StyledFieldGroup from './styles'

// molecules
import { Label } from '../../molecules/Label'

export class FieldGroup extends PureComponent {
  render() {
    const { children, label } = this.props
    return (
      <StyledFieldGroup>
        <Label as="legend">{label}</Label>
        {children}
      </StyledFieldGroup>
    )
  }
}

FieldGroup.propTypes = {
  /** Label of FieldGroup */
  label: string
}

export default FieldGroup
