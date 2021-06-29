import React from 'react'
import { Box } from '@welcome-ui/box'
import { WuiProps } from '@welcome-ui/system'

import * as S from './Item.styles'

export interface ItemOptions {
  children: React.ReactNode
  separator?: string | React.ReactNode
}

export type ItemProps = ItemOptions & WuiProps

export const Item: React.FC<ItemProps> = ({ children, dataTestId, separator, ...rest }) => {
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
