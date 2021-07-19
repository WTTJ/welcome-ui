import styled, { css, keyframes } from '@xstyled/styled-components'
import { Shape } from '@welcome-ui/shape'
import { system } from '@welcome-ui/system'
import { shouldForwardProp } from '@welcome-ui/system'
import { ShapeProps } from 'Shape'
import { Size } from 'Loader'

const animation = keyframes`
  0%, 100% {
    opacity: .5;
    transform: scale3d(.8, .8, 1);
  }
  30%, 60% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`

const animationRule = css`
  animation: ${animation} 1.5s cubic-bezier(0.86, 0, 0.07, 1) infinite;
`

export interface LoadingDotProps {
  size: Size
}

export const LoadingDot = styled(Shape).withConfig({ shouldForwardProp })<
  ShapeProps & LoadingDotProps
>(({ size, theme }) => {
  const sizeValue = theme.loaders[size] || size
  const formattedSize = typeof sizeValue === 'number' ? theme.toRem(sizeValue) : sizeValue
  return css`
    width: ${formattedSize};
    height: ${formattedSize};
    background-color: currentColor;
    ${system}
    ${animationRule};
    &:not(:first-child) {
      margin-left: calc(${formattedSize} / 2);
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
})
