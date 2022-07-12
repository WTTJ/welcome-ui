import styled, { css } from 'styled-components'
import { Button } from '@welcome-ui/button'

export const CloseButton = styled(Button)(
  ({ theme }) => css`
    ${theme.closeButton.default};

    &:hover {
      ${theme.closeButton.hover};
    }

    &:focus {
      ${theme.closeButton.focus};
    }

    &:active {
      ${theme.closeButton.active};
    }
  `
)
