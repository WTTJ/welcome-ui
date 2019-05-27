import styled, { css } from 'styled-components'

import { system } from '../../utils/utils'
import { get, getCss } from '../../theme/helpers'

const afterCheckedStyles = css`
  &::after {
    left: calc(100% - ${get('borderWidths.sm')});
    transform: translateX(-100%);
  }
`

const checkedStyles = css`
  ${getCss('fields.toggles.checked')};
  ${afterCheckedStyles}
`

const checkedDisabledStyles = css`
  ${getCss('fields.toggles.checkedDisabled')};
  ${afterCheckedStyles}
`

export const StyledToggle = styled.div(({ checked, disabled, order = '-1', ...props }) => {
  const toggleSize = getCss('fields.toggles.default.width')(props)
  return css`
    ${getCss('fields.toggles.default')};
    ${disabled && getCss('fields.toggles.disabled')};
    position: relative;
    display: block;
    width: ${`calc(${toggleSize} * 2)`};
    height: ${toggleSize};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    border-radius: ${toggleSize};
    transition: 0.3s;
    order: ${order};

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
      width: ${disabled ? null : '55%'};
    }

    ${checked && !disabled && checkedStyles}
    ${checked && disabled && checkedDisabledStyles}
    ${system};
  `
})
