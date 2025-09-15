import type { CSSObject } from '@xstyled/styled-components'

import { Box } from '@old/Box'
import type { CreateWuiProps } from '@old/System'
import { forwardRef } from '@old/System'

import * as S from './styles'
import type { Size } from './theme'

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
