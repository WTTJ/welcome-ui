import styled, { css } from 'styled-components'

import { get, getCss } from '../../theme/helpers'

const checkedStyles = css`
  background: ${get('color.primary.default')};
  &:hover {
    background: ${get('color.primary.default')};
  }

  &::after {
    left: calc(100% - ${get('borderWidth.input')});
    transform: translateX(-100%);
    border-color: ${get('color.primary.default')};
  }
`

const getToggleSize = props =>
  `calc(${get(`toggleSize.${props.size}`)(props)} - 2 * ${get('borderWidth.input')(props)})`

export const StyledToggle = styled.div(props => {
  const toggleSize = getToggleSize(props)
  return css`
    position: relative;
    display: block;
    width: ${`calc(${toggleSize} * 2)`};
    height: ${toggleSize};
    cursor: pointer;
    background: ${get('color.light.dark')};
    border-radius: ${toggleSize};
    transition: 0.3s;
    order: ${props.order || null};
    &::after {
      ${getCss('fields.default')};
      content: '';
      position: absolute;
      top: ${get('borderWidth.input')};
      left: ${get('borderWidth.input')};
      width: ${toggleSize};
      height: ${toggleSize};
      border-radius: ${toggleSize};
      transition: 0.3s;
    }

    &:hover {
      background-color: ${get('color.bg.tertiary')};
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
})
