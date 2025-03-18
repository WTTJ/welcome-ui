import type { CSSProperties } from 'react'

import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'

import * as S from './styles'

const TAG_NAMES = {
  h0: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  lg: 'p',
  md: 'p',
  sm: 'p',
  'subtitle-md': 'span',
  'subtitle-sm': 'span',
  xs: 'p',
}

export interface TextOptions {
  lines?: number
  variant?: Variant
  withDash?: boolean
  wordBreak?: CSSProperties['wordBreak']
}

export type TextProps = CreateWuiProps<'p', TextOptions>

type Variant = keyof typeof TAG_NAMES

export const Text = forwardRef<'p', TextProps>(
  (
    {
      as,
      children,
      dataTestId,
      lines,
      variant = 'md',
      withDash,
      wordBreak = 'break-word',
      ...rest
    },
    ref
  ) => {
    const tagName = as || TAG_NAMES[variant]
    const className = rest.className || ''

    return (
      <S.Text
        as={tagName}
        data-testid={dataTestId}
        lines={lines}
        ref={ref}
        variant={variant}
        withDash={withDash}
        wordBreak={wordBreak}
        {...rest}
        className={`${className} wui-text`}
      >
        {children}
      </S.Text>
    )
  }
)

Text.displayName = 'Text'
