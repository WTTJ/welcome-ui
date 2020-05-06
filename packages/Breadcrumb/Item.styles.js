import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Box } from '@welcome-ui/box'

export const Item = styled(Box)(
  ({ withSeparator }) => css`
    ${th('breadcrumbs.item.default')};
    align-items: center;

    ${withSeparator &&
      css`
        &:hover {
          ${th('breadcrumbs.item.hover')};
        }
      `};

    ${!withSeparator &&
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
