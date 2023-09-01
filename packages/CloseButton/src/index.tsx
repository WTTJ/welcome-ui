import React from 'react'
import { CrossIcon, CrossIconPanda } from '@welcome-ui/icons'
import { ButtonPanda, ButtonPandaProps, ButtonProps } from '@welcome-ui/button'
import { forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export type CloseButtonProps = ButtonProps

export const CloseButton = forwardRef<'button', CloseButtonProps>((props, ref) => (
  <S.CloseButton ref={ref} shape="circle" size="sm" title="Close" variant="ghost" {...props}>
    <CrossIcon size="lg" />
  </S.CloseButton>
))

export const CloseButtonPanda = React.forwardRef<HTMLButtonElement, ButtonPandaProps>(
  (props, ref) => (
    <ButtonPanda ref={ref} shape="circle" size="sm" title="Close" variant="ghost" {...props}>
      <CrossIconPanda h="12px" size="lg" w="12px" />
    </ButtonPanda>
  )
)
