import styled, { css, th } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'
import { shouldForwardProp } from '@welcome-ui/system'

interface ItemProps {
  withSeparator: boolean
}

export const Item = styled(Box).withConfig({ shouldForwardProp })<ItemProps>(
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
