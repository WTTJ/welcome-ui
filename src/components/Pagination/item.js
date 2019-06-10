import { func, number } from 'prop-types'
import React, { forwardRef } from 'react'

import * as S from './styles'

export const PageItem = forwardRef(({ page, activePage, handleChange }, ref) => (
  <li>
    <S.PageItem active={page === activePage} onClick={() => handleChange(page)} ref={ref}>
      {page}
    </S.PageItem>
  </li>
))

PageItem.displayName = 'PageItem'

PageItem.propTypes = {
  activePage: number.isRequired,
  handleChange: func.isRequired,
  page: number.isRequired
}
