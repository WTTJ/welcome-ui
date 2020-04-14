import React from 'react'
import { node, oneOfType, string } from 'prop-types'
import { Box } from '@welcome-ui/box'

import * as S from './Item.styles'

export function Item({ children, dataTestId, separator, ...rest }) {
  return (
    <Box aria-label="breadcrumb" as="li" data-testid={dataTestId} display="flex" flex="0 0 auto">
      <S.Item aria-current={!separator ? 'page' : undefined} withSeparator={!!separator} {...rest}>
        {children}
      </S.Item>
      {separator && <S.Separator role="presentation">{separator}</S.Separator>}
    </Box>
  )
}

Item.propTypes = {
  children: node.isRequired,
  separator: oneOfType([node, string])
}
