import type { RadioProps } from '@ariakit/react'

import type { ButtonProps } from '@/components/Button/types'

export interface RadioTabsOptions {
  dataTestId?: string
  label: React.ReactElement
}

export type RadioTabsProps = Omit<ButtonProps, 'onChange' | 'value'> & RadioProps & RadioTabsOptions
