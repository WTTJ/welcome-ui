import React from 'react'
import { Box } from '@welcome-ui/box'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './Item.styles'

export interface ItemOptions {
  children: React.ReactNode
  disabled?: boolean
  separator?: string | React.ReactNode
  isActive?: boolean
}

export type ItemProps = CreateWuiProps<'a', ItemOptions>

/**
 * @name Breadcrumb.Item
 */
export const Item = forwardRef<'a', ItemProps>(
  ({ children, dataTestId, disabled, isActive, separator, ...rest }, ref) => {
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
          aria-disabled={disabled}
          isActive={isActive}
          {...rest}
          ref={ref}
        >
          {children}
        </S.Item>
      </Box>
    )
  }
)
