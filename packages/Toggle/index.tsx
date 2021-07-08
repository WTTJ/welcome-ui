import React, { forwardRef } from 'react'
import { Checkbox } from '@welcome-ui/checkbox'

import * as S from './styles'

export interface ToggleProps extends React.HTMLAttributes<HTMLInputElement> {
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const ToggleComponent = forwardRef<HTMLInputElement, ToggleProps>((props, ref) => (
  <Checkbox {...props} Component={S.Toggle} ref={ref} />
))

ToggleComponent.displayName = 'Toggle'

export const Toggle = Object.assign(ToggleComponent, {
  type: 'Toggle'
})
