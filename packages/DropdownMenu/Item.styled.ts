import styled, { css } from 'styled-components'
import { system, WuiProps } from '@welcome-ui/system'

export const Item = styled.button<WuiProps>(
  ({ theme }) => css`
    ${theme.dropdownMenu.item};
    display: flex;
    align-items: center;
    width: 100%;
    border: 0;
    appearance: none;
    cursor: pointer;
    transition: ${theme.transitions.medium};
    text-decoration: none;

    &[type='button'] {
      appearance: none;
    }

    &:hover,
    &:focus {
      outline: none !important; /* important for firefox */
    }

    ${system}
  `
)
