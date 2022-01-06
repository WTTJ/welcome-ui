import React from 'react'
import { Checkbox, CheckboxProps } from '@welcome-ui/checkbox'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export type ToggleOptions = Omit<CheckboxProps, 'Component'>
export type ToggleProps = CreateWuiProps<'input', ToggleOptions>

export const Toggle = forwardRef<'input', ToggleProps>((props, ref) => (
  <Checkbox {...props} Component={S.Toggle} ref={ref} />
))

Toggle.displayName = 'Toggle'
