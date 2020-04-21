import styled, { css, th } from '@xstyled/styled-components'
import { Box } from '@welcome-ui/box'

export const Breadcrumb = styled(Box)`
  ${th('breadcrumbs.list')};
  height: 100%;
  position: relative;
`

export const List = styled.ol`
  display: flex;
  align-items: center;
  height: 100%;
  overflow-x: auto;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const GradientLeft = styled.div(
  ({ gradientBackground, show }) => css`
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    width: 30;
    background: linear-gradient(
      to right,
      ${th(`colors.${gradientBackground}`)} 0%,
      rgba(0, 0, 0, 0) 100%
    );
    display: none;

    ${show &&
      css`
        display: block;
      `}
  `
)

export const GradientRight = styled(GradientLeft)(
  ({ gradientBackground }) => css`
    left: auto;
    right: 0;
    background: linear-gradient(
      to left,
      ${th(`colors.${gradientBackground}`)} 0%,
      rgba(0, 0, 0, 0) 100%
    );
  `
)
