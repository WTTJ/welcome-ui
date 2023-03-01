import React, { cloneElement } from 'react'
import { useDisclosureState } from 'reakit/Disclosure'
import AnimateHeight from 'react-animate-height'
import { RightIcon } from '@welcome-ui/icons'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export interface AccordionOptions {
  title: string | JSX.Element
  icon?: JSX.Element
  /**
   * @deprecated
   * will be replace by open on ariakit (reakit v2)
   **/
  visible?: boolean
  /**
   * Open the hidden content on load
   */
  open?: boolean
}

export type AccordionProps = CreateWuiProps<'div', AccordionOptions>

export const Accordion = forwardRef<'div', AccordionProps>(
  ({ children, icon = <RightIcon />, title, visible = false, open = false, ...rest }, ref) => {
    const disclosure = useDisclosureState({ visible: open || visible, animated: true })
    const isVisible = disclosure.visible

    return (
      <S.Accordion ref={ref} {...rest}>
        <S.Disclosure {...disclosure}>
          {title}
          <S.Icon visible={isVisible}>{cloneElement(icon, { size: 'sm' })}</S.Icon>
        </S.Disclosure>
        <S.Content {...disclosure}>
          <AnimateHeight animateOpacity duration={200} height={isVisible ? 'auto' : 0}>
            {children}
          </AnimateHeight>
        </S.Content>
      </S.Accordion>
    )
  }
)
