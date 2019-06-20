import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { system } from '../../utils/utils'
import { fieldTypeStyles } from '../../common/styles/form'

const checkedStyles = css`
  ${th('fields.checkboxes.checked')};

  &::after {
    opacity: 1;
  }
`

export const StyledCheckbox = styled.div(
  ({ checked, order = '-1', type }) => css`
    ${fieldTypeStyles};
    ${th('fields.checkboxes.default')}
    position: relative;
    padding: 0;
    order: ${order};
    cursor: pointer;
    border-radius: ${type === 'radio' && '50%'};
    transition: medium;

    &::after {
      content: '✓';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      line-height: 1;
      text-align: center;
      color: light.200;
      opacity: 0;
      transition: medium;
    }

    input {
      appearance: none;
    }

    ${checked && checkedStyles};
    ${system};
  `
)

export const StyledRadio = StyledCheckbox
