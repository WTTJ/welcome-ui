import styled, { css } from 'styled-components'
import { Button } from '@welcome-ui/button'

export const CloseButton = styled(Button)(
  ({ theme }) => css`
    & > svg:only-child {
      width: ${theme.space.md};
      height: ${theme.space.md};
    }
  `
)
