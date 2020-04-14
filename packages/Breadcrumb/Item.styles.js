import styled, { css, th } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'

export const Item = styled(Box)(
  ({ separator }) => css`
    ${th('breadcrumbs.item.default')};
    align-items: center;

    ${separator &&
      css`
        &:hover {
          ${th('breadcrumbs.item.hover')};
        }
      `};

    ${!separator &&
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
