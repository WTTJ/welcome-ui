import styled, { css } from '@wttj/xstyled-styled-components'
import { WuiProps } from '@welcome-ui/system'

export const Radios = styled.divBox(
  ({ flexDirection }: { flexDirection?: WuiProps['flexDirection'] }) => css`
    display: flex;
    flex-direction: ${flexDirection};
    flex-wrap: wrap;
    gap: md;
  `
)
