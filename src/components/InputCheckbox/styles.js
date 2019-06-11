import styled, { css } from 'styled-components'

import { system } from '../../utils/utils'
import { get, getCss } from '../../theme/helpers'
import { fieldTypeStyles } from '../../common/styles/form'

const checkedStyles = css`
  ${getCss('fields.checkboxes.checked')};

  &::after {
    opacity: 1;
  }
`

export const StyledCheckbox = styled.div(
  ({ checked, order = '-1', type }) => css`
    ${fieldTypeStyles};
    ${getCss('fields.checkboxes.default')}
    position: relative;
    padding: 0;
    order: ${order};
    cursor: pointer;
    border-radius: ${type === 'radio' && '50%'};
    transition: ${get('transitions.medium')};

    &::after {
      content: '✓';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      line-height: 1;
      text-align: center;
      color: ${get('colors.light.200')};
      opacity: 0;
      transition: ${get('transitions.medium')};
    }

    ${checked && checkedStyles};
    ${system};
  `
)

export const StyledRadio = StyledCheckbox
