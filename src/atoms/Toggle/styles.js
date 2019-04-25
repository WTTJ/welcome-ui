import styled, { css } from 'styled-components'

import helpers from '../../theme/helpers'

const { borderWidth, colors, toggleSize } = helpers

const valueStyles = () => css`
  background: ${colors('primary')};
  &:hover {
    background: ${colors('primary')};
  }

  &::after {
    left: calc(100% - ${borderWidth('input')});
    transform: translateX(-100%);
    border-color: ${colors('primary')};
  }
`

export const Toggle = styled.div`
  position: relative;
  display: block;
  width: ${props => `calc(${toggleSize(props.size)(props)} * 2)`};
  height: ${props => toggleSize(props.size)};
  cursor: pointer;
  background: ${colors('bg', 'light')};
  border-radius: ${props => toggleSize(props.size)};
  transition: 0.3s;
  &::after {
    content: '';
    position: absolute;
    top: ${borderWidth('input')};
    left: ${borderWidth('input')};
    width: ${props =>
      `calc(${toggleSize(props.size)(props)} - 2 * ${borderWidth('input')(props)})`};
    height: ${props =>
      `calc(${toggleSize(props.size)(props)} - 2 * ${borderWidth('input')(props)})`};
    background-color: #fff;
    border: ${borderWidth('input')} solid ${colors('border', 'primary')};
    border-radius: ${props =>
      `calc(${toggleSize(props.size)(props)} - ${borderWidth('input')(props)})`};
    transition: 0.3s;
  }
  &:hover {
    background-color: ${colors('bg', 'tertiary')};
  }

  &:active::after {
    width: 55%;
  }

  input {
    height: 0;
    width: 0;
    visibility: hidden;
  }
  ${props => props.value && valueStyles()}
`

export default Toggle
