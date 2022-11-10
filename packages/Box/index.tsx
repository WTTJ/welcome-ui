import React from 'react'
import styled from 'styled-components'
import { CreateWuiProps, forwardRef, system, WuiProps } from '@welcome-ui/system'

export type BoxProps = CreateWuiProps<'div'>

const StyledBox = styled.div<WuiProps>(system)

export const Box = forwardRef<'div', BoxProps>((props, ref) => {
  return <StyledBox ref={ref} {...props} />
})
