import React from 'react'

import { CreateWuiProps, forwardRef } from '../System'
import { Box } from '../Box'

import * as S from './Item.styles'

export interface ItemOptions {
  children: React.ReactNode
  isActive?: boolean
  separator?: string | React.ReactNode
  /* useful for react-router */
  to?: string
}

export type ItemProps = CreateWuiProps<'a', ItemOptions>

/**
 * @name Breadcrumb.Item
 */
export const Item = forwardRef<'a', ItemProps>(
  ({ children, dataTestId, isActive, separator, ...rest }, ref) => {
    const isClickable = rest.href || rest.to

    return (
      <Box
        aria-label="breadcrumb"
        as="li"
        data-testid={dataTestId}
        display="inline-flex"
        flex="0 0 auto"
        lineHeight="normal"
      >
        {separator && <S.Separator role="presentation">{separator}</S.Separator>}
        <S.Item
          aria-current={isActive ? 'page' : undefined}
          aria-disabled={!isClickable}
          {...rest}
          ref={ref}
        >
          {children}
        </S.Item>
      </Box>
    )
  }
)
