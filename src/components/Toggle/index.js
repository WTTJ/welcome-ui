import React from 'react'

import { InputCheckbox } from '../InputCheckbox'

import * as S from './styles'

export const Toggle = props => <InputCheckbox {...props} Component={S.Toggle} />

Toggle.type = 'Toggle'
