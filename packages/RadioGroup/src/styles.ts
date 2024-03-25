import styled, { css, system } from '@wttj/xstyled-styled-components'
import { WuiProps } from '@welcome-ui/system'

export const Radios = styled.div<{
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
