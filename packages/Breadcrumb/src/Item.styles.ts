import styled, { th } from '@wttj/xstyled-styled-components'

export const Item = styled.aBox`
  ${th('breadcrumbs.item.default')};
  align-items: center;
  transition: medium;
  direction: initial;

  &:hover {
    ${th('breadcrumbs.item.hover')};
  }

  &[aria-current='page'] {
    ${th('breadcrumbs.item.active')};
  }

  &[aria-disabled='true'] {
    pointer-events: none;
    cursor: default;
  }
`

export const Separator = styled.span`
  ${th('breadcrumbs.separator')};
  display: flex;
  align-items: center;
`
