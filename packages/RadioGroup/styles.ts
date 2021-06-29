import styled, { css } from '@xstyled/styled-components'
import { system, WuiProps } from '@welcome-ui/system'

export const Radios = styled.div<{
  flexDirection?: WuiProps['flexDirection']
}>(
  ({ flexDirection }) => css`
    display: flex;
    flex-direction: ${flexDirection};
    flex-wrap: wrap;
    margin-bottom: -md;
    ${system};

    > * {
      margin-bottom: md;
    }
  `
)
