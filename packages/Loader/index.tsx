import React from 'react'
import { Box } from '@welcome-ui/box'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | string | number

export interface LoaderOptions {
  color?: string
  /** Predefined size xs, sm, md, lg or custom size */
  size?: Size
}

export type LoaderProps = CreateWuiProps<'div', LoaderOptions>

export const Loader = forwardRef<'div', LoaderProps>(
  ({ color, dataTestId, size = 'sm', ...rest }, ref) => (
    <Box $color={color} $display="flex" data-testid={dataTestId} ref={ref} {...rest}>
      <S.LoadingDot shape="circle" size={size} />
      <S.LoadingDot shape="circle" size={size} />
      <S.LoadingDot shape="circle" size={size} />
    </Box>
  )
)

Loader.displayName = 'Loader'
