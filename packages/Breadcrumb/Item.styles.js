import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Box } from '@welcome-ui/box'
import { shouldForwardProp } from '@welcome-ui/system'

export const Item = styled(Box).withConfig({ shouldForwardProp })(
  ({ withSeparator }) => css`
    ${th('breadcrumbs.item.default')};
    align-items: center;
    transition: medium;
    direction: initial;

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
