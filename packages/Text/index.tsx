import React, { forwardRef } from 'react'
import { CreateWuiProps } from '@welcome-ui/system'

import * as S from './styles'

const TAG_NAMES = {
  h0: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  body4: 'p',
  subtitle1: 'p',
  subtitle2: 'p',
  meta1: 'p',
  meta2: 'p',
}

export type Variant = keyof typeof TAG_NAMES

export interface TextOptions {
  lines?: number
  variant?: Variant
}

export type TextProps = CreateWuiProps<'p', TextOptions>

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ as, children, dataTestId, lines, variant = 'body2', ...rest }, ref) => {
    const tagName = as || TAG_NAMES[variant]
    const className = rest.className || ''

    return (
      <S.Text
        as={tagName}
        data-testid={dataTestId}
        lines={lines}
        ref={ref}
        variant={variant}
        {...rest}
        className={`${className} wui-text`}
      >
        {children}
      </S.Text>
    )
  }
)

Text.displayName = 'Text'
