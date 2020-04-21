import React from 'react'
import { node, oneOfType, string } from 'prop-types'
import { Box } from '@welcome-ui/box'

import * as S from './Item.styles'

export function Item({ children, dataTestId, separator, ...rest }) {
  return (
    <Box
      aria-label="breadcrumb"
      as="li"
      data-testid={dataTestId}
      display="inline-flex"
      flex="0 0 auto"
    >
      {separator && <S.Separator role="presentation">{separator}</S.Separator>}
      <S.Item aria-current={!separator ? 'page' : undefined} withSeparator={!!separator} {...rest}>
        {children}
      </S.Item>
    </Box>
  )
}

Item.propTypes = {
  children: node.isRequired,
  separator: oneOfType([node, string])
}
