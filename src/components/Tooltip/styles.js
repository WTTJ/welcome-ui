import styled, { css } from 'styled-components'

import { get, getCss } from '../../theme/helpers'

export const Wrapper = styled.div(
  props => css`
    ${getCss('tooltips')};
    position: fixed;
    top: ${`${props.top}px`};
    left: ${`${props.left}px`};
    padding: ${get('space.sm')};
    font-size: ${get('fontSizes.body4')};
    z-index: 999;
  `
)
