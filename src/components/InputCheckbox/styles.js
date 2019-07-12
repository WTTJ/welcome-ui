import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Checkbox as ReakitCheckbox } from 'reakit/Checkbox'

import { filterComponent, system } from '../../utils/'
import { fieldStyles } from '../../common/styles/form'

export const Checkbox = styled(filterComponent(ReakitCheckbox))(
  ({ order = '-1', type }) => css`
    ${fieldStyles};
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

    ${system};
  `
)

export const Radio = Checkbox
