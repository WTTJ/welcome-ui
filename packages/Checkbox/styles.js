import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Checkbox as ReakitCheckbox } from 'reakit/Checkbox'
import { componentSystem, filterFieldComponent, system } from '@welcome-ui/system'
import { defaultFieldStyles } from '@welcome-ui/utils'

export const Checkbox = styled(filterFieldComponent(ReakitCheckbox))(
  ({ connected, order = '-1' }) => css`
    ${defaultFieldStyles};
    ${th('checkboxes.default')}
    position: relative;
    padding: 0;
    order: ${order};
    cursor: pointer;
    transition: medium;

    &[aria-checked='true'] {
      ${th(`defaultFields.checkableField.checked`)};
      &:not([disabled]) {
        ${th(`checkboxes.checked`)};
      }
    }

    &[disabled] {
      ${th(`defaultFields.checkableField.disabled`)};
      ${th('checkboxes.disabled')}
    }

    &::after {
      content: url('data:image/svg+xml; utf8, <svg viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg"><path d="M8.48.751a.914.914 0 0 1 1.26 0 .837.837 0 0 1 0 1.215L4.26 7.249a.913.913 0 0 1-1.319-.064L.201 3.96A.838.838 0 0 1 .326 2.75a.913.913 0 0 1 1.253.12l2.117 2.493L8.48.75z" fill="black" fill-rule="evenodd"/></svg>');
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 10;
      margin: auto;
      text-align: center;
      opacity: 0;
      transition: medium;
    }

    ${connected ? componentSystem : system};
  `
)
