import styled, { css, system, th } from '@xstyled/styled-components'
import { Checkbox as ReakitCheckbox } from 'reakit/Checkbox'
import { shouldForwardProp } from '@welcome-ui/system'
import { defaultFieldStyles } from '@welcome-ui/utils'

import { CheckboxProps } from './index'

/* /!\ WARNING /!\ Don't add style after pseudo selector, it won't apply because of the dynamic color injected in the fill of the content */

export const Checkbox = styled(ReakitCheckbox).withConfig({
  shouldForwardProp,
})<CheckboxProps>(
  ({ indeterminate, order = '-1', size, theme, variant }) => css`
    ${defaultFieldStyles({ size, variant })};
    ${th('checkboxes.default')}
    position: relative;
    padding: 0;
    order: ${order};
    cursor: pointer;
    transition: medium;
    overflow: hidden;
    ${system};

    &[aria-checked='true'] {
      &:not([disabled]) {
        ${th('checkboxes.checked')};
      }

      &:not([indeterminate]) {
        &::after {
          content: url(${`'data:image/svg+xml; utf8, <svg viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg"><path fill="${theme.defaultFields.checkableField.checked.color}" d="M7.96171 0.596898C8.24912 0.27893 8.74024 0.25262 9.06024 0.537743C9.37208 0.815607 9.40671 1.28712 9.14514 1.60662L9.11975 1.63611L3.90331 7.40311C3.75365 7.5687 3.54304 7.66003 3.32401 7.66003C3.15017 7.66003 2.98077 7.60235 2.84241 7.49383L2.80848 7.46564L0.943652 5.82577C0.620151 5.54147 0.590221 5.04928 0.877091 4.72749C1.15398 4.41772 1.62383 4.38076 1.94536 4.6368L1.97506 4.66166L3.26156 5.79276L7.96171 0.596898Z" /></svg>'`});
          position: absolute;
          top: -2;
          right: 0;
          bottom: 0;
          left: 0;
          width: 10;
          margin: auto;
          text-align: center;
          transition: medium;
        }
      }
    }

    ${indeterminate &&
    css`
      &:not([disabled]) {
        ${th('checkboxes.checked')};
      }

      &::after {
        content: url("data:image/svg+xml,%3Csvg width='8' height='2' viewBox='0 0 8 2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='8' height='2' rx='1' fill='black'/%3E%3C/svg%3E%0A");
        position: absolute;
        top: -4;
        right: -2.5;
        bottom: 0;
        left: 0;
        width: 10;
        margin: auto;
      }
    `}

    &[disabled] {
      ${th('checkboxes.disabled')}

      &::after {
        opacity: ${theme.defaultFields.checkableField.disabled.opacity};
      }
    }
  `
)
