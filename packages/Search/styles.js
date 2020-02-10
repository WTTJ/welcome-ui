import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { StyledIcon } from '@welcome-ui/icon'
import { componentSystem, filterFieldComponent, wrapperSystem } from '@welcome-ui/system'
import { centerContent, fieldStyles, overflowEllipsis } from '@welcome-ui/utils'
import { cardStyles } from '@welcome-ui/utils'

export const Wrapper = styled(filterFieldComponent('div'))(
  ({ connected }) => css`
    position: relative;
    ${!connected && wrapperSystem};
  `
)

export const InputWrapper = styled.div`
  position: relative;
`

const FILTER_PROPS = ['hasIcon', 'inputValue', 'renderMultiple', 'itemToString']

export const Input = styled(filterFieldComponent('input', FILTER_PROPS))(
  ({ hasIcon, size }) => css`
    position: relative;
    ${fieldStyles};
    ${overflowEllipsis};
    ${hasIcon &&
      css`
        padding-left: ${th(`fields.sizes.${size}.height`)};
      `};
    cursor: default;
    ${componentSystem};

    br {
      display: none;
    }
  `
)

export const Menu = styled.ul`
  ${th('fields.select.default')};
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
