import styled, { css } from 'styled-components'

import { getVariantStateColor } from '../../utils/variants'
import { get, getCss } from '../../theme/helpers'
import { system } from '../../utils/utils'

export const Growl = styled.div`
  position: relative;
  width: 70%;
  max-width: 25rem;
  padding: ${get('space.lg')};
  ${getCss('growls.default')};
  ${system};
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
