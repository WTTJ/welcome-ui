import React from 'react'
import { bool, node, oneOfType, string } from 'prop-types'
import { Box } from '@welcome-ui/box'

import { COMPONENT_TYPE } from '../../src/utils/propTypes'

import * as S from './Item.styles'

export function Item({ as, children, dataTestId, separator, ...rest }) {
  return (
    <Box aria-label="breadcrumb" as="li" data-testid={dataTestId} display="flex">
      <S.Item
        aria-current={!separator ? 'page' : undefined}
        as={as}
        separator={separator}
        {...rest}
      >
        {children}
      </S.Item>
      {separator && <S.Separator role="presentation">{separator}</S.Separator>}
    </Box>
  )
}

Item.propTypes = {
  as: oneOfType(COMPONENT_TYPE),
  children: node.isRequired,
  isLastChild: bool,
  separator: oneOfType([node, string])
}
