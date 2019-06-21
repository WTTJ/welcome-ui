import React from 'react'
import { arrayOf, func, string } from 'prop-types'

import { Icon } from '../Icon'

import * as S from './styles'

const getTooltip = item =>
  `${item.charAt(0).toUpperCase()}${item.substr(1).toLowerCase()}`.replace('-', ' ')

export const Toolbar = ({ items, onClick }) => {
  return (
    <S.Toolbar>
      {items.map((item, i) =>
        item === 'divider' ? (
          // eslint-disable-next-line react/no-array-index-key
          <S.Divider key={i} />
        ) : (
          <S.ToolbarIcon data-id={item} key={item} onClick={onClick} title={getTooltip(item)}>
            <Icon name="comment" />
          </S.ToolbarIcon>
        )
      )}
    </S.Toolbar>
  )
}

Toolbar.propTypes = {
  items: arrayOf(string),
  onClick: func
}
