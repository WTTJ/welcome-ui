import styled, { css } from '@xstyled/styled-components'
import { th, up } from '@xstyled/system'

export const Header = styled.header`
  ${th('docs.header')};
  font-size: body2;
  height: 60;
  left: 0;
  position: fixed;
  padding: 0 md;
  top: 0;
  width: 1;
  z-index: 1;

  ${up(
    'md',
    css`
      height: 100vh;
      max-width: 270;
      padding: xxl xl;
    `
  )};
`
