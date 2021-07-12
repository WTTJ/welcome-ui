import React, { forwardRef } from 'react'
import { Box } from '@welcome-ui/box'
import { WuiProps } from '@welcome-ui/system'

import * as S from './styles'

export type sizeType = 'xs' | 'sm' | 'md' | 'lg' | number | string

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  color: string
  dataTestId: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | number | string
}

export const Loader = forwardRef<HTMLDivElement, WuiProps & LoaderProps>(
  ({ color, dataTestId, size = 'sm', ...rest }, ref) => (
    <Box color={color} data-testid={dataTestId} display="flex" ref={ref}>
      <S.LoadingDot shape="circle" size={size} {...rest} />
      <S.LoadingDot shape="circle" size={size} {...rest} />
      <S.LoadingDot shape="circle" size={size} {...rest} />
    </Box>
  )
)

Loader.displayName = 'Loader'
