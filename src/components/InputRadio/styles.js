import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Radio as ReakitRadio } from 'reakit/Radio'

import { filterComponent, system } from '../../utils/'
import { fieldStyles } from '../../common/styles/form'

export const InputRadio = styled(filterComponent(ReakitRadio))(
  ({ order = '-1' }) => css`
    ${fieldStyles};
    ${th('fields.radio.default')}
    position: relative;
    padding: 0;
    order: ${order};
    cursor: pointer;
    border-radius: 50%;
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
