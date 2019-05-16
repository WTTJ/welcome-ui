import styled, { css } from 'styled-components'

import { get, getCss } from '../../theme/helpers'

const checkedStyles = css`
  background: ${get('colors.primary.500')};
  &:hover {
    background: ${get('colors.primary.500')};
  }

  &::after {
    left: calc(100% - ${get('borderWidth.input')});
    transform: translateX(-100%);
    border-color: ${get('colors.primary.700')};
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
    background: ${get('colors.nude.200')};
    border-radius: ${toggleSize};
    transition: 0.3s;
    order: ${props.order || null};
    &::after {
      ${getCss('fields.default')};
      content: '';
      position: absolute;
      left: ${get('borderWidth.input')};
      width: ${toggleSize};
      height: ${toggleSize};
      border-radius: ${toggleSize};
      border-color: ${get('colors.nude.300')};
      transition: 0.3s;
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
