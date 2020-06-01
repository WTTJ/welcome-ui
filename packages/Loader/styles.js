import styled, { css, keyframes } from '@xstyled/styled-components'
import { Shape } from '@welcome-ui/shape'
import { th } from '@xstyled/system'
import { system } from '@welcome-ui/system'

const animation = keyframes`
  0%, 100% {
    opacity: .5;
    transform: scale(.8);
  }
  30%, 60% {
    opacity: 1;
    transform: scale(1);
  }
`

const animationRule = css`
  animation: ${animation} 1.5s cubic-bezier(0.86, 0, 0.07, 1) infinite;
`

export const LoadingDot = styled(Shape)(
  ({ size }) =>
    css`
      width: ${th(`loaders.sizes.${size}`)};
      height: ${th(`loaders.sizes.${size}`)};
      background-color: currentColor;
      ${animationRule}
      ${system}
      &:not(:first-child) {
        margin-left: sm;
      }
      &:nth-child(1) {
        animation-delay: 0s;
      }
      &:nth-child(2) {
        animation-delay: 0.125s;
      }
      &:nth-child(3) {
        animation-delay: 0.25s;
      }
    `
)
