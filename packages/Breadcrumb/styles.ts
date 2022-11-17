import styled, { css } from 'styled-components'
import { Box } from '@welcome-ui/box'
import { hexToRGBA } from '@welcome-ui/utils'

import { Colors } from './index'

interface GradientProps {
  gradientBackground: keyof Colors
}

export const StartGradient = styled.span<GradientProps>(
  ({ gradientBackground, theme }) => css`
    left: 0;
    background-image: ${gradient(theme.colors[gradientBackground])};
    transform-origin: left;
  `
)

export const EndGradient = styled.span<GradientProps>(
  ({ gradientBackground, theme }) => css`
    right: 0;
    background-image: ${gradient(theme.colors[gradientBackground], 'left')};
    transform-origin: right;
  `
)

export const Breadcrumb = styled(Box)(
  ({ theme }) => css`
    ${theme.breadcrumbs.list};
    height: 100%;
    position: relative;
    overflow-x: hidden;

    ${StartGradient},
    ${EndGradient} {
      position: absolute;
      bottom: 0;
      top: 0;
      width: 30;
    }
  `
)

export const List = styled.ol`
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  height: 100%;
  overflow-x: auto;
  margin: 0;
  padding: 0;
  list-style: none;
  white-space: nowrap;
`

const gradient = (color: string, position = 'right') => {
  const transparent = hexToRGBA(color, 0)
  return `linear-gradient(to ${position}, ${color}, ${transparent} 100%)`
}
