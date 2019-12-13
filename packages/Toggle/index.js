import React, { forwardRef } from 'react'
import { InputCheckbox } from '@welcome-ui/checkbox'

import * as S from './styles'

export const Toggle = forwardRef((props, ref) => (
  <InputCheckbox {...props} Component={S.Toggle} ref={ref} />
))

Toggle.type = 'Toggle'
Toggle.displayName = 'Toggle'
