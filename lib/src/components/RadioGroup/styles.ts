import styled, { css, system } from '@xstyled/styled-components'

import { WuiProps } from '@/System'

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
