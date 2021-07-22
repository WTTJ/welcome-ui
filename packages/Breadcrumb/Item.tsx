import React from 'react'
import { Box } from '@welcome-ui/box'
import { WuiProps } from '@welcome-ui/system'

import * as S from './Item.styles'

export interface ItemProps {
  children: React.ReactNode
  dataTestId?: string
  separator?: string | React.ReactNode
}

export const Item: React.FC<ItemProps & WuiProps> = ({
  children,
  dataTestId,
  separator,
  ...rest
}) => {
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
