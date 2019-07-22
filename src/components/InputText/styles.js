import styled, { css } from '@xstyled/styled-components'

import { fieldStyles } from '../../common/styles/form'
import { system } from '../../utils/'

// TODO: Remove magic number
export const InputText = styled.input(
  ({ hasIcon, iconPlacement }) => css`
    ${fieldStyles};
    ${system};

    ${hasIcon &&
      iconPlacement === 'left' &&
      css`
        padding-left: 2rem;
      `}
    ${hasIcon &&
      iconPlacement === 'right' &&
      css`
        padding-right: 2rem;
      `}
  `
)

export const Wrapper = styled.div`
  position: relative;
`

export const IconWrapper = styled.div(
  ({ iconPlacement }) => css`
    position: absolute;
    top: 0;
    left: ${iconPlacement === 'left' ? 0 : null};
    right: ${iconPlacement === 'right' ? 0 : null};
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: sm;
    opacity: 0.25;
  `
)
