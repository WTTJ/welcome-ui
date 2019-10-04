import React, { forwardRef } from 'react'
import { object, string } from 'prop-types'

import { SIZES_TYPE } from '../../utils/propTypes'

import * as S from './styles'

export const RadioTab = forwardRef(({ dataTestId, radio, size = 'lg', value, ...rest }, ref) => (
  <S.Input
    data-testid={dataTestId}
    id={value}
    ref={ref}
    size={size}
    type="radio"
    value={value}
    {...rest}
    {...radio}
  />
))

RadioTab.type = 'RadioTab'
RadioTab.displayName = 'RadioTab'

RadioTab.propTypes = {
  dataTestId: string,
  radio: object,
  size: SIZES_TYPE,
  value: string
}
