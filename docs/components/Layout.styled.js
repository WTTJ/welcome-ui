import styled, { css } from '@xstyled/styled-components'
import { th, up } from '@xstyled/system'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  ${th('docs.page')};

  ${up(
    'md',
    css`
      flex-direction: row;
    `
  )};
`
