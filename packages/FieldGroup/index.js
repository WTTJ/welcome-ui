import React, { forwardRef } from 'react'
import { bool, node, string } from 'prop-types'
import { Label } from '@welcome-ui/label'

import * as S from './styles'

export const FieldGroup = forwardRef(({ children, dataTestId, label, required }, ref) => (
  <S.FieldGroup data-testid={dataTestId} ref={ref}>
    {label && (
      <Label as="legend" required={required}>
        {label}
      </Label>
    )}
    {children}
  </S.FieldGroup>
))

FieldGroup.displayName = 'FieldGroup'
FieldGroup.propTypes /* remove-proptypes */ = {
  children: node,
  label: string,
  required: bool
}

export const StyledFieldGroup = S.FieldGroup
