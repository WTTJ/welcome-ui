import React from 'react'
import { x } from '@wttj/xstyled-styled-components'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

export type BoxProps = CreateWuiProps<'div'>

export const Box = forwardRef<'div', BoxProps>((props, ref) => {
  return <x.div ref={ref} {...props} />
})
