import React, { cloneElement } from 'react'
import * as Ariakit from '@ariakit/react'
import { RightIcon } from '@welcome-ui/icons'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export interface AccordionOptions {
  icon?: JSX.Element
  /**
   * store from useAccordion()
   */
  store: UseAccordion
  title: string | JSX.Element
}

export type AccordionProps = CreateWuiProps<'div', AccordionOptions>

export const Accordion = forwardRef<'div', AccordionProps>(
  ({ children, dataTestId, icon = <RightIcon />, store, title, ...rest }, ref) => {
    return (
      <S.Accordion data-testid={dataTestId} ref={ref} {...rest}>
        <S.Disclosure data-testid={dataTestId ? `${dataTestId}-title` : undefined} store={store}>
          {title}
          <S.Icon>{cloneElement(icon, { size: 'sm' })}</S.Icon>
        </S.Disclosure>
        <S.Content data-testid={dataTestId ? `${dataTestId}-content` : undefined} store={store}>
          <div>
            <S.ContentChild>{children}</S.ContentChild>
          </div>
        </S.Content>
      </S.Accordion>
    )
  }
)

export type UseAccordion = Ariakit.DisclosureStore
export type UseAccordionProps = Ariakit.DisclosureStoreProps
export type UseAccordionState = Ariakit.DisclosureStoreState

export function useAccordion(options?: UseAccordionProps): UseAccordion {
  const accordion = Ariakit.useDisclosureStore({ animated: true, ...options })

  return accordion
}
