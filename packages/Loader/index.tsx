import React, { forwardRef } from 'react'
import { Box } from '@welcome-ui/box'
import { CreateWuiProps, ExtraSize } from '@welcome-ui/system'

import * as S from './styles'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | ExtraSize

export interface LoaderOptions {
  color?: string
  size?: Size
}

export type LoaderProps = CreateWuiProps<'div', LoaderOptions>

export const Loader = forwardRef<HTMLDivElement, LoaderProps>(
  ({ color, dataTestId, size = 'sm', ...rest }, ref) => (
    <Box color={color} data-testid={dataTestId} display="flex" ref={ref}>
      <S.LoadingDot shape="circle" size={size} {...rest} />
      <S.LoadingDot shape="circle" size={size} {...rest} />
      <S.LoadingDot shape="circle" size={size} {...rest} />
    </Box>
  )
)

Loader.displayName = 'Loader'
