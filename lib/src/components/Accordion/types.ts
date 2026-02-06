import type { DisclosureStore, DisclosureStoreProps, DisclosureStoreState } from '@ariakit/react'
import type { ComponentPropsWithRef, HTMLAttributes } from 'react'

export interface AccordionOptions {
  size?: 'lg' | 'md' | 'sm'
  store?: UseAccordion
}

export type AccordionProps = AccordionOptions &
  Omit<ComponentPropsWithRef<'div'> & HTMLAttributes<HTMLDivElement>, 'div'>

export type UseAccordion = DisclosureStore

export type UseAccordionProps = DisclosureStoreProps

export type UseAccordionState = DisclosureStoreState
