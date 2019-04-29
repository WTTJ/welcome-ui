import styled, { css } from 'styled-components'

import { get } from '../../theme/helpers'

const checkedStyles = () => css`
  background: ${get('color', 'primary')};
  &:hover {
    background: ${get('color', 'primary')};
  }

  &::after {
    left: calc(100% - ${get('borderWidth', 'input')});
    transform: translateX(-100%);
    border-color: ${get('color', 'primary')};
  }
`

export const Toggle = styled.div`
  position: relative;
  display: block;
  width: ${props => `calc(${get('toggleSize', props.size)(props)} * 2)`};
  height: ${props => get('toggleSize', props.size)};
  cursor: pointer;
  background: ${get('color', 'bg', 'light')};
  border-radius: ${props => get('toggleSize', props.size)};
  transition: 0.3s;
  order: ${props => props.order || null};
  &::after {
    content: '';
    position: absolute;
    top: ${get('borderWidth', 'input')};
    left: ${get('borderWidth', 'input')};
    width: ${props =>
      `calc(${get('toggleSize', props.size)(props)} - 2 * ${get('borderWidth', 'input')(props)})`};
    height: ${props =>
      `calc(${get('toggleSize', props.size)(props)} - 2 * ${get('borderWidth', 'input')(props)})`};
    background-color: #fff;
    border: ${get('borderWidth', 'input')} solid ${get('color', 'border', 'primary')};
    border-radius: ${props =>
      `calc(${get('toggleSize', props.size)(props)} - ${get('borderWidth', 'input')(props)})`};
    transition: 0.3s;
  }
  &:hover {
    background-color: ${get('color', 'bg', 'tertiary')};
  }

  &:active::after {
    width: 55%;
  }

  input {
    height: 0;
    width: 0;
    visibility: hidden;
  }
  ${props => props.checked && checkedStyles()}
`

export default Toggle
