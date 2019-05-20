import styled, { css } from 'styled-components'

// common form styles
import { fieldTypeStyles } from '../../common/styles/form'
import { get, getCss } from '../../theme/helpers'

const checkedStyles = css`
  ${getCss('fields.checkbox.checked')};

  &::after {
    opacity: 1;
  }
`

export const StyledInputCheckbox = styled.div(
  props => css`
    ${fieldTypeStyles};
    position: relative;
    width: ${get('checkboxSize.md')};
    height: ${get('checkboxSize.md')};
    padding: 0;
    cursor: pointer;
    order: ${props.order || null};
    border-radius: ${props.type === 'radio' && '50%'};
    transition: ${get('transition.sm')};

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
      transition: ${get('transition.sm')};
    }

    ${props.checked && checkedStyles};
  `
)
