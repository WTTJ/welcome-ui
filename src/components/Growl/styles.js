import styled, { css } from 'styled-components'

import { getVariantStateColor } from '../../utils/variants'
import { get, getCss } from '../../theme/helpers'

export const Growl = styled.div`
  position: relative;
  width: 70%;
  max-width: 25rem;
  padding: ${get('space.lg')};
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
  cursor: pointer;
`

export const CloseContent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${get('space.xl')};
  height: ${get('space.xl')};
  ${getCss('growls.close')};
  border: none;
  transition: background ${get('transitions.medium')};
`

export const Action = styled.div`
  padding-top: ${get('space.md')};
`
