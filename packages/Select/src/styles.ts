import styled, { css, system, th } from '@xstyled/styled-components'
import { StyledIcon } from '@welcome-ui/icon'
import { StyledTag } from '@welcome-ui/tag'
import { shouldForwardProp } from '@welcome-ui/system'
import {
  cardStyles,
  centerContent,
  defaultFieldStyles,
  overflowEllipsis,
  Size,
} from '@welcome-ui/utils'
import { IconWrapper as WUIIconWrapper } from '@welcome-ui/field'

import { SelectOptions } from './index'

export const Wrapper = styled.divBox.withConfig({ shouldForwardProp })<{ disabled: boolean }>(
  ({ disabled }) => css`
    position: relative;
    ${system}
    ${IconWrapper} {
      color: ${disabled ? th('defaultFields.select.disabled.color') : 'initial'};
    }
  `
)

export const IconWrapper = styled(WUIIconWrapper)``

export const InputWrapper = styled.div`
  position: relative;
`

export const Input = styled('div').withConfig({ shouldForwardProp })<{
  iconPlacement?: 'both' | 'right'
  isClearable?: boolean
  size: SelectOptions['size']
  transparent?: boolean
  variant: SelectOptions['variant']
}>(
  ({ iconPlacement, isClearable, size, transparent, variant }) => css`
    position: relative;
    ${defaultFieldStyles({
      size,
      variant,
      transparent,
      isClearable,
      iconPlacement,
    })};
    ${overflowEllipsis};
    cursor: pointer;
    ${system}
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
        ${th('defaultFields.placeholder')}
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

  &:hover > * {
    cursor: pointer;
  }
`

export const Item = styled.li(
  ({
    allowUnselectFromList,
    isDisabled,
    isHighlighted,
    isMultiple,
    isSelected,
  }: {
    allowUnselectFromList: boolean
    isDisabled?: boolean
    isHighlighted: boolean
    isMultiple: boolean
    isSelected: boolean
  }) => css`
    color: nude-700;
    ${isHighlighted && th('defaultFields.select.highlighted')};
    ${isSelected && !isMultiple && th('defaultFields.select.selected')};
    ${isSelected && isMultiple && !allowUnselectFromList && th('defaultFields.select.existing')};
    ${isDisabled && th('defaultFields.select.disabled')};
    ${overflowEllipsis};
    padding: md;
    list-style: none;
    text-decoration: none;
    font-size: sm;
    transition: background ${th.transition('medium')};
  `
)

export const Indicators = styled.divBox(
  ({ size }: { size: Size }) => css`
    position: absolute;
    padding: 0;
    top: 0;
    bottom: 0;
    right: ${size === 'xs' ? 'sm' : 'md'};
    display: flex;
    gap: xs;
  `
)

export const DropDownIndicator = styled.button.withConfig({ shouldForwardProp })(
  ({ isOpen }: { isOpen?: boolean }) => css`
    position: relative;
    height: 100%;
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

    &:disabled {
      color: ${th('defaultFields.select.disabled.color')};
    }
  `
)

export const Tags = styled.divBox`
  margin-top: lg;

  ${/* sc-selector */ StyledTag}:not(:last-child) {
    margin-right: sm;
    margin-bottom: sm;
  }

  &:empty {
    display: none;
  }
`
