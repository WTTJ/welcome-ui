import styled, { css } from 'styled-components'
import { system } from '@welcome-ui/system'
import { cardStyles } from '@welcome-ui/utils'
import { Box } from '@welcome-ui/box'

export const Inner = styled(Box)(
  ({ theme }) => css`
    ${cardStyles};
    ${theme.dropdownMenu.inner};
    z-index: 1;
    transition: opacity 200ms;

    &:focus {
      outline: none !important; /* important for firefox */
    }

    &[hidden] {
      display: none;
    }

    ${system}
  `
)
