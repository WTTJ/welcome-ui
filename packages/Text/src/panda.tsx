import React from 'react'
import { type HTMLStyledProps, styled } from '@welcome-ui/panda/jsx'
import { text, type TextVariantProps } from '@welcome-ui/panda/recipes'

/**
 * @experimental panda version
 */
export type TextPandaOptions = TextVariantProps & { lines?: number }
/**
 * @experimental panda version
 */
export type TextPandaProps = HTMLStyledProps<'p'> & TextPandaOptions

/**
 * @experimental panda version
 */
export const StyledTextPanda = styled('p', text)

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

const getBlockHeight = (lines: number): React.CSSProperties => ({
  WebkitLineClamp: lines,
  wordBreak: lines === 1 ? 'break-all' : null,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
})

/**
 * @experimental panda version
 */
export const TextPanda = React.forwardRef<HTMLParagraphElement, TextPandaProps>(
  ({ lines, style = {}, variant = 'md', ...rest }, ref) => {
    const As = TAG_NAMES[variant as keyof typeof TAG_NAMES] || 'p'
    const lineStyles = typeof lines === 'number' ? getBlockHeight(lines) : {}

    return (
      <StyledTextPanda
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore "as" prop is not documented
        as={As}
        ref={ref}
        style={{ ...lineStyles, ...style }}
        variant={variant}
        {...rest}
      />
    )
  }
)

TextPanda.displayName = 'TextPanda'
