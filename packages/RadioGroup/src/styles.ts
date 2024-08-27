import styled, { css, system } from '@xstyled/styled-components'
import { WuiProps } from '@welcome-ui/system'

export const Radios = styled.divBox<{
  flexDirection?: WuiProps['flexDirection']
}>(
  ({ flexDirection }) => css`
    display: flex;
    flex-direction: ${flexDirection};
    flex-wrap: wrap;
    gap: md;

    ${system};
  `
)
