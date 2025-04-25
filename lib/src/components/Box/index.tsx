import { x } from '@xstyled/styled-components'
import React from 'react'

import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'

export type BoxProps = Omit<CreateWuiProps<'div'>, 'dataTestId'>

export const Box = forwardRef<'div', BoxProps>((props, ref) => {
  return <x.div ref={ref} {...props} />
})
