import type { DisclosureStore, DisclosureStoreProps, DisclosureStoreState } from '@ariakit/react'
import type { ComponentPropsWithRef, HTMLAttributes, ReactNode } from 'react'

export interface AccordionOptions {
  children: ReactNode
  store?: UseAccordion
}

export type AccordionProps = AccordionOptions &
  Omit<ComponentPropsWithRef<'div'> & HTMLAttributes<HTMLDivElement>, 'div'>

export type UseAccordion = DisclosureStore

export type UseAccordionProps = DisclosureStoreProps

export type UseAccordionState = DisclosureStoreState
