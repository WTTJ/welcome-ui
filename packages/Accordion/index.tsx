import React, { cloneElement, useEffect } from 'react'
import { useDisclosureState } from 'ariakit/disclosure'
import AnimateHeight from 'react-animate-height'
import { RightIcon } from '@welcome-ui/icons'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export interface AccordionOptions {
  title: string | JSX.Element
  icon?: JSX.Element
  open?: boolean
}

export type AccordionProps = CreateWuiProps<'div', AccordionOptions>

export const Accordion = forwardRef<'div', AccordionProps>(
  ({ children, icon = <RightIcon />, title, open = false, ...rest }, ref) => {
    const disclosure = useDisclosureState()
    const isOpen = disclosure.open

    useEffect(() => {
      if (open) {
        disclosure.show()
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open])

    return (
      <S.Accordion ref={ref} {...rest}>
        <S.Disclosure state={disclosure}>
          {title} coco
          <S.Icon open={isOpen}>{cloneElement(icon, { size: 'sm' })}</S.Icon>
        </S.Disclosure>
        <S.Content state={disclosure}>
          <AnimateHeight animateOpacity duration={200} height={isOpen ? 'auto' : 0}>
            {children}
          </AnimateHeight>
        </S.Content>
      </S.Accordion>
    )
  }
)
