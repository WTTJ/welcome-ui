import React, { forwardRef } from 'react'
import Checkbox from '../Checkbox'

import * as S from './styles'

export const Toggle = forwardRef((props, ref) => (
  <Checkbox {...props} Component={S.Toggle} ref={ref} />
))

Toggle.type = 'Toggle'
Toggle.displayName = 'Toggle'

export default Toggle
