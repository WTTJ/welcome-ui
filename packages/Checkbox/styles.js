import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Checkbox as ReakitCheckbox } from 'reakit/Checkbox'
import { componentSystem, filterFieldComponent, system } from '@welcome-ui/system'
import { fieldStyles } from '@welcome-ui/utils'

export const Checkbox = styled(filterFieldComponent(ReakitCheckbox))(
  ({ connected, order = '-1' }) => css`
    ${fieldStyles};
    ${th('fields.checkbox.default')}
    position: relative;
    padding: 0;
    order: ${order};
    cursor: pointer;
    transition: medium;

    &::after {
      content: url('data:image/svg+xml; utf8, <svg viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M2.711 6.328L7.487.8A.844.844 0 0 1 8.712.73l-.273.318.273-.317a.927.927 0 0 1 .066 1.274L3.427 8.2a.847.847 0 0 1-1.221.073L.291 6.511a.928.928 0 0 1-.074-1.274.845.845 0 0 1 1.225-.076L2.71 6.328z" fill="white" fill-rule="nonzero"/></svg>');
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 9;
      margin: auto;
      text-align: center;
      color: light.200;
      opacity: 0;
      transition: medium;
    }
    ${connected ? componentSystem : system};
  `
)
