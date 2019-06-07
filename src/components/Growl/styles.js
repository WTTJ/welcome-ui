import styled, { css } from 'styled-components'

import { getVariantStateColor } from '../../utils/variants'
import { get, getCss } from '../../theme/helpers'

export const POSITIONS = {
  'top-right': css`
    top: 0;
    right: 0;
  `,
  'top-left': css`
    top: 0;
    left: 0;
  `,
  'bottom-right': css`
    bottom: 0;
    right: 0;
  `,
  'bottom-left': css`
    bottom: 0;
    left: 0;
  `
}

export const GrowlContainer = styled.div(({ position }) => {
  return css`
    width: 70%;
    max-width: 25rem;
    position: fixed;
    z-index: 1000;
    padding: ${get('space.md')};
    ${POSITIONS[position] || POSITIONS['top-right']};
    max-height: 100vh;
    overflow: auto;
  `
})

export const Growl = styled.div`
  position: relative;
  width: 100%;
  padding: ${get('space.lg')};
  margin-bottom: ${get('space.md')};
  ${getCss('growls.default')};
`

export const Title = styled.div(
  ({ variant }) => css`
    display: flex;
    align-items: center;
    color: ${getVariantStateColor(variant)};
    padding-bottom: ${get('space.md')};
    ${getCss('growls.title')};

    & > *:first-child {
      margin-right: ${get('space.sm')};
    }
  `
)

export const Close = styled.div`
  position: absolute;
  right: ${get('space.lg')};
  top: ${get('space.lg')};
`

export const CloseContent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.87rem;
  height: 1.87rem;
  ${getCss('growls.close')};
  border: none;
  padding: 0;
  transition: background ${get('transitions.medium')};
  cursor: pointer;
`

export const Action = styled.div`
  padding-top: ${get('space.md')};
`
