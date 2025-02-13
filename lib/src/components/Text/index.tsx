import React, { CSSProperties } from 'react'

import * as S from './styles'

import { CreateWuiProps, forwardRef } from '@/System'

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
  xs: 'p',
  'subtitle-md': 'span',
  'subtitle-sm': 'span',
}

type Variant = keyof typeof TAG_NAMES

export interface TextOptions {
  lines?: number
  variant?: Variant
  withDash?: boolean
  wordBreak?: CSSProperties['wordBreak']
}

export type TextProps = CreateWuiProps<'p', TextOptions>

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
