import React from 'react'
import { CSSObject } from '@xstyled/styled-components'

import * as S from './styles'

import { Box } from '@/Box'
import { CreateWuiProps, ExtraSize, forwardRef } from '@/System'

type Size = 'xs' | 'sm' | 'md' | 'lg' | ExtraSize

export interface LoaderOptions {
  color?: CSSObject['color']
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
