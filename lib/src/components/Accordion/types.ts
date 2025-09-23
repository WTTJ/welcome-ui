import type { DisclosureStore, DisclosureStoreProps, DisclosureStoreState } from '@ariakit/react'
import type { ComponentPropsWithRef, HTMLAttributes } from 'react'

export interface AccordionOptions {
  dataTestId?: string
  /**
   * store from useAccordion()
   */
  store: UseAccordion
  title: JSX.Element | string
}

export type AccordionProps = AccordionOptions &
  Omit<ComponentPropsWithRef<'div'> & HTMLAttributes<HTMLDivElement>, 'title'>

export type UseAccordion = DisclosureStore
export type UseAccordionProps = DisclosureStoreProps
export type UseAccordionState = DisclosureStoreState
