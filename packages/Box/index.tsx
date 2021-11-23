import styled from '@xstyled/styled-components'
import { CreateWuiPropsWithRef, shouldForwardProp } from '@welcome-ui/system'

export type BoxProps = CreateWuiPropsWithRef<'div'>
export const Box = styled.box.withConfig({ shouldForwardProp })``
