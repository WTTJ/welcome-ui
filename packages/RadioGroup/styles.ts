import styled, { css, system } from '@xstyled/styled-components'
import { WuiProps } from '@welcome-ui/system'

export const Radios = styled.div<{
  flexDirection?: WuiProps['flexDirection']
}>(
  ({ flexDirection }) => css`
    display: flex;
    flex-direction: ${flexDirection};
    flex-wrap: wrap;
    margin-bottom: -md;
    ${system};

    > *:not(:last-child) {
      margin-bottom: xs;
    }
  `
)
