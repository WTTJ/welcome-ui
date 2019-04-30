import styled, { css } from 'styled-components'

import { get } from '../../theme/helpers'

const checkedStyles = css`
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

export const Toggle = styled.div(
  props => css`
    position: relative;
    display: block;
    width: ${`calc(${get('toggleSize', props.size)(props)} * 2)`};
    height: ${get('toggleSize', props.size)};
    cursor: pointer;
    background: ${get('color', 'bg', 'light')};
    border-radius: ${get('toggleSize', props.size)};
    transition: 0.3s;
    order: ${props.order || null};
    &::after {
      content: '';
      position: absolute;
      top: ${get('borderWidth', 'input')};
      left: ${get('borderWidth', 'input')};
      width: ${`calc(${get('toggleSize', props.size)(props)} - 2 * ${get('borderWidth', 'input')(
        props
      )})`};
      height: ${`calc(${get('toggleSize', props.size)(props)} - 2 * ${get('borderWidth', 'input')(
        props
      )})`};
      background-color: #fff;
      border: ${get('borderWidth', 'input')} solid ${get('color', 'border', 'primary')};
      border-radius: ${`calc(${get('toggleSize', props.size)(props)} - ${get(
        'borderWidth',
        'input'
      )(props)})`};
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

    ${props.checked && checkedStyles}
  `
)

export default Toggle
