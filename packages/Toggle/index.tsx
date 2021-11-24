import React from 'react'
import { Checkbox, CheckboxProps } from '@welcome-ui/checkbox'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export type ToggleProps = CreateWuiProps<'input', Omit<CheckboxProps, 'Component'>>

const ToggleComponent = forwardRef<'input', ToggleProps>((props, ref) => (
  <Checkbox {...props} Component={S.Toggle} ref={ref} />
))

ToggleComponent.displayName = 'Toggle'

export const Toggle = Object.assign(ToggleComponent, {
  type: 'Toggle',
})
