import { func, number } from 'prop-types'
import React, { forwardRef } from 'react'

import * as S from './styles'

export const PageItem = forwardRef(({ activePage, handleChange, page }, ref) => {
  const handleClick = () => {
    handleChange(page)
  }

  return (
    <li>
      <S.PageItem active={page === activePage} onClick={handleClick} ref={ref}>
        {page}
      </S.PageItem>
    </li>
  )
})

PageItem.displayName = 'PageItem'

PageItem.propTypes /* remove-proptypes */ = {
  activePage: number.isRequired,
  handleChange: func.isRequired,
  page: number.isRequired
}
