import React, { forwardRef } from 'react'
import { Box } from '@welcome-ui/box'
import { SystemProps } from '@xstyled/system'

import * as S from './styles'

export type sizeType = 'xs' | 'sm' | 'md' | 'lg' | number | string

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  color: string
  dataTestId: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | number | string
}

export const Loader = forwardRef<HTMLDivElement, SystemProps & LoaderProps>(
  ({ color, dataTestId, size = 'sm', ...rest }, ref) => (
    <Box color={color} data-testid={dataTestId} display="flex" ref={ref}>
      <S.LoadingDot shape="circle" size={size} {...rest} />
      <S.LoadingDot shape="circle" size={size} {...rest} />
      <S.LoadingDot shape="circle" size={size} {...rest} />
    </Box>
  )
)

Loader.displayName = 'Loader'
