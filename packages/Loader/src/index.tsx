import React from 'react'
import { Box } from '@welcome-ui/box'
import { CreateWuiProps, ExtraSize, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | ExtraSize

export interface LoaderOptions {
  /** Predefined size xs, sm, md, lg or custom size */
  size?: Size
}

export type LoaderProps = CreateWuiProps<'div', LoaderOptions>

export const Loader = forwardRef<'div', LoaderProps>(
  ({ color, dataTestId, size = 'sm', ...rest }, ref) => (
    <Box color={color} data-testid={dataTestId} display="flex" ref={ref} {...rest}>
      <S.LoadingDot shape="circle" size={size} />
      <S.LoadingDot shape="circle" size={size} />
      <S.LoadingDot shape="circle" size={size} />
    </Box>
  )
)

Loader.displayName = 'Loader'
