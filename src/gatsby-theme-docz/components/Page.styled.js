import styled, { css } from '@xstyled/styled-components'
import { th, up } from '@xstyled/system'

export const Page = styled.main`
  display: flex;
  overflow: hidden;
  height: 100vh;
  flex-direction: column;
  ${th('docz.page')};

  ${up(
    'lg',
    css`
      flex-direction: row;
    `
  )}
`
