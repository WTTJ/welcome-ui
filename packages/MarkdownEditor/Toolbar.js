import React from 'react'
import { arrayOf, func, node, oneOfType, shape, string } from 'prop-types'

import * as S from './styles'

const getTooltip = item =>
  `${item.charAt(0).toUpperCase()}${item.substr(1).toLowerCase()}`.replace('-', ' ')

export const Toolbar = ({ active = [], dataTestId, items = [], onClick, ...rest }) => {
  const handleClick = e => {
    const item = e.currentTarget.dataset.id
    onClick(item, e)
  }

  return (
    <S.Toolbar data-testid={dataTestId} {...rest}>
      {items.map(({ icon, name }, i) => {
        if (name === 'divider') {
          // eslint-disable-next-line react/no-array-index-key
          return <S.Divider key={i} />
        }

        return (
          <S.ToolbarIcon
            active={active.includes(name)}
            data-id={name}
            key={name}
            onClick={handleClick}
            title={getTooltip(name)}
          >
            {icon}
          </S.ToolbarIcon>
        )
      })}
    </S.Toolbar>
  )
}

Toolbar.propTypes = {
  active: arrayOf(string),
  items: arrayOf(
    shape({
      action: oneOfType([func, string]),
      icon: node,
      name: string.isRequired
    })
  ),
  onClick: func
}
