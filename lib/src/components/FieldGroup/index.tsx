import React from 'react'

import type { LabelOptions } from '@/Label'
import { Label } from '@/Label'
import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'

import * as S from './styles'

export interface FieldGroupOptions {
  // specific to fieldset, we need to override children
  children: React.ReactNode
  label?: React.ReactElement
  required?: LabelOptions['required']
}

export type FieldGroupProps = CreateWuiProps<'fieldset', FieldGroupOptions>

export const FieldGroup = forwardRef<'fieldset', FieldGroupProps>(
  ({ children, dataTestId, label, required }, ref) => (
    <S.FieldGroup data-testid={dataTestId} ref={ref}>
      {label ? (
        <Label as="legend" required={required}>
          {label}
        </Label>
      ) : null}
      {children}
    </S.FieldGroup>
  )
)

FieldGroup.displayName = 'FieldGroup'

export const StyledFieldGroup = S.FieldGroup
