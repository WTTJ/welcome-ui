import React from 'react'
import { useDisclosureState } from 'reakit/Disclosure'
import AnimateHeight from 'react-animate-height'
import { RightIcon } from '@welcome-ui/icons.right'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export interface AccordionOptions {
  title: string | JSX.Element
  icon?: JSX.Element
  visible?: boolean
}

export type AccordionProps = CreateWuiProps<'div', AccordionOptions>

export const Accordion = forwardRef<'div', AccordionProps>(
  ({ children, icon = <RightIcon size="sm" />, title, visible = false, ...rest }, ref) => {
    const disclosure = useDisclosureState({ visible, animated: true })
    const isVisible = disclosure.visible

    return (
      <S.Accordion ref={ref} {...rest}>
        <S.Disclosure {...disclosure}>
          {title}
          <S.Icon visible={isVisible}>{icon}</S.Icon>
        </S.Disclosure>
        <S.Content {...disclosure}>
          <AnimateHeight height={isVisible ? 'auto' : 0}>{children}</AnimateHeight>
        </S.Content>
      </S.Accordion>
    )
  }
)
