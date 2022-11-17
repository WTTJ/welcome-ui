import styled, { css } from 'styled-components'
import { system } from '@welcome-ui/system'

interface ItemProps {
  isActive: boolean
}

export const Item = styled.a<ItemProps>(
  ({ isActive, theme }) => css`
    ${theme.breadcrumbs.item.default};
    align-items: center;
    transition: medium;
    direction: initial;
    ${system};

    ${!isActive &&
    css`
      &:hover {
        ${theme.breadcrumbs.item.hover};
      }
    `};

    ${isActive &&
    css`
      ${theme.breadcrumbs.item.active};
    `}
  `
)

export const Separator = styled.span(
  ({ theme }) => css`
    ${theme.breadcrumbs.separator};
    display: flex;
    align-items: center;
  `
)
