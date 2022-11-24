import styled, { css } from 'styled-components'
import { system, WuiProps } from '@welcome-ui/system'

export const Radios = styled.div<WuiProps>(
  ({ $flexDirection, theme }) => css`
    display: flex;
    flex-direction: ${$flexDirection};
    flex-wrap: wrap;
    margin-bottom: -${theme.spaces.md};
    ${system};

    > *:not(:last-child) {
      margin-bottom: ${theme.spaces.md};
    }
  `
)
