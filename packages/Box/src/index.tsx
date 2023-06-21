import React from 'react'
import { x } from '@xstyled/styled-components'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { HTMLStyledProps, styled } from '@welcome-ui/panda/jsx'

export type BoxProps = CreateWuiProps<'div'>

export const Box = forwardRef<'div', BoxProps>((props, ref) => {
  return <x.div ref={ref} {...props} />
})

type BoxPandaProps = HTMLStyledProps<'div'>
const StyledBoxPanda = styled(Box)

export const BoxPanda = React.forwardRef<HTMLDivElement, BoxPandaProps>((props, ref) => {
  return <StyledBoxPanda ref={ref} {...props} />
})
