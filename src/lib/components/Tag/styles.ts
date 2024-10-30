import styled, { css, system, th } from '@xstyled/styled-components'

import { TagProps } from './index'

export interface StyledTagProps extends TagProps {
  hasClickAction: boolean
  hasLink: boolean
  hasRemoveAction: boolean
  length: number
}

export const Tag = styled.div.withConfig({
  shouldForwardProp: prop => !['hasClickAction', 'hasLink', 'hasRemoveAction'].includes(prop),
})<StyledTagProps>(
  ({ hasClickAction, hasLink, hasRemoveAction, length, size, variant }) => css`
    ${th('tags.default')};
    ${th(`tags.variants.${variant}`)};
    ${th(`tags.sizes.${size}`)}
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: initial; /* avoid cropped font */
    transition: medium;
    max-width: 100%;
    ${system}
    ${length === 1 &&
    css`
      justify-content: center;
    `};

    ${(hasLink || hasClickAction) &&
    css`
      cursor: pointer;
      text-decoration: none;

      &:hover {
        ${th(`tags.hover.${variant}`)};
      }
    `};

    ${hasRemoveAction &&
    css`
      padding-right: xl;
    `}

    > *:not(:last-child) {
      margin-right: xxs;
    }

    & > svg {
      width: ${th(`tags.icon.${size}`)};
      height: ${th(`tags.icon.${size}`)};
    }
  `
)

export const ActionIcon = styled.divBox<{ size: TagProps['size'] }>(
  ({ size }) => css`
    position: absolute;
    ${th(`tags.sizes.${size}`)};
    top: 0;
    bottom: 0;
    right: 0;
  `
)

export const Button = styled.buttonBox`
  all: unset;
  display: flex;
`
