import React, { cloneElement } from 'react'
import * as Ariakit from '@ariakit/react'
import AnimateHeight from 'react-animate-height'
import { RightIcon } from '@welcome-ui/icons'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export interface AccordionOptions {
  title: string | JSX.Element
  icon?: JSX.Element
  /**
   * store from useAccordionStore()
   */
  store: Ariakit.DisclosureStore
}

export type AccordionProps = CreateWuiProps<'div', AccordionOptions>

export const Accordion = forwardRef<'div', AccordionProps>(
  ({ children, icon = <RightIcon />, title, store, ...rest }, ref) => {
    const isOpen = store?.useState('open')

    return (
      <S.Accordion ref={ref} {...rest}>
        <S.Disclosure store={store}>
          {title}
          <S.Icon isOpen={isOpen}>{cloneElement(icon, { size: 'sm' })}</S.Icon>
        </S.Disclosure>
        <S.Content isOpen={isOpen} store={store}>
          <AnimateHeight animateOpacity duration={200} height={isOpen ? 'auto' : 0}>
            {children}
          </AnimateHeight>
        </S.Content>
      </S.Accordion>
    )
  }
)

export function useAccordionStore(options?: Ariakit.DisclosureStoreProps): Ariakit.DisclosureStore {
  const disclosureStore = Ariakit.useDisclosureStore({ ...options, animated: true })

  return disclosureStore
}
