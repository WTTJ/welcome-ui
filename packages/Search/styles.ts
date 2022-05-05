import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { StyledIcon } from '@welcome-ui/icon'
import { componentSystem, shouldForwardProp, wrapperSystem } from '@welcome-ui/system'
import { centerContent, defaultFieldStyles, overflowEllipsis } from '@welcome-ui/utils'
import { cardStyles } from '@welcome-ui/utils'

import { SearchOptions } from './index'

export const Wrapper = styled('div').withConfig({ shouldForwardProp })`
  position: relative;
  ${wrapperSystem};
`

export const InputWrapper = styled.div`
  position: relative;
`

export const Input = styled('input').withConfig({ shouldForwardProp })<
  { hasIcon?: boolean } & SearchOptions
>(
  ({ hasIcon, size, variant }) => css`
    position: relative;
    ${defaultFieldStyles({ size, variant })};
    ${overflowEllipsis};
    ${hasIcon &&
    css`
      padding-left: ${th(`defaultFields.sizes.${size}.height`)};
    `};
    ${componentSystem};

    br {
      display: none;
    }
  `
)

export const Menu = styled.ul`
  ${th('defaultFields.select.default')};
  ${cardStyles}
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

export const Item = styled.li<{
  isExisting?: boolean
  isHighlighted?: boolean
  isSelected?: boolean
}>(
  ({ isExisting, isHighlighted, isSelected }) => css`
    color: nude.700;
    ${isHighlighted && th('defaultFields.select.highlighted')};
    ${isSelected && th('defaultFields.select.selected')};
    ${isExisting && th('defaultFields.select.existing')};
    ${isSelected && isHighlighted && th('defaultFields.select.selectedAndHighlighted')};
    ${overflowEllipsis};
    padding: sm;
    list-style: none;
    text-decoration: none;
    font-size: body3;
    transition: background ${th.transition('medium')};
  `
)

export const Icon = styled.div<{ size: SearchOptions['size'] }>(
  ({ size }) => css`
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

export const DropDownIndicator = styled.button<{ size: SearchOptions['size']; isOpen?: boolean }>(
  ({ isOpen, size }) => css`
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
