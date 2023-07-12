import React from 'react'
import { CreateWuiProps, forwardRef, forwardRefPanda } from '@welcome-ui/system'

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

const MOBILE_VARIANTS = {
  h0: 'h1',
  h1: 'h2',
  h2: 'h3',
  h3: 'h4',
  h4: 'h5',
  h5: 'h6',
}

type TextPandaOptions = TextOptions & {
  className?: string // todo generic html props
  children?: React.ReactNode
}

const getBlockHeight = (lines: number): React.CSSProperties => ({
  WebkitLineClamp: lines,
  wordBreak: lines === 1 ? 'break-all' : null,
})

// todo give mobileVariant if media query match
export const TextPanda = forwardRefPanda<'p', TextPandaOptions>(
  ({ children, className, lines, variant = 'md', ...rest }, ref) => {
    const mobileVariant = MOBILE_VARIANTS[variant as keyof typeof MOBILE_VARIANTS] as Variant
    const style = lines ? getBlockHeight(lines) : {}

    return (
      <S.TextPanda
        data-lines={lines}
        ref={ref}
        variant={mobileVariant || variant}
        {...rest}
        className={`${className || ''} wui-text`}
        lines={!!lines}
        style={style}
      >
        {children}
      </S.TextPanda>
    )
  }
)
