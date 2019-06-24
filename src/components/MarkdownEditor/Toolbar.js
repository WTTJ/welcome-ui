import React from 'react'
import { arrayOf, func, string } from 'prop-types'

import { Icon } from '../Icon'

import * as S from './styles'

const getTooltip = item =>
  `${item.charAt(0).toUpperCase()}${item.substr(1).toLowerCase()}`.replace('-', ' ')

export const Toolbar = ({ active = [], items = [], onClick }) => {
  const handleClick = e => {
    const item = e.currentTarget.dataset.id
    onClick(item, e)
  }

  return (
    <S.Toolbar>
      {items.map((item, i) =>
        item === 'divider' ? (
          // eslint-disable-next-line react/no-array-index-key
          <S.Divider key={i} />
        ) : (
          <S.ToolbarIcon
            active={active.includes(item)}
            data-id={item}
            key={item}
            onClick={handleClick}
            title={getTooltip(item)}
          >
            <Icon name="comment" size="sm" />
          </S.ToolbarIcon>
        )
      )}
    </S.Toolbar>
  )
}

Toolbar.propTypes = {
  active: arrayOf(string),
  items: arrayOf(string),
  onClick: func
}
