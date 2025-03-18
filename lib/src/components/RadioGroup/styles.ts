import styled, { css } from '@xstyled/styled-components'

import type { WuiProps } from '@/System'

export const Radios = styled.divBox<{
  flexDirection?: WuiProps['flexDirection']
}>(
  ({ flexDirection }) => css`
    display: flex;
    flex-direction: ${flexDirection};
    flex-wrap: wrap;
    gap: md;
  `
)
