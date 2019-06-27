import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { system } from '../../utils/'

const afterCheckedStyles = css`
  &::after {
    left: calc(100% - ${th.borderWidth('sm')});
    transform: translateX(-100%);
  }
`

const checkedStyles = css`
  ${th('fields.toggles.checked')};
  ${afterCheckedStyles}
`

const checkedDisabledStyles = css`
  ${th('fields.toggles.checkedDisabled')};
  ${afterCheckedStyles}
`

export const StyledToggle = styled.div(({ checked, disabled, order = '-1' }) => {
  const toggleSize = th('fields.toggles.default.width')
  return css`
    ${th('fields.toggles.default')};
    ${disabled && th('fields.toggles.disabled')};
    position: relative;
    display: block;
    width: calc(${toggleSize} * 2);
    height: ${toggleSize};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    border-radius: ${toggleSize};
    transition: 0.3s;
    order: ${order};

    &::after {
      content: '';
      position: absolute;
      top: ${th.borderWidth('sm')};
      left: ${th.borderWidth('sm')};
      width: calc(${toggleSize} - 2 * ${th.borderWidth('sm')});
      height: calc(${toggleSize} - 2 * ${th.borderWidth('sm')});
      border-radius: ${toggleSize};
      transition: 0.3s;
    }

    &:active::after {
      width: ${disabled ? null : '55%'};
    }

    input {
      appearance: none;
      border: none;
      background: transparent;
    }

    ${checked && !disabled && checkedStyles}
    ${checked && disabled && checkedDisabledStyles}
    ${system};
  `
})
