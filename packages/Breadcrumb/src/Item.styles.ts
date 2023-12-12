import styled, { css, th } from '@xstyled/styled-components'
import { shouldForwardProp } from '@welcome-ui/system'

interface ItemProps {
  isActive: boolean
}

export const Item = styled.aBox.withConfig({ shouldForwardProp })<ItemProps>(
  ({ isActive }) => css`
    ${th('breadcrumbs.item.default')};
    align-items: center;
    transition: medium;
    direction: initial;

    ${!isActive &&
    css`
      &:hover {
        ${th('breadcrumbs.item.hover')};
      }
    `};

    &[aria-disabled='true'] {
      pointer-events: none;
      cursor: default;
    }

    ${isActive &&
    css`
      ${th('breadcrumbs.item.active')};
    `}
  `
)

export const Separator = styled.span`
  ${th('breadcrumbs.separator')};
  display: flex;
  align-items: center;
`
