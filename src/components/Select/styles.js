import styled, { css } from 'styled-components'
import { th } from '@xstyled/system'

import { fieldStyles } from '../../common/styles/form'
import { system } from '../../utils/'
import { Icon } from '../Icon/styles'

export const Wrapper = styled.div`
  position: relative;
`

export const Input = styled.div`
  display: flex;
  input {
    ${fieldStyles}
    width: 100%;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`

export const Menu = styled.ul`
  ${system};
  position: absolute;
  z-index: 2;
  top: 2.4rem;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  border: 1px solid ${th('colors.nude.200')};
  border-bottom-left-radius: ${th('radii.sm')};
  border-bottom-right-radius: ${th('radii.sm')};
  background: ${th('colors.light.100')};
  transition: ${th('transitions.medium')};
  box-shadow: ${th('shadows.sm')};
`

const getBackground = (selected, highlighted) => {
  if (selected || highlighted) {
    return th('colors.nude.200')
  }
  return undefined
}

export const Items = styled.li(
  ({ highlighted, selected }) => css`
    background: ${getBackground(selected, highlighted)};
    color: ${selected && th('colors.primary.500')};
    font-weight: ${selected && th('fontWeights.bold')};
    padding: ${th('space.sm')};
    list-style: none;
    text-decoration: none;
    font-size: ${th('fontSizes.body3')};
  `
)

export const DropDownIndicator = styled.button(
  ({ isOpen }) => css`
    &[type='button'] {
      appearance: none;
      border: none;
      background: transparent;
      position: absolute;
      padding: ${th('space.lg')};
      top: 0;
      right: 0;
      line-height: 2rem;
      outline: none;

      ${Icon} {
        transform: ${isOpen ? 'rotate(180deg)' : 'rotate(0)'};
        transition: ${th('transitions.medium')};
      }
    }
  `
)
