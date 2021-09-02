import React, { forwardRef } from 'react'
import { Label, LabelOptions } from '@welcome-ui/label'
import { WuiProps } from '@welcome-ui/system'

import * as S from './styles'

export interface FieldGroupOptions {
  label?: React.ReactElement
  required?: LabelOptions['required']
}

export type FieldGroupProps = FieldGroupOptions & WuiProps

export const FieldGroup = forwardRef<HTMLFieldSetElement, FieldGroupProps>(
  ({ children, dataTestId, label, required }, ref) => (
    <S.FieldGroup data-testid={dataTestId} ref={ref}>
      {label && (
        <Label as="legend" required={required}>
          {label}
        </Label>
      )}
      {children}
    </S.FieldGroup>
  )
)

FieldGroup.displayName = 'FieldGroup'

export const StyledFieldGroup = S.FieldGroup
