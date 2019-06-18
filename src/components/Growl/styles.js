import styled, { css } from '@xstyled/styled-components'
import { th } from '@xstyled/system'

import { getVariantStateColor } from '../../utils/variants'
import { system } from '../../utils/utils'

export const Growl = styled.div`
  position: relative;
  width: 70%;
  max-width: 25rem;
  padding: lg;
  ${th('growls.default')};
  ${system};
`

export const Title = styled.div(
  ({ variant }) => css`
    display: flex;
    align-items: center;
    color: ${getVariantStateColor(variant)};
    padding-bottom: md;
    ${th('growls.title')};

    & > *:first-child {
      margin-right: sm;
    }
  `
)

export const Close = styled.div`
  position: absolute;
  right: ${th.space('lg')};
  top: ${th.space('lg')};
`

export const CloseContent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.87rem;
  height: 1.87rem;
  ${th('growls.close')};
  border: none;
  padding: 0;
  transition: background ${th.transition('medium')};
  cursor: pointer;
`

export const Action = styled.div`
  padding-top: md;
`
