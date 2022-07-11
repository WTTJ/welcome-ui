import React from 'react'
import styled from 'styled-components'
import system, { SystemProps } from 'jsx-to-styled'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

export type BoxProps = CreateWuiProps<'div'>

const StyledBox = styled.div<SystemProps>(system)

export const Box = forwardRef<'div', BoxProps>((props, ref) => {
  return <StyledBox ref={ref} {...props} />
})
