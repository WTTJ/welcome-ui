import React from 'react'
import { x } from '@xstyled/styled-components'
import {
  CreateWuiPandaProps,
  CreateWuiProps,
  forwardRef,
  forwardRefPanda,
} from '@welcome-ui/system'
import { styled } from '@welcome-ui/panda/jsx'

export type BoxProps = CreateWuiProps<'div'>

export const Box = forwardRef<'div', BoxProps>((props, ref) => {
  return <x.div ref={ref} {...props} />
})

export type BoxPandaProps = CreateWuiPandaProps<'div'>

export const BoxPanda = forwardRefPanda<'div', BoxPandaProps>(({ as = 'div', ...rest }, ref) => {
  const Component = styled(as)

  return <Component ref={ref} {...rest} />
})
