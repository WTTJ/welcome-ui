import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { fieldStyles } from '../../common/styles/form'
import { system } from '../../utils/'
import { Icon } from '../Icon/styles'
import { Tag } from '../Tag/styles'

export const Wrapper = styled.div`
  position: relative;
`

export const Input = styled.input`
  ${fieldStyles};
  cursor: default;
`

export const Menu = styled.ul`
  ${system};
  ${th('fields.select.default')};
  position: absolute;
  z-index: 2;
  top: 3rem;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  border: 1px solid;
  border-color: nude.200;
  border-radius: sm;
  background-color: light.100;
  transition: medium;
  box-shadow: sm;
  overflow: auto;
  overflow-scrolling: touch;

  &:empty {
    display: none;
  }
`

export const Item = styled.li(
  ({ isHighlighted, isSelected }) => css`
    color: nude.800;
    ${isHighlighted && th('fields.select.highlighted')};
    ${isSelected && th('fields.select.selected')};
    padding: sm;
    list-style: none;
    text-decoration: none;
    font-size: body3;
  `
)

export const DropDownIndicator = styled.button(
  ({ isOpen }) => css`
    &[type='button'] {
      appearance: none;
      border: none;
      background: transparent;
      position: absolute;
      padding: md lg;
      top: 0;
      right: 0;
      outline: none;

      ${Icon} {
        transform: ${isOpen ? 'rotate(180deg)' : 'rotate(0)'};
        transition: medium;
      }
    }
  `
)

export const Tags = styled.div`
  margin-top: lg;

  ${Tag}:not(:last-child) {
    margin-right: sm;
  }

  &:empty: {
    display: none;
  }
`
