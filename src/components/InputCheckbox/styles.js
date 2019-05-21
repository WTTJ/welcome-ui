import styled, { css } from 'styled-components'

// common form styles
import { fieldTypeStyles } from '../../common/styles/form'
import { get, getCss } from '../../theme/helpers'

const checkedStyles = css`
  ${getCss('fields.checkboxes.checked')};

  &::after {
    opacity: 1;
  }
`

export const StyledInputCheckbox = styled.div(
  props => css`
    ${fieldTypeStyles};
    ${getCss('fields.checkboxes.default')}
    position: relative;
    padding: 0;
    cursor: pointer;
    order: ${props.order || null};
    border-radius: ${props.type === 'radio' && '50%'};
    transition: ${get('transitions.sm')};

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
      transition: ${get('transitions.sm')};
    }

    ${props.checked && checkedStyles};
  `
)
