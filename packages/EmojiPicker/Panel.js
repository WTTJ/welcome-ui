import React from 'react'
import { array, object, oneOf, string } from 'prop-types'

import * as S from './styles'

export const Panel = ({ children, tab }) => (
  <S.TabPanel {...tab} tabId="basic">
    {children}
  </S.TabPanel>
)

Panel.displayName = 'Panel'

Panel.propTypes = {
  children: oneOf([array, object]),
  tab: string
}
