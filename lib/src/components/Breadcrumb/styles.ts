import type { Theme } from '@xstyled/styled-components'
import styled, { css, th } from '@xstyled/styled-components'

import { hexToRGBA } from '@/utils'

import type { BreadcrumbOptions } from './index'

export const StartGradient = styled.spanBox<Pick<BreadcrumbOptions, 'gradientBackground'>>(
  ({ gradientBackground, theme }) => css`
    left: 0;
    background-image: ${gradient(theme, gradientBackground)};
    transform-origin: left;
  `
)

export const EndGradient = styled.spanBox<Pick<BreadcrumbOptions, 'gradientBackground'>>(
  ({ gradientBackground, theme }) => css`
    right: 0;
    background-image: ${gradient(theme, gradientBackground, 'left')};
    transform-origin: right;
  `
)

export const Breadcrumb = styled.divBox`
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

export const List = styled.olBox`
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

const gradient = (
  theme: Theme,
  gradientBackground: BreadcrumbOptions['gradientBackground'],
  position = 'right'
) => {
  const gradientColor = th(`colors.${gradientBackground}`)({ theme }) as string
  const transparent = hexToRGBA(gradientColor, 0)
  return `linear-gradient(to ${position}, ${gradientColor}, ${transparent} 100%)`
}
