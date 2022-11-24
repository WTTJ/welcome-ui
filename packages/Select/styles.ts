import styled, { css } from 'styled-components'
import { StyledIcon } from '@welcome-ui/icon'
import { StyledTag } from '@welcome-ui/tag'
import { system } from '@welcome-ui/system'
import {
  cardStyles,
  centerContent,
  defaultFieldStyles,
  overflowEllipsis,
  Size,
} from '@welcome-ui/utils'

import { SelectOptions } from './index'

export const Wrapper = styled('div')`
  position: relative;
  ${system}
`

export const InputWrapper = styled.div`
  position: relative;
`

export const Input = styled('div')<{ hasIcon: boolean } & SelectOptions>(
  ({ hasIcon, isClearable, size, theme, transparent, variant }) => css`
    position: relative;
    ${defaultFieldStyles({ size, variant, transparent })};
    ${overflowEllipsis};
    padding-right: ${isClearable ? theme.spaces['4xl'] : '36px'};
    ${hasIcon &&
    css`
      padding-left: 36px;
    `};
    cursor: default;
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
        opacity: 0.5;
      }
      &::before {
        height: auto;
      }
    }
  `
)

export const Menu = styled.ul(
  ({ theme }) => css`
    ${theme.defaultFields.select.default};
    ${cardStyles};
    position: absolute;
    z-index: 2;
    right: 0;
    left: 0;
    margin: 0;
    margin-top: ${theme.space.md};
    padding: 0;
    transition: ${theme.transitions.medium};
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  `
)

export const Item = styled.li<{
  allowUnselectFromList: boolean
  isHighlighted: boolean
  isMultiple: boolean
  isSelected: boolean
  isDisabled?: boolean
}>(
  ({ allowUnselectFromList, isDisabled, isHighlighted, isMultiple, isSelected, theme }) => css`
    color: ${theme.colors['nude-700']};
    ${isHighlighted && theme.defaultFields.select.highlighted};
    ${isSelected && !isMultiple && theme.defaultFields.select.selected};
    ${isSelected && isMultiple && !allowUnselectFromList && theme.defaultFields.select.existing};
    ${isDisabled && theme.defaultFields.select.disabled};
    ${overflowEllipsis};
    padding: ${theme.spaces.sm};
    list-style: none;
    text-decoration: none;
    font-size: ${theme.fontSizes.sm};
    transition: background ${theme.transitions.medium};
  `
)

export const Indicators = styled.div<{ size: Size }>(
  ({ size, theme }) => css`
    position: absolute;
    padding: 0;
    top: 0;
    bottom: 0;
    right: ${size === 'xs' ? theme.spaces.sm : theme.spaces.md};
    display: flex;
    gap: ${theme.spaces.sm};

    > * {
      width: 16px;
    }
  `
)

export const DropDownIndicator = styled.button<{ isOpen?: boolean }>(
  ({ isOpen, theme }) => css`
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
      transition: ${theme.transitions.medium};
    }

    &:not(:last-child) {
      width: auto;
    }
  `
)

export const Tags = styled.div(
  ({ theme }) => css`
    margin-top: ${theme.space.lg};

    ${/* sc-selector */ StyledTag}:not(:last-child) {
      margin-right: ${theme.space.sm};
      margin-bottom: ${theme.space.sm};
    }

    &:empty {
      display: none;
    }
  `
)
