import React from 'react'
import { x } from '@xstyled/styled-components'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

export type BoxProps = CreateWuiProps<'div'>

export const Box = forwardRef<'div', BoxProps>((props, ref) => {
  return <x.div ref={ref} {...props} />
})
