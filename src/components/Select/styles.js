import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { overflowEllipsis } from '../../common/styles/text'
import { fieldStyles } from '../../common/styles/form'
import { componentSystem, filterComponent, wrapperSystem } from '../../utils/system'
import { centerContent } from '../../utils/css'
import { Icon as StyledIcon } from '../Icon/styles'
import { Tag } from '../Tag/styles'

export const Wrapper = styled(filterComponent('div'))(
  ({ connected }) => css`
    position: relative;
    ${!connected && wrapperSystem};
  `
)

export const InputWrapper = styled.div`
  position: relative;
`

export const Input = styled(
  filterComponent('div', ['hasIcon', 'inputValue', 'renderMultiple', 'withPlaceholder'])
)(
  ({ hasIcon, size, withPlaceholder }) => css`
    position: relative;
    ${fieldStyles};
    ${overflowEllipsis};
    padding-right: ${th(`fields.sizes.${size}.height`)};
    ${hasIcon &&
      css`
        padding-left: ${th(`fields.sizes.${size}.height`)};
      `};
    cursor: default;
    ${componentSystem}

    br {
      display: none;
    }

    &::before {
      content: attr(data-spacer);
      visibility: hidden;
      display: block;
      height: 0;
    }

    ${withPlaceholder &&
      css`
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
      `}
  `
)

export const Menu = styled.ul`
  ${th('fields.select.default')};
  position: absolute;
  z-index: 2;
  right: 0;
  left: 0;
  margin: 0;
  margin-top: md;
  padding: 0;
  border: 1px solid;
  border-color: nude.200;
  border-radius: sm;
  background-color: light.100;
  transition: medium;
  box-shadow: sm;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`

export const Item = styled.li(
  ({ isExisting, isHighlighted, isSelected }) => css`
    color: nude.800;
    ${isHighlighted && th('fields.select.highlighted')};
    ${isSelected && th('fields.select.selected')};
    ${isExisting && th('fields.select.existing')};
    ${overflowEllipsis};
    padding: sm;
    list-style: none;
    text-decoration: none;
    font-size: body3;
    transition: background ${th.transition('medium')};
  `
)

export const Icon = styled.div(
  ({ size }) => css`
    position: absolute;
    width: ${th(`fields.sizes.${size}.height`)};
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

export const DropDownIndicator = styled.button(
  ({ isOpen, size }) => css`
    position: relative;
    height: 100%;
    width: ${th(`fields.sizes.${size}.height`)};
    padding: 0;
    outline: none;
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

  ${/* sc-selector */ Tag}:not(:last-child) {
    margin-right: sm;
    margin-bottom: sm;
  }

  &:empty {
    display: none;
  }
`
