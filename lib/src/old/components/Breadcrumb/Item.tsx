import React from 'react'

import { Box } from '@old/Box'
import type { CreateWuiProps } from '@old/System'
import { forwardRef } from '@old/System'

import * as S from './Item.styles'

export interface ItemOptions {
  children: React.ReactNode
  isActive?: boolean
  separator?: React.ReactNode | string
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
        {separator ? <S.Separator role="presentation">{separator}</S.Separator> : null}
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
