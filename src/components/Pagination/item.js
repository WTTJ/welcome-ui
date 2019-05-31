import { func, number } from 'prop-types'
import React from 'react'

import * as S from './styles'

export const PageItem = ({ page, activePage, handleChange }) => (
  <li>
    <S.PageItem active={page === activePage} onClick={() => handleChange(page)}>
      {page}
    </S.PageItem>
  </li>
)

PageItem.propTypes = {
  activePage: number.isRequired,
  handleChange: func.isRequired,
  page: number.isRequired
}
