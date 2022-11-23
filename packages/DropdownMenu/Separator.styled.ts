import styled, { css } from 'styled-components'
import { system } from '@welcome-ui/system'

export const Separator = styled.hr(
  ({ theme }) => css`
    ${theme.dropdownMenu.separator};
    border: 0;
    height: 1px;
    margin: 0;
    ${system}
  `
)
