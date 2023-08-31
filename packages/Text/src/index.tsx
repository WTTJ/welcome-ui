import React from 'react'
import { CreateWuiPandaProps, CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { styled } from '@welcome-ui/panda/jsx'
import { text, type TextVariantProps } from '@welcome-ui/panda/recipes'

import * as S from './styles'

const TAG_NAMES: Record<string, React.ElementType> = {
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

export type Variant = keyof typeof TAG_NAMES

export interface TextOptions {
  lines?: number
  variant?: Variant
}

export type TextProps = CreateWuiProps<'p', TextOptions>

export const Text = forwardRef<'p', TextProps>(
  ({ as, children, dataTestId, lines, variant = 'md', ...rest }, ref) => {
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

const getBlockHeight = (lines: number): React.CSSProperties => ({
  WebkitLineClamp: lines,
  wordBreak: lines === 1 ? 'break-all' : null,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  lineHeight: 'normal',
  overflow: 'hidden',
})

export type TextPandaOptions = TextVariantProps & { lines?: number }
export type TextPandaProps = CreateWuiPandaProps<'p', TextPandaOptions>

export const TextPanda = React.forwardRef<HTMLParagraphElement, TextPandaProps>(
  ({ children, className, lines, variant = 'md', ...rest }, ref) => {
    const tagName = TAG_NAMES[variant as Variant]
    const Component = styled(tagName, text)
    const style = lines ? getBlockHeight(lines) : {}

    return (
      <Component
        className={`${className || ''} wui-text`}
        ref={ref}
        style={style}
        variant={variant}
        {...rest}
      >
        {children}
      </Component>
    )
  }
)
