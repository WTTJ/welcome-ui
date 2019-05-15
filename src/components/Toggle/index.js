import React from 'react'

import { InputCheckbox } from '../InputCheckbox'
import { StyledToggle } from './styles'

export const Toggle = props => <InputCheckbox {...props} StyledComponent={StyledToggle} />
