import styled, { css } from 'styled-components'

import { get, getCss } from '../../theme/helpers'

const checkedStyles = css`
  ${getCss('fields.toggles.checked')};
  &::after {
    left: calc(100% - ${get('borderWidth.input')});
    transform: translateX(-100%);
  }
`

const getToggleSize = props => `calc(${get(`toggleSize.${props.size}`)(props)})`

export const StyledToggle = styled.div(props => {
  const toggleSize = getToggleSize(props)
  return css`
    ${getCss('fields.toggles.default')};
    ${props.disabled && getCss('fields.toggles.disabled')};
    position: relative;
    display: block;
    width: ${`calc(${toggleSize} * 2)`};
    height: ${toggleSize};
    cursor: pointer;
    border-radius: ${toggleSize};
    transition: 0.3s;
    order: ${props.order || null};
    &::after {
      content: '';
      position: absolute;
      top: ${get('borderWidth.input')};
      left: ${get('borderWidth.input')};
      width: ${`calc(${toggleSize} - 2 * ${get('borderWidth.input')(props)})`};
      height: ${`calc(${toggleSize} - 2 * ${get('borderWidth.input')(props)})`};
      border-radius: ${toggleSize};
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
