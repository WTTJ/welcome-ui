import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Box } from '@welcome-ui/box'
import { hexToRGBA } from '@welcome-ui/utils'

export const StartGradient = styled.span(
  ({ gradientBackground, theme }) => css`
    left: 0;
    background-image: ${gradient(theme, gradientBackground)};
    transform-origin: left;
  `
)

export const EndGradient = styled.span(
  ({ gradientBackground, theme }) => css`
    right: 0;
    background-image: ${gradient(theme, gradientBackground, 'left')};
    transform-origin: right;
  `
)

export const Breadcrumb = styled(Box)`
  ${th('breadcrumbs.list')};
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

const gradient = (theme, gradientBackground, position = 'right') => {
  const gradientColor = th(`colors.${gradientBackground}`)({ theme })
  const transparent = hexToRGBA(gradientColor, 0)
  return `linear-gradient(to ${position}, ${gradientColor}, ${transparent} 100%)`
}
