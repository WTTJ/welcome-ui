import styled, { css } from '@xstyled/styled-components'

export const Radios = styled.divBox(
  ({ flexDirection }) => css`
    display: flex;
    flex-direction: ${flexDirection};
    flex-wrap: wrap;
    gap: md;
  `
)
