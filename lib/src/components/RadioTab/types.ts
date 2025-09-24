import type * as Ariakit from '@ariakit/react'
import type { ComponentPropsWithRef } from 'react'

export interface RadioTabsOptions {
  checked?: boolean
  disabled?: boolean
  disabledIcon?: React.ReactElement
  hasIcon?: boolean
  iconPlacement?: 'both' | 'left' | 'right'
  isClearable?: boolean
  label: React.ReactElement
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  size: Size
  transparent?: boolean
  value: Ariakit.RadioStoreState['value']
  variant: 'danger' | 'success' | 'warning'
}

export type RadioTabsProps = ComponentPropsWithRef<'input'> & RadioTabsOptions

export type Size = 'lg' | 'md' | 'sm' | 'xl' | 'xxl'
