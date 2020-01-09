import React, { forwardRef, ReactNode } from 'react'

import * as S from './styles'

const TAG_NAMES = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  body4: 'p',
  subtitle1: 'p',
  subtitle2: 'p',
  meta1: 'p',
  meta2: 'p'
}

type Props = {
  as: string
  children: ReactNode
  dataTestId: string
  lines: number
  variant: string
}

export type Ref = HTMLParagraphElement

export const Text = forwardRef<Ref, Props>((props, ref) => {
  const { as, children, dataTestId, lines, variant = 'body1', ...rest } = props
  const tagName = as || TAG_NAMES[variant]

  return (
    <S.Text
      as={tagName}
      data-testid={dataTestId}
      lines={lines}
      ref={ref}
      variant={variant}
      {...rest}
    >
      {children}
    </S.Text>
  )
})

Text.displayName = 'Text'
