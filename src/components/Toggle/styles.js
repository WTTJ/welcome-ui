import styled, { css } from 'styled-components'

import { get, getCss } from '../../theme/helpers'

const checkedStyles = css`
  ${getCss('fields.toggles.checked')};
  &::after {
    left: calc(100% - ${get('borderWidths.sm')});
    transform: translateX(-100%);
  }
`

export const StyledToggle = styled.div(props => {
  const toggleSize = getCss('fields.toggles.default.width')(props)
  return css`
    ${getCss('fields.toggles.default')};
    ${props.disabled && getCss('fields.toggles.disabled')};
    position: relative;
    display: block;
    width: ${`calc(${toggleSize} * 2)`};
    height: ${toggleSize};
    cursor: ${props.disabled ? null : 'pointer'};
    border-radius: ${toggleSize};
    transition: 0.3s;
    order: ${props.order || null};
    &::after {
      content: '';
      position: absolute;
      top: ${get('borderWidths.sm')};
      left: ${get('borderWidths.sm')};
      width: ${`calc(${toggleSize} - 2 * ${get('borderWidths.sm')(props)})`};
      height: ${`calc(${toggleSize} - 2 * ${get('borderWidths.sm')(props)})`};
      border-radius: ${toggleSize};
      transition: 0.3s;
    }

    &:active::after {
      width: ${props.disabled ? null : '55%'};
    }

    input {
      width: 0;
      height: 0;
      visibility: hidden;
    }

    ${props.checked && checkedStyles}
  `
})
