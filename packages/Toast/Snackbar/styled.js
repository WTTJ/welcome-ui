import styled from '@xstyled/styled-components'
import { Alert } from '@welcome-ui/alert'

export const Snackbar = styled(Alert)`
  display: flex;
  align-items: center;

  & > *:not(:only-child):not(:last-child) {
    margin-right: sm;
  }
`
