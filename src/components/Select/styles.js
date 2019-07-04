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
`

export const Item = styled.li(
  ({ isExisting, isHighlighted, isSelected }) => css`
    color: nude.800;
    ${isHighlighted && th('fields.select.highlighted')};
    ${isSelected && th('fields.select.selected')};
    ${isExisting && th('fields.select.existing')};
    padding: sm;
    list-style: none;
    text-decoration: none;
    font-size: body3;
  `
)

export const Indicators = styled.div(
  () => css`
    position: absolute;
    ${th('fields.sizes.lg')};
    padding: 0;
    top: 0;
    right: 0;
  `
)

export const DropDownIndicator = styled.button(
  ({ actionType, isOpen }) => css`
    &[type='button'] {
      appearance: none;
      border: none;
      background: transparent;
      height: 100%;
      padding: md lg;
      outline: none;
      border-left: 1px solid ${th('colors.nude.200')};
      cursor: pointer;

      ${Icon} {
        transform: ${isOpen ? 'rotate(180deg)' : 'rotate(0)'};
        transition: medium;
      }
    }

    &:hover {
      color: ${actionType === 'destructive' ? th('colors.danger.500') : th('colors.primary.500')};
    }
  `
)

export const Tags = styled.div`
  margin-top: lg;

  ${Tag}:not(:last-child) {
    margin-right: sm;
    margin-bottom: sm;
  }

  &:empty {
    display: none;
  }
`
