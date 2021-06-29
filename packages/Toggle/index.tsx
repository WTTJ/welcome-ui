import React, { forwardRef } from 'react'
import { Checkbox, CheckboxProps } from '@welcome-ui/checkbox'

import * as S from './styles'

export type ToggleProps = Omit<CheckboxProps, 'Component'>

const ToggleComponent = forwardRef<HTMLInputElement, ToggleProps>((props, ref) => (
  <Checkbox {...props} Component={S.Toggle} ref={ref} />
))

ToggleComponent.displayName = 'Toggle'

export const Toggle = Object.assign(ToggleComponent, {
  type: 'Toggle',
})
