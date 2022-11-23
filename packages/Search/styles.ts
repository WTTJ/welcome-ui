import styled, { css } from 'styled-components'
import { StyledIcon } from '@welcome-ui/icon'
import { system } from '@welcome-ui/system'
import { cardStyles, centerContent, defaultFieldStyles, overflowEllipsis } from '@welcome-ui/utils'

import { SearchOptions } from './index'

export const Wrapper = styled('div')`
  position: relative;
  ${system};
`

export const InputWrapper = styled.div`
  position: relative;
`

export const Input = styled('input')<{ hasIcon?: boolean } & SearchOptions>(
  ({ hasIcon, size, theme, transparent, variant }) => css`
    position: relative;
    ${defaultFieldStyles({ size, variant, transparent })};
    ${overflowEllipsis};
    ${hasIcon &&
    css`
      padding-left: ${theme.defaultFields.sizes[size as SearchOptions['size']].height};
    `};
    ${system};

    br {
      display: none;
    }
  `
)

export const Menu = styled.ul(
  ({ theme }) => css`
    ${theme.defaultFields.select.default};
    ${cardStyles}
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
  isExisting?: boolean
  isHighlighted?: boolean
  isSelected?: boolean
}>(
  ({ isExisting, isHighlighted, isSelected, theme }) => css`
    color: ${theme.colors['nude-700']};
    ${isHighlighted && theme.defaultFields.select.highlighted};
    ${isSelected && theme.defaultFields.select.selected};
    ${isExisting && theme.defaultFields.select.existing};
    ${isSelected && isHighlighted && theme.defaultFields.select.selectedAndHighlighted};
    ${overflowEllipsis};
    padding: ${theme.space.md};
    list-style: none;
    text-decoration: none;
    font-size: ${theme.space.md};
    transition: background ${theme.transitions.medium};
  `
)

export const Icon = styled.div<{ size: SearchOptions['size'] }>(
  ({ size, theme }) => css`
    position: absolute;
    width: ${theme.defaultFields.sizes[size].height};
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

export const DropDownIndicator = styled.button<{ size: SearchOptions['size']; isOpen?: boolean }>(
  ({ isOpen, size, theme }) => css`
    position: relative;
    height: 100%;
    width: ${theme.defaultFields.sizes[size].height};
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
