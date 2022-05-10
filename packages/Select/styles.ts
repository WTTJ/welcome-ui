import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { StyledIcon } from '@welcome-ui/icon'
import { StyledTag } from '@welcome-ui/tag'
import { componentSystem, shouldForwardProp, wrapperSystem } from '@welcome-ui/system'
import {
  cardStyles,
  centerContent,
  defaultFieldStyles,
  DefaultFieldStylesProps,
  overflowEllipsis,
} from '@welcome-ui/utils'

import { SelectOptions } from './index'

export const Wrapper = styled('div').withConfig({ shouldForwardProp })(
  ({ connected }: { connected: boolean }) => css`
    position: relative;
    ${!connected && wrapperSystem};
  `
)

export const InputWrapper = styled.div`
  position: relative;
`

export const Input = styled('div').withConfig({ shouldForwardProp })(
  ({ hasIcon, size, variant }: { hasIcon: boolean } & SelectOptions) => css`
    position: relative;
    ${defaultFieldStyles({ size, variant })};
    ${overflowEllipsis};
    padding-right: ${th(`defaultFields.sizes.${size}.height`)};
    ${hasIcon &&
    css`
      padding-left: ${th(`defaultFields.sizes.${size}.height`)};
    `};
    cursor: default;
    ${componentSystem}
    line-height: 1em;

    br {
      display: none;
    }

    &::before {
      content: attr(data-spacer);
      visibility: hidden;
      display: block;
      height: 0;
    }

    &:empty {
      &::after {
        content: attr(placeholder);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        ${overflowEllipsis};
        padding: inherit;
        opacity: 0.5;
      }
      &::before {
        height: auto;
      }
    }
  `
)

export const Menu = styled.ul`
  ${th('defaultFields.select.default')};
  ${cardStyles};
  position: absolute;
  z-index: 2;
  right: 0;
  left: 0;
  margin: 0;
  margin-top: md;
  padding: 0;
  transition: medium;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`

export const Item = styled.li(
  ({
    allowUnselectFromList,
    isHighlighted,
    isMultiple,
    isSelected,
  }: {
    allowUnselectFromList: boolean
    isHighlighted: boolean
    isMultiple: boolean
    isSelected: boolean
  }) => css`
    color: nude.700;
    ${isHighlighted && th('defaultFields.select.highlighted')};
    ${isSelected && !isMultiple && th('defaultFields.select.selected')};
    ${isSelected && isMultiple && !allowUnselectFromList && th('defaultFields.select.existing')};
    ${overflowEllipsis};
    padding: sm;
    list-style: none;
    text-decoration: none;
    font-size: sm;
    transition: background ${th.transition('medium')};
  `
)

export const Icon = styled.div(
  ({ size }: { size: DefaultFieldStylesProps['size'] }) => css`
    position: absolute;
    width: ${th(`defaultFields.sizes.${size}.height`)};
    padding: 0;
    top: 0;
    bottom: 0;
    left: 0;
    ${centerContent}
  `
)

export const Indicators = styled.div`
  position: absolute;
  padding: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
`

export const DropDownIndicator = styled.button.withConfig({ shouldForwardProp })(
  ({ isOpen, size }: { isOpen?: boolean; size: DefaultFieldStylesProps['size'] }) => css`
    position: relative;
    height: 100%;
    width: ${th(`defaultFields.sizes.${size}.height`)};
    padding: 0;
    outline: none !important; /* important for firefox */
    appearance: none;
    cursor: pointer;
    border: none;
    background: transparent;
    ${centerContent};

    ${StyledIcon} {
      transform: ${isOpen ? 'rotate3d(0, 0, 1, 180deg)' : 'rotate3d(0)'};
      transition: medium;
    }

    &:not(:last-child) {
      width: auto;
    }
  `
)

export const Tags = styled.div`
  margin-top: lg;

  ${/* sc-selector */ StyledTag}:not(:last-child) {
    margin-right: sm;
    margin-bottom: sm;
  }

  &:empty {
    display: none;
  }
`
