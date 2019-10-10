import React, { forwardRef } from 'react'
import { object, string } from 'prop-types'

import { SIZES_TYPE } from '../../utils/propTypes'

import * as S from './styles'

export const RadioTab = forwardRef((props, ref) => {
  const { dataTestId, ...rest } = props
  return <S.Input data-testid={dataTestId} ref={ref} {...rest} />
})

RadioTab.type = 'RadioTab'
RadioTab.displayName = 'RadioTab'

RadioTab.propTypes = {
  dataTestId: string,
  radio: object,
  size: SIZES_TYPE,
  value: string
}
