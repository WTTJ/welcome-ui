import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { system } from '../../utils/utils'

export const Tooltip = styled.div(
  props => css`
    ${th('tooltips')};
    position: fixed;
    top: ${`${props.top}px`};
    left: ${`${props.left}px`};
    padding: sm;
    font-size: body4;
    z-index: 999;
    ${system};
  `
)
