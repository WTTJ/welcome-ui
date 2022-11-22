import styled, { css } from 'styled-components'
import { MenuArrow } from 'reakit/Menu'
import { system } from '@welcome-ui/system'

export const Arrow = styled(MenuArrow)(
  ({ theme }) => css`
    display: flex;
    z-index: 2;
    color: ${theme.defaultCards.backgroundColor};

    #stroke {
      color: ${theme.defaultCards.borderColor};
    }

    ${system}
  `
)
