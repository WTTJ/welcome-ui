import styled, { css } from 'styled-components'

import { headerHeight } from '../../Header/styles'

const navigationWidth = '16.875rem' // 270

export const Navigation = styled.nav(
  ({ theme }) => css`
    display: none;
    position: fixed;
    width: ${navigationWidth};
    top: ${headerHeight};
    left: 0;
    bottom: 0;
    background-color: ${theme.colors['light-900']};
    border-right: 1px solid ${theme.colors.border};
    padding: ${theme.space.lg};
    overflow: auto;

    @media (min-width: ${theme.breakpoints.md}px) {
      display: block;
    }
  `
)

export const Content = styled.main(
  ({ theme }) => css`
    width: 100%;
    min-height: ${`calc(100vh - ${headerHeight})`};

    > :not(footer) {
      max-width: 970;
      padding-left: ${theme.space.md};
      padding-right: ${theme.space.md};
      margin: 0 auto;
    }

    @media (min-width: ${theme.breakpoints.md}px) {
      padding-left: ${navigationWidth};
    }
  `
)
