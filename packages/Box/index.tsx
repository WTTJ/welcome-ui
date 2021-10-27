import styled from '@xstyled/styled-components'
import { CreateWuiProps, shouldForwardProp } from '@welcome-ui/system'

export type BoxProps = CreateWuiProps<'div'>
export const Box: React.FC<BoxProps> = styled.box.withConfig({ shouldForwardProp })``
